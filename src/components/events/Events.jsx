import './events.css'
import event1 from '../../assets/alacasa club.png'
import event2 from '../../assets/sven-olson---ep-cover 1(4).png'
import event3 from '../../assets/event3.png'

const Events = () => {
    return (
        <div className="events-container">
            <div
                className="first-event"
                style={{
                    backgroundImage: `url(${event1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top"
                }}
            >
            </div>
            <div className="second-event">
                <img src={event2} alt="event" />
                <div className="second-event-desc">
                    <h3>Gates to the Unknown EP tracks previews - OUT on 14.12.2024</h3>
                    <p>Sven’s latest EP immerses listeners in dark, expansive soundscapes, where deep, atmospheric...</p>
                    <button>Discover and listen the ep</button>
                </div>
            </div>
            <div
                className="third-event"
                style={{
                    backgroundImage: `url(${event3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <h2>Morning Coffee Meets Fresh Beats</h2>
                <div className="third-event-flex-container">
                    <div className="first-container">
                        <h3>DJ spots open at Amakoffee, <br /> every Tuesday at 10:00 AM<br />sharp.</h3>
                        <h4>be part of <br /> <span>'The Espresso Set'</span> <br /> <span>and set the vibe!</span></h4>
                        <p>Visit Amakofee’s website and submit one of your recorded <br /> sets, so they get to know <br />your music :). Also, specify in <br /> the title: <span>‘The Espresso Set’</span></p>
                    </div>
                    <div className="second-container">
                        <button>Contact</button>
                    </div>
                </div>
                <p className="third-event-desc">Find us at Amakoffee, Str. Beat Avenue 12, Groovetown. Good music and artists live, everyday!</p>
            </div>
        </div>
    )
}

export default Events
