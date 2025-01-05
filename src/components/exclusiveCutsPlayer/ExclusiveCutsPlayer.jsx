import './exclusiveCutsPlayer.css'
import event from '../../assets/sven-olson---ep-cover 1(4).png'
import playIcon from '../../assets/play icon(3).png'
import arrowIcon from '../../assets/Vector 5.png'
import filterIcon from '../../assets/Group 11(1).png'
import playIcon2 from '../../assets/play icon.png'
import playNextTrackIcon from '../../assets/play next track icon.png'
import facebookIcon from '../../assets/facebook.png'
import instagramIcon from '../../assets/instagram.png'
import soundCloadIcon from '../../assets/soundcloud.png'

const ExclusiveCutsPlayer = () => {
    return (
        <>
            <div className="exclusive-cuts-player-container">
                <div className="image-player">
                    <img src={event} alt="event" className="img-event" />
                    <img src={playIcon} alt="play" className="img-event-play" />
                </div>
                <div className="design-line"></div>
                <div className="player">
                    <div className="player-nav">
                        <div className="player-nav-left">
                            <button className="filter-btn">
                                <img src={filterIcon} alt="filter" />
                                filters
                            </button>
                            <button className="date-btn">
                                <img src={arrowIcon} alt="arrow" />
                                date
                            </button>
                        </div>
                        <div className="player-nav-right">
                            <h4># released</h4>
                            <h4># deeptech</h4>
                            <h4>07:27</h4>
                            <h4>126BPM</h4>
                        </div>
                    </div>
                    <div className="player-song">
                        <img src={playIcon2} alt="play" />
                        <h1>Sven Olson - Austral Portal (Original Mix) | ACCZLTD 06 | 2024 | Accito ...</h1>
                    </div>
                    <div className="tracks-container">
                        <img src={playNextTrackIcon} alt="play next track" />
                        <div className="tracks">
                            <div>Sven Olson - Rigurous Implementation (Original Mix) I ACCZLTD 06 I 2024 I Accito <div className="small-line"></div></div>
                            <div>Sven Olson - Gate to the Unknown (Original Mix) I ACCZLTD 06 I 2024 I Accito Zo.</div>
                            <div>Sven Olson - Austral portal (Exzeh Remix) I ACCZLTD 06 I 2024 I Accito Zone LTD</div>
                        </div>
                    </div>
                    <div className="icons-container">
                        <button>Buy from shop</button>
                        <div className="social-media">
                            <img src={soundCloadIcon} alt="soundcloud" />
                            <img src={facebookIcon} alt="facebook" />
                            <img src={instagramIcon} alt="instagram" />
                        </div>
                    </div>
                    <div className="exclusive-cuts-player-desc">
                        <p>A visionary in the deep tech scene, his music explores the boundaries between hypnotic grooves and <br />intricate sound design. With a focus on minimal, evolving rhythms and atmospheric textures, his tracks <br /> create a sense of depth that draws listeners into a meditative, yet dynamic sonic journey. Every perfor..</p>
                        <div className="player-desc-small-line"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExclusiveCutsPlayer
