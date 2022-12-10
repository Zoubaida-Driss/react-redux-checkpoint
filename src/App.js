import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from './Component/AddTask';
import { addTask } from './redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './Component/ToDoList';
import FilterTask from './Component/FilterTask';
function App() {
  // const data=useSelector(state=>state.data)=>listTask
  //dispatch lel méthode 
  

  return (
    <div className="App">
      <AddTask></AddTask>
      <FilterTask></FilterTask>
    <ToDoList></ToDoList>
    </div>
  );
}

export default App;
