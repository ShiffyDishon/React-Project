import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function LogIn() {
    let history = useHistory();
    const [userInfo, setUserInfo] = useState({ name: '', password: '' });
    useEffect(() => localStorage.setItem('user', "{}"), []);
    const submitHandler = (e) => {
        let user;
        e.preventDefault()
        try {
            user = findUser();
        }
        catch (err) {
            alert(err);
            setUserInfo({ name: '', password: '' });
        }
    }
    const changeHandler = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value })
    }
    const findUser = () => {
        let user;
        if (userInfo.password.length != 4)
            throw "password isn't valid"
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(response => response.json())
            .then(data => {
                user = data.find((user) =>
                    (userInfo.name === user.username) && (user.address.geo.lat.split('.')[1] === userInfo.password))
                if (!user)
                    throw "user deosn't exist"
                localStorage.setItem('user', JSON.stringify(user));
                history.push(`/users/${user.id}`)
            })
            .catch((err) => { alert(err) })
    }
    return (
        <div className="main">
            <div className="container">
                <center>
                    <div className="middle">
                        <div id="login">
                            <form onSubmit={(e) => { submitHandler(e) }} action="javascript:void(0);" method="get">
                                <fieldset className="clearfix">
                                    <p><span className="fa fa-user"></span><input type="text" Placeholder="Username" name="name" value={userInfo.name} onChange={(e) => changeHandler(e)} required /></p>
                                    <p><span className="fa fa-lock"></span><input type="password" Placeholder="Password" name="password" value={userInfo.password} onChange={(e) => changeHandler(e)} required /></p>
                                    <div>
                                        <span style={styleForgot}><a className="small-text" href="#">Forgot password?</a></span>
                                        <span style={styleSub}><input type="submit" value="Sign In" /></span>
                                    </div>
                                </fieldset>
                                <div className="clearfix"></div>
                            </form>
                            <div className="clearfix"></div>
                        </div>
                        <div className="logo">LOG IN<div className="clearfix"></div></div>
                    </div>
                </center>
            </div>

        </div>
    )
}

const styleForgot ={
    width: '48%', textAlign:'left',  display: 'inline-block'
}
const styleSub ={
    width:'50%', textAlign:'right',  display: 'inline-block'
}