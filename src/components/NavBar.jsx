import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: '#034694',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      {/* Logo/Title Section */}
      <Link 
        to="/" 
        style={{ 
          textDecoration: 'none',
          color: '#FFFFFF',
          fontSize: '1.8rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}
      >
        Blues Abroad
      </Link>

      {/* Future Menu Section */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <Link 
          to="/" 
          style={{
            color: '#e0e0e0',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#FFD700'}
          onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}
        >
          Home
        </Link>
        {/* Add more menu items here later */}
      </div>
    </nav>
  );
}

export default NavBar;