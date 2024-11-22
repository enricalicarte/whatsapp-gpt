const conversationList = document.getElementById("conversation-list");
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

// Evento del botón de búsqueda
searchButton.addEventListener("click", () => {
    const userMessage = searchInput.value.trim();
    if (!userMessage) return;

    // Mostrar el mensaje del usuario en el historial
    addMessageToChat("user", userMessage);

    // Simular una respuesta del chatbot
    const botReply = `Respuesta a: "${userMessage}"`;
    setTimeout(() => addMessageToChat("bot", botReply), 1000);

    // Limpiar el campo de entrada
    searchInput.value = "";
});

// Evento del botón "Nueva Conversación"
newConversationButton.addEventListener("click", clearChatHistory);
