import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="row">
        <div className="col-6">
          <label>Company name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Company name"
          /> </div>
        <div className="col-6">
          <label>Zip Code</label>
          <input
            type="text"
            className="form-control"
            placeholder="Zip Code"
          />
        </div>
        </div>
          <div className="row">
          <div className="col-6">
            <label>Address Line 1</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address Line 1"
            />
          </div>
          <div className="col-6">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
          />
        </div>
        </div>
          <div className="row">
          <div className="col-6">
            <label>Address Line 2</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address Line 2"
            />
          </div>
          <div className="col-6">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        </div>
          <div className="row">
          <div className="col-6">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            placeholder="City"
          />
        </div>
        <div className="col-6">
          <label>Last name</label>
          <input type="text" className="form-control" 
          placeholder="Last name" />
        </div>
        </div>
        <div className="row">
        <div className="col-6">
          <label>Country</label>
          <input
            type="text"
            className="form-control"
            placeholder="Country"
          />
        </div>
        <div className="col-6">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        </div>
        <div className="row">
        <div className="col-6">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            placeholder="State"
          />
        </div>
        <div className="col-6">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        </div>
        <div className="d-grid">
        <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}