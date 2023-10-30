const spokenText = document.getElementById("spokenText");

if ('speechSynthesis' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        spokenText.textContent = `You said: "${transcript}"`;
    };

    recognition.onerror = function (event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = function () {
        recognition.start();
    };

    recognition.start();
} else {
    spokenText.textContent = "Speech recognition is not supported in your browser.";
}
