
import Layout from '../components/Layout';

const Vision = () => {
  return (
    <Layout>
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Vision</h1>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="border-l-4 border-primary pl-6 py-4 mb-8">
                <p className="text-xl italic font-medium">
                  "To be the premier fraternal organization in the Philippines, recognized for producing 
                  exceptional leaders who drive positive change and uphold the highest standards of 
                  integrity, excellence, and service."
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-10 mb-6">Our Vision for the Future</h2>
              
              <p className="text-lg mb-6">
                The Black Hawk Society envisions a future where:
              </p>
              
              <div className="space-y-8 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">A Network of Influence</h3>
                    <p className="text-lg">
                      Our members occupy positions of influence across various sectors—government, 
                      business, academia, and civil society—using their leadership to advocate for 
                      positive change and ethical practices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">A Legacy of Service</h3>
                    <p className="text-lg">
                      The Society's community initiatives create lasting positive impacts on underserved 
                      communities throughout the Philippines, addressing key social issues and empowering 
                      citizens.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">A Culture of Excellence</h3>
                    <p className="text-lg">
                      Our scholarship programs, mentorship initiatives, and professional development 
                      opportunities continue to nurture new generations of leaders committed to excellence.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">A Global Brotherhood</h3>
                    <p className="text-lg">
                      Our membership extends beyond the Philippines, creating a global network of 
                      Filipino leaders who collaborate on initiatives that promote the welfare of 
                      Filipinos worldwide.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg">
                Through unwavering commitment to our vision, the Black Hawk Society aims to contribute 
                significantly to the development of the Philippines and to inspire other organizations 
                to pursue similar goals of excellence, leadership, and service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vision;
