import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../image/logo.png'
import { FiUsers } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';


const Navbar = () => {
    return (
        <div>
            <div className="brandImg">
                <img src={Logo} alt="logo" style={{width: "150px",height: "60px"}}/>
            </div>
            <div className="navBar">
                <Link className="navLink" to="/volunteersList"><FiUsers/> Volunteer register list</Link>
                <br/>
                <Link className="navLink" to="/addEvent"><AiOutlinePlus/> Add Event</Link>
            </div>
        </div>

    );
};

export default Navbar;