// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//  
//   // 
//  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import React from 'react';

const App = () => {
    // 변수, 상수, 함수, 상태 값 선언


    const data = 'name';
    const a = 5;
    const b = 2;

    const add = (a, b) => {
        return a+b;
    }


  return (
      // 화면에 보여지는 부분
      <div>
        <h1>{add(a,b)}</h1>
      </div>
  );
};

export default App;
