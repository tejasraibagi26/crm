import Auth from "../Components/Auth";
import { useParams } from "react-router-dom";

const AuthPage = () => {
  const params = useParams();

  return <Auth authType={params.authType} />;
};

export default AuthPage;
