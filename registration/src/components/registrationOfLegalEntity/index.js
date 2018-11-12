import React, { Component } from 'react';


import './styles.css';

export default class RegistrationOfLegalEntity extends Component {

    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render () {
        console.log(this.props);
        const { onButtonClick, onIsOpenLegal, onIsOpenPrivat } = this.props;
        const body = this.state.isOpen && <button className="body-button" onClick={ onButtonClick }>Реєстрація Товариства з обмеженою відповідальністю</button>;
        
        const flag = (this.state.isOpen && (onIsOpenLegal && !onIsOpenPrivat)) && <p className='flag'>V</p>;
        return (
            <div className="wrapper">
                <div className="button-wrapper">
                <button className="button-legal" onClick={this.handleClick}> 
                    {this.state.isOpen ? '-' : '+'}
                </button>
                <h3 className="title-legal">Реєстрація юридичних осіб</h3>
                </div>
                
                <div>
               
                    { flag } 
                    { body }     
                </div>
                
            </div>
        );
    }
}