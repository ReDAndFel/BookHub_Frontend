import './BookItem.css'

export default function BookItem({ list, setList,book,checkBox }) {
    const handleClickCheck = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setList([...list, value]);
        } else {
            const newArray = list.filter((item) => item !== value);
            setList(newArray);
        }
    };

    return (
        <div className='book_item_container'>
            { checkBox && <input id='checkbox_nook_item' type="checkbox" className='check_book_item' value={book.id} onChange={handleClickCheck} />
            }            <img className='img_book_item' src={book.image.url} alt={`${book.title}_portada`} />
            <div className='info_book_item'>
                <span>{book.title}</span>
                <span className='text_info_book_item'>$ {book.price}</span>
            </div>
        </div>
    );
}