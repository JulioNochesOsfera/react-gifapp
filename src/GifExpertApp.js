import React, { useState } from 'react';
import { AddCat } from './components/AddCat';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One punch']);
    return (
        <>

            <h2> GifExpertApp</h2>
            <AddCat setCategorias={setCategorias} />
            <hr />
            <ol>
                {
                    categorias.map(categorias => (
                        <GifGrid
                            key={categorias}
                            categorias={categorias}
                        />
                    ))
                }

            </ol>

        </>
    )
}




export default GifExpertApp;