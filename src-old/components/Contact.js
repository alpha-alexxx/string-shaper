import React, { useState } from "react";

export default function Contact(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [job, setJob] = useState("");
  const [ans, setAns] = useState("");
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(true);
  const [flag3, setFlag3] = useState(true);
  const [flag4, setFlag4] = useState(true);
  const [flag5, setFlag5] = useState(true);
  const [flag6, setFlag6] = useState(true);
  const [flag, setFlag] = useState(true);

  const validate = (val) => {
    if (val >= 1 || val === 0) {
      if (fname === "") {
        setFname("red");
        setFlag1(false);
      } else {
        setFname("green");
        setFlag1(true);
      }
    }

    if (val >= 2 || val === 0) {
      if (lname === "") {
        setLname("red");
        setFlag2(false);
      } else {
        setLname("green");
        setFlag2(true);
      }
    }

    if (val >= 3 || val === 0) {
      if (email === "") {
        setEmail("red");
        setFlag3(false);
      } else {
        setEmail("green");
        setFlag3(true);
      }
    }

    if (val >= 4 || val === 0) {
      if (mob === "") {
        setMob("red");
        setFlag4(false);
      } else {
        setMob("green");
        setFlag4(true);
      }
    }

    if (val >= 5 || val === 0) {
      if (job === "") {
        setJob("red");
        setFlag5(false);
      } else {
        setJob("green");
        setFlag5(true);
      }
    }

    if (val >= 6 || val === 0) {
      if (ans === "") {
        setAns("red");
        setFlag6(false);
      } else {
        setAns("green");
        setFlag6(true);
      }
    }

    setFlag(flag1 && flag2 && flag3 && flag4 && flag5 && flag6);
  };





  return (
    <>
      <div className={`container-fluid px-1 py-5 mx-auto body-contact bg-${props.mode} text-${props.mode === "light" ? "black" : "white"}`} >
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Contact Me</h3>
            <hr />
            <p className="blue-text">
              This is Just a demonstration of contact page.
              <br /> so that we can personalize the right experience for you.
            </p>
            <div className={`card bg-${props.mode}`}>
              <h5 className="text-center mb-4">
                Powering world-class companies
              </h5>
              <form className="form-card" onSubmit={(event) => event.preventDefault()}>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      First name<span className="text-danger"> *</span>
                    </label>
                    <input type="text" id="fname" name="fname" placeholder="Enter your first name" style={{
                      borderColor: fname
                    }} onBlur={() => validate(1)}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Last name<span className="text-danger"> *</span>
                    </label>
                    <input type="text" id="lname" name="lname" placeholder="Enter your last name" style={{
                      borderColor: lname
                    }} onBlur={() => validate(2)}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Email<span className="text-danger"> *</span>
                    </label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" style={{
                      borderColor: email
                    }} onBlur={() => validate(3)}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Mobile<span className="text-danger"> *</span>
                    </label>
                    <input type="text" id="mob" name="mob" placeholder="Enter your mobile number" style={{
                      borderColor: mob
                    }} onBlur={() => validate(4)}
                      onChange={(e) => setMob(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Job title<span className="text-danger"> *</span>
                    </label>
                    <input type="text" id="job" name="job" placeholder="Enter your job title" style={{
                      borderColor: job
                    }} onBlur={() => validate(5)}
                      onChange={(e) => setJob(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Additional message
                    </label>
                    <textarea id="ans" className="textarea-message" name="ans" placeholder="Enter your message" style={{
                      borderColor: ans
                    }} onBlur={() => validate(6)}
                      onChange={(e) => setAns(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <button
                      type="submit"
                      className={`btn  btn-${props.mode==="light"?"primary":"outline-primary"} btn-lg px-4 me-md-2`}
                      disabled={!flag}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
