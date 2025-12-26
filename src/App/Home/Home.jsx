import { FaLeaf } from "react-icons/fa6";
import { GiMonsteraLeaf, GiWaterRecycling } from "react-icons/gi";
import { SiArcgis, SiQgis } from "react-icons/si";
import { MdRecycling } from "react-icons/md";
import hello from "../img/hello.webp";
import "./Home.scss";

function Home() {
    return (
        <main id="home">
            <figure>
                <img src={ hello } alt="Hello" />
            </figure>
            <div className="hello">
                <h2>Hi, I'm <strong>JDavid Ram</strong></h2>
                <h1>Environmental engineer</h1>
                <ul>
                    <li>
                        <FaLeaf />
                    </li>
                    <li>
                        <SiArcgis />
                    </li>
                    <li>
                        <MdRecycling />
                    </li>
                </ul>
                <h3>Based in Medellin, Colombia</h3>
            </div>
        </main>
    );
}

export { Home };