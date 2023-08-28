import React, { Component } from "react";
import "./AddInfo.css";

class AddInfo extends Component {
  state = {
    name: "",
    age: "",
    contact: "",
    email: "",
    error: {
      nameError: "",
      ageError: "",
      emailError: "",
      contactError: "",
    },
    formValid: false,
  };

  //   e -> event object
  handleChange = (e) => {
    console.log(e);
    console.log(e.target); //return html element(input)
    console.log(e.target.id);
    console.log(e.target.value);

    if (e.target.id == "name") {
      // this is referring to AddInfo
      this.validateName(e.target.value);
    }
    if (e.target.id == "age") {
      this.validateAge(e.target.value);
    }
    if (e.target.id == "contact") {
      this.validateContact(e.target.value);
    }
    if (e.target.id == "email") {
      this.validateEmail(e.target.value);
    }

    // this.setState({
    //   [e.target.id]: e.target.value,
    // });
  };

  validateName = (name) => {
    let formValid = this.state.formValid;
    let nameError = this.state.error.nameError;

    if (name.trim() === "") {
      formValid = false;
      nameError = "This is required";
    } else if (name.trim().length <= 3) {
      formValid = false;
      nameError = "Please enter valid name";
    } else {
      formValid = true;
      nameError = "";
    }

    this.setState({
      formValid,
      name,
      error: { ...this.state.error, nameError },
    });

    return formValid;
  };

  validateAge = (age) => {
    let formValid = this.state.formValid;
    let ageError = this.state.error.ageError;

    if (age.trim() === "") {
      formValid = false;
      ageError = "This is required";
    } else if (age.trim().length > 3) {
      formValid = false;
      ageError = "Please enter valid age";
    } else {
      formValid = true;
      ageError = "";
    }

    this.setState({
      age,
      formValid,
      error: { ...this.state.error, ageError },
    });

    return formValid;
  };

  validateContact = (contact) => {
    let formValid = this.state.formValid;
    let contactError = this.state.error.contactError;

    if (contact.trim() === "") {
      formValid = false;
      contactError = "This is required";
    } else if (contact.trim().length != 10) {
      formValid = false;
      contactError = "Please enter valid contact";
    } else {
      formValid = true;
      contactError = "";
    }

    this.setState({
      contact,
      formValid,
      error: { ...this.state.error, contactError },
    });

    return formValid;
  };

  validateEmail = (email) => {
    let formValid = this.state.formValid;
    let emailError = this.state.error.emailError;
    let emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (!emailPattern.test(email)) {
      formValid = false;
      emailError = "Please enter valid email";
    } else {
      formValid = true;
      emailError = "";
    }

    this.setState({
      email,
      error: { ...this.state.error, emailError },
      formValid,
    });

    return formValid;
  };

  handleSubmit = (e) => {
    //preventing default behavior of submit, to refresh the webpage
    e.preventDefault();

    if (
      this.validateName(this.state.name) &&
      this.validateAge(this.state.age) &&
      this.validateContact(this.state.contact) &&
      this.validateEmail(this.state.email)
    ) {
      alert("form is validated");
      this.props.addData(this.state);

      this.setState({
        name: "",
        age: "",
        contact: "",
        email: "",
        formValid: false,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter Name</label>
        <input
          id="name"
          placeholder="Please enter name"
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <p
          style={{ color: "red", backgroundColor: "yellow", fontSize: "20px" }}
        >
          {this.state.error.nameError}
        </p>

        <label>Enter Age</label>
        <input
          id="age"
          placeholder="Please enter age"
          type="text"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <p className="error-message">{this.state.error.ageError}</p>

        <label>Enter Contact</label>
        <input
          id="contact"
          placeholder="Please enter contact"
          type="text"
          onChange={this.handleChange}
          value={this.state.contact}
        />
        <p className="error-message">{this.state.error.contactError}</p>

        <label>Enter Email</label>
        <input
          id="email"
          placeholder="Please enter email"
          type="text"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <p id="error">{this.state.error.emailError}</p>

        <button>Submit</button>
      </form>
    );
  }
}

export default AddInfo;

// in js
// var name = document.getElementById('name').value;
//var age = document.getElementById('age').value

// in html
// <p style="color: red; background-color: yellow; font-size: 20px">Hello</p>
{
  /* <p class="error-message"></p> */
}
