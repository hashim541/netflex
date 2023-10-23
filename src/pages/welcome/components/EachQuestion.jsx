import { useState } from "react";

export default function EachQuestion({d}){
    var [show,setShow]=useState(false);
    
    return(
        <div className="ques">
            <div className="top">
                <p className="q">{d.ques}</p>
                <div className="show" onClick={() => setShow(!show)}>+</div>
            </div>
            {show ? <div className="bot">
                <p className="a">{d.answ}</p>
            </div> : null}
            
        </div>
    );
}