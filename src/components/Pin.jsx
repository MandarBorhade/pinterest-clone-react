import { styled } from "styled-components";

function Pin( {urls , alt_description} ) {
  return (
    <PinWrapper>
        <img src={urls.regular} alt={alt_description} />
    </PinWrapper>
  )
}

const PinWrapper = styled.div `
    padding-top:80px;
    gap:1em;

    img {
        max-width:100%;
        object-fit:contain;
        border-radius:30px;
    }
`

export default Pin;