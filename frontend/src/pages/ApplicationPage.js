import React, { useEffect, useState } from "react";
import "../assets/css/applicationStyle.css";
import { convertDegreeOfEducation } from "../util/Converter";

export default function ApplicationPage(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [degreeOfEducation, setDegreeOfEducation] = useState(0);
  const [cvDocument, setCvDocument] = useState(null);
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [formErrors, setFormErrors] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    degreeOfEducation: "",
    cvDocument: "",
  });
  const [nameValid, setNameValid] = useState(false);
  const [surnameValid, setSurnameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [addressValid, setAddressValid] = useState(false);
  const [degreeOfEducationValid, setDegreeOfEducationValid] = useState(false);
  const [cvDocumentValid, setCvDocumentValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;
    let isNameValid = nameValid;
    let isSurnameValid = surnameValid;
    let isEmailValid = emailValid;
    let isAddressValid = addressValid;
    let isDegreeOfEducationValid = degreeOfEducationValid;
    let isCvDocumentValid = cvDocumentValid;

    switch (fieldName) {
      case "name":
        isNameValid = value.length >= 1;
        fieldValidationErrors.name = isNameValid ? "" : "Name is empty";
        break;
      case "surname":
        isSurnameValid = value.length >= 1;
        fieldValidationErrors.surname = isSurnameValid
          ? ""
          : "Surname is empty";
        break;
      case "email":
        isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = isEmailValid ? "" : "Email is invalid";
        break;
      case "address":
        isAddressValid = value.length >= 1;
        fieldValidationErrors.address = isAddressValid
          ? ""
          : "Address is empty";
        break;
      case "degreeOfEducation":
        isDegreeOfEducationValid = value >= 1 && value <= 8;
        fieldValidationErrors.degreeOfEducation = isDegreeOfEducationValid
          ? ""
          : "Degree of education must be between 1 and 8";
        break;
      case "cvDocument":
        isCvDocumentValid = value !== undefined;
        fieldValidationErrors.cvDocument = isCvDocumentValid
          ? ""
          : "CV document is empty";
        break;
      default:
        break;
    }
    setFormErrors(fieldValidationErrors);
    setNameValid(isNameValid);
    setSurnameValid(isSurnameValid);
    setEmailValid(isEmailValid);
    setAddressValid(isAddressValid);
    setDegreeOfEducationValid(isDegreeOfEducationValid);
    setCvDocumentValid(isCvDocumentValid);
    setFormValid(
      isNameValid &&
        isSurnameValid &&
        isEmailValid &&
        isAddressValid &&
        isDegreeOfEducationValid &&
        isCvDocumentValid
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cvApplication = {
      name,
      surname,
      email,
      address,
      degreeOfEducation: convertDegreeOfEducation(degreeOfEducation),
      file: cvDocument,
      latitude,
      longitude,
    };
    props.saveCvApplication(cvApplication);
  };

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
                <form
                  role="tabpanel"
                  className="tab-pane active"
                  id="home"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label>
                      Name
                      <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: formErrors.name ? "red" : "" }}
                      id="inputName"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(event) => {
                        const name = event.target.name;
                        const value = event.target.value;
                        validateField(name, value);
                        setName(value);
                      }}
                    />
                    <span style={{ color: "red" }}>{formErrors.name}</span>
                  </div>
                  <div className="form-group">
                    <label>
                      Surname <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: formErrors.surname ? "red" : "" }}
                      id="inputSurname"
                      placeholder="Surname"
                      name="surname"
                      value={surname}
                      onChange={(event) => {
                        const name = event.target.name;
                        const value = event.target.value;
                        validateField(name, value);
                        setSurname(value);
                      }}
                    />
                    <span style={{ color: "red" }}>{formErrors.surname}</span>
                  </div>
                  <div className="form-group">
                    <label>
                      Email <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      style={{ borderColor: formErrors.email ? "red" : "" }}
                      id="inputEmail"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(event) => {
                        const name = event.target.name;
                        const value = event.target.value;
                        validateField(name, value);
                        setEmail(value);
                      }}
                    />
                    <span style={{ color: "red" }}>{formErrors.email}</span>
                  </div>
                  <div className="form-group">
                    <label>
                      Address <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: formErrors.address ? "red" : "" }}
                      id="inputAddress"
                      placeholder="Address"
                      name="address"
                      value={address}
                      onChange={(event) => {
                        const name = event.target.name;
                        const value = event.target.value;
                        validateField(name, value);
                        setAddress(value);
                      }}
                    />
                    <span style={{ color: "red" }}>{formErrors.address}</span>
                  </div>
                  <div className="form-group">
                    <label>
                      Degree of education <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="8"
                      className="form-control"
                      style={{
                        borderColor: formErrors.degreeOfEducation ? "red" : "",
                      }}
                      id="inputDegreeOfEducation"
                      name="degreeOfEducation"
                      value={degreeOfEducation}
                      onChange={(event) => {
                        const name = event.target.name;
                        const value = event.target.value;
                        validateField(name, value);
                        setDegreeOfEducation(value);
                      }}
                    />
                    <span style={{ color: "red" }}>
                      {formErrors.degreeOfEducation}
                    </span>
                  </div>
                  <label>
                    CV (PDF) <em style={{ color: "red" }}>*</em>
                  </label>
                  <div className="form-group">
                    <input
                      type="file"
                      id="cvInputFile"
                      name="cvDocument"
                      // value={cvDocument}
                      onChange={(event) => {
                        const name = event.target.name;
                        const file = event.target.files[0];
                        validateField(name, file);
                        setCvDocument(file);
                      }}
                    />
                    <br />
                    <span style={{ color: "red" }}>
                      {formErrors.cvDocument}
                    </span>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-block"
                    style={{ marginTop: 25 }}
                    disabled={!formValid}
                    type="submit"
                  >
                    Confirm
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
