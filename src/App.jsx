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

  /*

      src: C,
    sxx: B = void 0,
    sampleRate: E = 16e3,
    n_fft: n = 1024,
    win_length: e = 400,
    hop_length: i = 160,
    f_min: d = 0,
    f_max: s = E / 2,
    n_mels: o = 128,
    top_db: a = 80,
    annotations: t = [],
    navigator: D = !1,
    settings: h = !1,
    startTimeInitial: b = void 0,
    endTimeInitial: S = void 0,
    playbackSpeedInitial: y = 1,
    playheadModeInitial: R = "page",
    specHeight: l = 200,
    navHeight: G = 50,
    colormap: w = "viridis",
    transparent: j = !1,
    dark: Z = !1
    */

  return (
    <div className="App">
      <h1>react-audio-spectrogram-player</h1>
      <h2>Demo:</h2>
      <SpectrogramPlayer
        src={src}
        //sxx={sxx}
        sampleRate={16000}
        n_fft={1024}
        win_length={400}
        hop_length={160}
        f_min={0}
        f_max={8000}
        n_mels={128}
        top_db={80}
        annotations={annotations}
        navigator
        settings
        startTimeInitial={0}
        endTimeInitial={10}
        playbackSpeedInitial={1}
        playheadModeInitial="page"
        specHeight={250}
        navHeight={60}
        colormap="viridis"
        transparent
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
