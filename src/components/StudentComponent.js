import React, { useEffect , useState } from 'react';
import '../css/Student.css'
import axios from 'axios';
function Student() {
    const [profile,setProfile] = useState([]);
    const [attendence,setAttendence] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => { 
      const result = await axios.get("http://localhost:3000/users/"+localStorage.getItem('user').slice(1,-1));
      const data  = result.data;
      console.log(data);
      setProfile(data);
      const att = await axios.get("http://localhost:3000/students/"+localStorage.getItem('user').slice(1,-1)+"/attendence");
      setAttendence(att.data);
    }
    return (
        <div className="stu">
        <h3 className="stu-profile">Profile</h3>
        <div className="stu-dash">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uhbM5c_nPDHv2c_t3_fpI8MuCW6n68ltXQ&usqp=CAU" alt="Avatar"/>
        
         {
             profile.map((pro)=>(
                <div className="stu-dash-dash">
                <p>Name :- &nbsp; &nbsp; {pro.username}</p><br/>
                <p>Email :- &nbsp; &nbsp; {pro.email}</p><br/>
                <p>Contact :- &nbsp; &nbsp; {pro.contact}</p><br/>
                <p>About:-</p>
                </div>
             ))
         }
        </div>
        <h3 className="stu-profile">Attendences</h3>
        {
            attendence.map((att)=>(
                <div>
                <p>{att.date} : &nbsp; {att.present ? "Present" : "Absent"}</p>
                </div>
            ))
        }
        </div>
    )
}

export default Student;