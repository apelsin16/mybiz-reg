import React, { Component } from 'react';
import Input from '../../shared/input';

import './styles.css';

class Step1 extends Component {
  state = {
        "UPF":"Товариство з обмеженою відповідальністю",    
        "TOVDOCTYPE":true,    
        "TOVSUPREME":false,
        "TOVCORP":"",    
        "TOVAPTNUM":"",    
        "TOVAPTTYPE":"",    
        "TOVPOSTCODE":"",    
        "TOVREGION":"",    
        "TOVDISTRICT":"",    
        "TOVCITYTYPE":"",    
        "TOVCITY":"Місто",    
        "TOVCITYDISTRICT":"",    
        "TOVSTREET":"",    
        "TOVBUILD":"",    
        "TOV_NAME":"",    
        "TOV_NAME_RU":"",    
        "TOV_NAME_EN":"",    
        "TOV_SHORT":"",    
        "TOV_SHORT_RU":"checked",    
        "TOV_SHORT_EN":"",    
        "CITY":""
  };


  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  radioButtonChange = () => {};


  handleSaveDraft = e => {
    e.preventDefault();
    console.log(this.props);
    const { TOVDOCTYPE,
      TOVSUPREME,
      SIMPLTAX,
      VAT,
      TOTAL_UAH,
      TOTAL_UAH_STRING,
      TOVCORP,
      TOVAPTNUM,
      TOVAPTTYPE,
      TOVPOSTCODE,
      TOVREGION,
      TOVDISTRICT,
      TOVCITYTYPE,
      TOVCITY,
      TOVCITYDISTRICT,
      TOVSTREET,
      TOVBUILD,
      TOV_NAME,
      TOV_NAME_RU,
      TOV_NAME_EN,
      TOV_SHORT,
      TOV_SHORT_RU,
      TOV_SHORT_EN,
      CITY} = this.state;
    this.props.onSaveDraftStepOne({
      TOVDOCTYPE,
      TOVSUPREME,
      SIMPLTAX,
      VAT,
      TOTAL_UAH,
      TOTAL_UAH_STRING,
      TOVCORP,
      TOVAPTNUM,
      TOVAPTTYPE,
      TOVPOSTCODE,
      TOVREGION,
      TOVDISTRICT,
      TOVCITYTYPE,
      TOVCITY,
      TOVCITYDISTRICT,
      TOVSTREET,
      TOVBUILD,
      TOV_NAME,
      TOV_NAME_RU,
      TOV_NAME_EN,
      TOV_SHORT,
      TOV_SHORT_RU,
      TOV_SHORT_EN,
      CITY
    })
  };

  render () {
    console.log(this.props);
    const { text } = this.state;
    return (
        <form onSubmit={ e => this.handleSubmit(e, this.state)}>
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
            </div>
          <div className='row__wrapper'>
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
                    <input type='radio' name="Method of receipt" id="TOV_NAME_RU" onClick={this.radioButtonChange}/>
                    <label className="label" htmlFor="TOV_NAME_RU"><span><span></span></span>Видати заявнику</label>
                    
                    <input type='radio' name="Method of receipt" id="TOV_SHORT_RU" onClick={this.radioButtonChange}/>
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
                <button className="submit" onClick={e => this.handleSaveDraft(e)}>Зберегти чернетку</button>
                
            </div>

        </form>
    )  
  }
}



// const mDTP = dispatch => ({
//   add: (text) => dispatch(add(text))
// });

export default Step1;

