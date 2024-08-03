import React from 'react';
import Header from '../parts/Header.jsx';
// import Footer from '../parts/Footer.jsx';
// import UserDetails from '../parts/UserDetails.jsx';
// import NotificationsBox from '../parts/NotificationsBox.jsx';
// import PriceOffers from '../parts/BidsBox.jsx';
// import NewProject from '../parts/ProjectsBox.jsx';
// import ChatsBox from '../parts/ChatsBox.jsx';
import './profileDesktop.scss';

export default function Profile() {
    return (
<div style={{ direction: 'rtl' }} className='user-profile'>
<Header/>
</div>




        // <div style={{ direction: 'rtl' }} className='user-profile'>
        //     <Header />
        //     <div className='top-shelf'>
        //         {/* <UserDetails /> */}
        //         {/* <NotificationsBox /> */}
        //     </div>
        //     <main className='main-content'>
        //         <PriceOffers />
        //         <NewProject />
        //         {/* <ChatsBox /> */}
        //     </main>
        //     <Footer />
        // </div>
    );
}
