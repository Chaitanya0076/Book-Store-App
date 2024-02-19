import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle,BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BooksSingleCard = ({book}) => {
    const [showModel, setShowModel] = useState(false);
  return (
    <div className='border relative border-gray-300 rounded-lg p-4 hover:shadow-md '>
          <h2 className='absolute top-1 right-2 px-2 py-1 bg-red-300 rounded-lg max-md:px-1'>{book.publishYear}</h2>
          <h2 className='text-sm text-gray-600'>{book._id}</h2>
          <div className='flex items-center '>
            <PiBookOpenTextLight className='text-red-500 mr-2' />
            <span>{book.title}</span>
          </div>
          <div className='flex items-center  '>
            <BiUserCircle className='text-blue-500 mr-2' />
            <span>{book.author}</span>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <BiShow className='text-2xl text-blue-800 hover:text-black cursor-pointer max-md:text-1xl'
             onClick={()=> setShowModel(true)} />
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className='text-green-600 hover:text-black' />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className='text-yellow-500 hover:text-black' />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className='text-red-600 hover:text-black' />
            </Link>
          </div>
          {
            showModel && (
                <BookModal book={book} onClose={()=> setShowModel(false)} />
            )
          }
        </div>
  )
}

BooksSingleCard.propTypes={
    book:PropTypes.array
}

export default BooksSingleCard