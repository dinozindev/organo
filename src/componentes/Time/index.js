import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'

// com a utilização do pacote hexToRgba, descartamos a necessidade de utilizar uma cor secundária, já que através do mesmo, é possível utilizar a cor definida no input e reduzir a sua opacidade, deixando o card com a cor selecionada, e o fundo com a mesma cor, porém com uma opacidade reduzida. 
const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.4') }}>
            <input onChange={e => mudarCor(e.target.value, time.id)} type="color" className="input-cor" value={time.cor} />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador
                            key={indice}
                            colaborador={colaborador}
                            corDeFundo={time.cor}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time