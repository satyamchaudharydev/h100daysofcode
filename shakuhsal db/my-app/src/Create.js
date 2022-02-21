import { React, useEffect, useRef, useState } from "react";
import { ImageUrl } from "./ImageUrl";
import { useAuth } from "./AuthContext";
import { Nav } from "./Nav";
export const Create = () => {
  const { createProduct } = useAuth();
  const titleRef = useRef();
  const descRef = useRef();
  const [loading, setLoading] = useState(false);
  const categoryRef = useRef();
  const subcategoryRef = useRef();
  const priceRef = useRef();
  const ratingRef = useRef();
  const preRef = useRef();
  const otherRef = useRef();
  const discountRef = useRef();
  const [uploadText,setUploadText] = useState('upload')
  const { load,urls, handleChange } = ImageUrl();
  const createSubmit = async () => {
    console.log("Clicked");
    try {
      setLoading(true);
      await createProduct(
        titleRef.current.value,
        descRef.current.value,
        categoryRef.current.value,
        subcategoryRef.current.value,
        ratingRef.current.value,
        urls,
        priceRef.current.value,
        discountRef.current.value
      );
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  const imgSubmit = () => {
    // console.log([preRef.current.files[0] ,...otherRef.current.files]);
    handleChange([preRef.current.files[0], ...otherRef.current.files]);
  }
  return (
    <>
      <Nav />
      <div className="create-container">
        <h1>Create Product</h1>
        <p>{console.log(urls.sort((a, b) => a - b))}</p>
        <form className="form-container">
          <div className="input-container">
            <label htmlFor="">Title</label>
            <input ref={titleRef} type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Description</label>
            <textarea ref={descRef} name="" id=""></textarea>
          </div>
          <div className="input-container">
            <label htmlFor="">category</label>
            <div className="category sub-container">
              <div className="main-category sub">
                <label htmlFor="">Main</label>
                <input ref={categoryRef} type="text" />
              </div>
              <div className="sub-category sub">
                <label htmlFor="">Sub</label>
                <input ref={subcategoryRef} type="text" />
              </div>
            </div>
          </div>
          <div className="input-container ">
            <label htmlFor="">Price</label>
            <div className="price-container sub-container">
              <div className="sub-category sub">
                <label>Price</label>
                <input ref={priceRef} type="number" />
              </div>
              <div className="sub-category sub">
                <label htmlFor="">discount</label>
                <input ref={discountRef} type="number" />
              </div>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="Rating">Rating</label>
            <input ref={ratingRef} type="number" name="" id="" />
 
          </div>
          <div className="input-container ">
            <label htmlFor="">Image</label>
            <div className="price-container sub-container">
              <div className="sub-category sub">
                <label>Preview</label>
                <input ref={preRef} type="file" />
              </div>
              <div className="sub-category sub">
                <label>Other</label>
                <input ref={otherRef} type="file" multiple />
              </div>
              <div onClick={() => imgSubmit()} className="img-submit-btn">
                {load}
              </div>
            </div>
          </div>
          <div
            onClick={() => createSubmit()}
            className={`create-button ${loading && "loading"}`}
          >
            Create +
          </div>
        </form>
        {/* {urls.length !== 0 && urls.map((url) => <p>{url}</p>)}

      <h2> Uploaded {progress} %</h2> */}
      </div>
    </>
  );
};
