import React, { useState } from 'react'
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
const ToDoCard = ({task}) => {
 
  //useSelector : contient les valeurs de state
  const [updatedname, setUpdatedName] = useState(task.name)
  const [updateddate, setUpdatedDate] = useState(task.date)
  const [updateddescription, setUpdatedDescription] = useState(task.description)
  
    const dispatch=useDispatch()
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
      content: {
        width:"30%",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    const handleSubmit=(e)=>
    {
      e.preventDefault();
       const info = {
        id:task.id,
        name:updatedname,
        date:updateddate,
        description:updateddescription,
        done:task.done
       }
        dispatch(editTask(info))
    
        closeModal()
    
    }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>    
    <Card>
     <Card.Header as="h5">{task.name}</Card.Header>
     <Card.Body  className='container'>
     <Card.Text>
       date: {task.date}
       </Card.Text>
       <Card.Text>
        {task.description}
       </Card.Text>
       <div  style={{ textDecoration: task.completed ? "line-through" : "" }}>
       <Button onClick={openModal} variant="success"  className='element' >edit</Button>
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <h5>Add your task</h5>
        <form onSubmit={handleSubmit}  class="row" >
          <label>Task title</label>
          <input type="text" value={updatedname} onChange={e=>setUpdatedName(e.target.value)}  />
          <label>Description</label>
          <input type="text" value={updateddescription}  onChange={e=>setUpdatedDescription(e.target.value)}/>
          <label>Date</label>
          <input type="date" value={updateddate} onChange={e=>setUpdatedDate(e.target.value)} />
          <Button variant="success" style={{width:"20%" }} type="submit" className='element' >Modifier</Button>
          <Button variant="success" style={{width:"20%" }} onClick={closeModal} type="submit" className='element' >Annuler</Button>

        </form>
      </Modal>
       <Button  onClick={()=>dispatch(deleteTask(task.id))} variant="danger" className='element'>Delete</Button>
       </div> 
      
       
     </Card.Body>
   </Card></div>
  )
}

export default ToDoCard