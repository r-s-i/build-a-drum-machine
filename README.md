# Drum Machine App

This is a simple React app that acts as a drum machine. It allows users to play different notes (six) and drum sounds (three) by pressing the associated letter key on their keyboard (they also can use their mouse). It was made a solution to [FCC's Build a Drum Machine project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine){:target="_blank"}.

## How to use

[The easiest way to use the program is to go to my portfolio site](https://www.robiniversen.com/build-a-drum-machine) {:target="_blank"}

- Click on the keys displayed on the screen to play the corresponding sound or press the associated letter key on your keyboard.
- The name of the sound currently playing will be displayed on the screen.
-  The app uses the following letter keys as inputs: Q, W, E, A, S, D, Z, X, C.

Components

The app is uses a DrumMachine component. The component uses the useEffect hook to listen for keydown and keyup events on the document and calls the handleKeyPress and handleKeyPressUp functions accordingly. It also listen for clicks with handleClick.

    - The handleClick function is called when a user clicks on a key and plays the corresponding sound.
    - The handleKeyPress function is called when a user presses a letter key on their keyboard and plays the corresponding sound. It also changes the background color of the key to white when pressed (this happens using CSS with handleclick). 
    - The handleKeyPressUp function is called when a user releases a letter key on their keyboard. It changes the background color of the key back to its original color.

## Data

The app uses the following data:
    - allowedKeys: an array of letter keys that are accepted as inputs. This prevents listeners to react on every key pressed.
    - keysToNames: an object that maps letter keys to the name of the corresponding sound. 
    drumPadData: an array of objects that contain information about each key. Name of the letter (used as an id (html)) and url to the sound file (local). 

## Conclusion

This app is a simple way to play around with notes and drum sounds. It is built using React and is easy to use. Feel free to fork, clone and make any modification you want to it. This project is licensed under the MIT License.

