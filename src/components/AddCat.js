import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCat = ({setCategorias}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange=(e)=>{
        
        setinputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategorias(cats=>[inputValue,...cats]);
            setinputValue('');
        }

        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
            
        </form>
    )

   
}
AddCat.prototype = {
    setCategorias: PropTypes.func.isRequired
}
