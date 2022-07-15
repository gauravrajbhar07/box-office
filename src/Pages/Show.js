import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { apiGet } from '../misc/config';

const Show = () => {

    const { id } = useParams();

    const [show, setShow] = useState(null);


    useEffect(() => {
        apiGet(`/shows/${id}?embed[]=episodes&embed[]=cast`).then(result => {
            setShow(result);
        })
    }, [id])

    console.log("show", show)

    return (

        <div> this is just a page</div>
    )
}

export default Show