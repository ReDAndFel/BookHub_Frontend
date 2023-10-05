import './Button.css';

export default function Button({children, handlerClick}){
    return(
     <div className='button' onClick={() => handlerClick()}>
       {children}
    </div>
    );
}
