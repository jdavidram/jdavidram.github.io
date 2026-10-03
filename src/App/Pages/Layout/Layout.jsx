import { Instagram, YouTube, LinkedIn, Github, Threads, RightArrow } from '../../Tools/Icons';
import { ReactComponent as Logo } from '../../logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Layout.scss';

const moveTo = {
    "hide": "show",
    "show": "hide"
};

function Corner({ direction }) {
    return (
        <span className="corner">
            <span className={ direction }></span>
        </span>
    );
}

function Aside({ left, setLeft }) {
    return (
        <aside>
            <ul>
                <li>
                    <Link to="/" onClick={ () => setLeft(moveTo[left]) }>Home</Link>
                </li>
                <li>
                    <Link to="/courses" onClick={ () => setLeft(moveTo[left]) }>Courses</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={ () => setLeft(moveTo[left]) }>Projects</Link>
                </li>
                <li>
                    <Link to="/cv" onClick={ () => setLeft(moveTo[left]) }>CV</Link>
                </li>
                <li>
                    <Link to="/error" onClick={ () => setLeft(moveTo[left]) }>Error</Link>
                </li>
            </ul>
        </aside>
    );
}

function Navigator({ left, setLeft }) {
    return (
        <nav>
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/cv">CV</Link>
                    </li>
                    <li>
                        <Link to="/error">Error</Link>
                    </li>
                </ul>
                <span id="arrow" className={ left } onClick={ () => setLeft(moveTo[left]) }>
                    <RightArrow />
                </span>
                <Corner direction="top left" />
            </div>
            <div className="logo">
                <Corner direction="top right" />
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
            <Corner direction="top left" />
            <div className="social">
                <Corner direction="bottom left" />
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
                            <LinkedIn />
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
            </div>
        </footer>
    );
}

function Layout({ children, className }) {
    const [left, setLeft] = useState('hide');
    return (
        <>
        <Aside left={ left } setLeft={ setLeft } />
        <div id="pages" className={ left }>
            <Navigator left={ left } setLeft={ setLeft } />
            <main className={ className }>
                { children }
            </main>
            <Footer />
        </div>
        </>
    );
}

export { Layout };