import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/HeaderContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { SignInForm } from "../components";
import { FirebaseContext } from "../context/firebase-context";
import * as ROUTES from "../constants/routes";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { db } = useContext(FirebaseContext);
  const history = useHistory();

  const invalidInfo = firstName === "" || account === "" || password === "";

  const signUpHandler = (e) => {
    e.preventDefault();

    // firebase sign up
    db.auth()
      .createUserWithEmailAndPassword(account, password)
      .then((userCredential) => {
        setError("");
        userCredential.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <SignInForm>
          <SignInForm.Base>
            <SignInForm.Title>Sign up</SignInForm.Title>
            {error !== "" && <SignInForm.Error>{error}</SignInForm.Error>}
            <SignInForm.Form method="POST" onSubmit={signUpHandler}>
              <SignInForm.Input
                type="text"
                placeholder="First name"
                value={firstName}
                autoComplete="name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <SignInForm.Input
                type="text"
                placeholder="Email or phone number"
                value={account}
                autoComplete="email"
                onChange={(e) => setAccount(e.target.value)}
                required
              />
              <SignInForm.Input
                type="password"
                placeholder="Password"
                value={password}
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <SignInForm.Submit
                type="submit"
                autocomplete="off"
                disabled={invalidInfo}
              >
                Sign up
              </SignInForm.Submit>
            </SignInForm.Form>
            <SignInForm.Text>
              <span>Already a user? </span>
              <SignInForm.Link to="/signin">Sign in now.</SignInForm.Link>
            </SignInForm.Text>
            <SignInForm.TextSmall>
              This This page is protected by Google reCAPTCHA to ensure you're
              not a bot. Learn more.
            </SignInForm.TextSmall>
          </SignInForm.Base>
        </SignInForm>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;
