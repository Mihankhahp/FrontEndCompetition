import React from 'react';
import axios from "axios";


export const fetchData = async (fetchOffset) => {
    const res = await axios(`https://xoosha.com/ws/1/test.php?offset=${fetchOffset}`)
    return res.data
}
