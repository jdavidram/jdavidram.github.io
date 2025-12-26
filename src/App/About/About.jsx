import "./About.scss";
import hello from "../img/hello.webp";
import { FaDownload } from "react-icons/fa6";
import { SiArcgis, SiQgis, SiPython } from "react-icons/si";

function About() {
    return (
        <main id="about">
            <section>
                <figure>
                    <img src={ hello } alt="profile" />
                </figure>
            </section>
            <article className="about">
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloremque voluptate consequuntur impedit fuga repellat vitae omnis! Velit officiis quam numquam doloribus possimus, magnam molestias mollitia neque consectetur minus nemo?</p>
                <a href="/#/" target="_blank" rel="noopener noreferrer">
                    <span>
                        <FaDownload />
                        <p>Download CV</p>
                    </span>
                </a>
            </article>
            <article className="skills">
                <h1>Skills</h1>
                <ul>
                    <li>
                        <SiArcgis />
                        <p>ArcGIS</p>
                    </li>
                    <li>
                        <SiQgis />
                        <p>QGIS</p>
                    </li>
                    <li>
                        <SiPython />
                        <p>Python</p>
                    </li>
                </ul>
            </article>
        </main>
    );
}

export { About };