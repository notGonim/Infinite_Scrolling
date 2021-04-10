import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

export const UseBookSearch = () => {

    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)


    const handleData = (e) => {
        setQuery(e.target.value)
        setPageNumber(1)

    }


    useEffect(async () => {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query}`)
        console.log(data)
    })
    return (
        <>
            <input type="text" value={query} onChange={handleData} />
            <div className="">Title</div>
            <div className="">Loading...</div>
            <div className="">Error </div>
        </>
    )
}
