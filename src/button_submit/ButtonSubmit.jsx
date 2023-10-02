import './Button.css'

export default function ButtonSubmit ({children}){
    return(
        <input className='button_container' type='submit' value={children} />
    );

}