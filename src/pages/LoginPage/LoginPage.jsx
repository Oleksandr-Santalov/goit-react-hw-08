import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const LoginPage = () => {
  return (
    <main>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
