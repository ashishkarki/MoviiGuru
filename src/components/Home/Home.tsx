import ActionCallers from './ActionCallers'
import Bouncers from './Bouncers'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-red-300 bg-gradient-to-br from-gray-300 via-teal-700 to-gray-800">
      <Bouncers />

      <p className="mt-6 tracking-wide">
        Edit <code>src/App.jsx</code> and save to reload.
      </p>

      <ActionCallers />
    </div>
  )
}

export default Home
