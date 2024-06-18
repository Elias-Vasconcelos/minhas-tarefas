import FiltraCards from '../../conponents/Filtrocards'
import * as S from './styles'

const BararaLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Buscar" />
    <S.Filtros>
      <FiltraCards contador={9} descricao='Pendentes' />
      <FiltraCards contador={8} descricao='Concluidas' />
      <FiltraCards contador={7} descricao='Urgentes' />
      <FiltraCards contador={6} descricao='Secundarias' />
      <FiltraCards contador={5} descricao='Normais' />
      <FiltraCards contador={35} descricao='Todas' selecionado />
    </S.Filtros>
  </S.Aside>
)

export default BararaLateral
