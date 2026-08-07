import { Link } from "react-router-dom";
import { Instagram, YouTube, Github, Threads, Bars } from "../Tools/Icons";
import { WhatsApp } from "../Tools/WhatsApp";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";
import { useState } from "react";

function Aside({ notes }) {
    if (window.innerWidth <= 600) {
        return (
            <ul>
                <li>
                    <Link to="/">Contactar</Link>
                </li>
                <li>
                    <Link to="/">Notas de clase</Link>
                </li>
            </ul>
        );
    } else {
        return (
            <ul>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Cálculo diferencial</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Cálculo integral</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Algebra lineal</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">Ecuaciones diferenciales</a>
                </li>
            </ul>
        );
    }
}

function Header({ notes, setNotes }) {
    const showHide = {
        "show": "hide",
        "hide": "show",
    };
    return (
        <header>
            <span className="logo">
                <Logo />
                <h2>jdavid.ram</h2>
            </span>
            <nav>
                <Link to="/contact">Contactar</Link>
                <div className="button">
                    <div className="corner left">
                        <span>L</span>
                    </div>
                    <button onClick={() => setNotes(showHide[notes])}>
                        <Bars />
                    </button>
                    <div className="corner right">
                        <span>R</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <p>Sigueme para más contenido</p>
            <ul>
                <li>
                    <a href="https://www.instagram.com/jdavid.ram?igsh=bmE0NTFidzdhdmZt&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/david-ramirez-rodriguez/" target="_blank" rel="noopener noreferrer">
                        <YouTube />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jdavidram" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                </li>
                <li>
                    <a href="https://www.threads.com/@jdavid.ram?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                        <Threads />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

function Layout({ children }) {
    const [notes, setNotes] = useState("hide");
    return (
        <>
        <aside id="notes" className={ notes }>
            <Aside notes={ notes } />
        </aside>
        <Header notes={ notes } setNotes={ setNotes } />
        { children }
        <Footer />
        </>
    );
}

export { Layout };