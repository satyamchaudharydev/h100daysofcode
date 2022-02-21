import { React, useEffect, useState } from "react";
import { Nav } from "./Nav";
import {Link} from "react-router-dom"
import { useAuth } from "./AuthContext";
import Productcard from "./ProductCard";
export const Home = () => {
  const { fetchData,lists,dltData,loading } = useAuth();
  const[lister ,setList] = useState([])

  useEffect(() => {
    fetchData()
    setList(lists)
  },[loading]);
  return (
    <>
      <div className="home">
        <Nav></Nav>
        {console.log(lister)}
        <div className="products">
        
          {!loading &&
            lister.map((list, index) => {
              console.log(list.id);
              const { category, price, discount, title, images, id } = list;
              return (
                <Link to={`/${id}`}>
                  <Productcard
                    id={id}
                    category={category}
                    deleteItem={dltData}
                    price={price}
                    discount={discount}
                    title={title}
                    img={images}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};
