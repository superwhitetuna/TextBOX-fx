const header = document.querySelector('.header');
const messagesContainer = document.querySelector('.messages-container')
const inputContainer = document.querySelector('.input-container');
const headerHeight = header.offsetHeight;
messagesContainer.style.top = `${headerHeight}px`;
const initialInputHeight = inputContainer.offsetHeight;
messagesContainer.style.bottom = `${initialInputHeight}px`;

const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        if (entry.target === inputContainer) {
            const inputHeight = entry.contentRect.height;
            messagesContainer.style.bottom = `${inputHeight}px`;
        }
    }
})
resizeObserver.observe(inputContainer);

const darkModeToggle = document.getElementById('darkModeToggle');
const modeText = document.querySelector('.mode-text');
const darkModePreference = localStorage.getItem('darkMode');

if (darkModePreference ==='enabled' ||
    (darkModePreference === 'disabled' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
    modeText.textContent = 'Light Mode';
} else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.checked = false;
    modeText.textContent = 'Dark Mode';
}

darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        modeText.textContent = 'Light Mode'; 
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        modeText.textContent = 'Dark Mode';
    }
}); 

function handleSubmit() {
    const input = document.getElementById('userInput');
    const text = input.value;
    
    if (text) {
        const messagesDiv = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = text;

        const entranceEffects = [
            'slide-in-bottom',
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

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (!isMobile) {
    document.getElementById('userInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            if (!event.shiftKey) {
                event.preventDefault();
                handleSubmit();
            }
        }
    });
}


document.getElementById('submitButton').addEventListener('click', handleSubmit);