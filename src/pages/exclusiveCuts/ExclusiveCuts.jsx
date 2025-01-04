import ExclusiveCutsPlayer from '../../components/exclusiveCutsPlayer/ExclusiveCutsPlayer'
import FavoriteTrack from '../../components/favoriteTrack/FavoriteTrack'
import Navbar from '../../components/navbar/Navbar'
import Shuffle from '../../components/suffle/Shuffle'
import './exclusiveCuts.css'

const ExclusiveCuts = () => {
    return (
        <div>
            <Navbar />
            <ExclusiveCutsPlayer />
            <Shuffle />
            <FavoriteTrack />
        </div>
    )
}

export default ExclusiveCuts
