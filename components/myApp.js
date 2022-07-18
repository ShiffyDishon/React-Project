

import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from 'react-router-dom'
import LogIn from './Login'
import Todos from './Links/Todos'
import Albums from './Links/Albums'
import Info from './Links/Info'
import Posts from './Links/Posts'
import Comments from './Links/Comments'
import Album from './Links/Album'
import { useEffect } from 'react/cjs/react.production.min';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';




export default function MyApp() {
    const user = JSON.parse(localStorage.getItem('user'));

    let history = useHistory();
    return (
        <div className="myApp" >
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                crossorigin="anonymous" />
            <div className="header">
                <Nav justify variant="tabs" >
                    <Nav.Item >
                        <Nav.Link className="linksMyApp" eventKey="link-1">
                            <Link to={`/users/${user.id}/todos`}>Todos</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="linksMyApp" eventKey="link-2">
                            <Link to={`/users/${user.id}/albums`}>albums</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="linksMyApp" eventKey="link-3">
                            <Link to={`/users/${user.id}/posts`}>posts</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="linksMyApp" eventKey="link-4">
                            <Link to={`/users/${user.id}/info`}>info</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="linksMyApp" eventKey="link-5">
                            <Link to="/LogIn">logout</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Switch>
                    <Route path="/users/:idUser/todos">
                        <Todos userID={user.id} />
                    </Route>
                 
                    <Route path="/users/:idUser/albums">
                        <Albums userID={user.id} />
                    </Route>
                    <Route path="/users/:idUser/posts">
                        <Posts userID={user.id} />
                    </Route>
                    <Route path="/users/:idUser/info">
                        <Info user={user} />
                    </Route>
                    <Route path="/LogIn">
                        <LogIn />
                    </Route>
                    <Route exact path="/:userId">
                        <h1>{user.name}</h1>
                    </Route>

                </Switch>
            </div>
        </div>
    )
}

