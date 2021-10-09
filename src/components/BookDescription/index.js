import { useHistory } from "react-router-dom";

import './BookDescription.css'

export default function BookDetails(props) {
    const history = useHistory();
    const {book} = props
    return (
        <div>
            <div className='backButtonBlock'>
                <div className='backButton' onClick={() => history.push('/')}>Go Back</div>
            </div>
        <div className='bookDetails' >
          <div style={{padding: '100px'}} className='imgBlock'>
            <img src={book.img}></img>
          </div>
          <div>
          <p className='categories'>{book.categories}</p>
          <h2>{book.title}</h2>
          <p className='authors'>{book.authors ? book.authors.join(',') : null}</p>
          <p>{book.description}</p>
          </div>
      </div>
      
      </div>
    )
}