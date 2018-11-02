import React, { Component } from 'react';
// import Panel from '../panel';
import RegistrationOfLegalEntity from '../registrationOfLegalEntity';
import RegistrationOfPrivatEnterpreneur from '../registrationOfPrivatEnterpreneur';

import './styles.css';

export default class Main extends Component {

    state = {
        isRegistrationOfLegalEntity: false,
        isRegistrationOfPrivatEnterpreneur: false
    }

    handleClick = isRegistrationOfLegalEntity => this.setState({ isRegistrationOfLegalEntity: !this.state.isRegistrationOfLegalEntity })

    render () {
        const { isRegistrationOfLegalEntity, isRegistrationOfPrivatEnterpreneur } = this.state;
        return (
        <div className="container">           
            <aside className="aside">
                <h1 className="title">Реєстрація бізнесу</h1> 
                <RegistrationOfLegalEntity 
                onIsRegistrationOfLegalEntity={isRegistrationOfLegalEntity}
                onButtonClick = {this.handleClick.bind(this)}/>
                <RegistrationOfPrivatEnterpreneur onIsRegistrationOfPrivatEnterpreneur={isRegistrationOfPrivatEnterpreneur} />
            </aside>
            <main className="main">
            { !this.state.isRegistrationOfLegalEntity && !this.state.isRegistrationOfPrivatEnterpreneur ?  
                <p className="main-text">В цьому розділі Ви можете сформувати всі необхідні документи для державної реєстрації юридичної 
                    особи та фізичної особи-підприємця, а також провести електронну реєстрацію ТОВ або ФОП</p> :
                    ''
            }
            </main>
        </div>
        )
    }    
};




