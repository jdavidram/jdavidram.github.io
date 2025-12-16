import { FaSquareInstagram, FaLinkedin, FaSquareGithub, FaSquareThreads } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { ReactComponent as Logo } from "../logo.svg";
import { NavLink } from "react-router-dom";
import "./Layout.scss";

function showNav() {
    let root = document.getElementById("root");
    let arrow = document.getElementById("arrow");
    if (root.style.left !== "calc(-50px + 100vw)") {
        root.style.left = "calc(-50px + 100vw)";
        root.style.borderRadius = "20px";
        arrow.style.transform = "rotate(-180deg)"
    } else {
        root.style.left = "0px";
        root.style.borderRadius = "0px";
        arrow.style.transform = "rotate(0deg)"
    }
}

function Header() {
    return (
        <header>
            <div className="logo">
                <Logo />
                <p>jdavid.ram</p>
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Projects</NavLink>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <span>
                <FaRegArrowAltCircleRight id="arrow" onClick={ () => showNav() } />
            </span>
            <ul>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaSquareInstagram />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaSquareGithub />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaSquareThreads />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

function Layout({ children }) {
    return (
        <>
        <Header />
        { children }
        <Footer />
        </>
    );
}

export { Layout };