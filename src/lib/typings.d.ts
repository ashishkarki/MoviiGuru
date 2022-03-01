export interface IMovii {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface IOmdbSearchResponse {
  Search: Array<IMovii>
}
