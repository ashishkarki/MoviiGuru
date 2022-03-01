import { IMovii } from '../../lib/typings'

const MoviiCard = ({ Title, Year, imdbID, Poster }: IMovii) => {
  return (
    <div>
      <img
        src={Poster}
        alt={Title}
        onClick={(e) => alert(`clicked on title: ${Title}`)}
      />
    </div>
  )
}

export default MoviiCard
