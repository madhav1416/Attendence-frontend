import { Button, IconButton, Modal } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import React, { useState ,useEffect } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from "axios";
import '../css/Teacher.css';
function Employee() {
  const [student,setStudent] = useState([]);
  const [open, setOpen] = useState(false);
  const [att, setAtt] = useState('');
  const [id,setId]  = useState(null);

  useEffect(()=>{
    fetchData();
},[]);
const fetchData = async () => { 
  const result = await axios.get('http://localhost:3000/users/students');
  const data  = result.data;
  setStudent(data);
  console.log(data);
}

  const handleChange = (event) => {
    setAtt(event.target.value);
  };
  const handleSubmit =() => {
    var value = (att=="present") ? {"present" :true} : {"present" :false};
    axios.post("http://localhost:3000/attendence/"+id,value);
  }

  const handleClickOpen = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div className="employee">
        <div className="employee-header">
            <h2>Students</h2>
            <Button>
                Add Student</Button>
        </div>
        <div className="employee-list">
            {
                student.map(std => (
                    <div className="employee-info">
                    <div className="employee-icon">
                    <IconButton onClick={() =>handleClickOpen(std._id)}><MoreVertIcon /></IconButton>
                    </div>
                    <div className="employee-avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uhbM5c_nPDHv2c_t3_fpI8MuCW6n68ltXQ&usqp=CAU" alt="Avatar"/>
                    </div>
                    <div className="employee-name">
                    <h6>{std.username}</h6>
                    </div>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Mark the Attendence</DialogTitle>
        <DialogContent>
          <form >
            <FormControl>
              <InputLabel htmlFor="demo-dialog-native">Attendence</InputLabel>
              <Select
                native
                value={att}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                <option value={"present"}>Present</option>
                <option value={"absent"}>Absent</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit}  color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Employee;