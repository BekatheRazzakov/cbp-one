import { Navigate, Route, Routes } from "react-router-dom";
import Unauthorized from "./containers/Unauthorized/Unauthorized";
import './App.css';
import './tailwind.css';

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
      </Routes>
    </div>
  );
}

export default App;
