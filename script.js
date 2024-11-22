// Manejo del botón de búsqueda
document.getElementById("search-button").addEventListener("click", () => {
    const input = document.getElementById("search-input").value.trim();
    if (!input) return alert("Por favor, escribe algo para buscar.");
    alert(`Buscando: ${input}`);
});

// Opcional: Puedes añadir eventos adicionales para los botones de "Enfoque" y "Adjuntar"
