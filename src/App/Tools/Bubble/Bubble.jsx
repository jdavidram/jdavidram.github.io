import "./Bubble.scss";

function Bubble({ src }) {
    return (
        <div className="bubble">
            <figure>
                <img src={ src } alt={ src } />
            </figure>
        </div>
    );
}

export { Bubble };