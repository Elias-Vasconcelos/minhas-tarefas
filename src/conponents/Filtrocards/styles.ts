import styled from 'styled-components'
import { Props } from '.'

type SubProps = Omit<Props, contador | descricao>

export const Card = styled.div<SubProps>`
  padding: 8px;
  border: 1px solid ${(props) => (props.selecionado ? '#1e90ff' : '#a1a1a1')};
  background-color: #fcfcfc;
  border-radius: 14%;
  color: ${(props) => (props.selecionado ? '#1e90ff' : '#5e5e5e')};
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
