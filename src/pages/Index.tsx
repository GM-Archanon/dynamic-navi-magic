
import Layout from '../components/Layout';
import ImageCarousel from '../components/ImageCarousel';

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Mountain landscape with deer in foreground"
  },
  {
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "River between mountains under white clouds"
  },
  {
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Low angle photography of trees at daytime"
  }
];

const Index = () => {
  return (
    <Layout>
      <ImageCarousel images={carouselImages} />
      
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Welcome to the Black Hawk Society Philippines</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Founded on principles of excellence, integrity, and community service, 
            the Black Hawk Society brings together individuals dedicated to making 
            a positive impact in the Philippines and beyond.
          </p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3">Brotherhood</h3>
              <p className="text-gray-600">
                Join a network of dedicated individuals who support and elevate each other.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3">Service</h3>
              <p className="text-gray-600">
                Participate in community outreach programs and make a difference.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3">Excellence</h3>
              <p className="text-gray-600">
                Pursue the highest standards in all personal and professional endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
