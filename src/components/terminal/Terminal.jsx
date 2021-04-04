import { useState } from 'react';
import { login, topup, pay } from '../../utils/operations'
import { getLoginClientUID, getClientUidByUsername } from '../../utils/client'
import { getTargetOperation } from '../../utils/helper'
import storage from '../../utils/storage'
import { Button } from '../../components'
import './terminal.css'

const Terminal = () => {
    const [command, setCommand] = useState('')
    const [outputArr, setOutputArr] = useState([])

    const appendOutput = (outputMsg) => {
        const lastCommand = trimCommand(command)
        const html = (
            <div>
                <strong>{'> ' + lastCommand}</strong>
                <p style={{ margin: 0 }}>{outputMsg}</p>
            </div>
        )

        setOutputArr([html, ...outputArr])
    }

    const trimCommand = (command) => {
        return command.trim()
    }

    const handleResetData = () => {
        storage.initializeData()
        setOutputArr([])
    }

    const handleCommand = (e) => {
        e.preventDefault()

        const trimmedCommand = trimCommand(command)
        if (trimmedCommand === '') return

        const operationName = getTargetOperation(trimmedCommand)
        const splittedCommand = trimmedCommand.split(' ')

        switch (operationName) {
            case 'LOGIN': {
                const username = splittedCommand[1]
                return login(username).then(output => {
                    appendOutput(output)
                    setCommand('')
                })
            }

            case 'TOP_UP': {
                const uid = getLoginClientUID()
                const topUpAmount = Number(splittedCommand[1])
                return topup(uid, topUpAmount).then(output => {
                    appendOutput(output)
                    setCommand('')
                })
            }

            case 'PAYMENT': {
                const senderUID = getLoginClientUID()
                const recipientUID = getClientUidByUsername(splittedCommand[1])
                const paymentAmount = Number(splittedCommand[2])
                return pay(senderUID, recipientUID, paymentAmount).then(output => {
                    appendOutput(output)
                    setCommand('')
                })

            }

            default: {
                setOutputArr(['Invalid Command.\nPlease ensure no extra whitespace, no decimal places, unexpected symbol or casing', ...outputArr])
                setCommand('')
                return
            }
        }
    }

    const renderOutputMsg = () => {
        return outputArr.map((output, index) => <li className='list-output-item' key={index}>{output}</li>)
    }

    return (
        <div>
            <form onSubmit={handleCommand}>
                <input onChange={e => setCommand(e.target.value)} value={command} className='terminal-command' placeholder='> Enter your command' />
            </form>

            <div className='terminal-body'>
                <ul className='list-output'>
                    {renderOutputMsg()}
                </ul>
            </div>

            <Button name='Reset Data' block onClick={handleResetData} />
        </div>
    )
}

export default Terminal