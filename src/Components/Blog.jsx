import React,{useState,useEffect} from 'react'
import GlobalHeader from "../GlobalWidgets/GlobalHeader/GlobalHeader"
import GlobalFooter from "../GlobalWidgets/GlobalFooter/GlobalFooter"
import OtherPageBanner from "../Components/Elements/OtherPageBanner"
import useFetch from "../CustomHooks/useFetch";

export default function Blog() {
  const [data] = useFetch("blog")
  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   data && setBlogs(data);
  // },[])

  const allItem = () => {
    setBlogs(data)
  }
  const educationalBlog = () => {
    const filterBlog = data.filter( (item) => item.blogType === "education");
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
      <GlobalHeader />
      <OtherPageBanner title="Blog" />
      <div className="container">
        <div className="row">
            <div className="col-12 col-lg-4">
              <button onClick={allItem}>All</button>
              <button onClick={educationalBlog}>Educational</button>
              <button onClick={teachnologyBlog}>Teachnology</button>
              <button onClick={travelBlog}>Travel</button>
              <button onClick={personalBlog}>Personal</button>
            </div>
            <div className="col-12 col-lg-8">
              {
                blogs.map((blog) => 
                <>
                  <h1>{blog.blogTitle}</h1>
                  <h1>{blog.blogType}</h1>
                </>
                )
              }
            </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  )
}
