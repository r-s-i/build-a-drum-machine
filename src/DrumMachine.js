import React, { useEffect } from "react";

const DrumMachine = () => {
  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyPressUp);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.addEventListener("keyup", handleKeyPressUp);
    };
  });

  const handleClick = (e) => {
    e.target.firstElementChild.play();
    document.getElementById("audio-desc").innerHTML = keysToNames[e.target.id];
  };

  const handleKeyPress = (e) => {
    if(allowedKeys.includes(e.key.toUpperCase())) {
      document.getElementById(e.key.toUpperCase()).firstElementChild.play();
      document.getElementById(e.key.toUpperCase()).style.background = "white";
      document.getElementById("audio-desc").innerHTML = keysToNames[e.key.toUpperCase()];
    }

  };
  const handleKeyPressUp = (e) => {
    if(allowedKeys.includes(e.key.toUpperCase()) && document.getElementById(e.key.toUpperCase()).style.background === "white") {
      document.getElementById(e.key.toUpperCase()).style.background = "#282c34";
    }
  };

  const allowedKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const keysToNames = {"Q":"C Note", "W": "A Note", "E": "G Note", "A": "E Note", "S": "D Note", "D": "Also C Note", "Z": "Drum #1", "X": "Drum #2", "C": "Drum #3"};
  const drumPadData = [
    {
      letter: "Q",
      url: "./sounds/c-note.ogg"
    },
    {
      letter: "W",
      url: "./sounds/a-note.ogg"
    },
    {
      letter: "E",
      url: "./sounds/g-note.ogg"
    },
    {
      letter: "A",
      url: "./sounds/e-note.ogg"
    },
    {
      letter: "S",
      url: "./sounds/d-note.ogg"
    },
    {
      letter: "D",
      url: "./sounds/c2-note.ogg"
    },
    {
      letter: "Z",
      url: "./sounds/drum-1.ogg"
    },
    {
      letter: "X",
      url: "./sounds/drum-2.ogg"
    },
    {
      letter: "C",
      url: "./sounds/drum-3.ogg"
    },
  ];

  return (
    <div id="drum-machine">
      <div id="display">
      <h1 id="audio-desc">Drum Machine</h1>
      <div id="keys">
        {drumPadData.map((obj, i) => {
            const {url, letter} = drumPadData[i];
            return (
              <div
                className="drum-pad"
                id={letter}
                key={"key_" + i}
                onClick={handleClick}               
              >
                {letter}
                <audio className="clip" src={url} id={letter} />
              </div>
            );
        })}
      </div>
      </div>
    </div>
  );

}

export default DrumMachine;
