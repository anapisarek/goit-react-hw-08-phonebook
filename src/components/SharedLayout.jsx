import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<div className="backdrop"></div>}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
      <Toaster
        toastOptions={{
          duration: 4000,
        }}
      />
    </>
  );
};

export default SharedLayout;