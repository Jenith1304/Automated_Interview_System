/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
const speechToText = ()=>{
    const {transcript, interimTranscript, listening, startListening, stopListening, resetListening,browserSupportsSpeechRecognition} = useSpeechRecognition()

    if(!browserSupportsSpeechRecognition)
        return null
    else{


        return {transcript,startListening,stopListening,resetListening}
    }

    
}