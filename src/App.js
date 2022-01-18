// import logo from './logo.svg';
import './App.css';
import GridView from './components/GridView/GridView';
import Destination from './components/Destination/Destination';
// import Router from './components/Destination/Router';
// import Paradise from './components/Paradise';
import Gift from './components/Gift';
function App() {
  return (
    <div className="App">
      <GridView/>
      <Destination/>
      {/* <Router/> */}
      {/* <Paradise/> */}
      <Gift/>
    </div>
  );
}

export default App;
