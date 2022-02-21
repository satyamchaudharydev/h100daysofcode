import React from 'react'
import { Outlet } from 'react-router-dom';
import { Result } from './AddressResult';
import { CompanyInput } from './CompanyInput'
import { CompanyResult } from './CompanyResult'


export const CompanyPage = () => {
    return (
      <div className="main-section">
        <CompanyInput />
        <CompanyResult />
        <Outlet />
      </div>
    );
}
