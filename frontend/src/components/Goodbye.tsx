import {useState} from 'react';

const Goodbye = (props : any) => {

 const [txtColor, setTxtColor] = useState("blue");
 const changeColor = () => { setTxtColor("red"); }
 const revertColor = () =>{ setTxtColor("blue"); } 
 return(<> <h1 onMouseEnter={changeColor} onMouseLeave={revertColor}
    style={{color:txtColor}}>Goodbye {props.name}</h1></>); 
}
export default Goodbye;