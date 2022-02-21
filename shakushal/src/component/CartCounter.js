import {React,useState} from 'react'

export const CartCounter = () => {
    const [count,setCounter] = useState(1)
    return (
      <div className="cart-counter">
        <div
          className="cart-plus-icon"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            width="18"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <p>{count}</p>
        <div
          className="cart-minus-icon"
          onClick={() => setCounter((prev) => prev - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            width="18"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        </div>
      </div>
    );
}
