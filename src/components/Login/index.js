// import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  FormContainer,
  CustomLabel,
  CustomInput,
  LoginContainer,
  SiteLogo,
  LoginBox,
  CustomCheckBoxContainer,
  ParagraphMsg,
  CustomCheckBoxLabel,
  CustomCheckBoxInput,
  CustomLoginButton,
} from './styledComponents'

class Login extends Component {
  state = {
    showImage: true,
    username: '',
    password: '',
    errorMsg: '',
    passwordType: 'password',
    showSubmitError: false,
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
    this.onSubmitFailure(data.error_msg)
  }

  onCheckPassword = event => {
    this.setState({passwordType: event.target.checked ? 'text' : 'password'})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {
      showImage,
      username,
      password,
      showSubmitError,
      passwordType,
      errorMsg,
    } = this.state

    const darkLightImage = showImage
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

    return (
      <LoginContainer>
        <LoginBox>
          <SiteLogo src={darkLightImage} alt="website logo" />
          <FormContainer onSubmit={this.onSubmit}>
            <CustomLabel htmlFor="username">USERNAME</CustomLabel>
            <CustomInput
              id="username"
              type="username"
              value={username}
              onChange={this.onChangeUserName}
            />
            <CustomLabel htmlFor="password">PASSWORD</CustomLabel>
            <CustomInput
              id="password"
              type={passwordType}
              value={password}
              onChange={this.onChangePassword}
            />
            <CustomCheckBoxContainer>
              <CustomCheckBoxInput
                type="checkbox"
                id="showPassword"
                onClick={this.onCheckPassword}
              />
              <CustomCheckBoxLabel htmlFor="showPassword">
                Show Password
              </CustomCheckBoxLabel>
            </CustomCheckBoxContainer>
            <CustomLoginButton type="submit">Login</CustomLoginButton>
            {showSubmitError && <ParagraphMsg>*{errorMsg}</ParagraphMsg>}
          </FormContainer>
        </LoginBox>
      </LoginContainer>
    )
  }
}

export default Login
