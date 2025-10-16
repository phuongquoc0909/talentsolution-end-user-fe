import React from 'react';

import imgJoinNow from '@/styles/owner/geet/images/join_now.png';

const ButtonJoin = () => {
    return (
        <>
            <a tabIndex={0} role="button" className="showDialogD join-button"><img src={imgJoinNow.src} /></a>
            <p className="stayconnect">Kết nối với chúng tôi <a tabIndex={0} role="button" className="showDialog">Vì sao?</a></p>
        </>
    );
}

export default ButtonJoin;