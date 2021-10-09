import { 
  FETCH_BOOKS_SUCCESS, 
  FETCH_BOOKS_ERROR, 
  FETCHING_BOOKS, 
  FETCH_NEW_PAGE,
  FETCH_NEW_PAGE_ERROR,
  FETCH_NEW_PAGE_SUCCESS,
   } from '../actions/booksActions';

const INITIAL_STATE = {
  items: [],
  totalItems: null,
  isFetching: false,
  lastSearchQuery: null,
  maxResults: 30,
  filterValue: 'all',
  sortValue: 'relevance',
  error: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case FETCH_NEW_PAGE:
      return {...state, isFetching: true}

    case FETCH_NEW_PAGE_SUCCESS:
      let newPages = action.payload.data.items
      return {...state, 
        isFetching: false, 
        items: [...state.items.concat(newPages)], 
      }


    case FETCH_NEW_PAGE_ERROR: 
        return {...state, 
          isFetching: false
        }


    case FETCH_BOOKS_SUCCESS:
      
      return {
        ...state,
        totalItems: action.payload.data.totalItems,
        items: action.payload.data.items,
        
        error: false,
        isFetching: false
      };

    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        error: true,
        isFetching: false
      }

    case FETCHING_BOOKS:
      return {
        ...state,
        isFetching: true,
        lastSearchQuery: action.payload.searchQuery,
        maxResults: action.payload.maxResults,
        startIndex: action.payload.startIndex
      }

    default:
      return state;
  }
}
