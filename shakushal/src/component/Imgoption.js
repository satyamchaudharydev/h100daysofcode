import React from "react";
const Imgoption  = ({item,setValue,value,index}) => {
    return <img className={(index === value) && 'img-active'} src={item} onClick={() => {setValue(index)}} alt="" />;

}
export default Imgoption