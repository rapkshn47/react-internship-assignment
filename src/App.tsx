import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage.tsx";
import SecondPage from "./components/SecondPage.tsx";
import NoMatch from "./components/NoMatch.tsx";
import { useState } from "react";
import './App.css'

function App() {
  const ConditionalSecondPage = () => {
    if (login) {
      return <SecondPage />;
    } else {
      return (
        <div>
          <FirstPage setLogin={setLogin} />
          {login === false && (
            <div className="warning">
              <p>You have to fill all the details to go to Second Page.</p>
            </div>
          )}
        </div>
      );
    }
  };

  const [login, setLogin] = useState(false);

  return (
    <div className="container">
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage setLogin={setLogin} />} />
        <Route path="/SecondPage" element={<ConditionalSecondPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
