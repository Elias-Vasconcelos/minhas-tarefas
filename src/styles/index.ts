import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 224px auto);
`
export default EstiloGlobal
