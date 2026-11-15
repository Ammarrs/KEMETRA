import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const LoginHeader = () => {

  const navigate = useNavigate();
  const back = () => (window.history.state?.idx > 0) ? navigate(-1) : navigate('/');


  return (
    <header>
      <button
        onClick={back}
        className='group inline-flex items-center gap-2 text-[15px] font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4'
      >
        <FaArrowLeft
          size={15}
          className="text-primary transition-transform group-hover:-translate-x-1"
        />
        <span className='font-bold'>Back to discovery</span>
      </button>
    </header>
  )
}

export default LoginHeader