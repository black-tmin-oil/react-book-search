import { useHistory } from "react-router-dom";
import "./BookCart.css";

export default function BookCart(props) {
    const history = useHistory();
    const bookDetails = (id) => {
        history.push({
            pathname: `/details/${props.id}`,
            state: id

        });
      };
      
    return(
        <div className='cartContainer' onClick={() => bookDetails(props.id)}>
            <div className='imageWrapper'>
                <img src={props.img} alt=""/>
            </div>
          
            <div className='categories'>{props.categories}</div>
            {props.title}
            <div className='authors'>{props.authors}</div>
        </div> 

    
    )
}

