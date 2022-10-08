import React from 'react'

import './Post.css'

function Post() {
    return (
        <section className = "post-outer">
            <section className = "post-text">
                <p>Have a project idea but missing a group? Post your own entry here!</p>
            </section>
            <section className = "post-bottom">
                <button className="post-button" >CREATE A POST</button>
            </section>
        </section>
    )
}

export default Post;