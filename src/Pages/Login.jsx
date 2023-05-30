import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { signInAPI } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

  const [loginRegisterActive, setLoginRegisterActive] = useState('login');
  const {user} = useSelector(state => state.userState)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  useEffect(() => {
    // console.log("user" , user)
    if(user) {
      navigate("/")
    }
  },[user, navigate])

  const handleLoginRegisterClick = (value) => {
    if (value === loginRegisterActive) {
      return;
    }
    setLoginRegisterActive(value);
  };

  const googleSignIn = () => {
    dispatch(signInAPI())
  }

  const FormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join onClick={() => handleLoginRegisterClick('register')}
            active={loginRegisterActive === 'register'}>Join now</Join>
          <SignIn onClick={() => handleLoginRegisterClick('login')}
            active={loginRegisterActive === 'login'}>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <h1>
          <span className='border p-2 rounded-3 bg-light'> Welcome to your proffessional community </span>
        </h1>
        <div className='d-flex align-items-center justify-content-around mt-2'>

          <div className='col-10 col-md-5'>
            <MDBTabs pills justify className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleLoginRegisterClick('login')}
                  active={loginRegisterActive === 'login'}
                >
                  Login
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleLoginRegisterClick('register')}
                  active={loginRegisterActive === 'register'}
                >
                  Register
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={loginRegisterActive === 'login'}>
                <form onSubmit={FormSubmit}>
                  <div className='text-center mb-3'>
                    <p>Sign in with:</p>

                    <MDBBtn floating color="secondary" className='mx-1' onClick={googleSignIn}>
                      <MDBIcon fab icon='google' />
                    </MDBBtn>

                  </div>

                  <p className='text-center'>or:</p>

                  <MDBInput className='mb-4' type='email' id='form7Example1' label='Email address' name='email'  />
                  <MDBInput className='mb-4' type='password' id='form7Example2' label='Password' name='password' />

                  {/* <MDBRow className='mb-4'>
                    <MDBCol className='d-flex justify-content-center'>
                      <MDBCheckbox id='form7Example3' label='Remember me' defaultChecked />
                    </MDBCol>
                    <MDBCol>
                      <a href='#!'>Forgot password?</a>
                    </MDBCol>
                  </MDBRow> */}

                  <MDBBtn type='submit' className='mb-4' block>
                    Sign in
                  </MDBBtn>

                  <div className='text-center'>
                    <p>
                      Not a member? <MDBTabsLink
                        onClick={() => handleLoginRegisterClick('register')}
                        active={loginRegisterActive === 'register'}
                      >
                        Register
                      </MDBTabsLink>
                    </p>
                  </div>
                </form>
              </MDBTabsPane>
              <MDBTabsPane show={loginRegisterActive === 'register'}>
                <form onSubmit={FormSubmit}>
                  <div className='text-center mb-3'>
                    <p>Sign up with:</p>

                    <MDBBtn floating color="secondary" className='mx-1' onClick={googleSignIn}>
                      <MDBIcon fab icon='google' />
                    </MDBBtn>

                  </div>

                  <p className='text-center'>or:</p>

                  <MDBInput className='mb-4' id='form8Example1' label='Name' />
                  <MDBInput className='mb-4' id='form8Example2' label='Username' />
                  <MDBInput className='mb-4' type='email' id='form8Example3' label='Email address' />
                  <MDBInput className='mb-4' type='password' id='form8Example4' label='Password' />

                  <MDBCheckbox
                    wrapperClass='d-flex justify-content-center mb-4'
                    id='form8Example6'
                    label='I have read and agree to the terms'
                    defaultChecked
                  />

                  <MDBBtn type='submit' className='mb-4' block>
                    Sign in
                  </MDBBtn>
                </form>
              </MDBTabsPane>
            </MDBTabsContent>
          </div>

          <div className='col-10 col-md-6 img-fluid'>
            <img className='img-fluid' src="/images/login-page-img.png" alt="" />
          </div>

        </div>
      </Section>

    </Container>
  );
}


const Container = styled.div`
    padding : 0px ;
`;
const Nav = styled.nav`
  max-width: 85%;
  margin: auto;
  padding: 12px 0px 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  a {
    width: 135px;
    height: 34px;
    @media (max-width : 768px) {
      padding: 0 5px;
    }
  }
` ;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`

const SignIn = styled.a`
 box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }

`
const Section = styled.section`
  min-height: 700px;
  padding: 20px 0 0 0 ;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 85%;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    min-height: 0px;
  } 

  & > div {
    min-height: 630px;
    margin: 0px;
    @media (max-width : 768px) {
      flex-direction: column;
    }
  }

  h1{
    font-size: 40px;
    color: #8f5849;
    font-weight: 200;
    line-height: 70px;
    text-align: center;
    @media (max-width: 1200px) {
      font-size: 40px;
    }
    @media (max-width: 998px) {
      font-size: 30px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`


export default Login