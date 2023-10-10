import './CardBook.css'
export default function CardBook({key, image, title, price}) {
    return (
        <div className="cardbook_container">
            <div className="cardbook_image_container">
                <img className='cardbook_image' src={image} alt={`portada_${title}`} />
            </div>
            <div className="cardbook_text">
                <span className='cardbook_title'>{title}</span>
                {price && <span className='cardbook_price'>$ {price}</span>}
            </div>
        </div>
    );
};