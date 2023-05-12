import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App(props) {

  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');
  const searchResults = useSelector(store => store.gifs);
console.log('this is search results',searchResults);
  useEffect(() => {

  }, [])
  const setFavorite = () => {
    console.log('nice');
  }
console.log(userInput);
  const handleClick = () => {
    console.log('User INPUT:', userInput);
    // dispatch({
    //   type: 'SAGA/FETCH_GIFS'
    // })

    dispatch({
      type: 'SAGA/NEW_SEARCH',
      payload: userInput
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
        <div>
            <img src={gif.images.downsized_medium.url}/>
            <button onClick={setFavorite}>⭐️</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
