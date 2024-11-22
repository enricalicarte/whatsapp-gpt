const brandConversations = document.querySelectorAll(".brand-conversations");
const chatHistory = document.getElementById("chat-history");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const newConversationButton = document.getElementById("new-conversation-button");

let currentConversation = [];
let conversationsByBrand = {
    Cumlaude: [],
    Rilastil: [],
    Sensilis: []
};
let activeBrand = null;

// Función para mostrar el mensaje de bienvenida
function showWelcomeMessage() {
    chatHistory.innerHTML = ""; // Limpiar historial
    const welcomeMessage = document.createElement("div");
    welcomeMessage.classList.add("message", "bot");
    welcomeMessage.innerHTML = `
        Bienvenido, selecciona una marca para comenzar:
        <span class="brand-option" data-brand="Cumlaude">Cumlaude</span>
        <span class="brand-option" data-brand="Rilastil">Rilastil</span>
        <span class="brand-option" data-brand="Sensilis">Sensilis</span>
    `;
    chatHistory.appendChild(welcomeMessage);

    // Añadir eventos a las opciones de marca
    document.querySelectorAll(".brand-option").forEach(option => {
        option.addEventListener("click", (event) => {
            activeBrand = event.target.dataset.brand;
            addMessageToChat("bot", `Has seleccionado la marca: ${activeBrand}`);
        });
    });
}

// Función para añadir un mensaje al historial del chat
function addMessageToChat(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    currentConversation.push({ sender, message });
}

// Mostrar el mensaje de bienvenida al cargar
showWelcomeMessage();
