function WhatsApp({ children, msg }) {
    let cel = "3113578185";
    return (
        <a href={ "https://wa.me/57" + cel + "?text=" + msg.replace(" ", "%20").replace("\n", "%0A") } target="_blank" rel="noopener noreferrer">
            { children }
        </a>
    );
}

export { WhatsApp };