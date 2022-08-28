import React from 'react'
//import { useState } from "react";
import styled from "styled-components"
import logo from "../assets/Orbitz-logo.jpg";
 //import styles from "./SignIn.module.css"
 import  "./Navbar.css"

import { Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react'

import SignIn from './SignIn';
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Nav    style={{
        backgroundColor: '#00253c',
        height:"80px",
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center'
        
      }}>
        <div className="brand">
          {/* <div  style={{
        //backgroundColor: 'blue',
        // border:"1px solid red",
        height: '60px',
        marginLeft: '-400px', 
      }} className="container"> */}
            <img   style={{
        //backgroundColor: 'blue',
        width: '150px',
        height: '80px',
        marginLeft: '-100px',
        padding:"5px" 
      }} src={logo} alt="" />
            
          </div>

        {/* </div> */}

        <div>

        <ul>
          <li>Español</li>
          <li>List Your property</li>
          <li>Support</li>
          <li>Trips</li>
        </ul>
        </div>


          <div>
              <Link to='/login'>
                <Button style={{padding:'0.5rem 1.5rem'}}>LOG IN</Button>
                </Link> 
          </div>

        
        </Nav>
    </>
  );
}
const Nav = styled.nav`

display: flex;
justify-content: center;
align-items: center;
.brand {
  .container {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.2rem;
    font-weight: 900;
    text-transform: uppercase;
  }
  .toggle {
    display: none;
  }
}
ul {

  display: flex;
  gap: 5rem;
  list-style-type: none;
  li {
    color: white;
    a {
      text-decoration: none;
      color: white;
      font-size: 1.2rem;
      transition: 0.1s ease-in-out;
      &:hover {
        color: #023e8a;
      }
    }
    &:first-of-type {
      a {
        color: #023e8a;
        font-weight: 900;
      }
    }
  }
}
Nav{
  bac
}`;
