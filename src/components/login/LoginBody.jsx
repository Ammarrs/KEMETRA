
import LoginInvitation from './body/LoginInvitation';
import LoginForm from './body/LoginForm';
const LoginBody = () => {
  return (
    <div>

      <main className="mx-auto grid w-full  flex-1 grid-cols-1 items-center gap-10 py-2  lg:grid-cols-2 lg:gap-16">
        <LoginInvitation />
        <LoginForm />

      </main>
      <div className="mt-auto pt-4">
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          Static account preview · Sign-in controls are not connected.
          Ambient music remains off.
        </p>
      </div>
    </div>
  )
}

export default LoginBody