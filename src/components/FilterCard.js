import React, {useState} from 'react'
import styled from 'styled-components';
import {Line} from '../elements/Line';
import {DFlex} from '../elements/DFlex';
import { useDB } from '../context/Provider';

export const FilterCard = ({setSearch, setCheckedRadio}) => {

    //Obtenemos todas las direcciones que hay en la base de datos y las guardamos en un array
    const data = useDB();
    const db = data.postings;
    
    const address = [];
    db.map((loc) => {
        return address.push({location: loc.posting_location, id: loc.posting_id});
    })
    
    //STATES    
    const [error, setError] = useState(false);
    const [clickIcon, SetClickIcon] = useState(true);
    const [clickIcon2, SetClickIcon2] = useState(true);
    const [text, setText] = useState('');

    //Cuando preciono el icono para desplegar la direccion se ejecuta la siguiente funcion
    const handleClickIcon1 = () => {
        if (!clickIcon) {
            SetClickIcon(true)
        }else{
            SetClickIcon(false)
        }
    }
    //Cuando preciono el icono para desplegar el tipo de operacion se ejecuta la siguiente funcion
    const handleClickIcon2 = () => {
        if (!clickIcon2) {
            SetClickIcon2(true)
        }else{
            SetClickIcon2(false)
        }
    }
    //Cuando preciono el boton de buscar por Direccion se ejecuta lo siguiente
    const handleSearchKeyUp = () => {
        if(text === ''){
            setError(true);
            
        }
        
        let result = searchAddressCard(address, text);
        setSearch(result)
        setError(false);

    }

    //Funcion para buscar por direccion
    const searchAddressCard = (array, txt) => {
        //Si el array que contiene las direcciones no está vacio ejecuto lo siguiente
        if (array.length !== 0) {
            const name = txt.toLowerCase();
            const match = [];
            //Recorremos el array y si contiene una letra que pasamos en el buscador entonces guardamos esa palabra en setSearch
            for(let loc of array){
                let location = loc.location.address.toLowerCase();
                if(location.includes(name) === true){
                    match.push({nombre: location, id:loc.id})
                }
            }
            return match;
        }
    }
    
    //Cuando selecciono un radio button se ejecuta la siguiente funcion
    const handleCheckedClick = e => {
        setCheckedRadio(e.target.value)
    }

    return (
        <Card>
            <h4>Filtrado actual</h4>
            <Line/>

            
            <DFlex>
                <h4>Dirección</h4>
                {
                    clickIcon ? <Icon className="fas fa-angle-up" onClick={handleClickIcon1}></Icon> : <Icon className="fas fa-angle-down" onClick={handleClickIcon1}></Icon>
                }
                
            </DFlex>
            <Br/>
            {
                clickIcon ? 
                    <DFlex>
                        <InputText 
                            error={error}
                            type="text" 
                            placeholder='Buscar por dirección'
                            value={text}
                            onChange={e => setText(e.target.value)}
                            onKeyUp={handleSearchKeyUp}
                        />
                        <SearchButton onClick={handleSearchKeyUp}><IconSearch className="fas fa-search"></IconSearch></SearchButton>
                    </DFlex>
                    : null
            }
            <Line/>


            <DFlex>
                <h4>Tipo de operación</h4>
                {
                    clickIcon2 ? <Icon className="fas fa-angle-up" onClick={handleClickIcon2}></Icon> : <Icon className="fas fa-angle-down" onClick={handleClickIcon2}></Icon>
                }
            </DFlex>
            <Br/>
            {
                clickIcon2 ? 
                    <>
                        <ContainerInputRadio>
                            <input type="radio" name='option' id='comprar' value='comprar' onChange={handleCheckedClick}/>
                            <label htmlFor="comprar">Comprar</label>
                        </ContainerInputRadio>
                        <ContainerInputRadio>
                            <input type="radio" name='option'  id='alquilar' value='alquilar' onChange={handleCheckedClick}/>
                            <label htmlFor="alquilar">Alquilar</label>
                        </ContainerInputRadio>
                        <ContainerInputRadio>
                            <input type="radio" name='option'  id='temporal' value='temporal' onChange={handleCheckedClick}/>
                            <label htmlFor="temporal">Temporal</label>
                        </ContainerInputRadio>
                        <ContainerInputRadio>
                            <input type="radio" name='option'  id='todos' value='todos' defaultChecked onChange={handleCheckedClick}/>
                            <label htmlFor="todos">Todos</label>
                        </ContainerInputRadio>
                    </>
                    : null
            }  
        </Card>
    )
}

const Card = styled.div`
    background:white;
    padding:1rem .5rem;
    border-radius:5px;
    margin-bottom:1rem;
`;
const InputText = styled.input`
    padding:.5rem;
    border:solid 1px lightgray;
    border-radius:3px;
    width:100%;
    outline:none;

    :focus{
        border-color:#f7cd81;
    }

    ${props => {
        if(props.error === true){
            return `
                border-color:red;
                :focus{
                    border-color:red;
                }
            `
        }else{
            return `
                border-color:lightgray;
                :focus{
                    border-color:#f7cd81;
                }
            `
        }
    }}
`;
const Br = styled.div`
    margin:.5rem 0;
`;
const Icon = styled.i`
    font-size:1.2rem;
    color:gray;
    cursor:pointer;
`;
const SearchButton = styled.button`
    display:block;
    background:white;
    cursor:pointer;
    padding:.5rem .6rem;
    margin-left:100px;
    margin-left:10px;
    border:solid 1px lightgray;
    border-radius:5px;
    outline:none;

    
`;
const IconSearch = styled.i`
    color:rgb(0, 170, 255);
`;
const ContainerInputRadio = styled.div`
    margin:.5rem;
    display:flex;
    align-items:center;

    & > label{
        margin-left:.7rem;
    }
`;
