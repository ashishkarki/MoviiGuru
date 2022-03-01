import { useEffect, useState } from 'react'
import { IMovii } from '../../lib/typings'
import OmdbApiService from '../../services/OmdbApiService'
import MoviiCard from '../MoviiCard/MoviiCard'

const MoviiList = () => {
  const [movies, setMovies] = useState<IMovii[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await OmdbApiService.getAllMovies()
      setMovies(movies)
    }

    fetchMovies()
  }, [])

  return (
    <div>
      {!movies.length
        ? 'Loading'
        : movies.map((movie) => <MoviiCard key={movie.imdbID} {...movie} />)}
    </div>
  )
}

export default MoviiList
