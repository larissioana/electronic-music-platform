import './shuffle.css'
import playIcon from '../../assets/play icon(4).png'
import cover from '../../assets/Niko Klest_single cover 1(1).png'
import nextTrackIcon from '../../assets/Layer_1.png'
import stopPlayer from '../../assets/pause Icon.png'
import { useState } from 'react'

const Shuffle = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaying = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="shuffle-container">
            <div className="shuffle-left">
                <div className="shuffle-text">
                    <button>Shuffle</button>
                    <div className="shuffle-title">
                        <h1>Radio "Your Company"</h1>
                        <h2>Shuffled Playlist</h2>
                    </div>
                </div>
                <div className="shuffle-tracks">
                    <div className="shuffle-track">
                        <div className="short-line"></div>
                        <div className="img-next-track">
                            <img src={nextTrackIcon} alt="next track" />
                            Niko Klest - Dmteorit (Original Mix) | Bandcamp Release | 2024
                        </div>
                    </div>
                    <h3>Sven Olson - Gate to the Unknown (Original Mix) I ACCZLTD 06 I 2024 I Accito Zo.</h3>
                    <h3>Rylas Rastrell - Unreleased Track (Preview)</h3>
                </div>
            </div>
            <div className="shuffle-right">
                <img
                    src={cover}
                    alt="cover"
                    className={`shuffle-right-cover ${isPlaying ? 'playing' : ''}`}
                />
                {
                    !isPlaying ?
                        <img
                            onClick={handlePlaying}
                            src={playIcon}
                            alt="play"
                            className="play-white"
                        />
                        :
                        <img
                            onClick={handlePlaying}
                            src={stopPlayer}
                            alt="play"
                            className="stop-white"
                        />
                }
            </div>
        </div>
    )
}

export default Shuffle
