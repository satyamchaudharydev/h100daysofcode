import { React, useState } from "react";
import { useProvider } from "./StateContext";
export const Input = () => {
  const [text, setText] = useState("");
  const { isSubmit, setIsSubmit, loading, setLoading, setList,setError } = useProvider();
 

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://api.goodenergy.co.uk/electricity-meterpoint/v1/ElectricityMeterpoint?postcode=${text}`
    )
      .then((response) => {
        if(response.ok){
          return response.json()
        }
        else{
          setError(true)
        }
      })
      .then((data) => {
        setList(data);
        setLoading(false)
    });
  };
  const handleSubmit = (e) => {
    setError(false)
    e.preventDefault();
    setIsSubmit(true);
    fetchData();
  };
  return (
    <div className="input-container">
      {console.log(isSubmit)}
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <svg viewBox="0 0 56.7 56.7" class="search-icon">
          <path d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z"></path>
        </svg>
        <input
          type="text"
          value={text}
          placeholder="Type mpan Or postal code"
          onChange={(e) => setText(e.target.value)}
        />
        {text.length > 0 && <button type="submit">Search</button>}
      </form>
    </div>
  );
};
