import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { rootReducer } from '../../Store'
import { editar } from '../../Store/Tarefa'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefas = ({ descricao, prioridade, status, titulo }: Props) => {
  const estaEditando = useSelector(
    (state: rootReducer) => state.Editor.estaEditando
  )
  const Dispatch = useDispatch()
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag>{prioridade}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => Dispatch(editar())}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => Dispatch(editar())}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefas
