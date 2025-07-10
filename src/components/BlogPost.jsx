import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogPost({ post }) {
  return (
    <article style={{ 
      marginBottom: '2rem', 
      padding: '1.5rem', 
      background: 'rgba(0,0,0,0.4)',
      border: '2px solid #034694',
      borderRadius: '12px',
      width: '700px',
      margin: '0 auto 2rem auto',
      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
      transition: 'all 0.3s ease',
      position: 'relative'
    }}>
      {/* Chelsea accent stripe */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #FFD700 0%, #034694 50%, #FFD700 100%)',
        borderRadius: '12px 12px 0 0'
      }}></div>
      
      <h2 style={{ marginTop: '0.5rem' }}>
        <Link 
          to={`/post/${post.id}`} 
          style={{ 
            textDecoration: 'none', 
            color: '#FFFFFF',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}
        >
          {post.title}
        </Link>
      </h2>
      
      <p style={{ 
        color: '#b0b0b0', 
        fontSize: '0.9rem',
        marginBottom: '1rem',
        borderBottom: '1px solid #034694',
        paddingBottom: '0.5rem'
      }}>
        📅 {post.date}
      </p>
      
      <div style={{ 
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        color: '#e0e0e0'
      }}>
        <ReactMarkdown>{post.excerpt}</ReactMarkdown>
      </div>
      
      <Link 
        to={`/post/${post.id}`} 
        style={{ 
          color: '#FFD700',
          textDecoration: 'none',
          fontWeight: 'bold',
          padding: '0.5rem 1rem',
          border: '2px solid #FFD700',
          borderRadius: '25px',
          background: 'rgba(255,215,0,0.1)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
      >
        Read More ⚽
      </Link>
    </article>
  );
}

export default BlogPost;