import SpectrogramPlayer from "react-audio-spectrogram-player";
import "./App.css";
import { useState } from "react";

import phoneIntervals from "./assets/librispeech/phone_intervals/19-198-0001.json";
import src from "./assets/librispeech/wav/19-198-0001.wav";
import wordIntervals from "./assets/librispeech/word_intervals/19-198-0001.json";

function App() {
  const [audioSrc, setAudioSrc] = useState(src);
  const [currentAnnotations, setCurrentAnnotations] = useState([
    {
      title: "Word Intervals",
      data: wordIntervals,
    },
    {
      title: "Phone Intervals",
      data: phoneIntervals,
    },
  ]);

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioSrc(url);
      setCurrentAnnotations([]); // Clear annotations for user-uploaded audio
    }
  };

  return (
    <div className="App">
      <h1>react-audio-spectrogram-player</h1>
      <div className="audio-upload">
        <input type="file" accept="audio/*" onChange={handleAudioUpload} />
        <p>Upload your own audio file or use the demo below</p>
      </div>
      <h2>Demo:</h2>
      <SpectrogramPlayer
        key={audioSrc}
        src={audioSrc}
        sampleRate={16000}
        n_fft={1024}
        win_length={400}
        hop_length={160}
        f_min={0}
        f_max={8000}
        n_mels={128}
        top_db={80}
        annotations={currentAnnotations}
        navigator
        settings
        playbackSpeedInitial={1}
        playheadModeInitial="page"
        specHeight={250}
        navHeight={60}
        colormap="viridis"
        transparent
        dark
      />
      <p>
        Audio used from <a href="https://www.openslr.org/12">LibriSpeech</a>{" "}
        dataset.
      </p>
      <h2>Links:</h2>
      <a href="https://github.com/nicolvisser/react-audio-spectrogram-player">
        GitHub
      </a>
      <br />
      <a href="https://www.npmjs.com/package/react-audio-spectrogram-player">
        NPM
      </a>
    </div>
  );
}

export default App;
