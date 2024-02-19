import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading]= useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = ()=>{
    const data={
      title,
      author,
      publishYear,
    }
    setLoading(true);
    axios.post('http://localhost:3000/books',data)
         .then(()=>{
          setLoading(false);
          enqueueSnackbar('Book Created successfully',{variant: 'success'})
          navigate('/');
         })
         .catch((error)=>{
          setLoading(false);
          // alert('An error Occured. Please Check console');
          enqueueSnackbar('Error', {variant: 'error'})
          console.log(error);
         })
  }
  return (
    <div className="p-4 max-md:p-2">
      <BackButton />
      <h1 className="text-2xl my-4 max-md:text-0.5xl">Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto max-md:p-2 max-md:w-[90%]">
        <div className="my-4">
        <label className="text-xl mr-4 text-gray-500 max-md:mr-2">Title</label>
        <input 
        type="text"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        className="border-2 border-gray-500 px-4 py-2 w-full max-md:px-2"
        />
        </div>
        <div className="my-4">
        <label className="text-xl mr-4 text-gray-500 max-md:mr-2">Author</label>
        <input 
        type="text"
        value={author}
        onChange={(e)=> setAuthor(e.target.value)}
        className="border-2 border-gray-500 px-4 py-2 w-full max-md:px-2"
        />
        </div>
        <div className="my-4">
        <label className="text-xl mr-4 text-gray-500 max-md:mr-2">Publish Year</label>
        <input 
        type="text"
        value={publishYear}
        onChange={(e)=> setPublishYear(e.target.value)}
        className="border-2 border-gray-500 px-4 py-2 w-full max-md:px-2"
        />
        </div>
       <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBooks