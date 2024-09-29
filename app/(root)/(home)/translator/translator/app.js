async function translateText() {
    // Get the text entered by the user
    const text = document.getElementById('text').value;

    // Get the selected target language
    const targetLanguage = document.getElementById('language').value;

    // Make sure the user entered text
    if (!text) {
        alert('Please enter some text to translate.');
        return;
    }

    try {
        // Send the text and selected language to your translator API
        const response = await fetch('http://127.0.0.1:5000/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text,  // The text entered by the user
                target_language: targetLanguage  // The target language code
            }),
        });

        // Check if the request was successful
        if (response.ok) {
            // Get the translated text from the API response
            const data = await response.json();
            // Show the translated text in the 'result' area on the page
            document.getElementById('result').innerText = data.translated_text;
        } else {
            alert('Error: Unable to translate.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error: Unable to connect to the API.');
    }
    const phoneticMap = {
        'Hello': 'həˈloʊ', // Add more words and their phonetic representations
        'Goodbye': 'ɡʊdˈbaɪ',
        // Add other translations and their corresponding phonetic spellings
    };
    
    // Modify the translateText function to include phonetic transcription
    function translateText() {
        const textToTranslate = document.getElementById('text').value;
        const targetLanguage = document.getElementById('language').value;
    
        // Example API call to your Flask API
        fetch('http://127.0.0.1:5000/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: textToTranslate, language: targetLanguage }),
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = data.translatedText;
    
            // Update phonetic transcription
            const phonetic = phoneticMap[data.translatedText] || 'Phonetic not available';
            document.getElementById('phonetic').innerText = phonetic;
        });
    }
    
}
