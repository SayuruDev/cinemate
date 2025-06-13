import './App.css';
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer} from "./components"

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes />
      <footer/> 
    </div>
  );
}

export default App;
