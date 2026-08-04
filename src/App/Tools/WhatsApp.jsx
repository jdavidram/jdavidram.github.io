function WhatsApp() {
    let cel = "3113578185";
    let msg = "Hola\nQuisiera agendar una clase particular de";
    return (
        <a href={ "https://wa.me/57" + cel + "?text=" + msg.replace(" ", "%20").replace("\n", "%0A") } target="_blank" rel="noopener noreferrer">
            <p>Contacto</p>
        </a>
    );
}

export { WhatsApp };