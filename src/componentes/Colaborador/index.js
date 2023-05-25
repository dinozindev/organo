import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import './colaborador.css'

// quando o botão de deletar é clicado, invoca a function aoDeletar usando como parâmetro o id do colaborador que deseja ser deletado. 
const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    // function favoritar criada para ser executada apenas quando o botão for clicado, invocando a function aoFavoritar, passando como parâmetro o id do colaborador. 
    function favoritar () {
        aoFavoritar(colaborador.id)
    }
    // const propsFavorito que funciona como um objeto, que contém as propriedades dos botões de favoritar. 
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    
    return (<div className="colaborador">
        <AiFillCloseCircle
            size={25}
            className="deletar"
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            {/* caso a propriedade favorito seja true, aplica um coração vermelho. Caso contrário, aplica um coração vazio, indicando que o colaborador não foi favoritado. */}
            <div className="favoritar">
                {colaborador.favorito 
                ? <AiFillHeart {...propsFavorito} color='red' /> 
                : <AiOutlineHeart {...propsFavorito}  /> }
            </div>
        </div>
    </div>)
}

export default Colaborador