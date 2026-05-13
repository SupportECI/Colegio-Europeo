import { useEffect, useState } from 'react';
import '../styles/facebook-feed.css';

const FacebookFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*Credenciales de acceso - Facebook*/
  const PAGE_ID = '357237514146983';
  const TOKEN = 'EAASQDJ9TK0EBRXp0swNZAskkp4tiBZA55Hyw6WjLaqGjuz1dZCJjZBZBgE0SpPfgIZBcR42zCBzjAMyhSpBC84Ely6lZCRw2mxBX7wZAbxl0qebzcn3pCQPRsVHGNgjSrNqpgXxDo44fcNUjI3PZCV259cZC2685nkGsEdZA0HsaRXRZBjD6vqQLetdAoyusRDZCuvjmSNpOJ8GquZAjns3xbqZBew5';
  const API_VERSION = 'v21.0';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        const url = `https://graph.facebook.com/${API_VERSION}/${PAGE_ID}/feed?fields=id,message,attachments{media,url,type},permalink_url,created_time,story&limit=21&access_token=${TOKEN}`;
        
        console.log('📱 Cargando publicaciones...');
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error?.message || 'Error al cargar publicaciones');
        }

        if (data.data && data.data.length > 0) {
          setPosts(data.data);
          setError(null);
        } else {
          setError('No hay publicaciones disponibles');
        }
        setLoading(false);
      } catch (err) {
        console.error('❌ Error:', err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="fb-loading-container">
        <div className="fb-loading-content">
          <div className="fb-spinner-wrapper">
            <svg className="fb-spinner-circle" viewBox="0 0 50 50">
              <circle
                className="fb-spinner-circle-bg"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="2"
              />
              <circle
                className="fb-spinner-circle-progress"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="2"
                strokeDasharray="125.6"
                strokeDashoffset="125.6"
              />
            </svg>
          </div>
          <p className="fb-loading-text">Cargando publicaciones...</p>
          <div className="fb-loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="fb-error">
        <div style={{ fontSize: '3rem' }}>⚠️</div>
        <div>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>
            {error}
          </p>
        </div>
        <button onClick={() => window.location.reload()}>
          🔄 Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="fb-container">
      <div className="fb-grid">
        {posts.map((post, index) => {
          const postImage = post.attachments?.data?.[0]?.media?.image?.src;

          return (
            <div key={post.id} className="fb-post" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Imagen del post usando la nueva constante */}
              {postImage && (
                <div className="fb-post-image">
                  <img src={postImage} alt="Facebook post" loading="lazy" />
                </div>
              )}

              <div className="fb-post-body">
                {(post.message || post.story) && (
                  <p className="fb-post-text">
                    {(post.message || post.story).substring(0, 150)}
                    {(post.message || post.story).length > 150 ? '...' : ''}
                  </p>
                )}

                <div className="fb-post-footer">
                  <span className="fb-post-date">
                    {new Date(post.created_time).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                  <a href={post.permalink_url} target="_blank" rel="noreferrer" className="fb-post-btn">
                    Ver en Facebook
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FacebookFeed;