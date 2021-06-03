import React, {useState} from 'react'
import styled from 'styled-components';
import {Line} from '../elements/Line';
import {DFlex} from '../elements/DFlex';

export const FilterCard = () => {

    const [clickIcon, SetClickIcon] = useState(true);
    const [clickIcon2, SetClickIcon2] = useState(true);

    const handleClickIcon1 = () => {
        if (!clickIcon) {
            SetClickIcon(true)
        }else{
            SetClickIcon(false)
        }
    }
    const handleClickIcon2 = () => {
        if (!clickIcon2) {
            SetClickIcon2(true)
        }else{
            SetClickIcon2(false)
        }
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
                        <InputText type="text" placeholder='Buscar por dirección'/>
                        <SearchButton><IconSearch className="fas fa-search"></IconSearch></SearchButton>
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
                            <input type="radio" name='option' id='comprar' value='comprar'/>
                            <label htmlFor="comprar">Comprar</label>
                        </ContainerInputRadio>
                        <ContainerInputRadio>
                            <input type="radio" name='option'  id='alquilar' value='alquilar'/>
                            <label htmlFor="alquilar">Alquilar</label>
                        </ContainerInputRadio>
                        <ContainerInputRadio>
                            <input type="radio" name='option'  id='temporal' value='temporal'/>
                            <label htmlFor="temporal">Temporal</label>
                        </ContainerInputRadio>
                        <ContainerInputRadio>
                            <input type="radio" name='option'  id='todos' value='todos' checked/>
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
