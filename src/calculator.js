//import { useState } from "react";

function Math({value}) {
    return(
        <button onClick={() => displayText(value)}>{value}</button>
    );
}

function displayText(character) {
    let string = document.getElementById("display").value;
    string.innerHTML += character;
}

function equation() {
    const string = document.getElementById("display").value;
    const digitList = string.splice(/[*+/-]/g);
    const operationList = string.splice(/\d/);
    const tempHolder = document.getElementById("result").value;
    let result = 0;

    for(let i = 0; i < digitList.legnth; i++) {
        if(operationList[i] === '+') {
            result += result + digitList[i];
        } else if(operationList[i] === '-') {
            result = result - digitList[i];
        } else if(operationList[i] === '*') {
            result = result * digitList[i];
        } else if(operationList[i] === '/') {
            result = result / digitList[i];
        }
    }

    tempHolder.innerHTML = result;
}

function clear() {
    document.getElementById("display").value = 0;
    document.getElementById("result").value = 0;
}

export default function calculator() {
    return(
        <>
            <br></br>
            <div>
                <input type="text" id="display" value=""></input>
            </div>
            <div>
                <Math value="7" />
                <Math value="8" />
                <Math value="9" />
                <Math value="/" />
            </div>
            <div>
                <Math value="4" />
                <Math value="5" />
                <Math value="6" />
                <Math value="*" />
            </div>
            <div>
                <Math value="1" />
                <Math value="2" />
                <Math value="3" />
                <Math value="-" />
            </div>
            <div>
                <Math value="0" />
                <Math value="." />
                <button onClick={equation()}>=</button>
                <Math value="+" />
            </div>
            <div><button id="clear" onclick={clear()}>AC</button></div>
            <div>
                <input type="text" id="result" value=""></input>
            </div>
        </>
    );
}