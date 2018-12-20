import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Step1 from '../pages/legal/step1';
import Step2 from '../pages/legal/step2';
import Step3 from '../pages/legal/step3';

import './styles.css';

export default class Legal extends Component {
    state = {  
        // "draft": {
        //   //    "UPF":"",
        //   //    "TOVDOCTYPE":"",
        //   //    "TOVSUPREME":"",
        //   //    "TOVEXECUTIVE":"",
        //   //    "SIMPLTAX":false,
        //   //    "VAT":false,
        //   //    "TOTAL_UAH":0,
        //   //    "TOTAL_UAH_STRING":"",
        //   //    "TOVCORP":"",
        //   //    "TOVAPTNUM":"",
        //   //    "TOVAPTTYPE":"",
        //   //    "TOVPOSTCODE":"",
        //   //    "TOVREGION":"",
        //   //    "TOVDISTRICT":"",
        //   //    "TOVCITYTYPE":"",
        //   //    "TOVCITY":"",
        //   //    "TOVCITYDISTRICT":"",
        //   //    "TOVSTREET":"",
        //   //    "TOVBUILD":"",
        //   //    "TOV_NAME":"",
        //   //    "TOV_NAME_RU":"",
        //   //    "TOV_NAME_EN":"",
        //   //    "TOV_SHORT":"",
        //   //    "TOV_SHORT_RU":"",
        //   //    "TOV_SHORT_EN":"",
        //   //    "CITY":"",
        //   //    "D_S":"",
        //   //    "M_SS":"",
        //   //    "M_S":"",
        //   //    "Y_S":"",
        //   //    "DIRECTOR":{
        //   //       "NOIPN":"0",
        //   //       "LNAME":"Директоренко",
        //   //       "FNAME":"Директор",
        //   //       "MNAME":"Директорович",
        //   //       "BIRTHDAY":"10.10.1999",
        //   //       "PASSER":"ЯЯ",
        //   //       "PASNO":"999999",
        //   //       "IPN":"‎9999999999"
        //   //    },
        //   //    "DEPUTYDIRECTOR":{
        //   //       "NOIPN":false,
        //   //       "LNAME":"",
        //   //       "FNAME":"",
        //   //       "MNAME":"",
        //   //       "BIRTHDAY":"",
        //   //       "PASSER":"",
        //   //       "PASNO":"",
        //   //       "IPN":""
        //   //    },
        //   //    "kvedcount":0,
        //   //    "kvedlist":[],
        //   //    "shareholderscount":0,
        //   //    "shareholders":[]
        //   // }
        // }
    }; 

    // editSuccess = () => {};
    //
    // handleInputChange = e => {
    //      const name = e.target.name;
    //      const value = e.target.value;
    //
    //      this.setState({ [name]:value });
    //  };

    saveDraft = draft => {

      this.setState(prevState=>({
          ...prevState, draft
      }));
    };

    render() {
      console.log(this.props);
        return(
            <div className="wrapper__main">
                <h1>Реєстрація товариства з обмеженою відповідальністю</h1>
                <nav>
                    <ul className="legal__menu">
                        <li className="menu__item">
                            <NavLink exact to="/" className="menu__link" activeClassName="menu__link--active">Крок 1</NavLink>   
                        </li>
                        <li className="menu__item">
                            <NavLink to="/step2" className="menu__link" activeClassName="menu__link--active">Крок 2</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/step3" className="menu__link" activeClassName="menu__link--active">Крок 3</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" render={() => <Step1 {...this.props}/>} />
                    <Route path="/step2" render={() => <Step2 {...this.props}/>} />
                    <Route path="/step3" render={() => <Step3 {...this.props}/>} />
                    <Redirect to="/"/>
                </Switch>

            </div>
        )
    }
}
