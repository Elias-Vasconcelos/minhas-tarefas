import * as S from './styles'

export type Props = {
  selecionado?: boolean
}

const FiltraCards = (props: Props) => (
  <S.Card selecionado={props.selecionado}>
    <S.Contador>3</S.Contador>
    <S.Label>Pendentes</S.Label>
  </S.Card>
)

export default FiltraCards
