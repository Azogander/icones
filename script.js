// Caching du modal pour éviter de le chercher dans le DOM à chaque clic.
const modal = document.getElementById('modal');

function copierSvg(svgId) {
    const svgElement = document.getElementById(svgId);
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgElement);

    // Utiliser une expression régulière pour retirer les attributs en une seule opération.
    svgString = svgString.replace(/( id="[^"]+"| xmlns="http:\/\/www\.w3\.org\/2000\/svg")/g, '');

    navigator.clipboard.writeText(svgString).then(showModal, function(err) {
        console.error('Erreur lors de la copie du SVG:', err);
    });
}

function showModal() {
    modal.style.display = 'block';
    setTimeout(() => modal.style.display = 'none', 2000); // Utilisation d'une arrow function pour la concision
}

// Réutilisation de la référence 'modal' au lieu de chercher à nouveau dans le DOM.
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}