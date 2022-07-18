import React, { useState, useEffect } from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { getFetch } from '../service'

export default function Album({title}) {
    const { idAlbum } = useParams();
    const [photos, setPhotos] = useState([]);
    const [limit, setLimit] = useState(0);
    const [ableButton, setAbleButton] = useState(true);

    useEffect(async () => {
        Load()
    }, []);

    const Load = async () => {
        let result = await getFetch(`https://jsonplaceholder.typicode.com/photos?albumId=${idAlbum}&_start=${limit}&_limit=10`)
        setPhotos(prev => [...prev, ...result])
        setLimit(prev => prev + 10);
    }

    return (
        <div>
            <div>
                {title}
                {photos && photos.map((photo, index) =>
                    <img src={photo.thumbnailUrl} className="pic"></img>)
                }
            </div>
            {ableButton && <button onClick={Load} className="btnLoad">load more</button>}

        </div>
    )
}