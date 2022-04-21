import React from 'react'
import axios from "axios";


export const fetchDataWithAxios = async (fetchOffset) => {
    const res = await axios(`https://xoosha.com/ws/1/test.php?offset=${fetchOffset}`)
    return res.data
}

export const fetchMoreListItems = async () => {
    const res = await axios("https://xoosha.com/ws/1/test.php?offset=21")
    return res.data
}
