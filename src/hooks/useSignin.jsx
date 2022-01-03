import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [signinError, setError] = useState(null);
  const [isSigninPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signin = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        console.error(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signin, isSigninPending, signinError };
};
