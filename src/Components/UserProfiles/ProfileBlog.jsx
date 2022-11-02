import React, { useContext } from 'react'
import { GlobalContextProvider } from "../../ContextApi/GlobalContext"
import { Link } from "react-router-dom"
import useFetch from "../../CustomHooks/useFetch"
import {db} from "../../firebase-config";
import {doc, deleteDoc} from "firebase/firestore"
import "../../Resources/Css/UserProfile/profileblog.scss"

export default function ProfileBlog() {
  const [data] = useFetch("blog");
  const { userProfiles, getDate, theme } = useContext(GlobalContextProvider);
  console.log(userProfiles.uid)

  const deleteSingleBlog = (id) => {
    if(window.confirm("Are you sure to delete blog")){
      const userDoc = doc(db,"blog", id);
      deleteDoc(userDoc).then(()=> {
        console.log("Blog delete successfully");
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }
  return (
    <>
      <div className="singleUserBlogs" id={theme}>
        {
          data.filter(item => userProfiles.uid === item.authorInfo.id).map((blog) =>
            <>
              <div className="card userSingleBlog" key={blog.id}>
                <img src={blog.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2>{blog.blogTitle}<span className='blogtype'>{blog.blogType}</span></h2>
                  <p className='blogauthorinfo'>Name: <span>{blog.authorInfo.name} </span> Email: <span>{blog.authorInfo.email}</span></p>
                  <p className='blogtime'>{getDate(new Date(blog.timestamp.seconds * 1000))}</p>
                  <p className="blogexerpt">{blog.blogExerpt}</p>
                </div>
                <div className="card-footer">
                  <button><Link to={blog.id}>Read More</Link></button>
                  <button onClick={() => deleteSingleBlog(blog.id)}>Delete</button>
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}
