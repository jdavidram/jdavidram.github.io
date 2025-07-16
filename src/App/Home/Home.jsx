import { IoWater } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { SiArcgis } from "react-icons/si";
import hello from "../img/hello.webp";
import "./Home.scss";

function Home() {
    return (
        <main id="home">
            <div className="sticker">
                <img src={ hello } alt="Hello" />
            </div>
            <aside>
                <h1>Hi, I'm <strong>JDavid Ram</strong></h1>
                <h2>Environmental Engineer</h2>
                <ul>
                    <li>
                        <IoWater />
                    </li>
                    <li>
                        <GoGraph />
                    </li>
                    <li>
                        <SiArcgis />
                    </li>
                </ul>
                <h3>Based in Medellin, <strong>Colombia</strong></h3>
            </aside>
        </main>
    );
}

export { Home };