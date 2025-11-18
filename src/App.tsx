import './App.css';
import { Route, Routes } from 'react-router';
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { NewTask } from './pages/NewTask';
import { Task } from './pages/Task';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='/task' element={<Task />}></Route>
          <Route path='/task/new' element={<NewTask />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
