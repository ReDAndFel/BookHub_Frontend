import { useState } from 'react';
import './SortButton.css';

export default function SortButton({ initialList, setListInitial, getBooksByPrice }) {

    const [selection, setSelection] = useState('Ordenar por');

    const handleChange = (e) => {
        const newSelection = e.target.value;
        setSelection(newSelection);
        sortBy(newSelection);
    };

    const sortBy = async (selection) => {
        try {
            if (selection === 'Por defecto') {
                setListInitial(initialList);
            }
            if (selection === 'Menor a $10') {
                getBooksByPrice(0, 10);
            }
            if (selection === 'Menor a $20') {
                getBooksByPrice(0, 20);
            }
            if (selection === 'Menor a $50') {
                getBooksByPrice(0, 50);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div className='sort_button_container'>
            <select value={selection} onChange={handleChange} name='sort' id='sort'>
                <option value='Por defecto'>Por defecto</option>
                <option value='Menor a $10'>Menor a $10</option>
                <option value='Menor a $20'>Menor a $20</option>
                <option value='Menor a $50'>Menor a $50</option>
            </select>
        </div>
    );
}