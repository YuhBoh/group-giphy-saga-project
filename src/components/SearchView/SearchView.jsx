import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import SearchCard from "./SearchCard";

function SearchView(){

    const searchResults = useSelector(store => store.gifs);

    const dispatch = useDispatch();
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

    const [userInput, setUserInput] = useState('');
    return (
        <div>
        <h1>Giphy Search!</h1>
        <input
          placeholder='search' typeof='text'
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
        />
        <button onClick={handleClick}>Search </button>
        {searchResults.map((gif) => (
            <SearchCard
            gif={gif}/>
      
          ))}
        </div>
    )
}

export default SearchView;