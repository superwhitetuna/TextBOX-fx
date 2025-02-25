const header = document.querySelector('.header');
const messagesContainer = document.querySelector('.messages-container')
const headerHeight = header.offsetHeight;
messagesContainer.style.top = '${headerHeight}px';

function handleSubmit() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    
    if (text) {
        const messagesDiv = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = text;

        const entranceEffects = [
            'slide-in-bottom',
            'fade-in',
            'slide-in-left',
            'slide-in-right',
            'scale-in',
            'bounce-in',
            'rotate-in',
            'pulse',
            'shake',
            'flip-in'
        ];
        const randomIndex = Math.floor(Math.random() * entranceEffects.length);
        messageElement.classList.add(entranceEffects[randomIndex]);

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