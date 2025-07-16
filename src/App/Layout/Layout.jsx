import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { ReactComponent as Logo } from "../logo.svg";
import { useState } from "react";
import "./Layout.scss";

function Layout({ children }) {
    const move = (direction) => {
        if (direction === "left") {
            document.getElementById("root").style.left = "0px";
            setArrow("right");
        } else {
            document.getElementById("root").style.left = "calc(100vw - 50px)";
            setArrow("left");
        }
    }
    const [arrow, setArrow] = useState("right");
    return (
        <>
        <header>
            <span id="arrow" className={ arrow }>
                <FaRegArrowAltCircleRight onClick={() => move(arrow)} />
            </span>
            <span id="logo">
                <Logo />
                <h2>jdavid.ram</h2>
            </span>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
            </ul>
        </header>
        { children }
        <footer>
            <ul>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </footer>
        </>
    );
}

export { Layout };