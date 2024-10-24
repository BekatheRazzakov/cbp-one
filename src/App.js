import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import './tailwind.css';
import { lazy, Suspense } from "react";

const Unauthorized = lazy(() => import('./containers/Unauthorized/Unauthorized'));
const TermsAndConditions = lazy(() => import('./containers/TermsAndConditions/TermsAndConditions'));
const Login = lazy(() => import('./containers/Login/Login'));

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
          element={<Suspense fallback={<></>}><Unauthorized/></Suspense>}
        />
        <Route
          path='terms-and-conditions'
          element={<Suspense fallback={<></>}><TermsAndConditions/></Suspense>}
        />
        <Route
          path='login'
          element={<Suspense fallback={<></>}><Login/></Suspense>}
        />
      </Routes>
    </div>
  );
}

export default App;
