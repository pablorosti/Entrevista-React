import React, {useContext} from 'react';
import {postings} from '../db/mockedPostings';

//creamos el context
const Context = React.createContext();

//creamos un hook para consumir los datos desde cualquier parte de la app
const useDB = () => {
    return useContext(Context);
}

const Provider = ({children}) => {
    
    return(
        <Context.Provider value={{postings}}>
            {children}  
        </Context.Provider>
    )

}

export {Provider, useDB}