import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App(props) {

  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');
  const searchResults = useSelector(store => store.gifs);

  useEffect(() => {

  }, [])

  const handleClick = () => {
    console.log('User INPUT:', userInput);
    dispatch({
      type: 'SAGA/FETCH_GIFS'
    })
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
            <img src={gif.url}/>
          ))}
      </div>
    </div>
  );
}

export default App;
