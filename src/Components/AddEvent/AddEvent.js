import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Navbar/Navbar';

const AddEvent = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        fetch('https://nameless-inlet-35612.herokuapp.com/addEvents',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }

    return (
        <div className="event-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Navbar></Navbar>
                    </div>
                    <div className="col-lg-9">
                        <h4>Add Event</h4>

                        <form onSubmit={handleSubmit(onSubmit)} className="addEvent-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    {errors.eventTitle && <span>Title is required</span>}
                                    <input name="eventTitle" ref={register({ required: true })} placeholder="Enter Title"/>
                                </div>
                                <div className="col-lg-6">
                                    {errors.eventDate && <span>Date is required</span>}
                                    <input name="eventDate" ref={register({ required: true })} placeholder="Enter Date"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    {errors.description && <span>Description is required</span>}
                                    <textarea name="description" ref={register({ required: true })} placeholder="Enter Description"></textarea>
                                </div>
                                <div className="col-lg-6">
                                    {errors.banner && <span>Image is required</span>}
                                    <input name="banner" ref={register({ required: true })} placeholder="Upload Image"/>
                                </div>
                            </div>
                            

                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>          
        </div>
    );
};

export default AddEvent;