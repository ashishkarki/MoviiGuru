import { useState } from 'react'
import { IMovii } from '../../lib/typings'
import Modal from '../Modal/Modal'

const MoviiCard = ({ Title, Year, imdbID, Poster }: IMovii) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <img
        src={Poster}
        alt={Title}
        onClick={(e) => {
          setIsOpen(true)
        }}
      />

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        Some modal content!!!
      </Modal>
    </div>
  )
}

export default MoviiCard
