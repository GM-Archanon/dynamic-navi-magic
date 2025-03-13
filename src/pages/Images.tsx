
import { useState } from 'react';
import Layout from '../components/Layout';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const imageGallery = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Mountain landscape with deer",
    caption: "Annual retreat in the mountains"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "River between mountains",
    caption: "Team building activity"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Trees at daytime",
    caption: "Environmental conservation project"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    alt: "Pine trees",
    caption: "Reforestation initiative"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Sunlight through trees",
    caption: "Leadership summit 2023"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Mountain landscape with sun rays",
    caption: "Community outreach program"
  }
];

const Images = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof imageGallery)[0] | null>(null);
  
  return (
    <Layout>
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Image Gallery</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageGallery.map((image) => (
              <div 
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-semibold">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="sm:max-w-3xl p-0">
              {selectedImage && (
                <div>
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
                    className="w-full max-h-[80vh] object-contain"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold">{selectedImage.caption}</p>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
};

export default Images;
