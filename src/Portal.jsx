import React from 'react';
import style from './style.module.css';
import { createPortal } from 'react-dom';
const Portal = () => {
    return createPortal(
        <div className={style.modalBase}>
            <div className={style.modalBox}>
                testing Portal
            </div>
        </div>,
        document.getElementById('portal-root')
    );
}

export default Portal;
