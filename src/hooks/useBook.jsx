import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useBook = () => {
    const apiUrl = "http://localhost:8080/api/libros"
    const apiModUrl = "http://localhost:8080/api/mod"

    const bookInitial = {
        id: '',
        image: '',
        title: '',
        autor: '',
        editorial: '',
        realeaseDate: '',
        puntuation: 0,
        reviews: 0,
        price: 0,
        available: false,
        category: '',
        sinopsis: '',
        file: ''
    }

    const [book, setBook] = useState(bookInitial);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isBought, setIsBought] = useState(false);
    const [listBooks, setListBooks] = useState([]);
    const [initiaList, setInitialList] = useState([]);

    const navigate = useNavigate();

    const handleAddCart = () => {

    }

    const handleLogin = () => {
        navigate('/Login');
    }

    const handleRead = () => {

    }

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    const getBookByCategory = async (idCategory) => {
        fetch(`${apiUrl}/obtener_libros_categoria/${idCategory}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListBooks(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getFavoriteBooks = async (idUser) => {
        fetch(`${apiUrl}/obtener_libros_favoritos/${idUser}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListBooks(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getBooksByPrice = async (minPrice, maxPrice) => {
        fetch(`${apiUrl}/obtener_libros_precio/${minPrice}/${maxPrice}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListBooks(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getBooksByTitle = async (title) => {
        fetch(`${apiUrl}/obtener_libros_titulo/${title}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListBooks(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getAllBooks = async () => {
        fetch(`${apiModUrl}/obtener_libros`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListBooks(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getBookByState = async (idStateBook) => {
        fetch(`${apiModUrl}/obtener_libros_estado/${idStateBook}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListBooks(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getAllAprovedBooks = async () => { // <- Marcar la función como async
        fetch(`${apiUrl}/obtener_libros_aprobados`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListBooks(data.response)
                setInitialList(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getSharedBooks = async (idUser) => {
        fetch(`${apiUrl}/obtener_libros_compartidos/${idUser}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListBooks(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getBooksByUser = async (idUser) => {
        fetch(`${apiUrl}/obtener_libros_usuario/${idUser}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListBooks(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }
    const getLibrary = async (idUser) => {
        fetch(`${apiUrl}/libreria/${idUser}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setListBooks(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getBoughtState = (idBook) => {
        let state = false //funcion de obtener el estado de compra del libro
        setIsBought(state);
    }
    const getFavoriteState = (idBook) => {
        let state = false //funcion de obtener el estado de favorito de un libro
        setIsFavorite(state);
    }


    const handleChangeBook = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    }

    const handleChangeAvailable = () => {
        console.log(book)
    }

    const getBook = (idBook) => {
        console.log(`El id del book es ${idBook}`)
        fetch(`${apiUrl}/obtener/${idBook}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setBook(data.response)
                getBoughtState(idBook)
                getFavoriteState(idBook);
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    return { book, listBooks, initiaList,getAllAprovedBooks, setListBooks, getBooksByUser, getLibrary, getAllBooks, getSharedBooks, getBooksByTitle, getBookByState, getBooksByPrice, isFavorite, isBought, getFavoriteBooks, handleAddCart, handleLogin, handleRead, handleFavorite, handleChangeBook, handleChangeAvailable, getBook, getBookByCategory };
}