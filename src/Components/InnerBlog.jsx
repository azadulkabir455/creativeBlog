import React,{useContext} from 'react'
import GlobalHeader from "../GlobalWidgets/GlobalHeader/GlobalHeader"
import GlobalFooter from "../GlobalWidgets/GlobalFooter/GlobalFooter"
import OtherPageBanner from "../Components/Elements/OtherPageBanner"
import useFetch from '../CustomHooks/useFetch'
import {useParams} from "react-router-dom"
import {GlobalContextProvider} from "../ContextApi/GlobalContext"
import "../Resources/Css/innerBlog.scss"

export default function InnerBlog() {
    const { theme, getDate } = useContext(GlobalContextProvider)
    const [data] = useFetch("blog");
    const param = useParams();
    const {id} = param;
    console.log(data,id)
  return (
    <>
        <OtherPageBanner title={"Single Blog"}/>
        <GlobalHeader />
        <div className="singleBlog" id={theme}>
            <div className="container">
            {
                data.filter((item) => item.id === id).map((blog) => 
                <>
                    <h1 className='blogtitle'>{blog.blogTitle}</h1>
                    <p className='authorname'><b>Post By: </b>{blog.authorInfo.name}</p>
                    <p className='date'><b>Post Date: </b>{getDate(new Date(blog.timestamp.seconds * 1000))}</p>
                    <img src={blog.imgUrl} alt="" />
                    <div  dangerouslySetInnerHTML={{__html: blog.blog}} />
                </>
                )
            }
            </div>
        </div>
        <GlobalFooter />
    </>
  )
}
