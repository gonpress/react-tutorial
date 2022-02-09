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

import React, {useEffect, useState} from 'react';
// import useSWR from 'swr';
//
import axios from "axios";
// const fetcher = (url) => fetch(url).then((res) => res.json());


const App = () => {
    // 변수, 상수, 함수, 상태 값 선언
    // const {data, error} = useSWR(
    //     'https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1',
    //     fetcher
    // );
    // if (error) return "An error has occurred.";
    // if (!data) return "Loading...";
    //
    // console.log(data);

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMovies  = async () => {
        try{
            const {data} = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1');
            console.log("+++++++++++++++++", data.results);
            setMovies(data.results);
            setIsLoading(false);
        } catch (e) {
            console.log(e.message);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
      // 화면에 보여지는 부분
      <div>
          {isLoading ? (
              <h1>로딩 중...</h1>
          ) : (
              <>
                  {movies.map(movie => (
                      <h1 key={movie.id}>{movie.title}</h1>
                  ))}
              </>
          )}
          {/*{data.results.map(result => (*/}
          {/*    <h1>{result.title}</h1>*/}
          {/*))}*/}
          {/*{movies.map(movie => (*/}
          {/*    <h1 key={movie.id}>{movie.title}</h1>*/}
          {/*))}*/}
      </div>
    );
};

export default App;
