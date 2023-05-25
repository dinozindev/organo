import './campo.css'

// ao refatorar o código, definimos o type do input como "text" para todos os campos, impedindo que ocorram erros. Com isso, basta alterar a prop type no campo que utilizar um input específico. 
const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className={`campo campo-${type}`}>
        <label>{label}</label>
        <input
            type={type}
            value={valor}
            onChange={evento => aoAlterado(evento.target.value)}
            required={obrigatorio}
            placeholder={placeholder}
        />
    </div>)
}

export default Campo