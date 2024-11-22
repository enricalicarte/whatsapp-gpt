const brandItems = document.querySelectorAll(".brand");
const chatHistory = document.getElementById("chat-history");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const newConversationButton = document.getElementById("new-conversation-button");

let currentConversation = []; // Almacena mensajes de la conversación actual

// Función para añadir un mensaje al historial del chat
function addMessageToChat(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    currentConversation.push({ sender, message }); // Guardar mensaje en la conversación actual
}

// Función para limpiar el historial del chat
function clearChatHistory() {
    chatHistory.innerHTML = ""; // Borra el historial del chat
    currentConversation = [];  // Reinicia la conversación actual
}

// Función para manejar clics en las marcas
function selectBrand(event) {
    brandItems.forEach((item) => item.classList.remove("selected"));
    const selectedItem = event.target;
    selectedItem.classList.add("selected");
    clearChatHistory();
    addMessageToChat("bot", `Has seleccionado la marca: ${selectedItem.dataset.brand}`);
}

// Evento del botón "Enviar"
searchButton.addEventListener("click", () => {
    const userMessage = searchInput.value.trim();
    if (!userMessage) return;

    addMessageToChat("user", userMessage);

    const botReply = `Respuesta a: "${userMessage}"`;
    setTimeout(() => addMessageToChat("bot", botReply), 1000);

    searchInput.value = "";
});

// Evento para enviar mensaje con la tecla "Enter"
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        searchButton.click();
    }
});

// Evento del botón "Nueva Conversación"
newConversationButton.addEventListener("click", clearChatHistory);

// Añadir evento a cada marca
brandItems.forEach((item) => {
    item.addEventListener("click", selectBrand);
});
