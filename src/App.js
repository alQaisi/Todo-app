import { Routes, Route } from 'react-router';
import Container from './components/Container/Container.component';
import RoutesHandler from './routes/RoutesHandler/RoutesHandler.component';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container/>}>
        <Route index element={<RoutesHandler page="all"/>}/>
        <Route path="active" element={<RoutesHandler page="active"/>}/>
        <Route path="completed" element={<RoutesHandler page="completed"/>}/>
      </Route>
    </Routes>
  );
}

export default App;
