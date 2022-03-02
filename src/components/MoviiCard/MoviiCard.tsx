import { useState } from 'react'
import { IMovii } from '../../lib/typings'
import Modal from '../Modal/Modal'
import MoviiCardModalContent from '../ModalContent/MoviiCardModalContent'

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

      <Modal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        id="defaultModal"
        ariaHidden={true}
        className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
      >
        {/* <MoviiCardModalContent /> */}

        <div className="relative w-auto my-0 mx-auto max-w-3xl">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              {Title} ({Year})
            </h3>
            {/* <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button> */}
          </div>

          {/*body*/}
          <div className="relative p-3 flex flex-col md:flex-row">
            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              The movie or tv show description goes here!! more description..
              more
            </p>

            <img
              src={Poster}
              alt="poster"
              className="object-contain rounded-lg w-1/2 mx-auto"
            />
          </div>

          {/* footer */}
          <div className="flex items-center justify-center p-3 border-t border-solid border-blueGray-200 rounded-b">
            {/* <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Save Changes
            </button> */}
            <p className="font-thin text-sm italic">
              Press Esc Key or Click Close on top to exit
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default MoviiCard
