import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Ecommerce from "./Ecommerce";
import Status from "./Status";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="Home">
            <div className="maxDiv">
                <div className="Home-content">
                    <div>
                        <div className="logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" />
                            <h2>Instagram</h2>
                        </div>
                        <div className="Home-buttons">
                            <button onClick={() => handleNavigation('/')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
                                </svg>
                                <label>Home</label>
                            </button>
                            <button onClick={() => handleNavigation('/search')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <path stroke="none" d="M0 0h24H0z" fill="none" />
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                </svg>
                                <label>Search</label>
                            </button>
                            <button onClick={() => handleNavigation('/explore')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <path stroke="none" d="M0 0h24H0z" fill="none" />
                                    <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                </svg>
                                <label>Explore</label>
                            </button>
                            <button onClick={() => handleNavigation('/reels')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <path stroke="none" d="M0 0h24H0z" fill="none" />
                                    <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                                    <path d="M10 9l5 3l-5 3z" />
                                </svg>
                                <label>Reels</label>
                            </button>
                            <button onClick={() => handleNavigation('/messages')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <path stroke="none" d="M0 0h24H0z" fill="none" />
                                    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                                    <path d="M8 13l3 -2l2 2l3 -2" />
                                </svg>
                                <label>Messages</label>
                            </button>
                            <button onClick={() => handleNavigation('/notifications')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <path stroke="none" d="M0 0h24H0z" fill="none" />
                                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                </svg>
                                <label>Notification</label>
                            </button>
                            <button onClick={() => handleNavigation('/create')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <path stroke="none" d="M0 0h24H0z" fill="none" />
                                    <path d="M9 12h6" />
                                    <path d="M12 9v6" />
                                    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                                </svg>
                                <label>Create</label>
                            </button>
                            <button onClick={() => handleNavigation('/profile')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <path stroke="none" d="M0 0h24H0z" fill="none" />
                                    <path d="M12 7a4 4 0 1 0 0 -8 4 4 0 0 0 0 8z" />
                                    <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                                </svg>
                                <label>Profile</label>
                            </button>
                        </div>
                    </div>
                    <div className="Home-content-right">
                        <div className="statusDiv">
                            <Status />
                            <Status />
                        </div>
                        <div className="ecommerceDiv">
                            <Ecommerce />
                            <Ecommerce />
                        </div>

                    </div>
                    <div className="suggested">

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
