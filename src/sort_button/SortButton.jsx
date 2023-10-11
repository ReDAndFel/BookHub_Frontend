import { useState } from 'react';
import './SortButton.css';

export default function SortButton() {

    const [selection, setSelection] = useState('Ordenar por');

    const handleChange = (e) => {
        setSelection(e.target.value);
    };
    return (
        <div className='sort_button_container'>
            <select value={selection} onChange={handleChange} name='sort' id='sort'>
                <option value='Precio Ascendente'>Precio Ascendente</option>
                <option value='Precio Descendente'>Precio Descendente</option>
                <option value='Alfabetico Ascendente'>Alfabetico Ascendente</option>
                <option value='Alfabetico Descendente'>Alfabetico Descendente</option>
            </select>
        </div>
    );
}