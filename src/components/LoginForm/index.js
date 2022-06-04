import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  displayFailureError = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.displayFailureError(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state

    return (
      <div className="app-login-container">
        <div className="form-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="logo-image"
            alt="website logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="image-login"
            alt="website login"
          />
          <form className="form-login" onSubmit={this.onSubmitLogin}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="logo-image-large"
              alt="website logo"
            />
            <div className="input-label-container">
              <label htmlFor="username" className="label-text">
                USERNAME
              </label>
              <input
                type="text"
                className="input-style"
                id="username"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-label-container">
              <label htmlFor="password" className="label-text">
                PASSWORD
              </label>
              <input
                type="password"
                className="input-style"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
              {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            </div>
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
