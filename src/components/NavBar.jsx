import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(3, 70, 148, 0.95)',
      backdropFilter: 'blur(20px)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    }}>
      <Link 
        to="/" 
        style={{ 
          textDecoration: 'none',
          color: '#FFFFFF',
          fontSize: '2.5rem',
          fontWeight: '700',
          fontFamily: 'Peignoir, serif',
          letterSpacing: '0.02em',
          transition: 'color 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.color = '#FFD700'}
        onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
      >
        BLUES ABROAD
      </Link>

      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
      </div>
    </nav>
  );
}

export default NavBar;