import { useSelector} from 'react-redux';
import {useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import BookDetails from '../components/BookDescription'


export default function BookDescription() {
  
  const history = useHistory();
          
  const location = useLocation();
  const id = location.state;

  if(!id) {
    history.push('/')

  }

  const [book, setBook] = useState({
    title: '',
    description: '',
    img: '',
    authors: [],
    categories: []

  })

  const b = useSelector(state => state.books.items)
  useEffect(() => {
    const bookInStore = b.find(e => e.id === id)
        if (bookInStore) {
            setBook(prevState => ({
              ...prevState,                      
                title: bookInStore.volumeInfo.title,
                description: bookInStore.volumeInfo.description,
                img: bookInStore.volumeInfo.imageLinks.thumbnail,
                authors: bookInStore.volumeInfo.authors,
                categories: bookInStore.volumeInfo.categories
          }));
          
        }
  }, [])


  return (
      <BookDetails book={book} />
  )


}