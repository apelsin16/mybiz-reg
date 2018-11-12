import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Step1 from '../pages/legal/step1';
import Step2 from '../pages/legal/step2';
import Step3 from '../pages/legal/step3';

import './styles.css';

export default class Legal extends Component {
    state = {  
        "UPF":"товариство з обмеженою відповідальністю test test test",    
        "TOVDOCTYPE":"Статут",    
        "TOVSUPREME":"Загальні  збори",    
        "TOVEXECUTIVE":"Директор",    
        "SIMPLTAX":1,    
        "VAT":1,    
        "TOTAL_UAH":"1500.00",    
        "TOTAL_UAH_STRING":"Одна  тисяча п'ятсот гривень 00  коп.",    
        "TOVCORP":"2",    
        "TOVAPTNUM":"4",    
        "TOVAPTTYPE":"офіс",    
        "TOVPOSTCODE":"99999",    
        "TOVREGION":"Київська",    
        "TOVDISTRICT":"Районний",    
        "TOVCITYTYPE":"v",    
        "TOVCITY":"Місто",    
        "TOVCITYDISTRICT":"Містечковий",    
        "TOVSTREET":"тупік  Перспективний",    
        "TOVBUILD":"12/13",    
        "TOV_NAME":"Скажений  хом'як",    
        "TOV_NAME_RU":"Бешенный ёжик",    
        "TOV_NAME_EN":"Crazy  wasp",    
        "TOV_SHORT":"НТУУ \"КПЇ\"",    
        "TOV_SHORT_RU":"НТУУ  \"КПЁ\"",    
        "TOV_SHORT_EN":"NTUU  \"KPI\"",    
        "CITY":"Київ",    
        "D_S":"1",    
        "M_SS":"01",    
        "M_S":"січня",    
        "Y_S":"2018",    
        "DIRECTOR":{      
           "NOIPN":"0",    
           "LNAME":"Директоренко",    
           "FNAME":"Директор",    
           "MNAME":"Директорович",    
           "BIRTHDAY":"10.10.1999",    
           "PASSER":"ЯЯ",    
           "PASNO":"999999",    
           "IPN":"‎9999999999"    
        },    
        "DEPUTYDIRECTOR":{      
           "NOIPN":"0",    
           "LNAME":"Заступенко",    
           "FNAME":"Зам",    
           "MNAME":"Замович",    
           "BIRTHDAY":"01.01.1999",    
           "PASSER":"ЮЮ",    
           "PASNO":"888888",    
           "IPN":"‎8888888888"    
        },    
        "kvedcount":3,    
        "kvedlist":[      
           {      
              "KVEDNUM":"00.01",    
              "KVEDNAME":"Імітація  бурхливої діяльності"    
           },    
           {     
              "KVEDNUM":"00.02",    
              "KVEDNAME":"Здирницитво грошей з  клієнтів"    
           },    
           {      
              "KVEDNUM":"00.03",    
              "KVEDNAME":"Обідня  перерва!"    
           }    
        ],    
        "shareholderscount":5,    
        "shareholders":[      
           {      
              "LNAME":"Прізвище1",    
              "FNAME":"Ім'я1",    
              "MNAME":"Побатькові1",    
              "BIRTHDAY":"01.01.1971",    
              "PASSER":"AA",    
              "PASNO":"111111",    
              "RV_GU":"РУГУ  1",    
              "PASDATA":"01.01.2008",    
              "REG_POSTCODE":"11111",    
              "CITIZENOF":"Україна",    
              "REG_REGION":"АР  Крим",    
              "REG_DISTRICT":"",    
              "REG_CITYTYPE":"v",    
              "REG_CITY":"Місто1",    
              "REG_CITYDISTRICT":"Центральний",    
              "REG_STREET":"вул.  Вулиця1",    
              "REG_BUILD":"11",    
              "REG_CORP":5,    
              "REG_APTTYPE":"квартира",    
              "REG_APTNUM":1,    
              "NOIPN":0,    
              "IPN":"‎1111111111",    
              "SHARE_UAH":100,    
              "SHARE":"6.67"    
           }    
        ]    
     }; 

     handleInputChange = e => {
         const name = e.target.name;
         const value = e.target.value;

         this.setState({ [name]:value });
     };

    render() {
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
                    <Route exact path="/" component={Step1} />
                    <Route path="/step2" component={Step2} />
                    <Route path="/step3" component={Step3} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        )
    }
}
