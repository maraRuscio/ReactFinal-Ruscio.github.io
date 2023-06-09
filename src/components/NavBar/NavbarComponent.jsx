//import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react';
//import { NavItem } from 'react-router-dom';
import NavItem from "./NavItem";
import styled from 'styled-components';
import BurguerButtonComponent from '../BurguerButton/BurguerButtonComponent';
import CartWidget from '../CartWidget/CartWidgetComponent';
import logoRuta from '../../img/logo192.jpeg'


function NavbarComponent() {

    const[clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <Navbar>
            <NavItem label={<img alt='EcoRuta' src={logoRuta} height='50px'/>} src="/" ></NavItem>
                    <div className={`links ${clicked ? 'active' :''}`}>
                        <NavItem label="Home" src="/" />
                        <NavItem src='/nosotros' label="Nosotros" />
                        {/* <NavItem src='/Servicios' label="Servicios" />
                        <NavItem src='/Clientes' label="Clientes" /> */}
                        <NavItem src='/Productos' label="Productos" />
                        <NavItem src='/category/rinon' label="Bolsas con Troquel" />
                        <NavItem src='/category/Asaflexible' label="Bolsas con Asa flexible" />
                        <NavItem src='/contactos' label="Contactos" />
                        <NavItem src='/carrito'><CartWidget/></NavItem>
                        
                    </div>
                    <div className='burguer'>
                        <BurguerButtonComponent clicked= {clicked} handleClick={handleClick} />                    
                    </div>
                    <BgDiv className = {`initial ${clicked ?'active' :''}`}></BgDiv>
            </Navbar>
        
        </>
    )
}

export default NavbarComponent

const Navbar = styled.nav`
    h2{
        color: #fff;
        font-size: 2rem;
    }
    padding: 0.4rem;
    background-color: #222;
    border: 5px solid #ff0;
    height: 70px;
    display: flex;
    aling-items: center;
    justify-content: space-between;
    
    a{
        color: #fff;
        text-decoration: none;
        margin-right: 1rem;
        font-size: 1rem;
        text-decoration: none;
    }
    .links{
        position: absolute;
        top: -700px;
        left: -1000px;
        right: 0;
        margin-left:auto;
        margin-right:auto;
        text-align: center;
        transition: all 0.5s ease;
        a{
            color: #fff;
            font-size: 2rem;
            display: block;
        }
        @media(min-width:768px){
            position: initial;
            margin:0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }

        }
    }

    .links.active{
        width: 100%;
        display:block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right:0;
        text-aling:center;
        a{
            font-size: 2rem;
            margin-top: 2rem;
            color: white;
        }
    }

    .burguer{
        @media(min-width:768px){
            display: none;
        }
    }`

    const BgDiv = styled.div`
    background-color: #333;
    position: absolute;
    top: -1000px;
    left: -2000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.6s ease;

    &.active{
        border-radius: 0 0 60% 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    `