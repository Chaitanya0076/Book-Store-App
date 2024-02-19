import { AiOutlineClose } from "react-icons/ai"
import {PiBookOpenTextLight} from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';

const BookModal = ({book, onClose}) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={onClose}>
        <div onClick={e => e.stopPropagation()} 
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex-col relative">
            <AiOutlineClose className="absolute right-5 top-5 text-3xl text-red-600 cursor-pointer"
            onClick={onClose}/>
          <h2 className='p-2 mb-2 w-[3.2rem] bg-red-300 rounded-lg'>{book.publishYear}</h2>
          <h2 className='text-sm text-gray-600 my-1'>{book._id}</h2>
          <div className='flex items-center '>
            <PiBookOpenTextLight className='text-red-500 mr-2' />
            <span>{book.title}</span>
          </div>
          <div className='flex items-center  '>
            <BiUserCircle className='text-blue-500 mr-2' />
            <span>{book.author}</span>
          </div>
          <p className="mt-4">Anything You want to show</p>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat laboriosam? Facilis voluptate sapiente inventore, id consectetur modi, quos excepturi molestiae debitis enim mollitia voluptas minima maiores, sed possimus. Iste?
          </p>
        </div>
    </div>
  )
}

BookModal.propTypes={
    book: PropTypes.array,
    onClose: PropTypes.func
}

export default BookModal