const conversationList = document.getElementById("conversation-list");
const chatHistory = document.getElementById("chat-history");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

let conversations = []; // Array para almacenar las conversaciones

// Función para añadir un mensaje al historial del chat
function addMessageToChat(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Función para guardar la conversación en la biblioteca
function saveConversation(input) {
    // Guarda el texto en el array de conversaciones
    conversations.push(input);

    // Actualiza la lista en la barra lateral
    const conversationItem = document.createElement("li");
    conversationItem.textContent = input;
    conversationItem.addEventListener("click", () => {
        alert(`Seleccionaste la conversación: "${input}"`);
    });

    conversationList.appendChild(conversationItem);
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

    // Guardar la conversación en la biblioteca
    saveConversation(userMessage);

    // Limpiar el campo de entrada
    searchInput.value = "";
});
