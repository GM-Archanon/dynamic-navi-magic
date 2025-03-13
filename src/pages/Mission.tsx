
import Layout from '../components/Layout';

const Mission = () => {
  return (
    <Layout>
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Mission</h1>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="border-l-4 border-primary pl-6 py-4 mb-8">
                <p className="text-xl italic font-medium">
                  "To foster a brotherhood of excellence that empowers members to achieve their fullest 
                  potential while making meaningful contributions to society through service, 
                  leadership, and innovation."
                </p>
              </div>
              
              <p className="text-lg mb-6">
                The Black Hawk Society Philippines is committed to:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Developing Leaders</h3>
                  <p className="text-lg">
                    We cultivate leadership qualities in our members through mentorship, 
                    training programs, and hands-on experience in managing community projects.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Promoting Excellence</h3>
                  <p className="text-lg">
                    We encourage and support our members in pursuing excellence in their 
                    academic, professional, and personal endeavors.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Building Brotherhood</h3>
                  <p className="text-lg">
                    We foster strong bonds among members based on mutual respect, trust, 
                    and a shared commitment to our core values.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Serving Communities</h3>
                  <p className="text-lg">
                    We actively engage in community service projects that address pressing 
                    social issues and contribute to the development of our nation.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Advancing Knowledge</h3>
                  <p className="text-lg">
                    We promote intellectual growth through educational initiatives, 
                    research support, and knowledge sharing among members.
                  </p>
                </div>
              </div>
              
              <p className="text-lg mt-8">
                Through these focused efforts, we strive to create a lasting positive impact 
                on our members and the broader society, embodying the spirit of the Black Hawk: 
                strong, visionary, and committed to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mission;
