import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Post } from './Post';



export const UseBookSearch = () => {

    const [posts, setPosts] = useState([])
    const [loaded, setLoaded] = useState(false)



    useEffect(async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts([...data])
        setLoaded(true)

    }, [posts])
    return (
        <>
            {loaded &&
                <div                >
                    <InfiniteScroll
                        dataLength={posts.length}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }>
                            { posts.map(post => <Post p={post.title} key={post.id} id={post.id} />) }
                    </InfiniteScroll>
                </div>



            }
        </>
    )
}
