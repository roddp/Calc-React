
import './App.css';
import Screen from './components/Screen';
import { useState } from 'react'

function App() {

  let [calc, setCalc] = useState({
    sign: '',
    num: "0",
    num2: "0",
    res: "0",
    switchScreen: false,
  });

  const valueHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(calc.num.length);
    if (calc.num.length < 8 && calc.num2.length < 8) {
      if (calc.switchScreen === false) {
        setCalc({
          ...calc,
          num: calc.num === "0" && value === "0"
            ? "0"
            : calc.num === "0" && value !== "0" ?
              value : calc.num + value,
        });
      } else {
        setCalc({
          ...calc,
          num2: calc.num2 === "0" && value === "0"
            ? "0"
            : calc.num2 === "0" && value !== "0" ?
              value : calc.num2 + value,
        });

      }


    }
  }

  const deleteHandler = () => {
    setCalc({
      ...calc,
      sign: '',
      num: '0',
      num2: '0',
      res: '0',
      switchScreen: false,
    })
  }

  const backspaceHandler = () => {
    if (calc.num !== "0") {
      setCalc({
        ...calc,
        num: calc.num.length - 1 ? calc.num.slice(0, -1) : calc.num = "0",
      })
    }
  }

  const signHandler = (op) => {
    op === "+" ? setCalc({
      ...calc,
      sign: '+',
      switchScreen: true,
    }) : op === "-" ? setCalc({
      ...calc,
      sign: '-',
      switchScreen: true,
    }) : op === "*" ? setCalc({
      ...calc,
      sign: '*',
      switchScreen: true,
    }) : setCalc({
      ...calc,
      sign: '/',
      switchScreen: true,
    });
  }

  const equalsHandler = () => {
    setCalc({
      ...calc,
      num2: math(Number(calc.num), Number(calc.num2), calc.sign)
    })


  }

  const math = (n1, n2, sign) => {
    if (sign === "+") {
      return n1 + n2;
    } if (sign === "-") {
      return n1 - n2;
    } if (sign === "*") {
      return n1 * n2;
    } if (sign === "/") {
      return n1 / n2;
    }
  }



  return (
    <div className='wrapper'>
      <Screen value={calc.switchScreen ? calc.num2 : calc.num}></Screen>
      <div className='calc-buttons'>
        <div className='calc-buttons-row'>
          <button className='calc-button double' onClick={deleteHandler}>C</button>
          <button className='calc-button' onClick={backspaceHandler}>&larr;</button>
          <button className='calc-button' onClick={() => signHandler('/')}>&divide;</button>
        </div>
        <div className='calc-buttons-row'>
          <button className='calc-button' onClick={valueHandler}>7</button>
          <button className='calc-button' onClick={valueHandler}>8</button>
          <button className='calc-button' onClick={valueHandler}>9</button>
          <button className='calc-button' onClick={() => signHandler('*')}>&times;</button>

        </div>
        <div className='calc-buttons-row'>
          <button className='calc-button' onClick={valueHandler}>4</button>
          <button className='calc-button' onClick={valueHandler}>5</button>
          <button className='calc-button' onClick={valueHandler}>6</button>
          <button className='calc-button' onClick={() => signHandler('-')}>&minus;</button>

        </div>
        <div className='calc-buttons-row'>
          <button className='calc-button' onClick={valueHandler}>3</button>
          <button className='calc-button' onClick={valueHandler}>2</button>
          <button className='calc-button' onClick={valueHandler}>1</button>
          <button className='calc-button' onClick={(e) => signHandler(e.target.innerHTML)} >+</button>
        </div>
        <div className='calc-buttons-row'>
          <button className='calc-button' onClick={valueHandler}>0</button>
          <button className='calc-button'>.</button>
          <button className='calc-button' onClick={() => equalsHandler()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
