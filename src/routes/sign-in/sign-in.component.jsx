import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    async function getResults() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getResults();
  }, []);

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
