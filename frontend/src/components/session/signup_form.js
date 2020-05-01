import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history)
      .then((res) => {
        if (!res.errors) {
          this.props.closeModal()
        }
      })
  }

  render() {
    return (
      <section className="primary">
        <form className="signup" onSubmit={this.handleSubmit}>
          <h1 className="signup-heading">Create Account</h1>
          {/* <div className="signup-form"> */}
            <br />
            <input
              className="input-field"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              className="input-field"
              type="text"
              value={this.state.handle}
              onChange={this.update("handle")}
              placeholder="Handle"
            />
            <br />
            <input
              className="input-field"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input
              className="input-field"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <br />
            <input className="form-button" type="submit" value="Submit" />
            {/* {this.renderErrors()} */}
          {/* </div> */}
        </form>
      </section>
    );
  }
}

export default withRouter(SignupForm);