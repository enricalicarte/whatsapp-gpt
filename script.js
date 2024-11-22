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

// Función para guardar la conversación en la biblioteca
function saveConversation() {
    if (currentConversation.length === 0) return;

    // Crear un resumen con el primer mensaje del usuario
    const firstUserMessage = currentConversation.find(msg => msg.sender === "user")?.message || "Sin título";
    const conversationItem = document.createElement("li");
    conversationItem.textContent = firstUserMessage;
    conversationItem.addEventListener("click", () => {
        alert(`Resumen: ${firstUserMessage}`);
    });

    conversationList.appendChild(conversationItem);

    // Reiniciar la conversación actual
    currentConversation = [];
    chatHistory.innerHTML = ""; // Limpiar el historial visual
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
newConversationButton.addEventListener("click", saveConversation);
