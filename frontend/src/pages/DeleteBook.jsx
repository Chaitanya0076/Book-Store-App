import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();
  const handleDeleteBook = ()=>{
    setLoading(true)
    axios.delete(`http://localhost:3000/${id}`)
        .then(()=>{
          setLoading(false)
          enqueueSnackbar('Book Deleted successfully',{variant:'success'})
          navigate('/')
        })
        .catch(error =>{
          setLoading(false)
          // alert('An error occured. Please check console');
          enqueueSnackbar("Error",{variant:'error'})
          console.log(error);
        })
  }
  return (
    <div className='p-4 max-md:p-2'>
      <BackButton />
      <h1 className='text-3xl my-4 max-md:text-0.5xl'>Delete Book</h1>
      {loading ? <Spinner /> :''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto max-md:p-2 max-md:w-[90%]'>
        <h3 className='text-2xl max-md:text-1xl'>Are you Sure you want to delete this book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full max-md:m-4 max-md:p-2' onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook