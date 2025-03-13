
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">About Black Hawk Society</h1>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg mb-6">
                The Black Hawk Society Philippines was established in 2005 as a fraternal organization 
                dedicated to fostering leadership, community service, and personal development among its members.
              </p>
              
              <p className="text-lg mb-6">
                Named after the Black Hawk, a symbol of strength, vision, and resilience, our society 
                brings together like-minded individuals from diverse backgrounds who share a common 
                commitment to excellence and service to the community.
              </p>
              
              <p className="text-lg mb-6">
                Over the years, we have grown from a small group of founding members to a nationwide 
                network of professionals, entrepreneurs, academics, and public servants who embody 
                our core values in their respective fields.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Our Core Values</h2>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-lg">Integrity in all actions and decisions</li>
                <li className="text-lg">Excellence in personal and professional pursuits</li>
                <li className="text-lg">Brotherhood and mutual support among members</li>
                <li className="text-lg">Service to the community and nation</li>
                <li className="text-lg">Leadership development and mentorship</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Structure and Membership</h2>
              
              <p className="text-lg mb-6">
                The Black Hawk Society is structured with a National Council that oversees regional 
                chapters throughout the Philippines. Membership is by invitation only, following a 
                careful selection process that evaluates candidates based on their character, 
                achievements, and commitment to our core values.
              </p>
              
              <p className="text-lg">
                We welcome individuals who demonstrate leadership potential, academic excellence, 
                and a genuine desire to contribute to society. The Society offers lifetime membership 
                and a global network of connections to those who are selected to join our ranks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
