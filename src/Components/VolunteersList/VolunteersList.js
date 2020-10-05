import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { AiFillDelete } from 'react-icons/ai';


const VolunteersList = () => {


    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('https://nameless-inlet-35612.herokuapp.com/getVolunteers')
        .then( res => res.json())
        .then( data => setVolunteers(data))
        .catch( err => console.log(err))
    },[])

    const handleDeleteEvent = (id) => {
        fetch(`https://nameless-inlet-35612.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
    }

    return (
        <div className="list-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Navbar></Navbar>
                    </div>
                    <div className="col-lg-9">
                        <h4>Volunteer register list</h4>
                        <div className="Volunteers-list">

                            <table className="table-list" style={{ width: '100%' }}>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Volunteer List</th>
                                    <th>Action</th>
                                </tr>
                                {
                                    volunteers.map(data => 
                                        
                                        <tr>
                                            <td>{data.allInfo.name}</td>
                                            <td>{data.allInfo.email}</td>
                                            <td>{data.allInfo.date}</td>
                                            <td>{data.eventTitle}</td>
                                            <td><AiFillDelete onClick={() => handleDeleteEvent(data._id)} className="action"/></td>
                                        </tr>
                                    )
                                }
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteersList;