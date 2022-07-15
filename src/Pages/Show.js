import React, { useEffect, useReducer } from 'react';
import { useParams } from "react-router-dom";
import { apiGet } from '../misc/config';


const reducer = (prevState, action) => {
    switch (action.type) {

        case 'FETCH_SUCCESS': {
            return { isLoading: false, error: null, show: action.show }
        }

        case 'FETCH_FAILED': {
            return { ...prevState, isLoading: false, error: action.error }
        }


        default: return prevState
    }
}

const initialState = {
    show: null,
    isLoading: true,
    error: null
}




const Show = () => {

    const { id } = useParams();


    // const [show, setShow] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    //now we are using useReducer in place of useState





    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state)
    useEffect(() => {

        let isMounted = true;


        apiGet(`/shows/${id}?embed[]=episodes&embed[]=cast`).then(result => {

            setTimeout(() => {
                if (isMounted) {

                    dispatch({ type: 'FETCH_SUCCESS', show: result })

                    // setShow(result);
                    // setIsLoading(false);

                }

            }, 2000)

        }).catch(err => {
            if (isMounted) {

                dispatch({ type: 'FETCH_FAILED', error: err.message })

                // setError(err.message);
                // setIsLoading(false);

            }
        });


        return () => {
            isMounted = false;
        }



    }, [id])

    // console.log("show", show)

    // if (isLoading) {
    //     return <div>Data is being loaded </div>
    // }

    // if (error) {
    //     return <div> Error occured ": {error}</div>
    // }

    return (
        <div> this is just a page</div>
    )
}

export default Show