import { Navigate, Route, Routes } from "react-router-dom";
import Unauthorized from "./containers/Unauthorized/Unauthorized";
import './App.css';
import './tailwind.css';
import TermsAndConditions
  from "./containers/TermsAndConditions/TermsAndConditions";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='*'
          element={<Navigate
            to='/unauthorized'
            replace
          />}
        />
        <Route
          path='unauthorized'
          element={<Unauthorized/>}
        />
        <Route
          path='terms-and-conditions'
          element={<TermsAndConditions/>}
        />
      </Routes>
    </div>
  );
}

export default App;
