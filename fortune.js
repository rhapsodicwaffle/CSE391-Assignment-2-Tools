const fortunes = [
    "A stranger will bring unexpected joy into your life this week.",
    "The answer you seek lies in a book you've already read.",
    "Three doors will open for you, choose the one that makes you nervous.",
    "Your biggest weakness will become your greatest strength.",
    "Someone from your past is thinking of you right now.",
    "The next song you hear will hold a message meant for you.",
    "A small act of kindness today will return to you tenfold.",
    "The number 7 holds special significance in your near future.",
    "Trust your instincts, they're trying to tell you something important.",
    "An old hobby will lead to a new opportunity.",
    "The solution you need will come from an unlikely source.",
    "Your next adventure begins with a single question."
];

const styles = {
    green: {
        fontColor: '#2e7d32',
        backgroundColor: '#f0f8f0',
        borderColor: '#4CAF50',
        fontFamily: 'Georgia, serif',
        fontSize: '1.2em'
    },
    yellow: {
        fontColor: '#f57f17',
        backgroundColor: '#fffde7',
        borderColor: '#FFC107',
        fontFamily: 'Verdana, sans-serif',
        fontSize: '1.15em'
    },
    blue: {
        fontColor: '#0d47a1',
        backgroundColor: '#e3f2fd',
        borderColor: '#2196F3',
        fontFamily: 'Courier New, monospace',
        fontSize: '1.1em'
    },
    orange: {
        fontColor: '#bf360c',
        backgroundColor: '#fbe9e7',
        borderColor: '#FF5722',
        fontFamily: 'Times New Roman, serif',
        fontSize: '1.25em'
    }
};

function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

function displayFortune() {
    const fortuneText = document.getElementById('fortuneText');
    fortuneText.textContent = getRandomFortune();
}

function changeStyle(color) {
    const fortuneBox = document.getElementById('fortuneBox');
    const fortuneText = document.getElementById('fortuneText');
    const style = styles[color];
    
    fortuneBox.style.backgroundColor = style.backgroundColor;
    fortuneBox.style.borderColor = style.borderColor;
    fortuneText.style.color = style.fontColor;
    fortuneText.style.fontFamily = style.fontFamily;
    fortuneText.style.fontSize = style.fontSize;
}

window.onload = function() {
    displayFortune();
};
