async function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    if (!userMessage) return;

    // Añadir el mensaje del usuario al chat-box
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div><strong>Tú:</strong> ${userMessage}</div>`;

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
    chatBox.innerHTML += `<div><strong>WhatsApp-GPT:</strong> ${assistantReply}</div>`;

    // Limpiar el campo de entrada
    document.getElementById("user-input").value = "";
}
