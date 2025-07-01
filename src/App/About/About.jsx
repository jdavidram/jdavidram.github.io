import "./About.scss";

function About({ career }) {
    return (
        <main id="about" className={ career.split(" ")[0] }>
            <h1>ABOUT ME</h1>
        </main>
    );
}

export { About };