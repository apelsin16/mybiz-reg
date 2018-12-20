import React, { Component, Fragment } from "react";
import Input from "../shared/input";


export default class Person extends Component {

  state = {
    "NOIPN": false,
    "LNAME": '',
    "FNAME": '',
    "MNAME": '',
    "PASSER": '',
    "PASNO": '',
    "CITIZENOF": '',
    "RV_GU": '',
    "PASDATA": '',
    "REG_POSTCODE": '',
    "REG_REGION": '',
    "REG_DISTRICT": '',
    "REG_CITYDISTRICT": '',
    "REG_STREET": '',
    "REG_BUILD": '',
    "REG_CORP": '',
    "REG_APTTYPE": '',
    "REG_APTNUM": '',
    "REG_CITYTYPE": '',
    "REG_CITY": '',

  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  radioButtonChange = () => {
    this.setState({
      NOIPN: !this.state.NOIPN
    })
  };

  handleAddShareholder = e => {
    e.preventDefault();
    this.props.onAddShareholder(this.state);
  };

  render() {
    const { text } = this.state;
    return (
      <Fragment>
        <div className='row__wrapper'>
          <Input
            name = "LNAME"
            onChange = {this.handleInputChange}
            value = { text }
            label = "Прізвище"
          />
          <Input
            name = "FNAME"
            onChange = { this.handleInputChange }
            value = { text }
            label= "Ім'я"
          />
          <Input
            name = "MNAME"
            onChange = { this.handleInputChange }
            value = { text }
            label = "По-батькові"
          />
        </div>
        <div className='row__wrapper'>
          <p className="input__title">Паспортні данні:</p>
          <Input
            name = "PASSER"
            onChange = { this.handleInputChange }
            value = { text }
            label = "Серія"
          />
          <Input
            name = "PASNO"
            onChange = { this.handleInputChange }
            value = { text }
            label = "Номер"
          />
          <Input
            name = "CITIZENOF"
            onChange = { this.handleInputChange }
            value = { text }
            label = "Громадянство"
          />
        </div>
        <div className='row__wrapper'>
          <Input
            name = "RV_GU"
            onChange = { this.handleInputChange }
            value = { text }
            label = "ким виданий"
          />
          <Input
            name = "PASDATA"
            onChange = { this.handleInputChange }
            value = { text }
            label = "коли виданий"
          />
        </div>
        <div className='row__wrapper'>
          <p className="input__title">Адреса:</p>
          <Input
            name = "REG_POSTCODE"
            onChange = {this.handleInputChange}
            value = { text }
            label = "індекс"
          />
          <Input
            name = "REG_REGION"
            onChange = { this.handleInputChange }
            value = { text }
            label= "область"
          />
          <Input
            name = "REG_DISTRICT"
            onChange = { this.handleInputChange }
            value = { text }
            label = "район"
          />
        </div>
        <div className='row__wrapper'>
          <Input
            name = "REG_CITYDISTRICT"
            onChange = {this.handleInputChange}
            value = { text }
            label = "район міста"
          />
          <Input
            name = "REG_STREET"
            onChange = { this.handleInputChange }
            value = { text }
            label= "Вулиця"
          />
          <Input
            name = "REG_BUILD"
            onChange = { this.handleInputChange }
            value = { text }
            label = "будівля"
          />
        </div>
        <div className='row__wrapper'>
          <Input
            name = "REG_CORP"
            onChange = { this.handleInputChange }
            value = { text }
            label = "корпус"
          />
          <Input
            name = "REG_APTTYPE"
            onChange = { this.handleInputChange }
            value = { text }
            label = "тип приміщення"
          />
          <Input
            name = "REG_APTNUM"
            onChange = { this.handleInputChange }
            value = { text }
            label = "номер приміщення"
          />
        </div>
        <div className='row__wrapper'>
          <Input
            name = "REG_CITYTYPE"
            onChange = { this.handleInputChange }
            value = { text }
            label = "тип населенного пункту"
          />
          <Input
            name = "REG_CITY"
            onChange = { this.handleInputChange }
            value = { text }
            label = "назва населеного пункту"
          />
        </div>
        <input type='checkbox' name="beneficiary" id="beneficiary" onClick={this.radioButtonChange}/>
        <label className="label" htmlFor="beneficiary"><span><span></span></span>Засновник є кінцевим бенефіціарним власником (контролером) юридичної особи</label>
        <button className='minjust-link' onClick={this.handleAddShareholder}>Зберегти</button>
      </Fragment>
    );
  }
}
