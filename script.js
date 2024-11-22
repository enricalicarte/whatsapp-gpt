const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const chatHistory = document.getElementById("chat-history");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const newConversationButton = document.getElementById("new-conversation-button");
const conversationList = document.getElementById("conversation-list");

let currentConversation = [];
let conversationsByBrand = {
    Cumlaude: [],
    Rilastil: [],
    Sensilis: []
};
let activeBrand = null;

// Mostrar mensaje de bienvenida con opciones
function showWelcomeMessage() {
    addMessageToChat(
        "bot",
        `
        Bienvenido al Chat de Marcas. Por favor, selecciona una marca para continuar:
        <button class="brand-button" data-brand="Cumlaude">Cumlaude</button>
        <button class="brand-button" data-brand="Rilastil">Rilastil</button>
        <button class="brand-button" data-brand="Sensilis">Sensilis</button>
        `,
        true
    );

    const brandButtons = document.querySelectorAll(".brand-button");
    brandButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const brand = event.target.dataset.brand;
            selectBrand(brand);
        });
    });
}

// Función para seleccionar una marca
function selectBrand(brand) {
    activeBrand = brand;
    addMessageToChat("bot", `Has seleccionado la marca: ${brand}`);
    enableChat();
}

// Habilitar el chat después de seleccionar una marca
function enableChat() {
    searchInput.disabled = false;
    searchButton.disabled = false;
}

// Añadir un mensaje al historial del chat
function addMessageToChat(sender, message, isButton = false) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    if (isButton) {
        messageDiv.innerHTML = message;
    } else {
        messageDiv.textContent = message;
    }
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Guardar la conversación actual
function saveConversation() {
    if (currentConversation.length > 0 && activeBrand) {
        conversationsByBrand[activeBrand].push([...currentConversation]);
        const li = document.createElement("li");
        li.textContent = `Conversación ${conversationsByBrand[activeBrand].length} (${activeBrand})`;
        conversationList.appendChild(li);
        li.addEventListener("click", () => {
            alert(`Cargando conversación: ${li.textContent}`);
        });
    }
    currentConversation = [];
}

// Limpiar el historial del chat
function clearChatHistory() {
    saveConversation();
    chatHistory.innerHTML = "";
    activeBrand = null;
    searchInput.disabled = true;
    searchButton.disabled = true;
    showWelcomeMessage();
}

// Evento de enviar mensaje
searchButton.addEventListener("click", () => {
    const userMessage = searchInput.value.trim();
    if (!userMessage || !activeBrand) return;
    addMessageToChat("user", userMessage);
    const botReply = `Respuesta a: "${userMessage}"`;
    setTimeout(() => addMessageToChat("bot", botReply), 1000);
    searchInput.value = "";
});

// Evento de nueva conversación
newConversationButton.addEventListener("click", clearChatHistory);

// Iniciar con el mensaje de bienvenida
document.addEventListener("DOMContentLoaded", showWelcomeMessage);
