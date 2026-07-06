import React, { createContext, useContext, useEffect, useState, ReactNode, Children, isValidElement } from 'react';

interface LocationContextValue {
  pathname: string;
  navigate: (to: string) => void;
}

const LocationContext = createContext<LocationContextValue>({
  pathname: window.location.pathname,
  navigate: () => {},
});

export function BrowserRouter({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  function navigate(to: string) {
    window.history.pushState(null, '', to);
    setPathname(to);
  }

  useEffect(() => {
    function onPop() {
      setPathname(window.location.pathname);
    }
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <LocationContext.Provider value={{ pathname, navigate }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const { pathname } = useContext(LocationContext);
  return { pathname };
}

function useNavigate() {
  const { navigate } = useContext(LocationContext);
  return navigate;
}

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
}

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const navigate = useNavigate();
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

interface NavLinkProps extends LinkProps {
  end?: boolean;
  className?: string | ((args: { isActive: boolean }) => string);
}

export function NavLink({ to, end, className, children, ...rest }: NavLinkProps) {
  const { pathname } = useLocation();
  const isActive = end ? pathname === to : pathname === to || pathname.startsWith(to + '/');
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className;
  return (
    <Link to={to} className={resolvedClassName} {...rest}>
      {children}
    </Link>
  );
}

interface RouteProps {
  path: string;
  element: ReactNode;
}

export function Route(_props: RouteProps) {
  return null;
}

function matchPath(routePath: string, pathname: string): boolean {
  if (routePath === '*') return true;
  if (routePath === '/') return pathname === '/';
  return pathname === routePath;
}

export function Routes({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  let matched: ReactNode = null;
  Children.forEach(children, (child) => {
    if (matched) return;
    if (isValidElement(child) && child.type === Route) {
      const props = child.props as RouteProps;
      if (matchPath(props.path, pathname)) {
        matched = props.element;
      }
    }
  });
  return <>{matched}</>;
}
