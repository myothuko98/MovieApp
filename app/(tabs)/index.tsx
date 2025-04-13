import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useDebounce from '@/hooks/useDebounce';
import useFetchMovies from '@/hooks/useFetchMovies';
import MovieItem from '@/components/MovieItem';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const { movies, loading, error } = useFetchMovies(debouncedSearchQuery);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search movies..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
            <Ionicons name="close-circle" size={24} color="#888" />
          </TouchableOpacity>
        )}
      </View>
      {loading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="large" color="#6200ee" />
        </View>
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : movies.length === 0 ? (
        <Text style={styles.emptyText}>No movies found.</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MovieItem movie={item} />}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    paddingBottom: 28,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  clearButton: {
    marginLeft: 8,
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
    paddingBottom: 0,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
