import './secondEvents.css'
import event1 from '../../assets/second-event-first.png'
import event2 from '../../assets/second-event-second.png'
import event3 from '../../assets/male-dj-working-studio 1.png'
import playIcon from '../../assets/play icon(2).png'
import cover from '../../assets/Niko Klest_single cover 1.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect, useState } from 'react'


gsap.registerPlugin(ScrollTrigger);

const SecondEvents = () => {
    const playBtnContainerRef = useRef(null);
    const textRefs = useRef([]);



    useEffect(() => {
        const playBtnContainer = playBtnContainerRef.current;

        const handleMouseEnter = () => {
            gsap.to(playBtnContainer, {
                background: "var(--mintColor)",
                borderRadius: "4rem",
                duration: 1,
                ease: "power4.out",
            });

            gsap.to(".layer", {
                background: "rgba(211, 244, 209, 0.6)",
                backdropFilter: "blur(7px)",
                duration: 1,
                ease: "power4.out",
            });
        };

        const handleMouseLeave = () => {

            gsap.to(playBtnContainer, {
                background: "transparent",
                borderRadius: "0rem",
                duration: 1,
                ease: "power4.out",
            });

            gsap.to(".layer", {
                background: "rgba(211, 244, 209, 0)",
                backdropFilter: "blur(0px)",
                duration: 1,
                ease: "power4.out",
            });
        };

        if (playBtnContainer) {
            playBtnContainer.addEventListener("mouseenter", handleMouseEnter);
            playBtnContainer.addEventListener("mouseleave", handleMouseLeave);
        }
        return () => {
            if (playBtnContainer) {
                playBtnContainer.removeEventListener("mouseenter", handleMouseEnter);
                playBtnContainer.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);


    useEffect(() => {
        const playBtnContainer = playBtnContainerRef.current;

        const handleMouseEnter = () => {
            const timeline = gsap.timeline();

            timeline
                .fromTo(
                    textRefs.current[0],
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }
                )
                .fromTo(
                    textRefs.current[1], // h5
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' },
                    '-=0.4'
                )
                .fromTo(
                    textRefs.current[2],
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
                    '-=0.4'
                );
        };

        const handleMouseLeave = () => {
            gsap.to(textRefs.current[0], {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power4.out',
            });

            gsap.to(textRefs.current[1], {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power4.out',
            });

            gsap.to(textRefs.current[2], {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'power4.out',
            });
        };
        if (playBtnContainer) {
            playBtnContainer.addEventListener('mouseenter', handleMouseEnter);
            playBtnContainer.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (playBtnContainer) {
                playBtnContainer.removeEventListener('mouseenter', handleMouseEnter);
                playBtnContainer.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="second-events-container" >
            <div
                className="second-events-first"
                style={{
                    backgroundImage: `url(${event1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <h1>Sven Zolara</h1>
                <h2>From late-night studio sessions <br />to unforgettable club sets</h2>
                <p>We sat down to talk influences, city vibes, and  <br /> his vision for the future of sound.</p>
                <button>Read article</button>
            </div>
            <div className="second-events-second">
                <div className="play-btn-container" ref={playBtnContainerRef}>
                    <img src={playIcon} alt="play" className="play" />
                    <div className="layer"></div>
                    <img src={cover} alt="cover" className="Niko-Klest-cover" />
                    <h4 ref={(el) => (textRefs.current[0] = el)}>Niko Klest</h4>
                    <h5 ref={(el) => (textRefs.current[1] = el)}>Single Premiere</h5>
                    <p ref={(el) => (textRefs.current[2] = el)}>Bandcamp Release</p>
                </div>
                <div className="second-img-container">
                    <img src={event2} alt="event" className="second-img" />
                </div>
            </div>
            <div className="second-events-third">
                <img src={event3} alt="event" className="third-img" />
                <div className="third-events-description">
                    <h3>Kian Krell - about some of his DJ techniques </h3>
                    <p>Employing glitchy, fragmented loops, he keeps the <br />audience on their toes, never knowing what will come<br /> next. </p>
                    <p> By playing with offbeat rhythms and sudden, sharp transitions, he creates a sense of sonic disarray that heightens the anticipation and keeps the crowd <br />engaged.</p>
                    <button className="third-event-btn">Read the full article</button>
                </div>
            </div>
        </div>
    )
}

export default SecondEvents
