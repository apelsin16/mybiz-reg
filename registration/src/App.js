import React, { Component } from 'react';

import Main from './components/main';
// import logo from './logo.svg';
import './App.css';
import Modal from "react-modal";
import ModalForm from "./components/ModalForm/ModalForm";

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {

  state = {
    modalIsOpen: false,
    "UPF":"товариство з обмеженою відповідальністю",
    "TOVDOCTYPE":"",
    "TOVSUPREME":"",
    "TOVEXECUTIVE":"",
    "SIMPLTAX": "",
    "VAT": "",
    "TOTAL_UAH": "",
    "TOTAL_UAH_STRING": "",
    "TOVCORP": "",
    "TOVAPTNUM": "",
    "TOVAPTTYPE": "",
    "TOVPOSTCODE": "",
    "TOVREGION": "",
    "TOVDISTRICT": "",
    "TOVCITYTYPE": "",
    "TOVCITY": "",
    "TOVCITYDISTRICT": "",
    "TOVSTREET": "",
    "TOVBUILD": "",
    "TOV_NAME": "",
    "TOV_NAME_RU": "",
    "TOV_NAME_EN": "",
    "TOV_SHORT": "",
    "TOV_SHORT_RU": "",
    "TOV_SHORT_EN": "",
    "CITY": "",
    "D_S": "",
    "M_SS": "",
    "M_S": "",
    "Y_S": "",
    "DIRECTOR": {
      "NOIPN": "",
      "LNAME": "",
      "FNAME": "",
      "MNAME": "",
      "BIRTHDAY": "",
      "PASSER": "",
      "PASNO": "",
      "IPN": "",
    },
    "DEPUTYDIRECTOR": {
      "NOIPN": "",
      "LNAME": "",
      "FNAME": "",
      "MNAME": "",
      "BIRTHDAY": "",
      "PASSER": "",
      "PASNO": "",
      "IPN": ""
    },
    "kvedcount": '',
    "kvedlist":[],
    "shareholderscount": "",
    "shareholders":[],
  };
  openModal = () => {
    this.setState({modalIsOpen: true});
  };

  closeModal =() => {
    this.setState({modalIsOpen: false});
  };

  addShareholder = data => {
    this.setState(prevState =>({
      "shareholders": [ data, ...prevState.shareholders ],
      "shareholderscount": (this.state.shareholders.length + 1),
    }));
    this.closeModal();
  };

  deleteShareholder = num => {
    this.setState(prevState =>({
      shareholders: prevState.shareholders.filter( (item, index) => index !== num)
    }))
  };

  saveDraft = ({TOTAL_UAH, TOVEXECUTIVE, DIRECTOR, DEPUTYDIRECTOR}) => {
    this.setState({
      TOTAL_UAH,
      TOVEXECUTIVE,
      DIRECTOR,
      DEPUTYDIRECTOR,
    })
  };

  saveDraftStepOne = ({TOVDOCTYPE,
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
    CITY}) => {
    this.setState({
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

  saveDraftStepThree = ({VAT, SIMPLTAX, kvedcount, kvedlist}) => {
    this.setState({
      VAT,
      SIMPLTAX,
      kvedcount,
      kvedlist,
    })
  };

  render() {
    return (
      <div className="App">
        <Main
          openModal={this.openModal}
          closeModal={this.closeModal}
          onDeleteShareholder={this.deleteShareholder}
          shareholders={this.state.shareholders}
          onSaveDraft={this.saveDraft}
          onSaveDraftStepOne={this.saveDraftStepOne}
          onSaveDraftStepThree={this.saveDraftStepThree}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"

        >
          <ModalForm
            onAddShareholder={this.addShareholder}
            onDeleteShareholder={this.deleteShareholder}
            shareholders={this.state.shareholders}/>
          <button onClick={this.closeModal}>Закрити</button>

        </Modal>
      </div>
    );
  }
}

export default App;
