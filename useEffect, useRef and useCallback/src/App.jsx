import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passGen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random * str.length +1);
      pass = str.charAt(char);
    }

    setPassword(pass);

    
  }, [length, numAllowed, charAllowed, setPassword]);
  
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700 text-center">
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <input
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3 mx-auto my-4 bg-white rounded-2xl"
      placeholder="Your Secure Password"
      readOnly
      ></input>
    </div>
  );
}

export default App;
