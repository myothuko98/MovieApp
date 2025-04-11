import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Movie } from '@/constants/interfaces';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the navigation types
type RootStackParamList = {
  MovieDetail: { id: number };
};

type MovieDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MovieDetail'>;

type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

const MovieItem = ({ movie }: { movie: Movie }) => {
  const navigation = useNavigation<MovieDetailScreenNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('MovieDetail', { id: movie.id })}
    >
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.details}>Year: {movie.year}</Text>
        <Text style={styles.details}>Director: {movie.director}</Text>
        <Text style={styles.description} numberOfLines={2}>{movie.plot}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 4,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
});

export default MovieItem;