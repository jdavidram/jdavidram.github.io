import { Instagram, YouTube, Github, Threads, RightArrow } from "../Tools/Icons";
import { ReactComponent as Logo } from "../logo.svg";
import { useState } from "react";
import "./Layout.scss";

function Header() {
    return (
        <nav>
            <div id="button">
                <button>
                    <RightArrow />
                </button>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Cursos</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
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
                <span className="logo">
                    <Logo />
                    <h1>jdavid.ram</h1>
                </span>
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
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <YouTube />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Threads />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

function Layout({ children }) {
    return (
        <div id="universe">
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    );
}

export { Layout };