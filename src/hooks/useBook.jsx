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
    const [favoriteList, setFavoriteList] = useState([]);
    const [library, setLibrary] = useState([]);
    const [initiaList, setInitialList] = useState([]);

    const navigate = useNavigate();

    const handleAddBook = async (form) => {
        try {
            const response = await fetch(`${apiUrl}/agregar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }

    }

    const handleDeletePaymentMethod = async (idBook) => {
        try {
            const response = await fetch(`${apiUrl}/eliminar/${idBook}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setListBooks((prevList) => prevList.filter((book) => book.id !== idBook));

        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }
    }

    const handleUpdateBook = async (idBook, updatedBook) => {
        try {
            const response = await fetch(`${apiUrl}/actualizar/${idBook}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBook),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error('Error en la solicitud http:', error);
        }
    }

    const handleAddCart = () => {

    }

    const handleLogin = () => {
        navigate('/Login');
    }

    const handleRead = () => {

    }

    const handleFavorite = async (idUser, idBook) => {
        if (isFavorite) {
            try {
                const response = await fetch(`${apiUrl}/quitar_libro_favorito/${idUser}/${idBook}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error en la solicitud http:', error);
            }
        }else{
            try {
                const response = await fetch(`${apiUrl}/agregar_libro_favorito/${idUser}/${idBook}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error en la solicitud http:', error);
            }
        }     

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
                setFavoriteList(data.response)
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
                setLibrary(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    const getBoughtState = async (idBook) => {
        const state = library.some(book => book.id.toString() === idBook.toString());
        setIsBought(state);
    }
    const getFavoriteState = async (idBook) => {
        const state = favoriteList.some(book => book.id.toString() === idBook.toString());
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
                console.log(data.response)
                setBook(data.response)
            })
            .catch(error => {
                console.error('Error en la solicitud http:', error);
            });
    }

    return { book, listBooks, initiaList, getBoughtState, getFavoriteState, getAllAprovedBooks, setListBooks, getBooksByUser, getLibrary, getAllBooks, getSharedBooks, getBooksByTitle, getBookByState, getBooksByPrice, isFavorite, isBought, getFavoriteBooks, handleAddCart, handleLogin, handleRead, handleFavorite, handleChangeBook, handleChangeAvailable, getBook, getBookByCategory, library, favoriteList };
}