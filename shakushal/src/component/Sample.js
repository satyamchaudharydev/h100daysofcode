import React from 'react'
import { useParams } from 'react-router'
export const Sample = () => {
    const {id} = useParams()
    return (
        <div>
            {console.log(id)}
            <h2>{id}</h2>
        </div>
    )
}
