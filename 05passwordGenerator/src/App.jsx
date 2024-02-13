import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8); //hook
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook->kisi bhi cheez ka reference lena hota h tab useref hook use hota h, use krne k liye usse ek variable banana pdata h
  const passwordRef = useRef(null)




  //useCallback hook-> lets you cache a function definition bw re-renders
  //useCallback(fn , dependencies)
  //dependencies; unpei kuch ched chaad hui toh woh method wapas se run hota hai

  //baar baar this methd will be running, numbers allow h ya nahi, characters allow h ya nahi?
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);//for ui updation to show password
  }, [length, numberAllowed, charAllowed, setPassword]);

  //isko bhi optimize kar sakte h kya? yes, use useCallback
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password) //copy krke paste kr sakein..
  }, [password])

  //jo method ko call kr sake passwordGenerator
  //jb first time pg load hota h tab run hoga aur jb in dependencies array m se ched chaad hui kuch bhi badla, toh dobara se re run
  useEffect(() => {  
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]); //agar inmei kuch bhei ched chaad ho toh run again

//passwordGenerator()  kr sakte call asie? error aise call nhi kr saktei kyuki usecallback lagay hua
//too many re renders 

  //useEffect hook
  useEffect(()=>{
    passwordGenerator()
  }, 
  [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev_val) => !prev_val); //callback
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev_val) => !prev_val);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
