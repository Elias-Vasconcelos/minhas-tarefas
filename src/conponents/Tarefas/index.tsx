import * as S from './styles' 

type Props = {
    titulo: string
    prioridade: string
    status: string
    descricao: string
    }
    
const Tarefas = () => (
<S.Card>
 <S.Titulo>{titulo}</S.Titulo>
 <S.Tag>{prioridade}</S.Tag>
  <S.Tag>{status}</S.Tag> 
  <S.Descricao value={descricao} />
 <S.BarraAcoes>
    { estaEditando ? (
        <>
          <S.Botao>Salvar</S.Botao>
          <S.Botao>Cancelar</S.Botao> 
        </>
    ) : (
        <>
          <S.Botao>Editar</S.Botao>
          <S.Botao>Remover</S.Botao> 
        </>
    ) }
 </S.BarraAcoes>
</S.Card>
)

export default Tarefas