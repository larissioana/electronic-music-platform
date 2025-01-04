import './navbar.css'
import { Link, useLocation } from 'react-router-dom'
import burgerMenu from '../../assets/icons8-menu-64.png'
import closeMenu from '../../assets/icons8-x-64.png'
import { useState, useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { navLinks } from '../../utils/navigation'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const linksRef = useRef([]);
    const location = useLocation();

    const handleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.fromTo(
                linksRef.current,
                {
                    x: 100, opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2
                }
            )
        }
    }, [isMobileMenuOpen]);


    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <nav className="nav">
            <div className="logo">
                <Link to="/" className="logo-link">Your Logo</Link>
            </div>
            <div className="nav-links">
                {
                    navLinks.map((navLink) => {
                        const { id, path, link } = navLink;
                        return <Link
                            to={path}
                            key={id}
                            className={`link ${activeLink === path ? "active-link" : ""}`}
                            onClick={() => handleLinkClick(path)}>
                            {link}
                        </Link>
                    })
                }
            </div>
            <div className="burger-menu" onClick={handleMobileMenu}>
                {
                    !isMobileMenuOpen ?
                        <img src={burgerMenu} alt="burger menu" width="52px" />
                        :
                        <img src={closeMenu} alt="close menu" width="52px" />
                }
            </div>
            {
                isMobileMenuOpen &&
                <div className="mobile-menu">
                    {
                        navLinks.map((navLink, index) => {
                            const { id, path, link } = navLink;
                            return <Link
                                to={path === "/exclusive-cuts" ? "/exclusive-cuts" : "/"}
                                className={`link ${activeLink === path ? "active-link" : ""}`}
                                key={id}
                                ref={(el) => (linksRef.current[index] = el)}
                                onClick={() => handleLinkClick(path)}
                            >
                                {link}
                            </Link>
                        })}
                </div>
            }
        </nav>
    )
}

export default Navbar
