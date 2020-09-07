import React from 'react'
import { Icon } from '@material-ui/core';
import Language from "@material-ui/icons/Language"
import PermIdentity from "@material-ui/icons/PermIdentity"
import AppsSharp from "@material-ui/icons/AppsSharp"





import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__contentLeft">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg" alt="" />
                <ul className="navbar__links">
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Safety</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">COVID-19 resources</a></li>
                </ul>
            </div>
            <div className=" navbar__contentRight">
                <ul className="navbar__links">
                    <li><a href="#"><Language style={{ fontSize: 16 }} /><p>EN</p></a></li>
                    <li><a href="#"><AppsSharp style={{ fontSize: 16 }} /><p>Product</p></a></li>
                    <li><a href="#"><PermIdentity style={{ fontSize: 16 }} /><p>Log in</p></a></li>
                    <li><a> Sign up</a></li>

                </ul>

            </div>

        </div>
    )
}

export default Navbar
