import React from 'react'
import { Link } from 'react-router-dom';

export const CompanyCard = ({text,address,id}) => {
    return (
      <Link to={`${id}`}>
      <div className="company-card">
        <h3 style={{textTransform:'lowercase'}}>{text}</h3>
        <div className="card-address-text-container">
          <div className="address-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              width="16px"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <p className='card-address-text'>
            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
          </p>
        </div>
      </div>
      </Link>
    );
}
