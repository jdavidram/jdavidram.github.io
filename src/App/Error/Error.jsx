import "./Error.scss";

function Error({ career }) {
    return (
        <main id="error" className={ career.split(" ")[0] }>
            <h1>ERROR</h1>
        </main>
    );
}

export { Error };