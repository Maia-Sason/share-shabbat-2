import { auth, uiConfig } from "../../../firebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
const AuthComponent = () => {
  // Configure FirebaseUI.
  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
};

export default AuthComponent;
