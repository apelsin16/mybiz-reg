import React, { Component } from 'react';
import Input from '../../shared/input';
import './styles.css';

export default class Step1 extends Component {
  state = {
    text: this.props.text
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleEditSuccess = e => {
    e.preventDefault();

    this.props.onEditSuccess(this.state.text);
  }; 
  
  render () {
    const { text } = this.state;
    return (
        <form onSubmit={this.handleEditSuccess}>
            <div className='row__wrapper'>
                <p className="input__title">Назва:</p>
                <Input
                    name = "TOV_NAME"
                    onChange = { this.handleInputChange }
                    value = { text }
                />
               <a href="https://usr.minjust.gov.ua/ua/freesearch" target="_blank" rel="noopener noreferrer" className="minjust-link" >Перевірити</a>
            </div>
            <div className='row__wrapper'>
                <Input
                    name = "TOV_NAME_EN"
                    onChange = {this.handleInputChange}
                    value = { text }
                    label = "назва англійською"
                />
            </div>
            <div className='row__wrapper'>
                <p className="input__title">Адреса:</p>
                <Input
                    name = "TOVPOSTCODE"
                    onChange = {this.handleInputChange}
                    value = { text }
                    label = "індекс"
                />
                <Input
                    name = "TOVREGION"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label= "область"
                />
                <Input
                    name = "TOVDISTRICT"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label = "район"
                />
            </div>
            <div className='row__wrapper'>
                <p className="input__title">Адреса:</p>
                <Input
                    name = "TOVCITYDISTRICT"
                    onChange = {this.handleInputChange}
                    value = { text }
                    label = "район міста"
                />
                <Input
                    name = "TOVSTREET"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label= "Вулиця"
                />
                <Input
                    name = "TOVBUILD"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label = "будівля"
                />                
            </div>
            <div className='row__wrapper'>
                <Input
                    name = "TOVCORP"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label = "корпус"
                />
                <Input
                    name = "TOVAPTTYPE"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label = "тип приміщення"
                />
                <Input
                    name = "TOVAPTNUM"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label = "номер приміщення"
                />
            </div>
            <div className='row__wrapper'>
                <Input
                    name = "TOVCITYTYPE"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label = "тип населенного пункту"
                />
                <Input
                    name = "TOVCITY"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label = "назва населеного пункту"
                />
            </div>
            <div>
                <p className="input__title">Спосіб отримання виписки з Єдиного державного реєстру юридичних осіб та фізичних осіб-підприємців:</p>
                <div className='row__wrapper'>
                    <input type='radio' name="Method of receipt" id="TOV_NAME_RU"/>
                    <label className="label" htmlFor="TOV_NAME_RU"><span><span></span></span>Видати заявнику</label>
                    
                    <input type='radio' name="Method of receipt" id="TOV_SHORT_RU" checked="checked"/>
                    <label className="label" htmlFor="TOV_SHORT_RU"><span><span></span></span>Відправити поштою за місцезнаходженням юридичної особи</label>  
                </div>
            </div>
            <div>
                <p className="input__title">Спосіб повідомлення про результати розгляду державним реєстратором поданих документів: </p>
                <Input
                    name = "TOV_SHORT"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label = "СМС повідомлення (потрібно вказати номер телефону)"
                />
                <Input
                    name = "TOV_SHORT_EN"
                    onChange = { this.handleInputChange }
                    value = { text }
                    label = "Електронна пошта (потрібно вказати пошту)"
                />
            </div>
            <div className='row__wrapper--end'>
                <input type="submit" className="submit" value="Зберегти чернетку" />
            </div>
        </form>
    )  
  }
  

};
