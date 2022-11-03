import React, { useContext, useState } from 'react';
import { GlobalContextProvider } from "../ContextApi/GlobalContext"
import { Link } from "react-router-dom"
import { Images } from "../Resources/media/Media"
import { BsArrowRightShort } from "react-icons/bs";
import useCreate from '../CustomHooks/useCreate';
import "../Resources/Css/home.scss"
import GlobalHeader from '../GlobalWidgets/GlobalHeader/GlobalHeader';
import GlobalFooter from '../GlobalWidgets/GlobalFooter/GlobalFooter';
import HomeBanner from './Elements/HomeBanner';
import useFetch from '../CustomHooks/useFetch';

export default function Home() {
  const [email, setEmail] = useState();
  const { theme, getDate } = useContext(GlobalContextProvider);
  const [addData] = useCreate("newsletter", { email })

  // data fetching
  const [blog] = useFetch("blog")
  const [user] = useFetch("userProfiles")
  const [newsletter] = useFetch("newsletter")

  
  const fromHandle = (e) => {
    e.preventDefault();
    addData();
    setEmail("");
    let form = document.getElementById("form");
    form.reset();
  }
  // For Blog type

  const travel = blog.filter(item => item.blogType === "travel")
  const education = blog.filter(item => item.blogType === "education")
  const technology = blog.filter(item => item.blogType === "technology")
  const personal = blog.filter(item => item.blogType === "personal")

  const categories = [
    {name:"Travel",count:travel.length},
    {name:"Education",count:education.length},
    {name:"Technology",count:technology.length},
    {name:"Personal",count:personal.length}
  ]

  return (
    <>
      <HomeBanner />
      <GlobalHeader />
      <div className="homePageCotainer" id={theme}>
        <div className="container-lg">
          <div className="row userCount">
            <div className="col-12 col-md-4 ">
              <div className="totalNumber">
                <div className="number">{blog.length}</div>
                <p>Total Post</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="totalNumber">
                <div className="number">{user.length}</div>
                <p>Total Users</p>
              </div>

            </div>
            <div className="col-12 col-md-4 ">
              <div className="totalNumber">
                <div className="number">{newsletter.length}</div>
                <p>Total Subscription</p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-lg-8">
              <div className="row g-4">
                {
                  blog.slice(0, 6).map((item) =>
                    <div className="col-12 col-md-6 blogs">
                      <img src={item.imgUrl} alt="" />
                      <div className="title">
                        <h4><Link to={item.id}>{item.blogTitle}</Link></h4>
                        <span>{item.blogType}</span>
                      </div>
                      <div className="author">
                        <div className="row">
                          <div className="col-12 align-self-center">
                            <h4><Link>{item.authorInfo.name}</Link></h4>
                            <p>{getDate(new Date(item.timestamp.seconds * 1000))}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <button className='morePost'><Link to="/blog">Load More <BsArrowRightShort /></Link></button>
            </div>
            <div className="col-12 col-lg-4">
              <div className="recentPost">
                <h4>Recent post</h4>
                {
                  blog.slice(0, 4).map((item) =>
                    <div className="row g-0">
                      <div className="col-9">
                        <p>{getDate(new Date(item.timestamp.seconds * 1000))}</p>
                        <h4>{item.blogTitle}</h4>
                      </div>
                      <div className="col-3">
                        <img src={item.imgUrl} alt="" width="100" />
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="gallery">
                <h4>Gallery</h4>
                <div className="row g-2">
                  <div className="col-4">
                    <img src={Images.placeholder} alt="" />
                  </div>
                  <div className="col-4">
                    <img src={Images.placeholder} alt="" />
                  </div>
                  <div className="col-4">
                    <img src={Images.placeholder} alt="" />
                  </div>
                  <div className="col-4">
                    <img src={Images.placeholder} alt="" />
                  </div>
                  <div className="col-4">
                    <img src={Images.placeholder} alt="" />
                  </div>
                  <div className="col-4">
                    <img src={Images.placeholder} alt="" />
                  </div>
                </div>
              </div>
              <div className="categories">
                <h4>Categories</h4>
                {
                  categories.map((item) =>
                    <div className="row">
                      <div className="col-10 align-self-center">
                        <h4>{item.name}</h4>
                      </div>
                      <div className="col-2 align-self-center">
                        <p>{item.count}</p>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="tags">
                <h4>Tags</h4>
                {
                  categories.map((item) => 
                  <Link to="/blog">{item.name}</Link>
                  )
                }
              </div>
              <div className="newsletter">
                <h4>Newsletter</h4>
                <div className="row">
                  <div>
                    <form action="#" onSubmit={fromHandle} id="form">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                      <button className="newsletterButton">Subscribe <BsArrowRightShort /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  )
}
