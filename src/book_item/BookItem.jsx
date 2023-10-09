import './BookItem.css'

export default function BookItem ({list,setList ,image, title, price}) {
    const handleClickCheck = (e) => { 
        const {value,checked} = e.target        
        if (checked) {
            setList([...list, value]);
        } else {
            const newArray = list.filter((item) => item !== value);
            setList(newArray);
        }        
    };
   
    return(
        <div className='book_item_container'>
            <input id='checkbox_nook_item' type="checkbox" className='check_book_item' value={title} onChange={handleClickCheck}/>
            <img className='img_book_item' src={image} alt={`${title}_portada`} />
            <div className='info_book_item'>
                <span>{title}</span>
                <span className='text_info_book_item'>$ {price}</span>
            </div>
        </div>
    );
}