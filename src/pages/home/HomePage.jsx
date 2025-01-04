import Events from "../../components/events/Events"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import SecondEvents from "../../components/secondEvents/SecondEvents"
import './home.css'

const HomePage = () => {
    return (
        <div className="home-container">
            <Navbar />
            <Header />
            <Events />
            <SecondEvents />
        </div>
    )
}

export default HomePage
