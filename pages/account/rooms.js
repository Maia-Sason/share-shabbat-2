import ProtectedRoute from "~/components/firebaseComponents/ProtectedRoute";
import Layout from "~/components/Layout";

const RoomPage = () => {
  return (
    <>
      <ProtectedRoute>Rooms</ProtectedRoute>
    </>
  );
};

export default RoomPage;
