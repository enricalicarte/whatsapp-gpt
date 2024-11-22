const brandItems = document.querySelectorAll(".brand");
const chatHistory = document.getElementById("chat-history");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const newConversationButton = document.getElementById("new-conversation-button");
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

let currentConversation = [];
let conversationsByBrand = {
    Cumlaude: [],
    Rilastil: [],
    Sensilis: []
};
let activeBrand = null;

// Función para añadir un mensaje al historial del chat
function addMessageToChat(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    currentConversation.push({ sender, message });
}

// Función para limpiar el historial del chat y guardar la conversación actual
function clearChatHistory() {
    if (currentConversation.length > 0 && activeBrand) {
        conversationsByBrand[activeBrand].push([...currentConversation]);
    }
    chatHistory.innerHTML = "";
    currentConversation = [];
}

// Función para manejar clics en las marcas
function selectBrand(event) {
    brandItems.forEach((item) => item.classList.remove("selected"));
    const selectedItem = event.target;
    selectedItem.classList.add("selected");
    activeBrand = selectedItem.dataset.brand;
    clearChatHistory();
    addMessageToChat("bot", `Has seleccionado la marca: ${activeBrand}`);
}

// Función para alternar el menú hamburguesa
function toggleMenu() {
    sidebar.classList.toggle("visible");
}

// Evento del botón "Enviar"
searchButton.addEventListener("click", () => {
    const userMessage = searchInput.value.trim();
    if (!userMessage || !activeBrand) {
        if (!activeBrand) {
            alert("Por favor, selecciona una marca antes de comenzar la conversación.");
        }
        return;
    }

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

// Evento del botón de menú hamburguesa
menuToggle.addEventListener("click", toggleMenu);
