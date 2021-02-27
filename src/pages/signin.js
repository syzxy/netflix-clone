import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/HeaderContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { SignInForm } from "../components";
import { FirebaseContext } from "../context/firebase-context";
import * as ROUTES from "../constants/routes";

const SignIn = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { db } = useContext(FirebaseContext);
  const history = useHistory();

  const invalidInfo = account === "" || password === "";

  const signInHandler = (e) => {
    e.preventDefault();

    // firebase authentication
    db.auth()
      .signInWithEmailAndPassword(account, password)
      .then(() => {
        setError("");
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
            <SignInForm.Title>Sign in</SignInForm.Title>
            {error !== "" && <SignInForm.Error>{error}</SignInForm.Error>}
            <SignInForm.Form method="POST" onSubmit={signInHandler}>
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
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <SignInForm.Submit
                type="submit"
                autocomplete="off"
                disabled={invalidInfo}
              >
                Sign in
              </SignInForm.Submit>
            </SignInForm.Form>
            <SignInForm.Text>
              <span>New to Netflix? </span>
              <SignInForm.Link to="/signup">Sign up now.</SignInForm.Link>
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

export default SignIn;
