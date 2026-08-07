import { Bubble } from "../Tools/Bubble/Bubble";
import { Layout } from "../Layout/Layout";
import hello from "./hello.webp";
import "./Home.scss";

function Cover() {
    var h1 = [
        <h1>¡Aprende <strong>{ "Cálculo integral" }</strong> sin morir en el intento!</h1>,
        <h1>La materia no se crea, ni se repite. <strong>¡Se gana este semestre!</strong></h1>
    ];
    return (
        <main id="home">
            <Bubble src={ hello } />
            <article>
                { h1[Math.floor(Math.random()*h1.length)] }
            </article>
        </main>
    );
}

function Home() {
    return (
        <Layout>
            <Cover />
        </Layout>
    );
}

export { Home };