import './favoriteTrack.css'
import heartIcon from '../../assets/favorite.png'
import track from '../../assets/Group 25.png'
import { useState } from 'react'
import rectangle from '../../assets/Rectangle 23.png'

const FavoriteTrack = () => {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(true);
        setTimeout(() => {
            setLiked(false);
        }, 3500);
    };

    return (
        <div className="favorite-container">
            <img src={rectangle} alt="" className='rectangle' />
            <div className="left-img" >
                <svg width="86" height="82" viewBox="0 0 86 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={`bar bar-1 ${liked ? 'liked' : ''}`} d="M7 34V75" />
                    <path className={`bar bar-2 ${liked ? 'liked' : ''}`} d="M55 27.5V75" />
                    <path className={`bar bar-3 ${liked ? 'liked' : ''}`} d="M79 41V75" />
                    <path className={`bar bar-4 ${liked ? 'liked' : ''}`} d="M31 7V75" />
                </svg>
            </div>
            <div className="favorite-titles">
                <h1>Everytime you like a track, press this button</h1>
                <h3>And we'll ask you after several likes to input your email, so that we can make you future <br /> suggestions, based on which tracks you liked.</h3>
            </div>
            <div className="favorite-img" onClick={handleLikeClick}>
                <img src={heartIcon} alt="favorite" />
            </div>
        </div>
    )
}

export default FavoriteTrack
