import PropTypes from 'prop-types';
import BooksSingleCard from './BooksSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {books.map((item) => (
        <BooksSingleCard key={item._id} book={item}/>
      ))}
    </div>
  );
};

BooksCard.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksCard;

