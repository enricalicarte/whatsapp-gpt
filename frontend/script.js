async function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    if (!userMessage) return;

    // Añadir el mensaje del usuario al chat-box
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="chat-message user"><div>${userMessage}</div></div>`;

    // Enviar el mensaje al backend
    const response = await fetch('https://tu-backend-url/whatsapp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    const assistantReply = data.reply;

    // Añadir la respuesta del asistente al chat-box
    chatBox.innerHTML += `<div class="chat-message assistant"><div>${assistantReply}</div></div>`;

    // Desplazar hacia abajo el chat-box para mostrar el último mensaje
    chatBox.scrollTop = chatBox.scrollHeight;

    // Limpiar el campo de entrada
    document.getElementById("user-input").value = "";
}
