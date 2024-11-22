async function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userMessage = userInput.value.trim();

    if (!userMessage) return;

    // Mostrar el mensaje del usuario
    appendMessage(userMessage, "user");

    // Limpiar el campo de entrada
    userInput.value = "";

    // Enviar el mensaje al backend
    try {
        const response = await fetch("https://tu-backend-url/whatsapp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();
        const botReply = data.reply;

        // Mostrar la respuesta del chatbot
        appendMessage(botReply, "bot");
    } catch (error) {
        appendMessage("Error al conectar con el servidor. Inténtalo nuevamente.", "bot");
    }
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);

    // Desplazar el chat hacia abajo
    chatBox.scrollTop = chatBox.scrollHeight;
}
