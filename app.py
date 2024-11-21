from flask import Flask, request

app = Flask(__name__)

# Ruta principal
@app.route('/')
def home():
    return "¡El servidor Flask está funcionando correctamente!"

# Otras rutas que ya tienes definidas, como '/webhook'
@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    return "¡Webhook recibido correctamente!"

if __name__ == '__main__':
    app.run(port=5000)
