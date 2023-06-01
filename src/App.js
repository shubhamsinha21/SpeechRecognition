import React, { useState } from 'react'
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";

const App = () => {

  const [textToCopy, setTextToCopy] = useState()
  const [isCopied, setCopied] = useClipboard(textToCopy);

  const startListening = () => {
    return (
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
    )
  }

  const stopListening = () => {
    return (
      SpeechRecognition.stopListening()
    )
  }

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter👋 </h2>
        <p>No need to do typing 💁Just Speak out and copy the sentence </p>
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          <p>{transcript}</p>
        </div>

        <div className="button-style">
          <button onClick={setCopied}>
            {isCopied ? 'Copied' : 'Copy to clipboard '}</button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
        </div>

      </div>
    </>
  )
}

export default App;