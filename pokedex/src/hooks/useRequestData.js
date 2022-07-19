import React, { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        axios.get(url)
        .then((res) => {setData(res.data.results)})
        .catch((err) => {alert(err.message)})
    }, [url])
    return data;
}