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

// 코드 빌드 순서
// 1. 위에서 아래로
// 2. '=' 를 기준으로 오른쪽에서 왼쪽으로 치환
// 3. .은 하위 메소드를 호출
// 4. ,는 그리고로 해석
// 5. {}

import React, {useState, useEffect} from 'react';
import axios from "axios";

const App = () => {
    // 변수, 상수, 함수, 상태 값 선언
    const [posts, setPosts] = useState([]);


    const getPosts = async () => {
        try{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log("+++++++++++++++++", data);
            setPosts(data);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
      // 화면에 보여지는 부분
      <div>
          {posts.map(post => (
              <h1 key={post.id}>{post.title}</h1>
          ))}
      </div>
    );
};

export default App;
