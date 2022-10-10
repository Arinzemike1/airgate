import React from 'react';

const Header = () => {
    return (
            <div className="header-container pt-4 pe-4 ps-4">
                <div className="row">
                    <div className="col mt-2 dashboard-details d-flex">
                        <img src="./dashboard-icon.png" alt="" className="me-2" height="27" /><p>Dashboard</p>
                    </div>

                    {/* <div className="col">
                        <form>
                            <div className="search">
                                <img src="./search-icon.png" className="search-icon" alt="" height="12" />
                                <input type="text" className="search-bar" placeholder="Search here..." />
                            </div>
                        </form>
                    </div> */}

                    {/* <div className="col d-flex">

                        <div className="mt-3 d-flex icons">
                            <img src="./notification-icon.png" className="me-5" alt="" height="18" />
                            <img src="./message-icon.png" alt="" height="18" />
                        </div>

                        <div className="d-block">
                            <h6 style={{ width: '10rem', marginBottom: '3px', fontSize: '15px' }}>Arinze Ihemedu</h6>
                            <p className="role">Frontend developer</p>
                        </div>

                        <div className="d-flex">
                            <img src="./avatar.png" alt="" className="avatar me-3" height="40" />
                            <img src="./arrow-down.png" className="mt-3 me-2" alt="" height="8" />
                        </div>
                    </div> */}
                </div>

            </div>
    )
}

export default Header
