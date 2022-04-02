import React, { useState } from "react";
import "../assets/css/applicationStyle.css";

export default function ApplicationPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [degreeOfEducation, setDegreeOfEducation] = useState(1);

  return (
    <div className="container" style={{ marginLeft: 200 }}>
      <div className="col-md-9">
        <div className="col-md-10">
          <div className="portlet light bordered">
            <div className="portlet-title tabbable-line">
              <div className="caption caption-md">
                <i className="icon-globe theme-font hide"></i>
                <span className="caption-subject font-blue-madison bold uppercase">
                  Application
                </span>
              </div>
            </div>
            <div className="portlet-body">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="home">
                  <div className="form-group">
                    <label for="inputName">
                      Name <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Name"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputSurname">
                      Surname <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSurname"
                      placeholder="Surname"
                      value={surname}
                      onChange={(event) => {
                        setSurname(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail">
                      Email <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputAddress">
                      Address <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Address"
                      value={address}
                      onChange={(event) => {
                        setAddress(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputDegreeOfEducation">
                      Degree of education <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="8"
                      className="form-control"
                      id="inputDegreeOfEducation"
                      value={degreeOfEducation}
                      onChange={(event) => {
                        setDegreeOfEducation(event.target.value);
                      }}
                    />
                  </div>
                  <label for="cvInputFile">
                    CV (PDF) <em style={{ color: "red" }}>*</em>
                  </label>
                  <div className="form-group">
                    <input type="file" id="cvInputFile" />
                  </div>
                  <label for="letterInputFile">
                    Letter (PDF) <em style={{ color: "red" }}>*</em>
                  </label>
                  <div className="form-group">
                    <input type="file" />
                  </div>
                  <button
                    className="btn btn-outline-primary btn-block"
                    style={{ marginTop: 25 }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
