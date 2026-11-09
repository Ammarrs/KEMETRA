import LoginHeader from "../components/login/loginHeader"
import LoginBody from './../components/login/LoginBody';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col px-2 py-3 sm:px-8 lg:px-10 font-body">
      <LoginHeader />
      <LoginBody />
    </div>
  )
}

export default Login