function handleSubmit() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    
    if (text) {
        const messagesDiv = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = text;

        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        input.value = '';
    }
}

document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSubmit();
    }
});

document.getElementById('submitButton').addEventListener('click', handleSubmit);