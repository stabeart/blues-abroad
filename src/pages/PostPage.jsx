import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';

function PostPage() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div style={{ 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        minHeight: '100vh'
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.4)',
          padding: '2rem',
          borderRadius: '12px',
          border: '2px solid #034694'
        }}>
          <h1 style={{ color: '#FFD700' }}>Post not found!</h1>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <article style={{ 
        width: '800px',
        background: 'rgba(0,0,0,0.4)',
        padding: '2rem',
        borderRadius: '12px',
        border: '2px solid #034694',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
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
        
        <Link 
          to="/" 
          style={{ 
            marginBottom: '2rem', 
            display: 'inline-block',
            color: '#FFD700',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            border: '2px solid #FFD700',
            borderRadius: '25px',
            background: 'rgba(255,215,0,0.1)',
            transition: 'all 0.3s ease',
            marginTop: '1rem'
          }}
        >
          Home
        </Link>
        
        <h1 style={{ 
          color: '#FFD700',
          fontSize: '2.5rem',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          {post.title}
        </h1>
        
        <p style={{ 
          color: '#b0b0b0', 
          fontSize: '1rem', 
          marginBottom: '2rem',
          borderBottom: '1px solid #034694',
          paddingBottom: '1rem'
        }}>
          📅 {post.date}
        </p>
        
        <div style={{ 
          lineHeight: '1.8',
          fontSize: '1.1rem',
          color: '#e0e0e0'
        }}>
          <ReactMarkdown 
            components={{
              h1: (props) => <h1 style={{color: '#FFD700', marginBottom: '1rem', marginTop: '2rem'}} {...props} />,
              h2: (props) => <h2 style={{color: '#FFD700', marginBottom: '0.8rem', marginTop: '1.5rem'}} {...props} />,
              h3: (props) => <h3 style={{color: '#FFD700', marginBottom: '0.6rem', marginTop: '1rem'}} {...props} />,
              img: (props) => <img style={{width: '100%', borderRadius: '8px', margin: '1rem 0'}} {...props} />,
              blockquote: (props) => <blockquote style={{borderLeft: '4px solid #FFD700', paddingLeft: '1rem', margin: '1rem 0', fontStyle: 'italic', color: '#b0b0b0'}} {...props} />,
              ul: (props) => <ul style={{marginLeft: '1.5rem', marginBottom: '1rem'}} {...props} />,
              ol: (props) => <ol style={{marginLeft: '1.5rem', marginBottom: '1rem'}} {...props} />,
              p: (props) => <p style={{marginBottom: '1rem'}} {...props} />
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

export default PostPage;