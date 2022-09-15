import React, { useState } from "react";

const TextForm = (props) => {
  const [enteredText, setEnteredText] = useState("");

  // this function used for change the entered value to upperCase
  const upperCaseHandler = () => {
    setEnteredText(enteredText.toUpperCase());
    props.alertShow("Text Converted to uppercase!", "success");
  };

  // this function used for getting the entered value
  const onChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  // function for clear the entered text
  const clrTextHandler = () => {
    setEnteredText("");
    props.alertShow("All text clear!", "danger");
  };

  // function for remove the extra spaces
  const removeSpaceHandler = () => {
    const newText = enteredText.split(/[ ]+/);
    setEnteredText(newText.join(" "));
    props.alertShow("Remove all extra spaces successfully!", "primary");
  };

  // Function for coping the entire text
  const copyTextCHandler = () => {
    const inpText = document.getElementById("enteredText");
    // this select() method used to select the entire text
    inpText.select();
    navigator.clipboard.writeText(inpText.value);

    // text not show as blue backgroundColor when we select it
    document.getSelection().removeAllRanges();
    props.alertShow("Text is copied successfully!", "success");
  };

  return (
    <>
      <div className="container">
        <div className="mb-2">
          <h1 className="text-primary">{props.heading}</h1>
          <textarea
            className="form-control"
            id="enteredText"
            rows="7"
            value={enteredText}
            onChange={onChangeHandler}
            placeholder="Enter your text here"
            style={{
              backgroundColor: props.toggleMode === "dark" ? "#222222" : "#fff",
              color: props.toggleMode === "dark" ? "#fff" : "#222222",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={upperCaseHandler}
          disabled={enteredText.length === 0}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={clrTextHandler}
          disabled={enteredText.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={copyTextCHandler}
          disabled={enteredText.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={removeSpaceHandler}
          disabled={enteredText.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className={`container my-5 ${`text-${
          props.toggleMode === "dark" ? "light" : "dark"
        }`}`}
      >
        <h1>Summary of your text</h1>
        <p>
          {` ${
            enteredText.length > 0
              ? enteredText.split(" ").filter((index) => {
                  return index.length !== 0;
                }).length
              : " 0 "
          }
          words and ${enteredText.length} characters.`}
        </p>
        <small>
          {`It will take
          ${
            enteredText.length > 0
              ? 0.008 * enteredText.split(" ").length
              : " 0 "
          }
          minutes to read the given text.`}
        </small>

        <h4>Preview your text</h4>
        <small>
          {enteredText.length <= 0
            ? "Enter your text for preview"
            : enteredText}
        </small>
      </div>
    </>
  );
};

export default TextForm;
