import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
/* import { getGif } from '../helpers/getGifs';*/
import { GifGridItem } from './GifGridItem'; 

export const GifGrid = ({ categorias }) => {
    
    const {data:imagen,loading}= useFetchGifs({categorias});

    /* const [Imagen, setImagen] = useState([]);
    useEffect(()=>{
        getGif(categorias).then(setImagen)
    },[categorias]) */

    return (
        <>
            <h3 className='animate__animated animate__zoomInUp'> {categorias} </h3>
            {loading && <p className= 'animate__animated animate__bounceIn'>Cargando....</p>}
            {<div className='card-grid'>
                {
                    imagen.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>}
        </>
    )
}
