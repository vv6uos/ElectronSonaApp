import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Login } from "./pages/index";
import { Header } from "./components/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path='/' exact Component={Home}/>
            <Route path='about' Component={About} */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
