import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}> {/* Assuming 'store' is defined */}
    <Router>
        <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/pages/:id" Component={MovieDetail} />
        </Routes>
    </Router>
  </Provider>
  );
}
export default App;
