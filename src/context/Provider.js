import React, {useContext} from 'react';
import {postings} from '../db/mockedPostings';

//we create the context
const Context = React.createContext();

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