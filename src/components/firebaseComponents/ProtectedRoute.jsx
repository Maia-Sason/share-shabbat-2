import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "~/hooks/useAuth";
import Layout from "../Layout";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { isSignedIn, loading } = useAuth();
  useEffect(() => {
    if (!loading && !isSignedIn) router.push("/login");
  }, [isSignedIn, loading, router]);

  if (loading) return <div>loading</div>;

  return children;
};

export default ProtectedRoute;
