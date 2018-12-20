import React, { Component, Fragment } from 'react';
import TaxGroup from "../TaxGroup/TaxGroup";



export default class Taxation extends Component {

  state = {
    isToggled: false,
   };

  // handleToggle = () => {
  //   this.setState({
  //     isToggled: !this.state.isToggled
  //   })
  // };

  render () {
    return (
      <Fragment>
        {console.log(this.props.isToggled)}
      <div className='row__wrapper'>
        <p className="input__title">Оподаткування:</p>
      </div>
      <div className='row__wrapper'>
      <input type='checkbox' name="VAT" id="VAT" onClick={this.props.onHandleVATChange}/>
      <label className="label" htmlFor="VAT"><span><span></span></span>Реєструвати юридичну особу як платника податку на додану вартість</label>
      </div>
        <div className='row__wrapper'>
          <p className="input__title">Спрощена система оподаткуванння</p>
        </div>
        <div className='row__wrapper'>
          <input type='checkbox' name="tax" id="tax" onClick={this.props.onHandleToggle}/>
          <label className="label" htmlFor="tax"><span><span></span></span>Подати заяву на застосування спрощенної системи оподаткування</label>
        </div>
        {(this.props.isToggled !== false) && <TaxGroup {...this.props}/>}
      </Fragment>
  )
  }
}
