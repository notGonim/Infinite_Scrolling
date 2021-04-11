import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';




export const Post = ({ p ,id }) => {
    return (
        <div>
            <h1>{p}</h1>
            <p>{id}</p>
        </div>
    )
}
