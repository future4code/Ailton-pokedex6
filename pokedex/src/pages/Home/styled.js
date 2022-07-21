import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    height: 160px;
    border: 1px solid black;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`
export const TextHeaderContainer = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const ImgHeader = styled.img`
    display: flex;
    margin-top: 21px;
    margin-bottom: 26px;
    width: 307px;
    height: 113px;
`

export const ButtonHeaderContainer = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonHeader = styled.button`
    background-color: #33A4F5;
    color: white;
    width: 287px;
    height: 74px;
    margin-top: 41px;
    margin-bottom: 45px;
    border-radius: 8px;
    padding: 4px 10px 2px 10px;
    cursor: pointer;
    border: none;
`
export const MainContainer = styled.main `
    display: flex;
    flex-wrap: wrap;
    background-color: #DDDDDD;
`;

export const CardPokemon = styled.div `
    width: 440px;
    height: 210px;
    border: 1px solid lightgray;
    margin: 16px auto;
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
`;

export const PokemonImg = styled.div`
> img {
    width: 125px;
}
`

export const PokemonTypes = styled.div`
display: flex;
gap: 8px;
`

export const NameAndType= styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`

export const ImageAndCapture = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`