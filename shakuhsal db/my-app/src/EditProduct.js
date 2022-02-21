import { list } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Nav } from "./Nav";
export const EditProduct = () => {
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState([]);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const { id } = useParams();
  const { lists, fetchData, updateData } = useAuth();

  function callback() {
    const filterItem = lists.filter((item) => item.id === id);
    setEditItem(filterItem);
    setTitle(filterItem.map((item) => item.title).toString());
    setDesc(filterItem.map((item) => item.desc).toString());
    setPrice(filterItem.map((item) => item.price).toString());
    setDiscount(filterItem.map((item) => item.discount).toString());
    setCategory(filterItem.map((item) => item.category).join(","));
    setSubCategory(filterItem.map((item) => item.subcategory).toString());
  }
  useEffect(() => {
    if (lists.some((list) => list.id === id)) {
      callback();
      //  setCategory(editItem[0].category.join(','))
    } else {
      fetchData();
      callback();
    }
  }, [lists]);
  function editSubmit() {
    console.log(editItem);
    updateData(id, title, desc,category,subCategory, price, discount);
  }
  return (
    <div>
      <h1></h1>
      <Nav></Nav>
      <div className="create-container">
        <h1>Edit Product</h1>

        <form className="form-container">
          <div className="input-container">
            <label htmlFor="">Title</label>
            <input
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Description</label>
            <textarea
              value={desc}
              name=""
              id=""
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="input-container">
            <label htmlFor="">category</label>
            <div className="category sub-container">
              <div className="main-category sub">
                <label htmlFor="">Main</label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  type="text"
                />
              </div>
              <div className="sub-category sub">
                <label htmlFor="">Sub</label>
                <input
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="input-container ">
            <label htmlFor="">Price</label>
            <div className="price-container">
              <input
                value={price}
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                value={discount}
                type="number"
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="input-container ">
            <label htmlFor="">Image</label>
            <input type="file" multiple onChange={handleChange} />
          </div> */}
          <div
            onClick={() => editSubmit()}
            className={`create-button ${loading && "loading"}`}
          >
            Create +
          </div>
        </form>

        {/* {urls.length !== 0 && urls.map((url) => <p>{url}</p>)}

      <h2> Uploaded {progress} %</h2> */}
      </div>
    </div>
  );
};
