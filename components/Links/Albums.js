import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Link, Route, useRouteMatch } from 'react-router-dom'
import { getAlbums } from '../service'
import Album from './Album'
import { getFetch } from '../service'

export default function Albums({ userID }) {
    let match = useRouteMatch()

    const [albums, setAlbums] = useState([]);
    const [title, setTitle] = useState();

    useEffect(async () => {

        let result = await getFetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
        result = sortAlfabet(result);
        setAlbums([...result]);
    }, []);

    const sortAlfabet = (result) => {
        const shuffled = result.sort(function (a, b) {
            if (a.title.toUpperCase() < b.title.toUpperCase()) { return -1; }
            if (a.title.toUpperCase() > b.title.toUpperCase()) { return 1; }
            return 0;
        });
        return shuffled;
    }

    return (
        <div>
            <Switch>
                <Route exact path="/users/:idUser/albums">
                    <div className="albums">
                        <ul>
                            {albums.map((album, index) => {
                                return <li key={index}>
                                    <Link to={`/users/${userID}/albums/${album.id}`} onClick={() => { setTitle(album.title) }} >{album.title} </Link>
                                    <div >{album.body}</div>
                                </li>
                            })}
                        </ul>
                    </div>
                </Route>
                <Route path="/users/:idUser/albums/:idAlbum">
                    <Album title={title} />
                </Route>
            </Switch>
        </div>

    )
}