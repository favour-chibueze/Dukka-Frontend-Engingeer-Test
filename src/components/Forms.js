import React from 'react';
import '../assets/styles/main.scss'
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router';


class EmployeesProfile extends React.Component {
    constructor () {
        super();
        this.state = {
            fields: {},
            errors: {},
            people: [],
            redirect: false
          }
          this.handleChange = this.handleChange.bind(this);
          this.submitEmployeesForm = this.submitEmployeesForm.bind(this);
        };
        componentDidMount() {
          let profiles = JSON.parse(localStorage.getItem("profile"))
            this.setState({
                people : profiles
            })
        }
        handleChange(e) {
            let fields = this.state.fields;
            fields[e.target.name] = e.target.value;
            this.setState({
              fields
            });
       }
      
       submitEmployeesForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let person = this.state.fields;
            person["id"] = uuidv4();
            let people = JSON.parse(JSON.stringify(this.state.people)) || []
            people.push(person)

            this.setState({
                people,
                redirect: true
            }, () => {
              localStorage.setItem("profile", JSON.stringify(this.state.people))
            })
        }

      }
  
      validateForm() {  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["fullName"]) {
          formIsValid = false;
          errors["fullName"] = "*Please enter your fullName.";
        }
  
        if (typeof fields["fullName"] !== "undefined") {
          if (!fields["fullName"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["fullName"] = "*Please enter alphabet characters only.";
          }
        }
  
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter your Email.";
        }
  
        if (typeof fields["email"] !== "undefined") {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "*Please enter valid Email.";
          }
        }
  
        if (!fields["phoneNumber"]) {
          formIsValid = false;
          errors["phoneNumber"] = "*Please enter your Phonenumber.";
        }
  
        if (typeof fields["phoneNumber"] !== "undefined") {
          if (!fields["phoneNumber"].match(/^[0-9]{11}$/)) {
            formIsValid = false;
            errors["phoneNumber"] = "*Please enter valid Phonenumber.";
          }
        }
  
        if (!fields["position"]) {
          formIsValid = false;
          errors["position"] = "*Please enter Position.";
        }
        
        if (!fields["salary"]) {
            formIsValid = false;
            errors["salary"] = "*Please enter Salary.";
          }
        this.setState({
          errors: errors
        });
        return formIsValid;
      }


  
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/profiles'/>;
          }
      return (
          <div>
              <form className="form-container" onSubmit={this.submitEmployeesForm}>
                  <div className="form-group">
                        <h1>CREATE EMPLOYEE PROFILE </h1>
                        <div className="form-field">
                            <label className="labels" htmlFor="full-name">Full Name * </label>
                            <input type="text" name="fullName"  defaultValue="" id="full-name" value={this.state.fields.fullName} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.fullName}</div>
                        </div>

                        <div className="form-field">
                            <label className="labels" htmlFor="phonenumber">Phonenumber * </label>
                            <input type="text" name="phoneNumber" id="phonenumber" value={this.state.fields.phoneNumber} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.phoneNumber}</div>
                        </div>
                        
                        <div className="form-field">
                            <label className="labels" htmlFor="email">Email * </label>
                            <input type="email" name="email" id="email" value={this.state.fields.email} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.email}</div>
                        </div>
                        
                        <div className="form-field">
                            <label className="labels" htmlFor="position">Position * </label>
                            <input type="text" name="position" id="position" value={this.state.fields.position} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.position}</div>
                        </div>
                        
                        <div className="form-field">
                            <label className="labels" htmlFor="salary">Salary * </label>
                            <input type="text" name="salary" id="salary" value={this.state.fields.salary} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.salary}</div>
                        </div>
                        
                        <div className="form-btn">
                            <button type="submit" className="btn">Save</button>
                        </div>
                  </div>
              </form>
          </div>
      );
    }
  }



  export default EmployeesProfile;