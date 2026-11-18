
import LoginInvitation from './body/LoginInvitation';
import LoginForm from './body/LoginForm';
const LoginBody = () => {
  return (
    <div>

      <main className="mx-auto grid w-full  flex-1 grid-cols-1 items-center gap-10 py-2  lg:grid-cols-2 lg:gap-16">
        <LoginInvitation />
        <LoginForm />
      </main>
    </div>
  )
}

export default LoginBody  