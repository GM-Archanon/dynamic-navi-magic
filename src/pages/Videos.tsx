
import Layout from '../components/Layout';

const videoGallery = [
  {
    id: 1,
    title: "Annual Charity Gala 2023",
    description: "Highlights from our annual charity gala raising funds for education programs.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  },
  {
    id: 2,
    title: "Leadership Summit Keynote",
    description: "Keynote address from our 2023 Leadership Summit featuring prominent speakers.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  },
  {
    id: 3,
    title: "Community Outreach Project",
    description: "Documentary of our recent community service project in rural areas.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
  },
  {
    id: 4,
    title: "Member Testimonials",
    description: "Society members share their experiences and the impact of joining our brotherhood.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
  },
];

const Videos = () => {
  return (
    <Layout>
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Video Gallery</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videoGallery.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a 
                        href={video.embedUrl.replace('embed/', 'watch?v=')} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="rounded-full bg-white bg-opacity-80 p-4 hover:bg-opacity-100 transition-all"
                        aria-label={`Play ${video.title} video`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <a 
                    href={video.embedUrl.replace('embed/', 'watch?v=')} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                  >
                    Watch Video
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
