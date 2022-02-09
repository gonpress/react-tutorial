import React from 'react';
import {useParams} from 'react-router-dom';



const Detail = () => {
    const params = useParams();
    console.log(params.movieid);
    return (
        <div>
            <h1>Detail Page {params.movieid}</h1>
        </div>
    );
};

export default Detail;
