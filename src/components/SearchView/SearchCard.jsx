
import { useDispatch } from "react-redux";

function SearchCard(props){
    let gif=props.gif
    console.log(gif.title);
    const dispatch = useDispatch()
    const setFavorite = () => {
       
        dispatch({
            type: 'SAGA/SET_FAVORITES',
            payload: {
                name: gif.title,
                url:gif.images.downsized_medium.url
            }
        })
        console.log('nice');
      }

    
    return (
        <div key={gif}>
        <img src={gif.images.downsized_medium.url}/>
        <button onClick={setFavorite}>⭐️</button>
        </div>
    )
}

export default SearchCard