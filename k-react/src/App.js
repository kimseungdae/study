import React from 'react';
import './css/App.css';
import Movie  from "./components/Movie";
import Text from './components/Text'
import Counter from "./components/Counter";


const moviesTitles = [
  "Matrix",
  "아기공룡 둘리",
  "올드보이",
  "스타워즈"
]

const moviesImages = [
'https://t1.daumcdn.net/cfile/blog/120165194C241D6933',
'https://bimage.interpark.com/goods_image/1/3/3/4/204021334g.jpg',
'https://upload.wikimedia.org/wikipedia/ko/4/48/Old_Boy.jpg',
'https://blog.ebaykorea.com/wp-content/uploads/2015/12/1214_%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_20.png'
]



function App() {
  return (
    <div className="App">
      <Movie movie={moviesTitles[0]} poster={moviesImages[0]}/>
      <Movie movie={moviesTitles[1]} poster={moviesImages[1]}/>
      <Movie movie={moviesTitles[2]} poster={moviesImages[2]}/>
      <Movie movie={moviesTitles[3]} poster={moviesImages[3]}/>
    </div>
  );
}

export default App;



