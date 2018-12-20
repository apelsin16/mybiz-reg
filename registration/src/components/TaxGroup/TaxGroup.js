import React, { Component, Fragment } from "react";

export default class TaxGroup extends Component {


  render() {
    return(
      <Fragment>
        {console.log(this.props)}
      <div className='row__wrapper'>
        <p className="input__title">Оберіть групу</p>
      </div>
      <div className='row__wrapper'>
        <input type='radio' name="group" id="group3" onClick={this.props.onHandleGroup3Change}/>
        <label className="label" htmlFor="group3"><span><span></span></span>Третя група</label>
        <input type='radio' name="group" id="group4" onClick={this.props.onHandleGroup4Change}/>
        <label className="label" htmlFor="group4"><span><span></span></span>Четверта група</label>
      </div>
      </Fragment>
    )
  }
}
