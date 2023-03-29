import './App.css'
import SpectrogramPlayer from "react-audio-spectrogram-player";

import sxx from "./assets/librispeech/sxx/19-198-0001.json"
import src from "./assets/librispeech/wav/19-198-0001.wav"
import wordIntervals from "./assets/librispeech/word_intervals/19-198-0001.json"
import phoneIntervals from "./assets/librispeech/phone_intervals/19-198-0001.json"

function App() {

  const annotations = [
    {
      title: "Word Intervals",
      data: wordIntervals
    },
    {
      title: "Phone Intervals",
      data: phoneIntervals
    }
  ]

  return (
    <div className="App">
      <h1>react-audio-spectrogram-player</h1>
      <h2>Demo:</h2>
      <SpectrogramPlayer
        src={src}
        sxx={sxx}
        specHeight={250}
        navigator
        navHeight={60}
        settings
        annotations={annotations}
        dark
      />
      <p>
      Audio used from <a href="https://www.openslr.org/12">LibriSpeech</a> dataset.
      </p>
      <h2>Links:</h2>
      <a href='https://github.com/nicolvisser/react-audio-spectrogram-player'>GitHub</a>
      <br />
      <a href='https://www.npmjs.com/package/react-audio-spectrogram-player'>NPM</a>
    </div>
  )
}

export default App
