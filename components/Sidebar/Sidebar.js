import React, { Fragment } from 'react'
import Link from 'next/link'
import { ActiveLink } from '../index';
import { sideBarData } from '../../lib/SidebarData';
const Sidebar = () => {

    return (
        <div>
            <Fragment>
                <aside className="sidebar">
                    {/* <ActiveLinkside className="sidebar__nav-trigger">
                    <label htmlFor="nav-drawer__trigger">
                    </label>
                </ActiveLinkside> */}
                    <div className="airgate-logo">
                        <Link href="./dashboard">
                            <a><img src="./logo.png" alt="" height="30" /></a>
                        </Link>
                    </div>
                    {
                        <ul className="main-menu mt-5 ms-3">
                            {
                                sideBarData.map((data) => {
                                    const { href, mainIcon, activeIcon, title } = data;
                                    return (
                                        <li className="main-menu__item">
                                            <ActiveLink href={href} mainIcon={mainIcon} activeIcon={activeIcon} title={title}></ActiveLink> 
                                        </li>
                                    )
                                })
                            }

                            <div className="bottom">
                                <ul className="sub-menu">
                                    <li className="main-menu__item">
                                        Last login:
                                    </li>
                                    <li className="main-menu__item">
                                        20/12/2021 @ 4:47PM
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    }
                </aside>
                <label htmlFor="nav-drawer__trigger" className="pseudo-sidebar" />
            </Fragment>
        </div>
    )
}

export default Sidebar