import React, {useState} from 'react';
import './default.css';
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setoperator] = useState();
    const [igual, setIgual] = useState(false);
    const [op, setOp] = useState(false);


    /**
     * insert sequence number
     *
     * @param {*} e
     */
    function currentvalueNum(e){
        
        var currentvalue = e.target.value;
        if (num === 0 ){
            setNum(currentvalue);
        }
        else if(num === oldnum)
        {
            setNum(currentvalue);
        }
        else if(num === isNaN)
        {
            setNum(0);
            setNum(currentvalue);
        }
        else if(igual === true)
        {
            setNum(0);
            setIgual(false);
            setNum(currentvalue);
        }
        else
        {
            setNum(num + currentvalue);
        }

    }
    /**
     * clear current value
     *
     */
    function Clear(){
        setNum(0);
        setIgual(false);
        setOp(false);
    }
    /**
     * calcule the percent
     *
     */
    function Percent(){
        setNum(num / 100);
    }

    /**
     * invert signal value
     *
     */
    function ChangeSignal(){
        if(num>0){
            setNum(-num)
        }
        else{
            setNum(Math.abs(num));
        }
    }

    /**
     * Init Handle
     *
     * @param {*} e
     */
    function operatorHandler(e) {
        var operatorInput = e.target.value;
        setoperator(operatorInput);
        setOldNum(num);
        setIgual(false);
        setOp(true);
        if (op === true){
            if (operator === "+"){
                setNum(parseFloat(oldnum) + parseFloat(num));
                setIgual(true);
                setOp(false);
                
            }
            if (operator === "-"){
                setNum(parseFloat(oldnum) - parseFloat(num));
                setIgual(true);
                setOp(false);
    
            }
            if (operator === "X"){
                setNum(parseFloat(oldnum) * parseFloat(num));
                setIgual(true);
                setOp(false);
              
            }
            if (operator === "/"){
                setNum(parseFloat(oldnum) / parseFloat(num));
                setIgual(true);
                setOp(false);
              
            }
        }
       
        
      }

    /**
     * do and show the result
     *
     */
    function Result(){
        
        if (operator === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num));
            setIgual(true);
            setOp(false);
           
            
        }
        if (operator === "-"){
            setNum(parseFloat(oldnum) - parseFloat(num));
            setIgual(true);
            setOp(false);
            
        }
        if (operator === "X"){
            setNum(parseFloat(oldnum) * parseFloat(num));
            setIgual(true);
            setOp(false);
            
        }
        if (operator === "/"){
            setNum(parseFloat(oldnum) / parseFloat(num));
            setIgual(true);
            setOp(false);
           
        }
    }

    return ( 
        <body>
            <h1>A simples calculator maked with React</h1>
            <div>
                <Box m={2} />
                <Container maxWidth="xs">
                    <div className='wrapper'>
                            <Box m={1}/>
                            <h1 className='resultado'>{num}</h1>
                            <button onClick={Clear}>AC</button>
                            <button onClick={ChangeSignal}>+/-</button>
                            <button onClick={Percent}>%</button>
                            <button className="orange" onClick={operatorHandler} value={"/"}>/</button>
                            <button className="gray" onClick={currentvalueNum} value={7}>7</button>
                            <button className="gray" onClick={currentvalueNum} value={8}>8</button>
                            <button className="gray" onClick={currentvalueNum} value={9}>9</button>
                            <button className="orange" onClick={operatorHandler} value={"X"}>X</button>
                            <button className="gray" onClick={currentvalueNum} value={4}>4</button>
                            <button className="gray" onClick={currentvalueNum} value={5}>5</button>
                            <button className="gray" onClick={currentvalueNum} value={6}>6</button>
                            <button className="orange" onClick={operatorHandler} value={"-"}>-</button>
                            <button className="gray" onClick={currentvalueNum} value={1}>1</button>
                            <button className="gray" onClick={currentvalueNum} value={2}>2</button>
                            <button className="gray" onClick={currentvalueNum} value={3}>3</button>
                            <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
                            <button className="zero"  onClick={currentvalueNum} value={0}>0</button>
                            <button className="gray" onClick={currentvalueNum} value={"."}>,</button>
                            <button className="orange" onClick={Result}>=</button>
                        </div>
                </Container>
                
            </div>
        </body>
    );
} 

