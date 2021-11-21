import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

interface HeaderProps {
    getBooks: Function,
}

function Header({ getBooks }: HeaderProps) {
    return (
        <header className='header'>
            <div className='header__conteiner'>
                <h1 className='header__title'>Найди свою книгу</h1>
                <p className='header__subtitle'>тестовое задание</p>
                <SearchForm getBooks={getBooks} />
            </div>
        </header>
    );
}

export default Header;