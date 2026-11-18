import "./Bubble.scss";

function Bubble({ src }) {
    let radius = [];
    for (let x = 0; x < 8*3; x++) {
        let y = Math.floor(Math.random()*100);
        if (y >= 10) {
            radius.push(y);
        } else {
            radius.push(y*10);
        }
    }
    radius = radius.map((x) => x.toString() + "%");
    var styles = {
        bubble: radius.slice(0, 4).join(" ") + " / " + radius.slice(4, 8).join(" "),
        figure: radius.slice(8, 12).join(" ") + " / " + radius.slice(12, 16).join(" "),
        img: radius.slice(16, 20).join(" ") + " / " + radius.slice(20, 24).join(" ")
    };
    return (
        <div className="bubble" style={{ borderRadius: styles.bubble }}>
            <figure style={{ borderRadius: styles.figure }}>
                <img src={ src } alt={ src } style={{ borderRadius: styles.img }} />
            </figure>
        </div>
    );
}

export { Bubble };