import React from 'react'
import { useState } from "react";
import styled from "styled-components"
import logo from "../assets/Orbitz-logo.jpg";

export default function Navbar() {
  return (
    <>
      <Nav    style={{
        backgroundColor: '#00253c',
        height:"80px"
        
      }}>
        <div className="brand">
          <div  style={{
        //backgroundColor: 'blue',
        // border:"1px solid red",
        height: '60px',
        marginLeft: '-400px', 
      }} className="container">
            <img   style={{
        //backgroundColor: 'blue',
        width: '150px',
        height: '80px',
        marginLeft: '-100px',
        padding:"5px" 
      }} src={logo} alt="" />
            
          </div>

          <div className="toggle"></div>
        </div>

        <ul>
          <li>Español</li>
          <li>List Your property</li>
          <li>Support</li>
          <li>Trips</li>
          <li>Signin</li>
        </ul>
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
