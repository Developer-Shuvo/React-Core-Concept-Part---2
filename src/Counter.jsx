import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count + 1);
    };
   const handleSubtract = () => {
       setCount(count - 1);
   };
    return (
        <div style={{background: "rgba(9, 2, 45, 0.6)", marginTop:"20px", padding: "20px", border:"2px solid white", borderRadius:"8px", color: "white", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <h2 style={{ color: "lime", fontSize: "32px", textDecoration: "underline" }}>State Management</h2>

            <div style={{background: "rgba(9, 89, 61, 0.6)", border: "2px solid lime", padding: "40px", borderRadius: "8px", width: "fit-content" }}>
               <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                 <button onClick={handleAdd} style={{ border: "2px solid lime" }}>Increment</button>

                <button onClick={handleSubtract} style={{ border: "2px solid lime" }}>Decrement</button>
               </div>
                <h3>Counter : {count}</h3>

            </div>

        
        </div>
    )
}





// // Counter testing ------Self practice
// import { useState } from "react"

// export default function Counter() {
//     const [count, setCount]= useState(0);
//     const handleIncrement = ()=>{
//         setCount (count+ 1);
//     }

//     const handleDecrement = ()=>{
//         setCount (count -1);
//     }
//     return (
//         <div>
//             <h2>Counter :{count}</h2>
//             <button onClick={handleIncrement}> Increment</button>
//             <button onClick={handleDecrement}> Decrement</button>
//         </div>
//     )
// }