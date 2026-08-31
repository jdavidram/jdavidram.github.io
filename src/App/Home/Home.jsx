import { Bubble } from "../Tools/Bubble/Bubble";
import { Layout } from "../Layout/Layout";
import hello from "./hello.webp";
import "./Home.scss";

function Home() {
    return (
        <Layout>
            <header>
                <div className="welcome">
                    <Bubble src={ hello } />
                </div>
                <aside>
                    <h1>¡Aprende <strong>Calculo integral</strong> sin morir en el intento!</h1>
                    <p>Tu mejor apoyo en las asignaturas de la U</p>
                    <p>Escoge los <strong>cursos</strong> que necesites y ten el apoyo que necesitas en cada uno de ellos</p>
                </aside>
            </header>
        </Layout>
    );
}

export { Home };