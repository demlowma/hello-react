// import logo from './logo.svg';
import { useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <table>
    {
      myBooks.map(b => (
        <tr style={{width: '50%'}}>
          <td style={{width: '50%'}}>{b.title}</td>
          <td style={{width: '50%'}}>{b.author}</td>
          <td style={{width: '50%'}}>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  )
}


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

function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic(){
    setCount(count + 1);
  }
  return(
    <>
      <h3>This is a magic button</h3>
      <button onClick={doMagic}>Magic {count}</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <ListTitle />
        <ShowList />
        <RatingKey />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
