import { useDispatch } from 'react-redux'
import {useState} from 'react'
import { fetchBooks } from '../../../actions/booksActions'

import './SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch()

    const [state, setState] = useState({
      book: '',
      maxResults: 30,
      categories: "all",
      sortingMethod: "relevance"

    })
    
    const handleSearchInput = (e) => setState({...state,  book: e.target.value})

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(fetchBooks(state.book, state.maxResults, state.categories, state.sortingMethod))
    }

    return (
      <div className='barContainer'>
        <form>
          <div className='inputWrapper'>
              <input placeholder={"Search..."} onChange={(e) => handleSearchInput(e)}></input>
              <button onClick={(e) => handleSubmit(e)}>Go</button>
          </div>
        </form>
          <div className='selectorsWrapper'>
              <label className='labelWrapper'>Categories:</label>
                
                <select onChange={(e) => setState({...state, categories: e.target.value})}>
                  <option value="all">all</option>
                  <option value="art">art</option>
                  <option value="biography">biography</option>
                  <option value="computers">computers</option>
                  <option value="history">history</option>
                  <option value="medical">medical</option>
                  <option value="poetry">poetry</option>
                </select>
              
  
              <label className='labelWrapper'>Sort by:</label>
                
                <select onChange={(e) => setState({...state, sortingMethod: e.target.value})}>
                  <option value="relevance">relevance</option>
                  <option value="newest">newest</option>
                  </select>
              
          </div>
      </div>
  );
}