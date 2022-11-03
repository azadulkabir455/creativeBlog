import React, { useState, useEffect, useContext } from 'react'
import GlobalHeader from "../GlobalWidgets/GlobalHeader/GlobalHeader"
import GlobalFooter from "../GlobalWidgets/GlobalFooter/GlobalFooter"
import OtherPageBanner from "./Elements/OtherPageBanner"
import useCreate from '../CustomHooks/useCreate'
import { Editor } from "@tinymce/tinymce-react"
import { GlobalContextProvider } from "../ContextApi/GlobalContext"
import { v4 } from "uuid";
import { db, storage } from '../firebase-config'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, getDoc, serverTimestamp } from 'firebase/firestore'
import "../Resources/Css/addBlog.scss"

export default function Addblog() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogType, setBlogType] = useState("select")
  const [blogExerpt, setBlogExerpt] = useState("Write your exerpt")
  const [blog, setBlog] = useState("")
  const [imgUpload, setImgUploadImg] = useState(null);
  const [progress, setProgress] = useState(null);
  const [imgUrl, setImgUrl] = useState('')
  const [currentUserDatas, setCurrentUserDatas] = useState([])
  const { userProfiles, theme } = useContext(GlobalContextProvider);

  const combinedData = {
    blogTitle,
    blogType,
    blogExerpt,
    blog,
    imgUrl,
    timestamp: serverTimestamp(),
    authorInfo: {
      name: currentUserDatas && currentUserDatas.name,
      email: userProfiles.email,
      id: userProfiles.uid
    }
  }


  const [addData] = useCreate("blog", combinedData)


  const formHandler = (e) => {
    e.preventDefault();
    addData();
  }
  useEffect(() => {
    userProfiles.uid && currentUserData();
  }, [userProfiles.uid])

  const currentUserData = async () => {
    const userRef = doc(db, "userProfiles", userProfiles.uid);
    const snapshot = await getDoc(userRef);
    setCurrentUserDatas({ ...snapshot.data() })
  }
  useEffect(() => {
    if (imgUpload === null) return;
    const imgRef = ref(storage, `blogImg/${imgUpload.name + v4()}`)
    const uploadTask = uploadBytesResumable(imgRef, imgUpload);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);

      switch (snapshot.state) {
        case "paused":
          console.log("data uploading pause");
          break;
        case "running":
          console.log("data uploading running");
          break;
        default: {
          console.log("uloading done")
        }
      }
    }, (error) => {

      console.log(error.message)
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setImgUrl(url);
      })
    }
    )
  }, [imgUpload])


  return (
    <>
      <OtherPageBanner title="add blog" />
      <GlobalHeader />
      <div className="addBlog" id={theme}>
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col">
              {/* <h1>Add your blog</h1> */}
              <form onSubmit={formHandler}>
                <div className="row">
                  <div className="col-12 col-lg-5 mt-4">
                    <label htmlFor="title" className="form-label">Write your blog title</label>
                    <input type="text" className="form-control" id="title" placeholder="Write your blog title" name="blogTitle" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} />
                  </div>
                  <div className="col-12 col-lg-5 mt-4">
                    <label htmlFor="blogtype" className="form-label">Select Your blog type</label>
                    <select className="form-select" id="blogtype" name="blogType" value={blogType} onChange={(e) => setBlogType(e.target.value)}>
                      <option value="select">Selecte Your blog type</option>
                      <option value="education">Education</option>
                      <option value="technology">Technology</option>
                      <option value="travel">Travel</option>
                      <option value="personal">Personal</option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-2 mt-4">
                    <label htmlFor="img" className="form-label">Blog Img</label>
                    <input type="file" id='img' onChange={(e) => setImgUploadImg(e.target.files[0])} disabled={progress !== null && progress < 100} />
                  </div>
                  <div className="col-12 mt-4">
                    <label htmlFor="message" className="form-label">Blog Excerp</label>
                    <textarea className="form-control" id="message" rows="9" name="blogExerpt" value={blogExerpt} onChange={(e) => { setBlogExerpt(e.target.value) }} />
                  </div>
                  <div className="col-12 mt-4">
                    <label htmlFor="message" className="form-label">Blog</label>
                    <Editor
                      textareaName='blog'
                      initialValue='Write your blog'
                      onEditorChange={(blogContent) => { setBlog(blogContent) }}
                      init={{
                        height: 300,
                        menubar: false,
                        plugins: [
                          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                          'bold italic forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | bullist numlist outdent indent | ' +
                          'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                      }}
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <input type="submit" value="submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  )
}
