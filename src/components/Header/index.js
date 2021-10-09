import SearchBar from './SearchBar/SearchBar'
import "./Header.css";

const Header = () => {
    return (
        <div  className='headerContainer'>
            <h1 className='title'>Google Books Search</h1>
            <SearchBar/>
        </div>
    );
};

export default Header;