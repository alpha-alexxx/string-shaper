import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const [text, setText] = useState("");
  //   text = "ankit"; // wrong way to change the state.
  //   setText("This is new text"); //correct way to change the state
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (newText.length > 0) {
      props.showAlert("Converted to Uppercase!", "success");
    } else {
      props.showAlert("Textarea is empty!", "warning");
    }
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (newText.length > 0) {
      props.showAlert("Converted to Lowercase!", "success");
    } else {
      props.showAlert("Textarea is empty!", "warning");
    }
  };
  const handleCapClick = () => {
    let arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newText = arr.join(" ");
    setText(newText);
    if (newText.length > 0) {
      props.showAlert("Converted to Title Case!", "success");
    } else {
      props.showAlert("Textarea is empty!", "warning");
    }
  };

  const handleAltClick = () => {
    let Text = text.split(" ");
    for (let h = 0; h < Text.length; h++) {
      const element = Text[h];

      let letter = element.split("");
      for (let i = 0; i < letter.length; i++) {
        if (i % 2 === 0) {
          letter[i] = letter[i].toUpperCase();
        } else {
          letter[i] = letter[i].toLowerCase();
        }
      }
      Text[h] = letter.join("");
    }
    const newText = Text.join(" ");
    setText(newText);
    if (newText.length > 0) {
      props.showAlert("Converted to Alternative case!", "success");
    } else {
      props.showAlert("Textarea is empty!", "warning");
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    if (text.length > 0) {
      props.showAlert("All text copied from textarea!", "success");
    } else {
      props.showAlert("Textarea is empty!", "warning");
    }
  };
  const handlermExtraClick = () => {
    let newText = text;
    if (text.trim().length === 0) {
      // Check for empty text before removing extra spaces
      props.showAlert("Textarea is empty!", "warning");
    } else if (newText.match(/[ ]{2,}/)) {
      newText = newText.split(/[ ]{2,}/);
      setText(newText.join(" "));
      if (newText.length > 0) {
        props.showAlert(
          "Extra spaces have been removed from the Text!",
          "success"
        );
      }
    } else {
      props.showAlert("There is no Extra Spaces", "info");
    }
  };

  const handleClearClick = () => {
    const newText = "";
    setText(newText);
    if (text.length > 0) {
      props.showAlert("All text cleared!", "danger");
    } else {
      props.showAlert("There is no text to clear!", "info");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const words = text.split(/\s+/).filter((element) => element.length !== 0).length;
  const slowReadingSpeed = 100; // words per minute
  const averageReadingSpeed = 183; // words per minute
  const fastReadingSpeed = 260; // words per minute

  function calculateReadingTime(words, readingSpeed) {
    const seconds = (words / readingSpeed) * 60;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}M ${remainingSeconds}S`;
  }
  const slow = calculateReadingTime(words, slowReadingSpeed);
  const average = calculateReadingTime(words, averageReadingSpeed);
  const fast = calculateReadingTime(words, fastReadingSpeed);
  let myStyle = {
    color: props.mode === "dark" ? "#fff" : "#252525",
    backgroundColor: props.mode === "dark" ? "#535353" : "#fff"
  }
  // let button ={`btn-${props.mode === "light" ? "dark" : "outline-light"}`}
  let btnclass = `btn btn-${props.mode === "light" ? "outline-dark" : "outline-light"} mx-1 my-1`;
  // className={btnclass}

  return (
    <>
      <div className="container">
        <div id="form">
          <h4 className="heading my-3">{props.heading}</h4>
          <div className="mb-3">
            <textarea
              className={`form-control`}
              id="mybox"
              rows="8"
              value={text}
              onChange={handleOnChange}
              placeholder="Your text goes here!!!"
              style={myStyle}
            ></textarea>
          </div>
          <div className="container upper">
            <button
              title="It is use to make every letter upper case."
              type="button"
              className={btnclass}
              onClick={handleUpClick}
            >
              Upper Case
            </button>
            <button
              title="It is use to make every letter lower case."
              type="button"
              className={btnclass}
              onClick={handleLowClick}
            >
              Lower Case
            </button>
            <button
              title="It is use to make every first letter capital of every word."
              type="button"
              className={btnclass}
              onClick={handleCapClick}
            >
              Capitalize Case
            </button>
            <button
              type="button"
              className={btnclass}
              onClick={handleAltClick}
            >
              AlTeRnAtE TeXt
            </button>
            <button
              type="button"
              className={btnclass}
              onClick={handleCopyText}
            >
              Copy Text
            </button>
            <button
              type="button"
              className={btnclass}
              onClick={handlermExtraClick}
            >
              Remove Extra Spaces
            </button>
            <button
              type="button"
              className={btnclass}
              onClick={handleClearClick}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h5>Your Text Summary:</h5>
        <p>
          <strong>{words} </strong>
          Words | <strong>{text.length}</strong> Characters | <strong>{text.split(/[.!?]/).length - 1}{" "}</strong>
          Line
        </p>
        <div className="fw-bold">Estimated Reading Time:</div>
        <table className={`table text-center border my-2`}>
          <thead>
            <tr>
              <th className={`border text-${props.mode === "light" ? "black" : "light"}`} scope="col"> Fast Reader</th>
              <th className={`border text-${props.mode === "light" ? "black" : "light"}`} scope="col">Average Reader</th>
              <th className={`border text-${props.mode === "light" ? "black" : "light"}`} scope="col"> Slow Reader</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th scope="row">1</th> */}
              <td className={`border text-${props.mode === "light" ? "dark" : "light"}`}>{fast}</td>
              <td className={`border text-${props.mode === "light" ? "dark" : "light"}`}>{average}</td>
              <td className={`border text-${props.mode === "light" ? "dark" : "light"}`}>{slow}</td>
            </tr>
          </tbody>
        </table>
        <h5>Preview:</h5>
        <div className="container">
          <textarea
            className={`form-control previewbox`}
            id="previewbox"
            cols="30"
            rows="5"
            value={text}
            placeholder="Nothing To Preview Here..."
            disabled
            style={myStyle}
          ></textarea>
        </div>
      </div>
    </>
  );
}

TextForm.prototype = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = {
  heading: "Your Heading goes here!",
};
