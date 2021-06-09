import React from 'react';
import "./PreguntasComp.css";

const PreguntasComp = ({ pregunta,imgUser, nombreUser}) => {
    return (
        
        <div className="o-pregunta">
                        <h5 className="o-user"> <img className="o-imgUser" src={imgUser} />{nombreUser}</h5>

                        <div>
                            <h5>{pregunta}</h5>
                        </div>
                    </div>
    )
}

export default PreguntasComp;