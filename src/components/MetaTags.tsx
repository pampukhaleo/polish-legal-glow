
import { Helmet } from 'react-helmet-async';

const MetaTags = () => {
  return (
    <Helmet>
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#0F1729" />
      <meta name="msapplication-navbutton-color" content="#0F1729" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Apple touch icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/gennadiy.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/gennadiy.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/gennadiy.png" />
      
      {/* PWA manifest */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Геннадій Пампуха" />
      
      {/* DNS prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance hints */}
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
    </Helmet>
  );
};

export default MetaTags;
