import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';
import OnlineBrochure from '@/app/(users)/components/OnlineBrochure';
import Image from 'next/image';
import Link from 'next/link';

export default function Furniture() {
  const productTypes = [
    {
      title: 'Indoor Living',
      description: 'Elegant and comfortable furniture designed to enhance the aesthetics and functionality of your interior spaces.',
      features: ['Premium upholstery', 'Ergonomic design', 'Durable frames', 'Modern styles'],
      applications: ['Living Rooms', 'Bedrooms', 'Home Offices', 'Dining Areas'],
      imageUrl: '/assets/images/Indoor-Living-cover.jpg',
      href: '/product-categories/furniture/indoor-living',
    },
    {
      title: 'Outdoor Living',
      description: 'Weather-resistant and stylish furniture built to withstand the elements while providing comfort outside.',
      features: ['Weatherproof materials', 'UV resistant', 'Easy maintenance', 'Rust resistant'],
      applications: ['Patios', 'Gardens', 'Poolside', 'Balconies'],
      imageUrl: '/assets/images/outdoor-Living-cover.jpg',
      href: '/product-categories/furniture/outdoor-living',
    },
  ];

  return (
    <>
      <HeroVideoSection
        heading="Residential Collections"
        description="Discover our curated range of indoor and outdoor furniture. Combining comfort, durability, and contemporary design to transform your living spaces into sanctuaries of style."
        videoSrc="/assets/video/video4.mp4"
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <nav className="text-lg text-gray-600 flex items-center space-x-2 mt-12">
          <Link href="/" className="hover:text-secondary transition">
            Home
          </Link>
          <span>›</span>

          <Link
            href="/product-categories/furniture"
            className="hover:text-secondary transition"
          >
            Furniture Categories
          </Link>
          <span>›</span>

          <span className="font-semibold text-secondary">Residential Collections</span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 font-sans">
        {/* Page Title */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary">Residential Collections</h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Our residential solutions include glider chairs, benches, sofas, and beds designed for comfortable indoor and outdoor living. Inspired by biophilic design, they create a seamless indoor–outdoor flow while adding durability, style, and everyday comfort to your home.
          </p>
        </header>

        {/* Card Grid */}
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {productTypes.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border-secondary-600 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="text-gray-400 text-sm flex flex-col items-center justify-center h-full bg-gray-100">
                    <span className="text-4xl">🖼️</span>
                    No Image Available
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-secondary transition">
                    {item.title}
                  </h3>
                  <Link
                    href={item.href}
                    className="text-secondary text-sm font-medium hover:underline"
                  >
                    View Details →
                  </Link>
                </div>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">
                    Key Features
                  </h4>
                  <ul className="list-disc ml-5 text-gray-600 text-sm grid grid-cols-2 gap-y-1">
                    {item.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">
                    Applications
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.applications.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      {/* <OnlineBrochure /> */}
    </>
  );
}