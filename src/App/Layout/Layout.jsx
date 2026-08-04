import { Instagram, YouTube, Github, Threads } from "../Tools/Icons";
import { WhatsApp } from "../Tools/WhatsApp";
import { ReactComponent as Logo } from "../logo.svg";
import "./Layout.scss";

function Nav() {
    return (
        <nav>
            <span>
                <Logo />
                <h1>jdavid.ram</h1>
                <p>Tu mejor apoyo en la U</p>
            </span>
            <WhatsApp />
        </nav>
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
    return (
        <>
        <Nav />
        { children }
        <Footer />
        </>
    );
}

export { Layout };