import React from 'react'

import './Post.css'

function Post() {
    return (
        <section className = "post-outer">
            <section className = "post-text">
                <p>Have a neat project idea but missing group partners? Post your own entry here!</p>
            </section>
            <section className = "post-bottom">
                <button className="post-button" >CREATE A POST</button>
            </section>
        </section>
    )
}

export default Post;