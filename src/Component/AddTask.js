import Modal from 'react-modal';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
const AddTask = () => {
  
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    
    const dispatch=useDispatch()

    
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
      
      Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = React.useState(false);
const handleSubmit=()=>
{
    const info ={title,date,description}
    console.log(info)
    dispatch(addTask(info))

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
        <Button onClick={openModal} variant="light">Add task</Button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <h5>Add your task</h5>
        <form  onSubmit={handleSubmit} class="row" >
          <label>Task title</label>
          <input type="text" value={title} onChange={e=>setTitle(e.target.value)}  />
          <label>Description</label>
          <input type="text" value={description} onChange={e=>setDescription(e.target.value)} />
          <label>Date</label>
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
          <Button variant="success" style={{width:"20%" }} type="submit" className='element' >Add</Button>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask