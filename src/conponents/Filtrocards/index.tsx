import * as S from './styles'

export type Props = {
  selecionado?: boolean
  contador: number
  descricao: string
}

const FiltraCards = ({ contador, descricao, selecionado}: Props) => (
  <S.Card selecionado={selecionado}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{descricao}</S.Label>
  </S.Card>
)

export default FiltraCards
