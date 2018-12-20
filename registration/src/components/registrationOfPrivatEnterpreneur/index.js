import React from 'react';

import './styles.css';


const RegistrationOfPrivatEnterpreneur = (props) => (
    <div>
    {(props.onIsOpenPrivat && !props.onIsOpenLegal) && <p className='flag'>&#709;</p>}
    
    <button className="button-fop" onClick={props.onButtonClick}>
        Реєстрація фізичних осіб-підприємців
    </button> 
    </div>
)

export default RegistrationOfPrivatEnterpreneur;