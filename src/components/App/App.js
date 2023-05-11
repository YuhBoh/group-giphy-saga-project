import React from 'react';
import { useState, useEffect } from 'react';


function App(props) {

  const [userInput, setUserInput] = useState('');
  const [searchResults, setSearchResults] = useState(['1', '2', '3']);

  useEffect(() => {

  }, [])

  const handleClick = () => {
    console.log('User INPUT:', userInput);
    // axios.get(‘/gifs’)
    //   .then((response) => {  // response = {url: ‘the url of the gif’, title: ‘the title’}
    //     console.log(‘send success:’, response);
    //     let url = response.data.url;
    //     setGifUrl(url);
    //     let title = response.data.title;
    //     setGifTitle(title);
    //   })
    //   .catch((err) => { console.log(err) })
  };

  return (
    <div>
      <h1>Giphy Search!</h1>
      <input
        placeholder='search' typeof='text'
        value={userInput}
        onChange={event => setUserInput(event.target.value)}
      />
      <button onClick={handleClick}>Search </button>
      <div>
      {searchResults.map((gif) => (
            <h2>INSERT GIF HERE</h2>
          ))}
      </div>
    </div>
  );
}

export default App;
