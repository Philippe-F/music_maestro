import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(user).then((res) => {
      if (!res.errors) {
        this.props.closeModal();
      } else {
        console.log("begin", res, "end");
      }
    });
  }

  handleDemo(e) {
    e.preventDefault();

    let user = {
      email: "demo@demo.com",
      password: "password",
    };
    this.props.login(user).then((res) => {
      if (!res.errors) {
        this.props.closeModal();
      } else {
        console.log("begin", res, "end");
      }
    });
  }

  // Render the session errors if there are any
  // renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {this.state.errors[error]}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <section className="primary">
        <form className="signin" onSubmit={this.handleSubmit}>
          <h1 className="signup-heading">Sign In</h1>
          <div>
            <input
              type="text"
              className="input-field"
              value={this.state.handle}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              className="input-field"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input className="form-button" type="submit" value="Submit" />
            <br />
            <br />
            <div className="center">- OR -</div>
            <br />
            <button onClick={this.handleDemo} className="form-button">
              Demo Login
            </button>
            {/* {this.renderErrors()} */}
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(LoginForm);
