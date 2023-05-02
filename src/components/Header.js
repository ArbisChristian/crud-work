import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import "./Header.css"
const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/"){
            setActiveTab("Home");
        } else if(location.pathname === "/add"){
            setActiveTab("AddContact");
        } else if (location.pathname === "/about") {
            setActiveTab("About");
        }
    }, [location]);
    return(
        <div className="header">
            <p className="logo">CRUD</p>
            <div className="header-right">
            <Link to="/about">
                <p className= { `${activeTab === "About" ? "active" : ""}`} 
                    onClick={() => setActiveTab("About")} 
                    > 
                       Home
                    </p>
                
                </Link>
                <Link to="/">
                    <p className= { `${activeTab === "Home" ? "active" : ""}`}
                    onClick={() => setActiveTab("Home")} 
                    > 
                        CRUD
                    </p>
                
                </Link>
                <Link to="/add">
                <p className= { `${activeTab === "AddContact" ? "active" : ""}`} 
                    onClick={() => setActiveTab("AddContact")} 
                    > 
                       Add Employee
                    </p>
                
                
                
                
                </Link>
            </div>

        </div>
    );
};

export default Header;