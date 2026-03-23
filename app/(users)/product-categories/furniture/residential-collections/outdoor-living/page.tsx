import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';
import OnlineBrochure from '@/app/(users)/components/OnlineBrochure';
import Image from 'next/image';
import Link from 'next/link';

// Icon components for visual enhancement (using SVGs to avoid extra dependencies)
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M20 6 9 17l-5-5"/></svg>
);

export default function Furniture() {
  // Updated to reflect the specific subcategories requested
  const productTypes = [
    {
      title: 'Living Room',
      type: 'Indoor',
      description: 'Sofas, sectionals, and accent chairs designed for relaxation and social gatherings.',
      features: ['Plush Comfort', 'Stain Resistant', 'Modular Options'],
      imageUrl: '/assets/images/living-room-cover.jpg',
      href: '/product-categories/furniture/living-room',
    },
    {
      title: 'Dining Room',
      type: 'Indoor',
      description: 'Elegant dining tables and chairs that bring style and functionality to meal times.',
      features: ['Solid Wood', 'Extendable Tables', 'Ergonomic Seating'],
      imageUrl: '/assets/images/dining-room-cover.jpg',
      href: '/product-categories/furniture/dining-room',
    },
    {
      title: 'Bedroom',
      type: 'Indoor',
      description: 'Beds, nightstands, and wardrobes crafted to create a peaceful sleeping sanctuary.',
      features: ['Storage Solutions', 'Premium Mattresses', 'Calm Aesthetics'],
      imageUrl: '/assets/images/bedroom-cover.jpg',
      href: '/product-categories/furniture/bedroom',
    },
    {
      title: 'Study / Office',
      type: 'Indoor',
      description: 'Desks and ergonomic chairs optimized for productivity and work-from-home comfort.',
      features: ['Cable Management', 'Adjustable Height', 'Focus Oriented'],
      imageUrl: '/assets/images/office-cover.jpg',
      href: '/product-categories/furniture/study-office',
    },
    {
      title: 'Kitchen',
      type: 'Indoor',
      description: 'Bar stools, kitchen islands, and storage units designed for the heart of the home.',
      features: ['Easy Clean Surfaces', 'Compact Design', 'Durable Materials'],
      imageUrl: '/assets/images/kitchen-cover.jpg',
      href: '/product-categories/furniture/kitchen',
    },
    {
      title: 'Outdoor',
      type: 'Outdoor',
      description: 'Weather-resistant furniture for patios, gardens, and poolside relaxation.',
      features: ['UV Resistant', 'Waterproof', 'Rust Proof Frames'],
      imageUrl: '/assets/images/outdoor-Living-cover.jpg',
      href: '/product-categories/furniture/outdoor-living',
    },
  ];

  return (
    <>
      <HeroVideoSection
        heading="Residential Collections"
        description="Explore our specialized furniture categories. From cozy living rooms to vibrant outdoor spaces, find the perfect pieces to elevate every corner of your home."
        videoSrc="/assets/video/video4.mp4"
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <nav className="text-sm sm:text-lg text-gray-600 flex items-center space-x-2 mt-8">
          <Link href="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <Link
            href="/product-categories/furniture"
            className="hover:text-secondary transition-colors"
          >
            Furniture
          </Link>
          <span className="text-gray-400">›</span>
          <span className="font-semibold text-secondary">Collections</span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 font-sans">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Browse by <span className="text-secondary">Space</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Select a category below to discover furniture tailored for specific areas of your home. 
            Each collection combines biophilic design principles with everyday durability.
          </p>
        </header>

        {/* Card Grid - Updated to 3 columns on large screens */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productTypes.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-secondary/20 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <span className="text-4xl">🖼️</span>
                  </div>
                )}
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md ${
                    item.type === 'Outdoor' 
                      ? 'bg-green-100/90 text-green-800 border border-green-200' 
                      : 'bg-blue-50/90 text-blue-800 border border-blue-200'
                  }`}>
                    {item.type}
                  </span>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-500">
                        <span className="mr-2"><CheckIcon /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center w-full py-3 px-4 bg-gray-500 hover:bg-secondary hover:text-white text-gray-900 text-sm font-semibold rounded-lg transition-all duration-300 group-hover:shadow-md"
                >
                  Explore {item.title}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    <ArrowRightIcon />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Optional: Brochure Section */}
        <div className="mt-20">
           {/* <OnlineBrochure /> */}
        </div>
      </main>
    </>
  );
}