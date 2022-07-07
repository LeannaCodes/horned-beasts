import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import data from "./Components/data.json";


function App() {
  return (
    <div className="App">     
      <Header />
      <Main data={data}/>
      <Footer />
      
    </div>
  );
}

export default App;
