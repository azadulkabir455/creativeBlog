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

export default function Home() {
  const [email, setEmail] = useState();
  const { theme } = useContext(GlobalContextProvider);
  const [addData] = useCreate("newsletter", { email })

  const fromHandle = (e) => {
    e.preventDefault();
    addData();
  }
  return (
    <>
      <HomeBanner />
      <GlobalHeader />
      <div className="homePageCotainer" id={theme}>
        <div className="container-lg">
          <div className="row userCount">
            <div className="col-12 col-md-4 ">
              <div className="totalNumber">
                <div className="number">20</div>
                <p>Total Post</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="totalNumber">
                <div className="number">20</div>
                <p>Total Users</p>
              </div>

            </div>
            <div className="col-12 col-md-4 ">
              <div className="totalNumber">
                <div className="number">20</div>
                <p>Total Subscription</p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-lg-8">
              <div className="row g-4">
                <div className="col-12 col-md-6 blogs">
                  <img src={Images.placeholder} alt="" />
                  <div className="title">
                    <h4><Link>Nature is a beautifull things</Link></h4>
                    <span>Nature</span>
                  </div>
                  <div className="author">
                    <div className="row">
                      <div className="col-3">
                        <img src={Images.placeholder} alt="" />
                      </div>
                      <div className="col-9 align-self-center">
                        <h4><Link>Md. Azad Ul Kabir</Link></h4>
                        <p>2022-10-08</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 blogs">
                  <img src={Images.placeholder} alt="" />
                  <div className="title">
                    <h4><Link>Nature is a beautifull things</Link></h4>
                    <span>Nature</span>
                  </div>
                  <div className="author">
                    <div className="row">
                      <div className="col-3">
                        <img src={Images.placeholder} alt="" />
                      </div>
                      <div className="col-9 align-self-center">
                        <h4><Link>Md. Azad Ul Kabir</Link></h4>
                        <p>2022-10-08</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 blogs">
                  <img src={Images.placeholder} alt="" />
                  <div className="title">
                    <h4><Link>Nature is a beautifull things</Link></h4>
                    <span>Nature</span>
                  </div>
                  <div className="author">
                    <div className="row">
                      <div className="col-3">
                        <img src={Images.placeholder} alt="" />
                      </div>
                      <div className="col-9 align-self-center">
                        <h4><Link>Md. Azad Ul Kabir</Link></h4>
                        <p>2022-10-08</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 blogs">
                  <img src={Images.placeholder} alt="" />
                  <div className="title">
                    <h4><Link>Nature is a beautifull things</Link></h4>
                    <span>Nature</span>
                  </div>
                  <div className="author">
                    <div className="row">
                      <div className="col-3">
                        <img src={Images.placeholder} alt="" width="100" />
                      </div>
                      <div className="col-9 align-self-center">
                        <h4><Link>Md. Azad Ul Kabir</Link></h4>
                        <p>2022-10-08</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className='morePost'>Load More <BsArrowRightShort /></button>
            </div>
            <div className="col-12 col-lg-4">
              <div className="recentPost">
                <h4>Recent post</h4>
                <div className="row g-0">
                  <div className="col-9">
                    <p>2022-10-8</p>
                    <h4>Nature is beatiful things.</h4>
                  </div>
                  <div className="col-3">
                    <img src={Images.placeholder} alt="" width="100" />
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col-9">
                    <p>2022-10-8</p>
                    <h4>Nature is beatiful things.</h4>
                  </div>
                  <div className="col-3">
                    <img src={Images.placeholder} alt="" width="100" />
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col-9">
                    <p>2022-10-8</p>
                    <h4>Nature is beatiful things.</h4>
                  </div>
                  <div className="col-3">
                    <img src={Images.placeholder} alt="" width="100" />
                  </div>
                </div>
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
                <div className="row">
                  <div className="col-10 align-self-center">
                    <h4>Teacnologies</h4>
                  </div>
                  <div className="col-2 align-self-center">
                    <p>7</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 align-self-center">
                    <h4>Blog</h4>
                  </div>
                  <div className="col-2 align-self-center">
                    <p>9</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 align-self-center">
                    <h4>Natures</h4>
                  </div>
                  <div className="col-2 align-self-center">
                    <p>6</p>
                  </div>
                </div>
              </div>
              <div className="tags">
                <h4>Tags</h4>
                <Link>Blog</Link>
                <Link>Education</Link>
                <Link>Nature</Link>
                <Link>Tour</Link>
              </div>
              <div className="newsletter">
                <h4>Newsletter</h4>
                <div className="row">
                  <div>
                    <form action="#" onSubmit={fromHandle}>
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
