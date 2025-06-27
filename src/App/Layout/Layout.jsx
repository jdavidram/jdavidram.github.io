import "./Layout.scss";
import { ReactComponent as Logo } from "../logo.svg";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub, FaThreads } from "react-icons/fa6";

function Layout({ children }) {
    return (
        <>
        <header>
            <span>
                <Logo />
                <p>jdavid.ram</p>
            </span>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About me</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </header>
        { children }
        <footer>
            <ul>
                <li>
                    <a href="https://www.instagram.com/jdavid.ram?igsh=bmE0NTFidzdhdmZt&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/david-ramirez-rodriguez/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jdavidram" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.threads.com/@jdavid.ram?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                        <FaThreads />
                    </a>
                </li>
            </ul>
        </footer>
        </>
    );
}

export { Layout };