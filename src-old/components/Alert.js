import React from "react"; //rfce

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    const arr = lower.split("");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newword = arr.join("");
    return newword;
  };
  return (


    props.alert && (
      <div className="container d-flex align-items-center justify-content-center">
        <div
          className={`alert alert-${props.alert.type} d-flex align-items-center justify-content-center my-1 alert-dismissible fade show`}
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-circle-fill mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          <div>
            <strong>{capitalize(props.alert.type)} </strong>: {props.alert.msg}
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )

  );
}

export default Alert;
