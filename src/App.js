import logo from './logo.svg';
import './App.css';
import FilmBox from './containers/FilmBox';

function App() {
  return (
    
    <>
    <h1>Upcoming Film Releases for UK</h1>
    <FilmBox />
    <a href="https://www.imdb.com/calendar/?region=gb">View More Upcoming Releases</a>
    </>
  );
}

export default App;
