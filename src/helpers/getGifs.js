export const getGif = async (categorias) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&limit=25&api_key=T4M00jhEO5pJcHJstVDUnRi2hkcgYy3Z`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs=data.map(img=>{
        return{
            id:img.id,
            tittle:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs;
}