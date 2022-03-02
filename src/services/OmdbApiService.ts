import { IMovii } from './../lib/typings.d'
import { IOmdbSearchResponse } from '../lib/typings'
import axiosInstance from './AxiosCommon'

const apiKey = '4a9a5e40'

const getAllMovies = async (limit = 20) => {
  const response = await axiosInstance.get<IOmdbSearchResponse>(
    `?apikey=${apiKey}&s=hello&type=movie`,
  )
  // console.log('response', response)

  const limitedData: Array<IMovii> = response.data.Search.slice(0, limit)
  // console.log('limitedData', limitedData)

  return limitedData
}

const OmdbApiService = {
  getAllMovies,
}

export default OmdbApiService
