// import logo from './logo.svg';
import './App.css';

const tvshows = [
  {id: 1, title: 'Arcane', genre: 'fantasy', isMature: true}, 
  {id: 2, title: 'Star Wars: The Clone Wars', genre: 'sci-fi', isMature: false},
  {id: 3, title: 'The Last of Us', genre: 'post-apocalyptic fiction', isMature: true},
  {id: 4, title: 'The Legend of Korra', genre: 'anime', isMature: false}, 
  {id: 5, title: 'Avatar: The Last Airbender', genre: 'anime', isMature: false}
];

function ShowList() {
  const listShows = tvshows.map(show =>
    <li
      key={show.id}
      style={{
        color: show.isMature ? 'red' : 'green'
      }}
    >
      {show.title}
    </li>
  );
  return (
    <ul>{listShows}</ul>
  )
}

function ListTitle() {
  return (
    <div>
      <h3>My Favorite Shows</h3>
    </div>
  );
}

function RatingKey() {
  return (
    <div>
      <p>Show titles in green are rated PG/G. Shows in red are rated 
        are rated TV-14 or TV-MA.
      </p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListTitle />
        <ShowList />
        <RatingKey />
      </header>
    </div>
  );
}

export default App;
