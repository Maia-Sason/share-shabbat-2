import ProtectedRoute from "~/components/firebaseComponents/ProtectedRoute";
import useAuth from "~/hooks/useAuth";

const AccountPage = () => {
  return (
    <ProtectedRoute>
      <div>hello</div>
    </ProtectedRoute>
  );
};

export default AccountPage;
