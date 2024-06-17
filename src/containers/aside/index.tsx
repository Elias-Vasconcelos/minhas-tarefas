import FiltraCards from '../../conponents/Filtrocards'
import * as S from './styles'

const BararaLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Buscar" />
    <S.Filtros>
      <FiltraCards />
      <FiltraCards />
      <FiltraCards />
      <FiltraCards />
      <FiltraCards />
      <FiltraCards selecionado />
    </S.Filtros>
  </S.Aside>
)

export default BararaLateral
