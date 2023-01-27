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
  const keysToNames = {"Q":"Heater 1", "W": "Heater 2", "E": "Heater 3", "A": "Heater 4", "S": "Clap", "D": "Open HH", "Z": "Kick-n-Hat", "X": "Kick", "C": "Closed HH"};
  const drumPadData = [
    {
      name: "Heater 1",
      letter: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      name: "Heater 2",
      letter: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      name: "Heater 3",
      letter: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      name: "Heater 4",
      letter: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      name: "Clap",
      letter: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      name: "Open HH",
      letter: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      name: "Kick-n-Hat",
      letter: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      name: "Kick",
      letter: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      name: "Closed HH",
      letter: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
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
