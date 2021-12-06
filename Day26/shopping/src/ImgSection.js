import { React, useState } from "react";

const ImgSection = ({item,value,index,setValue,setShow,main}) => {

  return (
    <>
      <div
        className={`img-option ${(index === value && !main) && 'active'}`}
        onClick={() => setValue(index)}
      >
        <img  src={item} alt=""/>
      </div>
    </>
  );
};

export default ImgSection;
