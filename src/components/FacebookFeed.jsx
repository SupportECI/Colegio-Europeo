import { useEffect, useState } from 'react';
import '../styles/facebook-feed.css';

const FacebookFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const POSTS_PER_PAGE = 6;

  const apiKey = import.meta.env.VITE_API_VERSION;
  const pageId = import.meta.env.VITE_PAGE_ID;
  const token = import.meta.env.VITE_TOKEN;

  // Scroll hacia arriba cuando cambia la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const url = `https://graph.facebook.com/${apiKey}/${pageId}/feed?fields=id,message,attachments{media,url,type},permalink_url,created_time,story&limit=21&access_token=${token}`;

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
  }, [apiKey, pageId, token]);

  if (loading) {
    return (
      <div className="fb-loading-container">
        <div className="fb-loading-content">
          <div className="fb-spinner-wrapper">
            <svg className="fb-spinner-circle" viewBox="0 0 50 50">
              <defs>
                <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0E2976" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
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
      <div className="fb-error text-center mb-24 mt-12">
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
        <header className="mb-8 text-left border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            Momentos <span className=" text-blue-600 font-light italic">Destacados</span>
          </h2>
          <p className=" text-gray-500 max-w-xl text-sm md:text-base leading-snug">
            Descubre los momentos especiales que forman parte de nuestra comunidad educativa a través de nuestras publicaciones más recientes en Facebook.
          </p>
        </header>
      
      {/* Calcular paginación */}
      {(() => {
        const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;
        const paginatedPosts = posts.slice(startIndex, endIndex);

        return (
          <>
            <div className="fb-grid">
              {paginatedPosts.map((post, index) => {
                const postImage = post.attachments?.data?.[0]?.media?.image?.src;
                const postIdReal = post.id.includes('_') ? post.id.split('_')[1] : post.id;
                const cleanMobileUrl = `https://www.facebook.com/${pageId}/posts/${postIdReal}`;

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
                        
                        <a href={cleanMobileUrl} target="_blank" rel="noreferrer" className="fb-post-btn">
                          Ver en Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Paginador */}
            {totalPages > 1 && (
              <div className="fb-pagination">
                <button 
                  className="fb-pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  ← Anterior
                </button>

                <div className="fb-pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      className={`fb-pagination-number ${currentPage === page ? 'active' : ''}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button 
                  className="fb-pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Siguiente →
                </button>
              </div>
            )}
          </>
        );
      })()}
    </div>
  );
};

export default FacebookFeed;