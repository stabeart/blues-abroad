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
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          padding: '2rem',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
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
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        padding: '3rem',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}>
        
        <h1 style={{ 
          color: '#FFD700',
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
          lineHeight: '1.2'
        }}>
          {post.title}
        </h1>
        
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.7)', 
          fontSize: '1rem', 
          fontWeight: '400',
          marginBottom: '2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '1rem'
        }}>
          {post.date}
        </p>
        
        <div 
          className="post-content"
          style={{ 
            color: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          <ReactMarkdown 
            components={{
              h1: (props) => <h1 style={{color: '#FFD700', marginBottom: '1rem', marginTop: '2rem', fontWeight: '600'}} {...props} />,
              h2: (props) => <h2 style={{color: '#FFD700', marginBottom: '0.8rem', marginTop: '1.5rem', fontWeight: '600'}} {...props} />,
              h3: (props) => <h3 style={{color: '#FFD700', marginBottom: '0.6rem', marginTop: '1rem', fontWeight: '600'}} {...props} />,
              img: (props) => <img style={{width: '100%', borderRadius: '12px', margin: '1.5rem 0'}} {...props} />,
              blockquote: (props) => <blockquote style={{borderLeft: '4px solid #FFD700', paddingLeft: '1.5rem', margin: '1.5rem 0', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.8)'}} {...props} />,
              ul: (props) => <ul style={{marginLeft: '1.5rem', marginBottom: '1rem'}} {...props} />,
              ol: (props) => <ol style={{marginLeft: '1.5rem', marginBottom: '1rem'}} {...props} />,
              p: (props) => <p style={{marginBottom: '1.2rem'}} {...props} />
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