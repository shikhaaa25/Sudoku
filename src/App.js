// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import SudokuGame from "./Components/SudokuGame";

// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* <nav>
//           <ul>
           
//           </ul>
//         </nav> */}
//         <Routes>
//           <Route path="/sudoku" element={<SudokuGame />} />
//           <Route
//             path="/"
//             element={
//               <div>
//                 <h1>Welcome To Sudoku-Game</h1>
           
//                </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import SudokuGame from "./Components/SudokuGame";
import 'animate.css';


import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/sudoku" element={<SudokuGame />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/sudoku");
  };

  return (
    <>
   <h1 class="animate__heartBeat">Fun Time With Sudoku..!!</h1>
    <div className="Home">
      <h3 class="animate__heartBeat">Welcome To The Game</h3>
      <button onClick={handleButtonClick}>Let's Play</button>
    </div>
    </>
  );
}

export default App;

