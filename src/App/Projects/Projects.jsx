import "./Projects.scss";

function Projects({ career }) {
    return (
        <main id="projects" className={ career.split(" ")[0] }>
            <h1>PROJECTS</h1>
        </main>
    );
}

export { Projects };