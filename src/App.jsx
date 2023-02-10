import React, { useEffect, useState } from 'react'
import Post from './components/Post'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await data.json()
    setPosts(json)
  }

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      getPosts()
        .catch(console.error)
        .finally(() => setLoading(false))
    }, 3000)
  }, [])

  if (loading) {
    return (
      <div className="container">
        <h2>Chargement...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Mes posts</h1>
      <div className='row'>
        {posts.length ? 
          posts.map(post => (
            <Post key={post.id} post={post} />
          )) : <span>Aucun post</span>
        }
      </div>
    </div>
   )
}

export default App