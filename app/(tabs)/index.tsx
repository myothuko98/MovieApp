import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import { Movie } from '@/constants/interfaces';
import useDebounce from '@/hooks/useDebounce';
import MovieItem from '@/components/MovieItem';

const HomeScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    fetchMovies(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [movies]);

  // Add a limit parameter to the API call
  const fetchMovies = async (query = '', limit = 20) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://freetestapi.com/api/v1/movies?search=${query}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data: Movie[] = await response.json();
      setMovies(data);
      fadeAnim.setValue(0);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const renderMovieItem = useMemo(() => ({ item }: { item: Movie }) => <MovieItem movie={item} />, [movies]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#6200ee" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : movies.length === 0 ? (
        <Text style={styles.emptyText}>No movies found.</Text>
      ) : (
        <Animated.View style={{ opacity: fadeAnim }}>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderMovieItem}
            contentContainerStyle={styles.listContainer}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    paddingBottom: 48,
  },
  searchBar: {
    height: 50,
    borderColor: '#6200ee',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
    elevation: 2,
  },
  errorText: {
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#757575',
  },
  listContainer: {
    paddingBottom: 28,
  },
});

export default HomeScreen;
