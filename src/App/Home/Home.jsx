import { FaLeaf, FaPython } from "react-icons/fa6";
import { VscGraphScatter } from "react-icons/vsc";
import { SiRstudioide, SiPostgresql, SiAnaconda, SiArcgis, SiQgis } from "react-icons/si";
import hello from "./hello.webp";
import "./Home.scss";

function Home({ career, setCareer }) {
    return (
        <main id="home" className={ career.split(" ")[0] }>
            <figure>
                <img src={ hello } alt="" />
            </figure>
            <span>
                <h2>Hi, I'm <strong>JDavid Ram</strong></h2>
                <h1>{ career }</h1>
                <ul>
                    <li>
                        <FaLeaf onMouseOver={ () => setCareer("environmental engineer") } />
                    </li>
                    <li>
                        <VscGraphScatter onMouseOver={ () => setCareer("data analyst") } />
                    </li>
                    <li>
                        <SiArcgis onMouseOver={ () => setCareer("gis analyst") } />
                    </li>
                </ul>
                <h3>Based in Medellin, <strong>Colombia</strong></h3>
            </span>
        </main>
    );
}

export { Home };