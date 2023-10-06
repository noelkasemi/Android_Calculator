import Button from "./button";
import {useState} from 'react'
import Delete from './svg'
import Icon from './icon'
import Arrow from "./arrow";
import Back from "./back";

function App() {
  
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }
  // Function to handle button clicks
function handleButtonClick(value) {
  if (value === "=") {
    try {
      const evalResult = eval(expression);
      setResult(evalResult);
      setExpression(String(evalResult));
    } catch (error) {
      setResult("Error");
    }
  } else if (value === "C") {
    setExpression(""); // Clear the expression
    setResult(""); // Clear the result
  } else if (value === "%") {
    // Calculate the percentage of the current expression
    try {
      const percentage = (eval(expression) / 100).toString();
      setExpression(percentage);
      setResult(percentage);
    } catch (error) {
      setResult("Error");
    }
  }  else {
    // Append the clicked value to the expression
    setExpression((prevExpression) => prevExpression + value);
  }
}


  function handleNumberClick(number) {
    setExpression((prevExpression) => prevExpression + number);
  }
  
  function handleDelete () {
    setExpression(expression.slice(0, -1))
  }

   // Initialize a flag to keep track of the click count


const handleBraces = () => {
 
  if (count === 0) {
    // First click: Invoke the first function
    handleButtonClick('(');
    setCount(1)
  } else if (count === 1) {
    // Second click: Invoke the second function
    handleButtonClick(')');
    setCount(0)
  }
}


  return (
    
    <div className="App flex md:justify-center md:py-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800">
      <section className="w-full md:w-1/2 lg:w-1/3 h-screen border-2 border-black  bg-black md:rounded-xl">
      {show ? <article className="h-3/5 w-full" >
       <div className="flex items-center mb-3"> 
       <Back onClick={toggleShow} />
       <p className="text-white mt-4 font-semibold text-lg ml-2">Unit converter</p>
        </div> 
        <div className="h-fit pb-4  w-full overflow-auto text-gray-400 border-b border-gray-500 flex justify-between">
          <button className="hover:bg-[#424447] h-fit p-2 rounded-full">Length</button>
          <button className="hover:bg-[#424447] h-fit p-2 rounded-full">Temperature</button>
          <button className="hover:bg-[#424447] h-fit p-2 rounded-full">Volume</button>
          <button className="hover:bg-[#424447] h-fit p-2 rounded-full">Mass</button>
          <button className="hover:bg-[#424447] h-fit p-2 rounded-full">Mass</button>
          <button className="hover:bg-[#424447] h-fit p-2 rounded-full">Data</button>
          <button className="hover:bg-[#424447] h-fit p-2 rounded-full">Speed</button>
          <button className="hover:bg-[#424447] h-fit p-2 rounded-full">Time</button>
        </div>
        <div className="h-2/5 w-full border-b border-gray-500"></div>
        <div className="h-2/5 w-full border-b border-gray-500"></div>
        </article>
      : <article className="h-1/3 overflow-hidden truncate border-b flex flex-col p-4 justify-end border-gray-400">

      <p className="text-white text-right h-1/3 font-semibold mt-9 text-2xl">{expression}</p>
      <div className="h-2/3 w-full flex justify-between items-end">
      <div>
      <Icon onClick={toggleShow} />
      </div>
      <Delete style={`${expression.length === 0 ? 'p-4' : 'p-2 pl-1  hover:bg-[#424447]'} mr-6 w-12 h-12  rounded-full`} onClick={() => handleDelete()} />
      </div>
    </article>  
      }

      <article className={`${show ? 'h-2/5' : 'h-2/3'} py-2 pt-12 grid grid-cols-4 justify-items-center`}>
       {!show && <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-red-500 text-xl`} onClick={() => handleButtonClick('C')} name={`C`} />}
       {!show && <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-green-500`} onClick={handleBraces} name={`( )`} />}
        {!show && <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-green-500 text-xl`} onClick={() => handleButtonClick('%')} name={`%`} />}
        {!show && <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-green-500 text-4xl pb-1`} onClick={() => handleButtonClick('/')} name={`÷`} />}
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`} onClick={() => handleNumberClick('7')} name={`7`} />
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`} onClick={() => handleNumberClick('8')} name={`8`} />
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`} onClick={() => handleNumberClick('9')} name={`9`} />
        {show && <Delete style={` hover:bg-[#424447] transition-transform hover:scale-110 cursor-pointer bg-[#262729]  w-12 h-12 p-2 pl-1 rounded-full`} onClick={() => handleDelete()} />}
        {!show && <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-green-500 text-xl`} onClick={() => handleButtonClick('*')} name={`X`} />}
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`}  onClick={() => handleNumberClick('4')} name={`4`} />
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`}  onClick={() => handleNumberClick('5')} name={`5`} />
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`}  onClick={() => handleNumberClick('6')} name={`6`} />
       {show && <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-red-500 text-xl`} onClick={() => handleButtonClick('C')} name={`C`} />}
       {!show && <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-green-500 text-5xl pb-1`} onClick={() => handleButtonClick('-')} name={`-`} />}
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`} onClick={() => handleNumberClick('1')} name={`1`} />
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`} onClick={() => handleNumberClick('2')} name={`2`} />
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`} onClick={() => handleNumberClick('3')} name={`3`} />
         {show && <Arrow style={`bg-[#262729] hover:bg-[#424447] transition-transform hover:scale-110 cursor-pointer  w-12 h-12 py-2 rounded-full `} />} 
        {!show && <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-green-500 text-3xl`} onClick={() => handleButtonClick('+')} name={`+`} />}
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`} onClick={() => handleNumberClick('-')} name={`+/-`} />
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`} onClick={() => handleNumberClick('0')} name={`0`} />
        <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} text-white text-xl`} onClick={() => handleNumberClick('.')} name={`.`} />
        {show && <Arrow style={`bg-[#262729] hover:bg-[#424447] transition-transform hover:scale-110 cursor-pointer w-12 h-12 py-2 rotate-180 rounded-full `} />} 

        {!show && <Button style={`${show ? 'w-12 h-12' : 'w-20 h-20'} bg-green-600 hover:bg-green-500 text-white text-4xl`} onClick={() => handleButtonClick('=')} name={`=`} />}
      </article>

      </section>
    </div>
  );
}

export default App;
