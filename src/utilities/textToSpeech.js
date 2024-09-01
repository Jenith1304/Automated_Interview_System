const textToSpeech = (text)=>{
    const speech = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(speech)
}
export {textToSpeech}