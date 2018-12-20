import React, { Component, Fragment } from "react";
import Input from "../shared/input";

export default  class Director extends Component {

  state = {
    "LNAME": '',
    "FNAME": '',
    "MNAME": '',
    "PASSER": '',
    "PASNO": '',
    "CITIZENOF": '',
    "IPN": '',
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
    "BIRTHDAY": '',
   };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSaveDirector = e => {
    e.preventDefault();
    this.props.onSaveDirector(this.state);
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
            name = "IPN"
            onChange = { this.handleInputChange }
            value = { text }
            label = "Реєстраційний номер облікової картки платника податків "
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
        <Input
          name = "BIRTHDAY"
          onChange = { this.handleInputChange }
          value = { text }
          label = "Дата призначення"
        />
        <div className='row__wrapper'>
          <button className='minjust-link' onClick={e=>this.handleSaveDirector(e)}>Зберегти дані</button>
        </div>
      </Fragment>
    );
  }
}
