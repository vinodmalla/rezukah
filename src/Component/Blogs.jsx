import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Blogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  async function getData() {
    try {
      const response = await fetch('https://api.sheetbest.com/sheets/9243bd2d-ef63-490d-8b36-e4313aa81a03');
      if (!response.ok) throw new Error('Failed to fetch blog data');
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // Function to get 2 related blogs (next 2 posts, looping back if needed)


  return (
    <section className="bg-gray-50 py-12 md:py-20 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-calibri">
            Rezukah Blog
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-calibri">
            Dive into our insights on technology, design, and innovation to fuel your digital journey.
          </p>
        </div>

        {/* Blog Posts */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 text-[#fb9511] animate-spin" aria-hidden="true" />
            <span className="sr-only">Loading blogs...</span>
          </div>
        )}
        {error && (
          <p className="text-center text-red-600 font-calibri" role="alert">
            Error: {error}
          </p>
        )}
        {!loading && !error && data.length === 0 && (
          <p className="text-center text-gray-600 font-calibri">No blogs available at the moment.</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post, index) => (
            <article
              key={post.Title}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <img
                src={post.Image}
                alt={post.Title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-xl md:text-xl font-semibold text-gray-800 mb-3 font-calibri line-clamp-2">
                  {post.Title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 font-calibri">
                  {expandedIndex === index
                      ? post.Body || 'No content available'
                      : (post.Body && post.Body.length > 120
                          ? post.Body.slice(0, 120) + '...'
                          : post.Body || 'No content available')}
                  
                </p>
               {post.Body && post.Body.length > 120 && (
                    <button
                       onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition duration-300 font-calibri"
                      aria-expanded={expandedIndex === index}
                      aria-controls={`blog-content-${index}`}
                      aria-label={expandedIndex === index ? `Collapse ${post.Title || 'blog'}` : `Expand ${post.Title || 'blog'}`}
                    >
                      {expandedIndex === index ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                {/* Related Blogs */}
                
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .font-calibri {
          font-family: 'Calibri', sans-serif;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Blogs;