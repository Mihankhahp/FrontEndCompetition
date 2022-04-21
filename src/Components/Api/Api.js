import axios from "axios";


export const fetchData = async (newFetchOffset) => {
    // console.log(fetchOffset);
    const res = await axios(`https://xoosha.com/ws/1/test.php?offset=${newFetchOffset}`)
    return res.data
}
