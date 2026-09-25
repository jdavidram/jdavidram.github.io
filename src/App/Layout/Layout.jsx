import { Instagram, YouTube, Github, Threads, LinkedIn, RightArrow } from "../Tools/Icons";
import { ReactComponent as Logo } from "../logo.svg";
import { Link } from 'react-router-dom';
import "./Layout.scss";

const showNav = () => {
    let universe = document.getElementById("universe");
    let arrow = document.getElementById("arrow");
    if (universe.style.left !== "calc(-50px + 100vw)") {
        universe.style.left = "calc(-50px + 100vw)";
        arrow.style.transform = "rotate(-180deg)";
    } else {
        universe.style.left = "0px";
        arrow.style.transform = "rotate(0deg)";
    }
};

function Header() {
    return (
        <nav>
            <div id="button">
                <button onClick={ () => showNav() }>
                    <RightArrow id="arrow" />
                </button>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/courses">Cursos</Link>
                    </li>
                    <li>
                        <Link to="/cv">CV</Link>
                    </li>
                </ul>
                <span className="corner">
                    <span className="top right"></span>
                </span>
            </div>
            <div id="logo">
                <span className="corner">
                    <span className="top left"></span>
                </span>
                <Link to="/">
                    <span>
                        <Logo />
                        <h1>jdavid.ram</h1>
                    </span>
                </Link>
            </div>
        </nav>
    );
}

function Footer() {
    return (
        <footer>
            <span className="corner">
                <span className="bottom left"></span>
            </span>
            <ul>
                <li>
                    <a href="https://www.instagram.com/jdavid.ram/" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@jdavidram" target="_blank" rel="noopener noreferrer">
                        <YouTube />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/david-ramirez-rodriguez/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jdavidram" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                </li>
                <li>
                    <a href="https://www.threads.com/@jdavid.ram" target="_blank" rel="noopener noreferrer">
                        <Threads />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

function Layout({ children }) {
    return (
        <>
        <ul className="navAside">
            <li onClick={ () => showNav() }>
                <Link to="/">Inicio</Link>
            </li>
            <li onClick={ () => showNav() }>
                <Link to="/courses">Cursos</Link>
            </li>
            <li onClick={ () => showNav() }>
                <Link to="/cv">CV</Link>
            </li>
        </ul>
        <div id="universe">
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </div>
        </>
    );
}

function LayoutCV({ children }) {
    return (
        <div id="cv">
            <nav>
                <div id="button">
                    <span className="corner">
                        <span className="top right"></span>
                    </span>
                </div>
                <div id="logo">
                    <span className="corner">
                        <span className="top left"></span>
                    </span>
                    <Link to="/">
                        <span>
                            {/* <Logo /> */}
                            <h1>@jdavid.ram</h1>
                        </span>
                    </Link>
                </div>
            </nav>
            <main>
                { children }
            </main>
        </div>
    );
}

export { Layout, LayoutCV };