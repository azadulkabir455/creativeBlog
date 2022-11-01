import React, { useState, useContext } from 'react'
import GlobalHeader from "../GlobalWidgets/GlobalHeader/GlobalHeader"
import GlobalFooter from "../GlobalWidgets/GlobalFooter/GlobalFooter"
import OtherPageBanner from "../Components/Elements/OtherPageBanner"
import {Link} from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";
import { GlobalContextProvider } from "../ContextApi/GlobalContext"
import "../Resources/Css/blog.scss"

export default function Blog() {
  const { theme, getDate } = useContext(GlobalContextProvider)
  const [data] = useFetch("blog")
  const [blogs, setBlogs] = useState([]);

  const allItem = () => {
    setBlogs(data)
  }
  const educationalBlog = () => {
    const filterBlog = data.filter((item) => item.blogType === "education");
    setBlogs(filterBlog);
  }
  const teachnologyBlog = () => {
    const filterBlog = data.filter((item) => item.blogType === "teachnology");
    setBlogs(filterBlog)
  }
  const travelBlog = () => {
    const filterBlog = data.filter((item) => item.blogType === "travel");
    setBlogs(filterBlog)
  }
  const personalBlog = () => {
    const filterBlog = data.filter((item) => item.blogType === "personal");
    setBlogs(filterBlog)
  }
  return (
    <>
      <OtherPageBanner title="Blog" />
      <GlobalHeader />
      <div className="allBlog" id={theme}>
        <div className="container" >
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="btnGroup">
                <button onClick={allItem}>All</button>
                <button onClick={educationalBlog}>Educational</button>
                <button onClick={teachnologyBlog}>Teachnology</button>
                <button onClick={travelBlog}>Travel</button>
                <button onClick={personalBlog}>Personal</button>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              {
                blogs.map((blog) =>
                  <div className="card singleBlog" key={blog.id}>
                    <img src={blog.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h2>{blog.blogTitle}<span className='blogtype'>{blog.blogType}</span></h2>
                      <p className='authorinfo'>Name: <span>{blog.authorInfo.name} </span> Email: <span>{blog.authorInfo.email}</span></p>
                      <p className='time'>{getDate(new Date(blog.timestamp.seconds * 1000))}</p>
                      <p className="exerpt">{blog.blogExerpt}</p>
                    </div>
                    <div className="card-footer">
                      <button><Link to={blog.id}>Read More</Link></button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  )
}
