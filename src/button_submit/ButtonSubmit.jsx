import '../button/Button.css'

export default function ButtonSubmit ({children}){
    return(
        <input className='button' type='submit' value={children} />
    );

}