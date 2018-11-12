import React, { Component } from 'react';
import RegistrationOfLegalEntity from '../registrationOfLegalEntity';
import RegistrationOfPrivatEnterpreneur from '../registrationOfPrivatEnterpreneur';
import Legal from '../legal/index';
import './styles.css';

const INITIAL_STATE = {
    isOpenLegal: false,
    isOpenPrivat: false
}

export default class Main extends Component {

    state = INITIAL_STATE;

    handleClickLegal = () => this.setState({ 
        isOpenLegal: !this.state.isOpenLegal,
        isOpenPrivat: (true ? false : false)
        })
    handleClickPrivat = () => this.setState({ 
        isOpenPrivat: !this.state.isOpenPrivat,
        isOpenLegal: (true ? false : false)  
    })

    render () {
        const { isOpenLegal, isOpenPrivat } = this.state;
        return (
        <div className="container">           
            <aside className="aside">
                <h1 className="title">Реєстрація бізнесу</h1> 
                    <RegistrationOfLegalEntity 
                    onIsOpenLegal={isOpenLegal}
                    onButtonClick = {this.handleClickLegal.bind(this)}
                    onIsOpenPrivat={isOpenPrivat}
                    />

                    <RegistrationOfPrivatEnterpreneur 
                    onIsOpenPrivat={isOpenPrivat} 
                    onButtonClick = {this.handleClickPrivat.bind(this)}
                    onIsOpenLegal={isOpenLegal}
                    />
            </aside>
            <main className="main">
            { (!this.state.isOpenLegal && !this.state.isOpenPrivat) ?  
                <p className="main-text">В цьому розділі Ви можете сформувати всі необхідні документи для державної реєстрації юридичної 
                    особи та фізичної особи-підприємця, а також провести електронну реєстрацію ТОВ або ФОП</p> :
                    (this.state.isOpenLegal && !this.state.isOpenPrivat) ? 
                    <Legal/> : 
                    <p className="main-text">Реєстрація ФОП</p>
            }            
            </main>
        </div>
        )
    }    
}

