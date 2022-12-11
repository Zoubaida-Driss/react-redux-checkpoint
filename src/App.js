import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from './Component/AddTask';
import { addTask } from './redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './Component/ToDoList';
import FilterTask from './Component/FilterTask';
import { useState } from 'react';
function App() {
  // const data=useSelector(state=>state.data)=>listTask
  //dispatch lel méthode 
  const [filterDone, setFilterDone] = useState()
    const data=useSelector(state=>state.data)


const handlefilterchange=(val)=>{
setFilterDone(val)
}

  return (
    <div className="App">
      <AddTask ></AddTask>
      <FilterTask  filterDone={filterDone} handlefilterchange={handlefilterchange} ></FilterTask>
   {
    filterDone=="done" ?<ToDoList data={data.filter(el=>el.done==true)} ></ToDoList>:<ToDoList data={data}></ToDoList>} 
    </div>
  );
}

export default App;
