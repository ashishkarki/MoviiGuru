export interface IMovii {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface IMoviiPlus extends IMovii {
  Rated: string
  Released: string
  Runtime: string
  Genre: Array<string> // Action, Adventure, Comedy, Drama, Horror, Sci-Fi, Thriller, War, Western, etc.
  Director: string
  Actors: Array<string>
  Plot: string
  Language: string
  Country: string
  Awards: string
  Metascore: string
  imdbRating: string
}

export interface IOmdbSearchResponse {
  Search: Array<IMovii>
}
