import { useSelector } from 'react-redux'

import BookCart from "../BookCart/BookCart"
import Pagination from "../utils/Pagination/Pagination";
import Loader from '../utils/Loader/Loader'

import "./BookList.css";


const BookList = () => {

    const books = useSelector(state => state.books.items)
    
    const fetching = useSelector(state => state.books.isFetching)
    const totalItems = useSelector(state => state.books.totalItems)
    if (fetching) return <div className={'loader'}><Loader/></div>
    if (!books) return <div className='errorMessage'>some error happend, try one more time</div>


    return (
      <div className='listContainer'>
          <div className='totalItems'>
              {totalItems ? `We found ${totalItems} books` : "No books were found."}
          </div>
          <div>
              <div className='grid'>
                
                  {books.map((book) => (
                    <div key={book.id} className='bookCartWrapper'>
                    <BookCart
                      id={book.id}
                      img={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : null}
                      categories={book.volumeInfo.categories}
                    />
                    
                  </div>))}
              </div>
          </div>
          {totalItems ? <Pagination /> : null}
      </div>
  );
  }
  
export default BookList




