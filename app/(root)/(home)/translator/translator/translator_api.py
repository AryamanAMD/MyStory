from flask import Flask, request, jsonify
from googletrans import Translator

app = Flask(__name__)
translator = Translator()

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    text = data.get('text')
    target_language = data.get('target_language')

    if not text or not target_language:
        return jsonify({'error': 'Invalid input'}), 400

    try:
        translation = translator.translate(text, dest=target_language)
        return jsonify({
            'original_text': text,
            'translated_text': translation.text,
            'target_language': target_language
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
