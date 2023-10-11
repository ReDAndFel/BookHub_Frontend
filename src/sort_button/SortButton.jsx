import { useState } from 'react';
import './SortButton.css';

export default function SortButton({ listFilter, setListFilter }) {

    const [selection, setSelection] = useState('Ordenar por');

    const handleChange = (e) => {
        setSelection(e.target.value);
        sortBy(selection)
    };

    const sortBy = (selection) => {
        if (selection === 'Precio Ascendente') {
            const newList = [...listFilter].sort((a, b) => a.price - b.price);
            setListFilter(newList);
        }
        if (selection === 'Precio Descendente') {
            const newList = [...listFilter].sort((a, b) => b.price - a.price);
            setListFilter(newList);
        }
        if (selection === 'Alfabetico Ascendente') {
            const newList = [...listFilter].sort();
            setListFilter(newList);
        }
        if (selection === 'Alfabetico Descendente') {
            const newList = [...listFilter].sort().reverse();
            setListFilter(newList);
        }
    }

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