import FilterActions from './components/FilterActions'
import MovieList from './components/MovieList'
import './styles/App.css'

function App() {

  return (
    <>
      <header className='header'>
      </header>
      <div className="container">
        <p>Movie ranking</p>
        <FilterActions/>
        <MovieList/>
      </div>

    </>
  )
}

export default App
