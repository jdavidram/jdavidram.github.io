import { Bubble } from "../Tools/Bubble/Bubble";
import { Layout } from "../Layout/Layout";
import hello from "./hello.webp";
import "./Home.scss";

function Home() {
    return (
        <Layout>
            <header id="home">
                <div className="welcome">
                    <Bubble src={ hello } />
                </div>
                <aside>
                    <h1>¡Hola, soy <strong>David Ramirez</strong></h1>
                    <p>Ingeniero ambiental en <strong>Colombia</strong></p>
                </aside>
            </header>
        </Layout>
    );
}

export { Home };