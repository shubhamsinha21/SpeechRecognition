import React from 'react'
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
const App = () => {

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
        <h2>Speech to Text Converter</h2>
        <p>Hello world</p>
        <div className="main-content">
          <p>{transcript}</p>
        </div>

        <div className="button-style">
          <button>Copy</button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
        </div>

      </div>
    </>
  )
}

export default App;