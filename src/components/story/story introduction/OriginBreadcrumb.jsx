import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const OriginBreadcrumb = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-2.5 items-center'>
        <Link
          className='group inline-flex items-center gap-2 text-[15px] font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4'
        >
          <FaArrowLeft
            size={15}
            className="text-primary transition-transform group-hover:-translate-x-1"
          />
          <span className='font-bold'>Back to Explore Map</span>
        </Link>
        <span>/</span>
        <p>Giza Pyramids</p>
      </div>
      <span className='font-bold'>Stories from the landscape</span>
    </div>
  );
};

export default OriginBreadcrumb;
