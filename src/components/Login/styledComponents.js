import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;

  @media screen and (max-width: 567px) {
    padding: 20px;
  }
`

export const ParagraphMsg = styled.p`
  color: red;
  font-family: 'Roboto';
`

export const LoginBox = styled.div`
  width: 27%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  border-radius: 10px;

  @media screen and (max-width: 567px) {
    width: 100%;
    padding: 10px;
  }
`

export const FormContainer = styled.form`
  width: 100%;
  margin: 50px;
  display: flex;

  flex-direction: column;

  @media screen and (max-width: 567px) {
    width: 90%;
    padding: 10px;
  }
`

export const CustomLabel = styled.label`
  padding-bottom: 10px;
  padding-top: 10px;
  color: #7e858e;
  font-weight: 400;
  font-family: 'Roboto';

  @media screen and (max-width: 567px) {
    padding-bottom: 8px;
  }
`

export const CustomInput = styled.input`
  color: #7e858e;
  margin-bottom: 10px;
  height: 35px;

  @media screen and (max-width: 567px) {
    padding-bottom: 8px;
    height: 30px;
  }
`

export const SiteLogo = styled.img`
  //   height: 32px;
  width: 151px;

  @media screen and (max-width: 567px) {
  }
`

export const CustomCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`
export const CustomCheckBoxLabel = styled.label`
  color: #1e293b;
  padding-left: 7px;
  font-family: 'Roboto';
`

export const CustomCheckBoxInput = styled.input``

export const CustomLoginButton = styled.button`
  margin-top: 20px;
  background-color: #3b82f6;
  border: none;
  padding: 10px 5px 10px 5px;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 450;
`
