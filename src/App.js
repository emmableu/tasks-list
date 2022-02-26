import logo from './logo.svg';
import './App.css';
import tasksJson from "./tasksJson";
import Gif from "./Gif";

function App() {
  return (
    <div className="App">
      {Object.values(tasksJson).map(item => (
          <div style={{width:"100%"}}>
            <h5>{item.name}</h5>
            {item.content}
            <Gif imgSrc={item.png} gifSrc={item.gif}/>
            <hr className="dashed"/>
          </div>
          )
      )}
    </div>
  );
}

export default App;
