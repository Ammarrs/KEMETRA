
import LoginInvitation from './body/LoginInvitation';
import ForgotPasswordForm from './ForgotPasswordForm';
const ForgotPasswordBody = () => {
  return (
    <div>

      <main className="mx-auto grid w-full  flex-1 grid-cols-1 items-center gap-10 py-2  lg:grid-cols-2 lg:gap-16">
        <LoginInvitation />
        <ForgotPasswordForm />
      </main>

    </div>
  )
}

export default ForgotPasswordBody