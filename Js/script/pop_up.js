document.getElementById('information').addEventListener('click', () => {
    document.getElementById('accordion').scrollIntoView({ behavior: 'smooth' });
});


function ouvrirModale() {
    document.getElementById("maModale").style.display = "flex";
}

document.getElementById("fermer").onclick = function() {
    document.getElementById("maModale").style.display = "none";
};

document.getElementById("btnRedirection").onclick = function() {
    window.open("/Contact.html", "_blank"); 
    document.getElementById("maModale").style.display = "none"; // Ferme la modale
};


document.getElementById("continuer").onclick = function() {
    
    document.getElementById('siege').style.display = "block"
}

document.getElementById("fermer").onclick = function() {
    document.getElementById('siege').style.display = "none"
}