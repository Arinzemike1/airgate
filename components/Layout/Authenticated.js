import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Authenticated = ({ children }) => {
    return (
        <div>
            

            <section>
                <Sidebar />
                <Header />

                <main className="main-layout">
                    {children}
                </main>
            </section>
        </div>
    )
}

export default Authenticated
