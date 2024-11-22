document.getElementById("search-button").addEventListener("click", () => {
    const input = document.getElementById("search-input").value.trim();
    if (!input) return alert("Por favor, escribe algo para buscar.");

    // Simular un resultado de búsqueda (puedes conectar un backend aquí)
    console.log(`Buscando: ${input}`);
    alert(`Tu consulta: "${input}" ha sido enviada.`);
});
