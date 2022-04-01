// import React from 'react'
// import AuthenticatedLayout from '../components/Layout/Authenticated';
// import UserCard from '../components/UserCard/UserCard';

// const Compliance = () => {
//     return (
//         <AuthenticatedLayout>
//             <UserCard>
//                 <div className="row compliance-section">
//                     <div className="col-md-1">
//                         <h6>ID</h6>
//                         <ul>
//                             <li>1</li>
//                             <li>2</li>
//                             <li>3</li>
//                             <li>4</li>
//                         </ul>
//                     </div>

//                     <div className="col-md-4">
//                         <h6>Details</h6>
//                         <p>
//                             Username: ferdnardjohn23 Email: ferdnardjohn@email.com Phone: 0706755555 Support Email: ferdnardjohn@email.com General Email: ferdnardjohn@email.com Location: Lagos, Nigeria
//                         </p>
//                     </div>

//                     <div className="col-md-2">
//                         <h6>Status</h6>
//                         <p>Pending</p>
//                     </div>

//                     <div className="col-md-2">
//                         <h6>Approved by</h6>
//                         <p>Super admin</p>
//                     </div>

//                     <div className="col-md-3">
//                         <h6>Comment</h6>
//                         <p>This account  has been approved grftsdds
//                             gthrdatsuvs bgtshgt gtfredsv htfgedaf
//                             grfdys fdffdgfg gdfcdb shhgfd gdhhdg fdsv
//                             d dnhgfgfh fgvdfd ffhbfn ghfhjf gdgdfd fdgdg</p>
//                     </div>
//                 </div>
//             </UserCard>
//         </AuthenticatedLayout>
//     )
// }

// export default Compliance



import React from 'react'
import AuthenticatedLayout from '../components/Layout/Authenticated';
import UserCard from '../components/UserCard/UserCard';
import Icon from '../components/Icons/icon';
import Table from '../components/Table/Table';

const headers = ["ID", "User Data", "Details", "Charges", "Date", "Status", "Authorized Users", "Reason for Cancellation"];

const Compliance = () => {
    return (
        <AuthenticatedLayout>
            <UserCard>
                <div>
                    <table className="compliance-table">
                        <thead>
                            <tr>
                                <th>ID&nbsp; &nbsp;<Icon name="id" /></th>
                                <th>Details</th>
                                <th>Status&nbsp; &nbsp;<Icon name="id" /></th>
                                <th>Approved by</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td className="user-details">Username: ferdnardjohn23<br />
                                    Email: ferdnardjohn@email.com<br />
                                    Phone: 0706755555 <br />
                                    Support Email: ferdnardjohn@email.com<br />
                                    General Email: ferdnardjohn@email.com<br />
                                    Location: Lagos, Nigeria</td>
                                <td><Icon name="pending" />&nbsp; &nbsp;Pending</td>
                                <td>Super admin</td>
                                <td className="w-25">This account  has been approved grftsdds
                                    gthrdatsuvs bgtshgt gtfredsv htfgedaf
                                    grfdys fdffdgfg gdfcdb shhgfd gdhhdg fdsv
                                    d dnhgfgfh fgvdfd ffhbfn ghfhjf gdgdfd fdgdg</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td className="user-details">Username: ferdnardjohn23<br />
                                    Email: ferdnardjohn@email.com<br />
                                    Phone: 0706755555 <br />
                                    Support Email: ferdnardjohn@email.com<br />
                                    General Email: ferdnardjohn@email.com<br />
                                    Location: Lagos, Nigeria</td>
                                <td><Icon name="pending" />&nbsp; &nbsp;Pending</td>
                                <td>Super admin</td>
                                <td className="w-25">This account  has been approved grftsdds
                                    gthrdatsuvs bgtshgt gtfredsv htfgedaf
                                    grfdys fdffdgfg gdfcdb shhgfd gdhhdg fdsv
                                    d dnhgfgfh fgvdfd ffhbfn ghfhjf gdgdfd fdgdg</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td className="user-details">Username: ferdnardjohn23<br />
                                    Email: ferdnardjohn@email.com<br />
                                    Phone: 0706755555 <br />
                                    Support Email: ferdnardjohn@email.com<br />
                                    General Email: ferdnardjohn@email.com<br />
                                    Location: Lagos, Nigeria</td>
                                <td><Icon name="pending" />&nbsp; &nbsp;Pending</td>
                                <td>Super admin</td>
                                <td className="w-25">This account  has been approved grftsdds
                                    gthrdatsuvs bgtshgt gtfredsv htfgedaf
                                    grfdys fdffdgfg gdfcdb shhgfd gdhhdg fdsv
                                    d dnhgfgfh fgvdfd ffhbfn ghfhjf gdgdfd fdgdg</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td className="user-details">Username: ferdnardjohn23<br />
                                    Email: ferdnardjohn@email.com<br />
                                    Phone: 0706755555 <br />
                                    Support Email: ferdnardjohn@email.com<br />
                                    General Email: ferdnardjohn@email.com<br />
                                    Location: Lagos, Nigeria</td>
                                <td><Icon name="pending" />&nbsp; &nbsp;Pending</td>
                                <td>Super admin</td>
                                <td className="w-25">This account  has been approved grftsdds
                                    gthrdatsuvs bgtshgt gtfredsv htfgedaf
                                    grfdys fdffdgfg gdfcdb shhgfd gdhhdg fdsv
                                    d dnhgfgfh fgvdfd ffhbfn ghfhjf gdgdfd fdgdg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </UserCard>
        </AuthenticatedLayout>
    )
}

export default Compliance
