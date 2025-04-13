import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import useFetchMovieDetails from '@/hooks/useFetchMovieDetails';
import { Movie } from '@/constants/interfaces';

type RouteParams = {
  MovieDetail: {
    id: number;
  };
};

const MovieDetailScreen = () => {
  const route = useRoute<RouteProp<RouteParams, 'MovieDetail'>>();
  const { id } = route.params;
  const { movie, loading, error } = useFetchMovieDetails(id);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (!movie) {
    return <Text style={styles.errorText}>Movie details not found.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.details}>Year: {movie.year}</Text>
      <Text style={styles.details}>Genre: {movie.genre.join(', ')}</Text>
      <Text style={styles.details}>Rating: {movie.rating}</Text>
      <Text style={styles.details}>Director: {movie.director}</Text>
      <Text style={styles.details}>Actors: {movie.actors.join(', ')}</Text>
      <Text style={styles.details}>Runtime: {movie.runtime} minutes</Text>
      <Text style={styles.details}>Awards: {movie.awards}</Text>
      <Text style={styles.details}>Country: {movie.country}</Text>
      <Text style={styles.details}>Language: {movie.language}</Text>
      <Text style={styles.details}>Box Office: {movie.boxOffice}</Text>
      <Text style={styles.details}>Production: {movie.production}</Text>
      <Text style={styles.description}>{movie.plot}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(movie.trailer)}>
        <Text style={styles.link}>Watch Trailer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(movie.website)}>
        <Text style={styles.link}>Visit Website</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  poster: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    marginBottom: 4,
    color: 'gray',
  },
  description: {
    fontSize: 14,
    marginTop: 16,
    lineHeight: 20,
    color: '#555',
  },
  link: {
    fontSize: 16,
    color: '#1e90ff',
    marginTop: 16,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovieDetailScreen;
