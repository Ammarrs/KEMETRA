import LoginHeader from "../components/login/LoginHeader"
import ForgotPasswordBody from './../components/login/ForgotPasswordBody';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col px-2 py-3 sm:px-8 lg:px-10 font-body">
      <LoginHeader />
      <ForgotPasswordBody />
    </div>
  )
}

export default ForgotPassword