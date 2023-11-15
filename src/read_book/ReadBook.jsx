import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useBook } from '../hooks/useBook';
import Header from '../header/Header';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function ReadBook() {
    const { idBook } = useParams();
    const { token } = useAuth();
    const { getBook, book } = useBook();

    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        if (token.idUser !== '') {
            console.log('IdBook:', idBook)
            getBook(idBook);
        }
    }, []);

    useEffect(() => {
        console.log("book:", book);
        setPdfUrl(book.file.url);
    }, [book]);


    const newPlugin = defaultLayoutPlugin()

    return (
        <>
            <Header goBack goBackNavigate={`/Info_Libro/${idBook}`} />
            <div className="read_book_container">
                <div className='read_book_viewer_container'>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                        {pdfUrl && <Viewer fileUrl={pdfUrl} plugins={[newPlugin]} className="pdf-viewer" />}
                    </Worker>
                </div>
            </div>

        </>
    );
}
