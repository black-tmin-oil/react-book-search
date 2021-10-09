import axios from 'axios';

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const FETCHING_BOOKS = 'FETCHING_BOOKS';

export const FETCH_NEW_PAGE = "FETCH_NEW_PAGE";
export const FETCH_NEW_PAGE_SUCCESS = "FETCH_NEW_PAGE_SUCCESS";
export const FETCH_NEW_PAGE_ERROR = "FETCH_NEW_PAGE_ERROR";


const BooksActions = {
  fetchingBooks: (lastSearchQuery, maxResults, startIndex) => (
    {type: FETCHING_BOOKS, 
    payload: {searchQuery: lastSearchQuery,maxResults: maxResults,startIndex: startIndex}
    }),
  fetchBooksSuccess: (response) => ({type: FETCH_BOOKS_SUCCESS, payload: response}),
  fetchBooksError: (error) => ({type: FETCH_BOOKS_ERROR, payload: error}),
  fetchingNewPage: () => ({type: FETCH_NEW_PAGE,}),
  fetchNewPageSuccess: (response) => ({type: FETCH_NEW_PAGE_SUCCESS, payload: response}),
  fetchNewPageError: () => ({type: FETCH_NEW_PAGE_ERROR})
};


export function requestNewPage(lastSearchQuery, maxResults, startIndex) {
  return async function (dispatch) {
    dispatch(BooksActions.fetchingNewPage(lastSearchQuery, maxResults, startIndex));
    await axios.get('https://www.googleapis.com/books/v1/volumes?', {
      params:
        { q: lastSearchQuery, maxResults: maxResults, startIndex: startIndex,
          
         }
    })
    .then(response => {
      dispatch(BooksActions.fetchNewPageSuccess(response));
    })
    .catch(err => {
      dispatch(BooksActions.fetchNewPageError(err));
    })
  }
}


export function fetchBooks(lastSearchQuery, maxResults,  categories, sortingMethod, startIndex,) {
  return async function (dispatch) {
    dispatch(BooksActions.fetchingBooks(lastSearchQuery,  maxResults, categories, sortingMethod, startIndex, ));

    await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${lastSearchQuery}${categories !== "all" ? `+subject:${categories}` : ""}`, {
      params:
        { maxResults: maxResults, orderBy: sortingMethod,  startIndex: startIndex,}
    })
    .then(response => {
      dispatch(BooksActions.fetchBooksSuccess(response));
    })
    .catch(err => {
      dispatch(BooksActions.fetchBooksError(err));
    })
  }
}
