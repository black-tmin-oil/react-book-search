import { useDispatch, useSelector } from 'react-redux'
import { requestNewPage } from '../../../actions/booksActions'

import './Pagination.css'

export default function Pagination() {
    const dispatch = useDispatch()
    const lastSearchQuery = useSelector(state => state.books.lastSearchQuery)
    const books = useSelector(state => state.books.items)
    const maxResults = useSelector(state => state.books.maxResults)

    const startIndex = (books.length-1) + maxResults

    const handleSubmit = () => {
        dispatch(requestNewPage(lastSearchQuery, maxResults, startIndex))
    }

    
    
    return(    
        <div className='paginationWrapper'>
            <div className='paginationButton' onClick={handleSubmit} >Load More</div>
        </div>
    )
}
  