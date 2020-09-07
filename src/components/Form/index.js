import React from 'react'
import "./index.css";

export default function Form() {
    return (
        <div className="form">
            <form>
                <div>
                    <h5> First Name:</h5>
                <input name="name" type="text" placeholder="First Name" />
                </div>
                <div>
                    <h5> Last name:</h5>
                <input name="name" type="text" placeholder="Lastname" />

                </div>
                <div>
                    <h5>Email:</h5>
                <input name="text" type="email" placeholder="Email" />
                </div>
                <div>
                    <h5>Password</h5>
                <input name="name" type="password" placeholder="Password" />
                </div>
                <div>
                    <h5> Phonenumber</h5>
                <input name="number" type="phonenumber" placeholder="Phonenumber" />
                </div>
                <div>
                    <h5>City you'll drive in</h5>
                <input name="name" type="text" placeholder="City you'll drive in..." />
                </div>
                <div>
                    <h5> Invite Code:</h5>
                <input name="number" type="text" placeholder="Invite code" />
                </div>
                <div>
                <p>
                By proceeding, I agree to Uber's <a href="#">Terms of Use</a> and acknowledge that I have read the <a href="#">Privacy Policy</a>.
                </p>
            </div>
            <div>
                <p>
                I also agree that Uber or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes.
                </p>
            </div>
            <button type="submit">Sign up to drive</button>
            <p>Already have an account? <a href="#">Sign in</a></p>
            </form>
            
        </div>
    )
}
