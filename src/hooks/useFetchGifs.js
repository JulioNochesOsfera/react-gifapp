import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = ({ categorias }) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        getGif(categorias).then(img => {
            setstate({
                data: img,
                loading: false
            });
        });

    }, [categorias]);
    /*  */
    return state;
}


