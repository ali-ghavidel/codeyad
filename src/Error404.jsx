import React from 'react';

const Error404 = () => {
    return (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <img src='/assets/images/404.svg' alt='' width="400px" height="400px"  />
            {/* <img src="/assets/images/404.jpg" alt="" /> */}
            <h1 className='h1'><b>404</b></h1>
            <h2>صفحه ای با این مسیر یافت نشد</h2>
        </div>
    );
}

export default Error404;
