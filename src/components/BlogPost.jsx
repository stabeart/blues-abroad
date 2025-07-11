import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogPost({ post }) {
  return (
    <article style={{ 
      marginBottom: '2rem', 
      padding: '2rem', 
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      width: '700px',
      margin: '0 auto 2rem auto',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
      position: 'relative',
      contain: 'layout style', // Add this line
    }}>

      
      <h2 style={{ 
        marginTop: '0.5rem',
        marginBottom: '1rem'
      }}>
        <Link 
          to={`/post/${post.id}`} 
          style={{ 
            textDecoration: 'none', 
            color: '#FFD700',
            fontSize: '1.75rem',
            fontWeight: '600',
            fontFamily: 'Peignoir Lite, serif',
            letterSpacing: '-0.01em',
            lineHeight: '1.3'
          }}
        >
          {post.title}
        </Link>
      </h2>
      
      <p style={{ 
        color: 'rgba(255, 255, 255, 0.7)', 
        fontSize: '0.9rem',
        fontWeight: '400',
        marginBottom: '1.5rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {post.date}
      </p>
      
      <div 
        className="post-excerpt"
        style={{ 
          lineHeight: '1.7',
          marginBottom: '2rem',
          color: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        <ReactMarkdown>{post.excerpt}</ReactMarkdown>
      </div>
      
      <Link 
        to={`/post/${post.id}`} 
        className="btn-primary"
      >
        Read More
      </Link>
    </article>
  );
}

export default BlogPost;