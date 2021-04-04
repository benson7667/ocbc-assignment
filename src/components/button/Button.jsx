import './button.css'

const Button = (props) => {
    const { name, onClick } = props
    return (
        <button className='app-button' onClick={onClick}>{name}</button>
    )
}

export default Button