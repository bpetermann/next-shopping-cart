import MainHeader from '../layout/MainHeader';

const Layout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
