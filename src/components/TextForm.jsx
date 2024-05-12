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
    props.alertShow("All inputed text clear!", "danger");
  };

  // function for remove the extra spaces
  const removeSpaceHandler = () => {
    const newText = enteredText.split(/\s+/);
    setEnteredText(newText.join(" "));
    props.alertShow("Remove all extra spaces successfully!", "primary");
  };

  // Function for coping the entire text
  const copyTextCHandler = () => {
    // copy all the entered text into clipboard
    navigator.clipboard.writeText(enteredText);
    props.alertShow("Text is copied successfully!", "success");
  };

  return (
    <>
      <div className="container">
        <div className="mb-2">
          <h1 className="text-primary mb-4 text-center" id="main__heading">
            {props.heading}
          </h1>
          <textarea
            className="form-control"
            id="enteredText"
            rows="7"
            value={enteredText}
            onChange={onChangeHandler}
            placeholder="Enter your text here..."
            style={{
              backgroundColor: props.toggleMode === "dark" ? "#222222" : "#fff",
              color: props.toggleMode === "dark" ? "#fff" : "#222222",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-sm btn-primary my-1 mx-1"
          onClick={upperCaseHandler}
          disabled={enteredText.length === 0}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-sm btn-primary my-1 mx-1"
          onClick={clrTextHandler}
          disabled={enteredText.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-sm btn-primary my-1 mx-1"
          onClick={copyTextCHandler}
          disabled={enteredText.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-sm btn-primary my-1 mx-1"
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
        <h1 id="summary__heading">Summary of your text</h1>
        <p>
          {` ${
            enteredText.length > 0
              ? enteredText.split(/\s/g).filter((index) => {
                  return index.length !== 0;
                }).length
              : " 0 "
          }
           
          words and ${enteredText.replace(/\s/g, "").length} characters.`}
          {/* use the /\s/g quantifier to remove all white space from the string */}
        </p>
        <p>
          {`It will take
          ${
            0.008 *
            enteredText.split(" ").filter((index) => {
              return index.length !== 0;
            }).length
          }
          minutes to read the given text.`}
        </p>

        <h4 className="mt-3 mb-1">Preview your text</h4>
        <p>{enteredText.length <= 0 ? "Nothing for Preview" : enteredText}</p>
      </div>
    </>
  );
};

export default TextForm;
