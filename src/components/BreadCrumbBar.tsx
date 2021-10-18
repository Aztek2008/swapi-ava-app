import { NavLink, useLocation } from 'react-router-dom';

export const BreadCrumbBar = () => {
  const usePathname = (): string => {
    const location = useLocation();
    return location.pathname;
  };

  const currentLocation = usePathname();

  return (
    <nav style={{ marginBottom: '20px' }}>
      <div className='nav-wrapper'>
        <div className='col s12' style={{ padding: '0 20px' }}>
          <NavLink to='/people' className='breadcrumb'>
            Main
          </NavLink>
          {currentLocation.includes('details') && (
            <NavLink to='/details/:id' className='breadcrumb'>
              Details
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};
