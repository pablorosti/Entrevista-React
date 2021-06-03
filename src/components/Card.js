import React, {useState} from 'react'
import styled from 'styled-components';
import {DFlex} from '../elements/DFlex';

export const Card = ({publication, title, location, description, image, price}) => {
    
    const array = price.map((cant)=>{
        return Object.values(cant)
    })
    const arr = array[0];
    const amount = Object.values(arr[1]);
    const expenses = arr[2] == null ? null : Object.values(arr[2])

     const [clickIcon, setClickIcon] = useState(false);
     const handleIconClick = () => {
        if (!clickIcon) {
            setClickIcon(true)
        }else{
            setClickIcon(false)
        }
     }

    return (
        <>
            <Color color={publication}/>
            <ContainerCard>
                <DGrid>
                    <div>
                        <ContainerImage>
                            <Img src={image} alt="foto del anuncio" />          
                            <Publication>{publication === 'SUPERHIGHLIGHTED' ? 'Super destacado' : (publication === 'HIGHLIGHTED' ? 'Destacado' : 'Simple')}</Publication>
                            {
                                clickIcon ? <ButtonIcon isOk={clickIcon} onClick={handleIconClick}><i isOk={clickIcon} className="far fa-heart"></i></ButtonIcon> : <ButtonIcon isOk={clickIcon} onClick={handleIconClick}><i isOk={clickIcon} className="far fa-heart"></i></ButtonIcon>
                            }
                                                     
                        </ContainerImage>
                        <ContainerPrice>
                            <Price>${amount[0]} {amount[1]}</Price>
                            {
                                expenses === null ? null : <p>+ ${expenses} Expensas</p>
                            }
                            
                        </ContainerPrice>
                        
                    </div>
                    <ContainerInfo>
                        <Title>{title}</Title>
                        <Ubication>
                            {
                                location.map((loc, i) => {
                                    return <p key={i}> {loc}, </p>
                                })
                                
                            }
                        </Ubication>
                        
                        <Description>{description}</Description>
                        <DFlex>
                            <p><Icon className="fas fa-history"></Icon>Publicado hace 1 dia</p>
                            <Button>Contactar</Button>
                        </DFlex>
                    </ContainerInfo>
                    
                </DGrid>
            </ContainerCard>
        </>
    )
}

const Color = styled.div`
    border-radius:5px 5px 0 0;
    height:5px;
    ${props => {
        if (props.color === 'SIMPLE') {
            return `
            background-color: white;
            
        `}else if(props.color === 'SUPERHIGHLIGHTED'){
            return `
            background-color: violet;
            
        `}else if(props.color === 'HIGHLIGHTED'){
            return `
            background-color: green;  
        `
        }
    }}
`;
const ContainerCard = styled.div`
    width:100%;
    border-radius:0 0 5px 5px;
    background:white;
    box-shadow: 5px 5px 5px lightgray;
    margin-bottom:1rem;
`;
const DGrid = styled.div`

    @media(min-width:768px){
        display:grid;
        grid-template-columns:1fr 2fr;
    }
`;
const ContainerInfo = styled.div`
    padding:.5rem;
`;
const Title = styled.h4`
    color:rgb(0, 170, 255);
`;
const Ubication = styled.div`
    margin-top:.5rem;
    display:flex;
`;
const Icon = styled.i`
    font-size:12px;
    margin-right:.3rem;
`;
const Description = styled.p`
    font-size:13px;
    color:gray;
    margin:2rem 0;
`;
const Button = styled.button`
    background:#ff831e;
    padding:.5rem 1.5rem;
    border:none;
    color:white;
    font-weight:bold;
    border-radius:5px;
    cursor:pointer;
    outline:none;
    font-size:15px;
`;
const Img = styled.img`
    width:100%;
    height:13rem;
    
    @media(min-width:768px){
        height:12rem;
    }
`;
const ContainerImage = styled.div`
    position:relative;
`;
const Publication = styled.p`
    position:absolute;
    top:.5rem;
    left:.5rem;
    color:white;
    font-weight:bold;
    font-size:1rem;
    
`;
const ButtonIcon = styled.button`
    background: ${p => p.isOk ? 'red' : 'white'};
    position:absolute;
    top:.5rem;
    right:.5rem;
    border:none;
    border-radius:50%;
    padding:.5rem;
    outline:none;
    cursor:pointer;

    & > i{
        font-size:1.2rem;
        color: ${p => p.isOk ? 'white' : 'black'};
    }
`;
const ContainerPrice = styled.div`
    padding:.7rem;
`;
const Price = styled.p`
    font-weight:bold;
    font-size:1.4rem;
`;