import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//NavLink 링크가 선택되는 해당 링크에 class=active 된다. 그걸로 사용자가 선택한 항목을 표시 할수 있음. 
//HashRouter : url에 # 이 붙는다.  (http://localhost:3000/#/contact )
import { BrowserRouter, HashRouter, Route, Routes, Link, NavLink , useParams} from "react-router-dom";  //HashRouter, NavLink

function Home() {
  return (
    <div>
      <h2>home</h2>
      home...
    </div>
  )
}


var contents = [
  {id:1, title:'html', description:'html...'},
  {id:2, title:'js', description:'js...'},
  {id:3, title:'react', description:'react...'}
]

function Topic() {
  var params = useParams();
  console.log(params);
  return (
    <div>
      <h3>Topic</h3>
      topic...
    </div>
  )
}

function Topics() {
  var lis = [];
  for (var i=0; i<contents.length; i++) {
    lis.push(<li><NavLink to={'/topics/'+ contents[i].id}>{contents[i].title}</NavLink></li>)
  }

  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
      <Route path="/topics/:topic_id" element={<Topic />} > </Route> 
          {/* <Route path="/topics/1">html...</Route>
          <Route path="/topics/2">js...</Route>
          <Route path="/topics/3">react...</Route> */}
      </Routes>
    </div>
  )
}

function Contact() {
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

//V5
// function App() {
//   return (
//     <div> 
//       <h1>Hello React Router Dom</h1>
//       <BrowserRouter>
//       <ul>
//         <li><a href="/">home</a></li>
//         <li><a href="/topics">topics</a></li>
//         <li><a href="/contact">contact</a></li>
//       </ul>
//       <Route path="/"><Home></Home></Route>
//       <Route path="/topics"><Topics></Topics></Route>
//       <Route path="/contact"><Contact></Contact></Route>
//       </BrowserRouter>
//     </div>
//   )
// }

//V6
function App() {
  return (
    <div className="App">
      <h1>Hello React Router Dom</h1>
      <BrowserRouter>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/topics">Topics</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/topics/*" element={<Topics />}></Route>
          <Route path="/contact/*" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <App />
  // </React.StrictMode>
);

// ReactDOM.render( <BrowserRouter>  <App /> </BrowserRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
