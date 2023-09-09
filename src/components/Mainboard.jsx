import React, { useState } from 'react'
import { styled } from 'styled-components'
import Pin from './Pin'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { boxSizing } from '@mui/system';


function Mainboard( {pins} ) {
    const [show , setShow] = useState(false)
    // pins.urls.regular -> imgs
    const handleshow = () => {
        setShow(!show)
        
    }
  return (
    <>
    <MainboardWrapper>
        <ImageList variant='masonry'  gap={8}>
            {
                pins.map((item) => (
                    <ImageListItem key={item.id}>
                        <img src={item.urls.regular} alt={item.alt_description} style={{borderRadius:'20px'}}/>
                    </ImageListItem>
                ))
            }
        </ImageList>
    </MainboardWrapper>
    </>

  )
}


const MainboardWrapper = styled.div `
    width:90%;
    margin:0 auto;
    padding-top:80px;

    & .MuiImageList-masonry {
        column-count: 4 !important;
    }

    @media (max-width:750px) {
        & .MuiImageList-masonry {
            column-count: 3 !important;
        }
    }

    @media (max-width:500px) {
        & .MuiImageList-masonry {
            column-count: 2 !important;
        }
    }
`

const Navwrapper = styled.div `
    display:flex;
    flex-direction:column;
    gap:16px;

    a {
        background-color:black;
        width:min-content;
        padding:0.5rem 1rem;
        border-radius:30px;
        color:snow;
    }
`













export default Mainboard
