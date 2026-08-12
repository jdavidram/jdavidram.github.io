import { Bubble } from "../Tools/Bubble/Bubble";
import { Layout } from "../Layout/Layout";
import hello from "./hello.webp";
import "./Home.scss";

function Home() {
    return (
        <Layout>
            <Bubble src={ hello } />
        </Layout>
    );
}

export { Home };