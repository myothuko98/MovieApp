import { useState, useEffect } from 'react';
import { Movie } from '@/constants/interfaces';

const useFetchMovies = (query: string = '', limit: number = 20) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://freetestapi.com/api/v1/movies?search=${query}&limit=${limit}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data: Movie[] = await response.json();
        setMovies(data);
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

    fetchMovies();
  }, [query, limit]);

  return { movies, loading, error };
};

export default useFetchMovies;