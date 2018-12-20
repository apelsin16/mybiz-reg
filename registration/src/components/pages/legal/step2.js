import React, {Component} from 'react';
import Input from "../../shared/input";
import Director from "../../Director/Director";
import DeputyDirector from "../../DeputyDirector/DeputyDirector";
import ShareholdersList from "../../shareholdersList/ShareholdersList";

class Step2 extends Component {

  state = {
    deputyDirectorInfoToggle: false,
    directorInfoToggle: false,
    modalIsOpen: false,
    "TOTAL_UAH": '',
    "TOVEXECUTIVE": '',
    "DIRECTOR": {},
    "DEPUTYDIRECTOR": {}
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleDirectorInfoToggle = (e) => {
    e.preventDefault();
    this.setState({
      directorInfoToggle: !this.state.directorInfoToggle
    })
  };

  handleDeputyDirectorInfoToggle = (e) => {
    e.preventDefault();
    this.setState({
      deputyDirectorInfoToggle: !this.state.deputyDirectorInfoToggle
    })
  };

  radioButtonChange = () => {};

  handleSaveDraft = e => {
    e.preventDefault();
    const { TOTAL_UAH, TOVEXECUTIVE, DIRECTOR, DEPUTYDIRECTOR } = this.state;
    this.props.onSaveDraft({
      TOTAL_UAH,
      TOVEXECUTIVE,
      DIRECTOR,
      DEPUTYDIRECTOR
    })
  };

  saveDirector = data => {
    this.setState({
      "DIRECTOR": data
    })
  };

  saveDeputyDirector = data => {
    this.setState({
      "DEPUTYDIRECTOR": data
    })
  };

  onOpenModal = e => {
    e.preventDefault();

    this.props.openModal();

  };

  render() {
    console.log(this.props);
    const  { text } = this.state;

    return (
      <div>
        <form>
          <div className='row__wrapper'>
            <p className="input__title">Уставний капітал:</p>
            <Input
            name="TOTAL_UAH"
            onChange={this.handleInputChange}
            value={text}
            />
          </div>
          <div className='row__wrapper'>
            <p className="input__title">Засновники</p>
            <button className="minjust-link" onClick={this.onOpenModal}>Додати</button>
          </div>
          <div className='row__wrapper'>
            {(this.props.shareholders.length>0) && <ShareholdersList {...this.props}/>}
          </div>
        <div className='row__wrapper'>
          <Input
            name = "TOVEXECUTIVE"
            onChange = { this.handleInputChange }
            value = { text }
            label = "Назва посади керівника"
          />
        </div>
        <div className='row__wrapper'>
          <p className="input__title">Керівник</p>
          <button className='minjust-link' onClick={this.handleDirectorInfoToggle}>Додати</button>
        </div>
        {this.state.directorInfoToggle && <Director onSaveDirector={this.saveDirector}/>}
        <div className='row__wrapper'>
          <p className="input__title">	Особа яка може виконувати реєстрацію юридичної особи за дорученням:</p>
          <button onClick={this.handleDeputyDirectorInfoToggle} className='minjust-link'>Додати</button>
        </div>
        { this.state.deputyDirectorInfoToggle && <DeputyDirector onSaveDeputyDirector={this.saveDeputyDirector}/>}
        <div className='row__wrapper--end'>
          <button className="submit" onClick={e=>this.handleSaveDraft(e)}>Зберегти чернетку</button>
        </div>
      </form>
      </div>
    );
  };
}

export default Step2;
