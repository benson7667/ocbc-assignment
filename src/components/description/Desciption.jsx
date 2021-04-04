import './description.css'

const Description = () => {
    return (
        <div className='description-container'>
            <h5 className='spacing'>Valid Command</h5>
            <ul className='monostyle'>
                <li>{'login <username>'}</li>
                <li>{'topup <amount>'}</li>
                <li>{'pay <client_username> <amount>'}</li>
            </ul>

            <h5 className='spacing'>Assumption</h5>
            <ul className='monostyle'>
                <li>{'amount should not contain decimal value'}</li>
                <li>{'case sensitive for all valid command'}</li>
                <li>{'no extra whitespace'}</li>
            </ul>
        </div>
    )
}

export default Description