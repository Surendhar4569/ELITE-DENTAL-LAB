import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure navigation starts from top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}
