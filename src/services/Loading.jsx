import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center  align-self-center'>
            
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">در حال بارگذاری...</span>
            </div>
            <h3>در حال بارگزاری...</h3>
        </div>
    );
}

export default Loading;
