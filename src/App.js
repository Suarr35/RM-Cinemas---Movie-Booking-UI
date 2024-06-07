import MovieBooking from "./components/MovieBooking";
import Theatres from "./components/Theatres";
//import Loginf from "./components/Loginform";
import './App.css'

function App()  {
  return(
      <div className="App">
          <h1>RM Cinemas UI</h1>
          <Theatres />
          <MovieBooking />
      </div>
  )
}

export default App;


