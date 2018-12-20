import React, { Component } from 'react';
import KVED from "../../KVED/KVED";
import Taxation from "../../Taxation/Taxation";
import KVEDList from "../../KVEDList/KVEDList";
// import TaxGroup from "../../TaxGroup/TaxGroup";


export default class Step3 extends Component {

  state = {
    "VAT": false,
    "SIMPLTAX": false,
    "kvedcount": '',
    kvedlist: [],
    isToggled: false,
  };

  addKVED = data => {
    const arr = data.split(' - ');
    this.setState(prevState => ({
      kvedlist: [ ...prevState.kvedlist, {"KVEDNUM" : arr[0], "KVEDNAME": arr[1]}],
      'kvedcount': this.state.kvedlist.length + 1
    }));
  };

  deleteKVED = num => {
    this.setState(prevState =>({
      kvedlist: prevState.kvedlist.filter( item => item.KVEDNUM !== num)
    }))
  };

  handleVATChange = () => {
    this.setState({
      'VAT': !this.state.VAT
    })
  };

  handleGroup3Change = () => {
    this.setState({
      'SIMPLTAX': 3
    })
  };

  handleGroup4Change = () => {
    this.setState({
      'SIMPLTAX': 4
    })
  };

  handleToggle = () => {
    this.setState({
      'SIMPLTAX': !this.state.SIMPLTAX
    })
  };

  handleSaveDraft = e => {
    e.preventDefault();
    const { VAT, SIMPLTAX, kvedcount, kvedlist } = this.state;
    this.props.onSaveDraftStepThree({
      VAT, SIMPLTAX, kvedcount, kvedlist
    })
  };

  render() {
    return (
      <form>
        <KVED onAddKVED={ this.addKVED }/>
        { this.state.kvedcount === '' ? 'Додайте КВЕД' :
          <KVEDList KVEDs={this.state.kvedlist} onDeleteKVED = { this.deleteKVED } /> }

      <Taxation
        onHandleVATChange={this.handleVATChange}
        onHandleGroup3Change={this.handleGroup3Change}
        onHandleGroup4Change={this.handleGroup4Change}
        onHandleToggle={this.handleToggle}
        isToggled={this.state.SIMPLTAX}
      />
        <div className='row__wrapper--end'>
          <button className="submit" onClick={e=>this.handleSaveDraft(e)}>Зберегти чернетку</button>
        </div>
        <div className='row__wrapper--end'>
          <button className="submit">Зареєструвати</button>
        </div>
      </form>
    )
  }
}

