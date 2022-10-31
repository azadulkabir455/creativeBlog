import React, { useState, useEffect } from 'react'
import GlobalHeader from "../GlobalWidgets/GlobalHeader/GlobalHeader"
import GlobalFooter from "../GlobalWidgets/GlobalFooter/GlobalFooter"
import OtherPageBanner from "../Components/Elements/OtherPageBanner"
import useFetch from "../CustomHooks/useFetch";
import "../Resources/Css/blog.scss"

export default function Blog() {
  const userData = [
    { blogTitle: "hi", blogType: "education" },
    { blogTitle: "hello", blogType: "teachnology" },
    { blogTitle: "greatings", blogType: "travel" },
    { blogTitle: "welcome", blogType: "personal" }
  ]
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

  const getDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const houre = date.getHours();
    const min = date.getMinutes();
    const combineDate = year +"-"+ month +"-"+ day +" "+ houre +":"+ min;
    return combineDate;
  }
  return (
    <>
      <GlobalHeader />
      <OtherPageBanner title="Blog" />
      <div className="container allBlog">
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
                <div className="card" >
                  <img src={blog.imgUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2>{blog.blogTitle}<span>{blog.blogType}</span></h2>
                    <p><span>{blog.authorInfo.name}</span> <span>{blog.authorInfo.email}</span></p>
                    <p>{getDate(new Date(blog.timestamp.seconds * 1000))}</p>
                    <p className="card-text">{blog.blogExerpt}</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-info">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  )
}
