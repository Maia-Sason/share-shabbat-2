import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "~/components/Layout";
import AuthComponent from "../src/components/firebaseComponents/AuthComponent";
import useAuth from "../src/hooks/useAuth";

const Login = () => {
  const { isSignedIn, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isSignedIn) router.push("/account");
  }, [isSignedIn, router]);

  if (loading)
    return (
      <>
        <div>loading</div>
      </>
    );
  if (!isSignedIn)
    return (
      <>
        login page
        <AuthComponent />
      </>
    );
};

export default Login;
