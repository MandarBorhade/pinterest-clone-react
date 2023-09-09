import React from 'react'
import { styled } from 'styled-components'
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

function Header( { onSubmit } ) {

    const [input , setInput] = useState('')
    const [show , setShow] = useState(true)

    console.log(show)
    const styledSelect = document.getElementById('styled-select')
    const onSearchSubmit = (e) => {
        e.preventDefault();
        onSubmit(input)
    }

    const changeShow = () => {
        setShow(true)
    }


  return (
    <Wrapper>
        <PinterestIcon sx={{color:'#e60023' , fontSize:'32px' , marginLeft:'16px'}} />

            <NavButton>
                <a href="/">Home</a>
                <a href="/">Explore</a>
                <a href="/">Create</a>
            </NavButton>

        {
            show ?
            <StyledSelect id='styled-select' >
                <option value="Home">Home</option>
                <option value="Create">Create</option>
                <option value="Explore">Explore</option>
            </StyledSelect> : null
        }


        <SearchWrapper>
            <SearchBar onClick={() => setShow(false)}>
                <SearchOutlinedIcon sx={{color:'#5f5f5f'} }  />
                <form onSubmit={changeShow}>
                    <input type="text" placeholder='Search' onChange={(e) => setInput(e.target.value)} />
                    <button type='submit' style={{display:'none'}} onClick={ onSearchSubmit} ></button> 
                </form>

            </SearchBar>
        </SearchWrapper>

        <IconWrapper>
            <NotificationsIcon sx={{color:'#5f5f5f', fontSize:'24px'}}/>
        </IconWrapper>
        
        <IconWrapper>
            <ChatBubbleIcon sx={{color:'#5f5f5f', fontSize:'24px'}} />

        </IconWrapper>
    
        <IconWrapper>
            <PersonIcon sx={{color:'#5f5f5f', fontSize:'24px'}} />
        </IconWrapper>

        <IconWrapper>
            <KeyboardArrowDownIcon sx={{color:'#5f5f5f', fontSize:'24px'}} />
        </IconWrapper>
        
        
    </Wrapper>
  )
}

const Wrapper = styled.div `
    position:fixed;
    width:100%;
    height:80px;
    display:flex;
    align-items:center;
    background-color:snow;
    z-index:99;
    
`

const NavButton = styled.div `
    height:48px;
    padding:0 16px;
    margin:0 8px;
    display:flex;
    gap:24px;
    align-items:center;
    justify-content:center;
    border-radius:50px;


    a {
        color:#111111;
        font-weight:600;
    }

    &.active {
        background-color:#111111;
        a {
            color:#f9f9f9;
        }
    }

    @media all and (max-width: 600px) {
        display:none;
    }

`

const SearchWrapper = styled.div `
    flex:1;

    @media all and (max-width:600px) {
        margin-left:16px;
    }
`

const SearchBar = styled.div `
    display:flex;
    gap:8px;
    height:48px;
    align-items:center;
    background-color:#e9e9e9;
    border-radius:50px;
    padding:0 16px;

    input {
        height:100%;
        width:100%;
        background:transparent;
        border:none;
        color:#5f5f5f;
        font-size:16px;

        &:focus {
            outline:none;
        }

    }    

`



const IconWrapper = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    height:48px;
    width:48px;
    cursor:pointer;


    &:hover {
        background-color:#e9e9e9;
    }
`

const StyledSelect = styled.select `
    display:none;
    background:transparent;
    color:#111111;
    font-size:16px;
    font-weight:600;
    border:none;
    cursor:pointer;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    margin:0 16px;

    @media all and (max-width:600px) {
        display:block;

        &.hide {
            display:none
        }
    }

`


export default Header