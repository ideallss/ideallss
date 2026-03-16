import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';
import OnlineBrochure from '@/app/(users)/components/OnlineBrochure';
import Image from 'next/image';
import Link from 'next/link';

export default function Furniture() {
  const productTypes = [
    {
      title: 'BANQUET AURA CREST',
      description: 'Elegant and versatile furniture designed for grand events and large gatherings, ensuring comfort and style for every guest.',
      features: ['Stackable design', 'Lightweight', 'High durability', 'Premium finish'],
      applications: ['Wedding halls', 'Conference centers', 'Event spaces', 'Banquet halls'],
      imageUrl: '/assets/images/BANQUET AURA CREST-cover.jpg',
      href: '/product-categories/furniture/banquet-aura-crest',
    },
    {
      title: 'SIPORA BAR CREST',
      description: 'Modern bar seating and counter solutions crafted to withstand high-traffic nightlife environments while maintaining aesthetic appeal.',
      features: ['Spill resistant', 'Ergonomic support', 'Modern aesthetics', 'Sturdy construction'],
      applications: ['Pubs', 'Hotel lounges', 'Restaurants', 'Rooftop bars'],
      imageUrl: '/assets/images/SIPORA BAR CREST furniture-cover.jpg',
      href: '/product-categories/furniture/sipora-bar-crest',
    },
    {
      title: 'TRANQUIL HOTEL CREST',
      description: 'Luxurious guest room furniture focused on comfort and relaxation, creating a peaceful sanctuary for travelers.',
      features: ['Premium upholstery', 'Sound-absorbing materials', 'Space-efficient', 'Luxury finish'],
      applications: ['Guest rooms', 'Suites', 'Hotel lobbies', 'Resorts'],
      imageUrl: '/assets/images/TRANQUIL HOTEL CREST-cover.jpg',
      href: '/product-categories/furniture/tranquil-hotel-crest',
    },
  ];

  return (
    <>
      <HeroVideoSection
        heading="Hospitality Collection"
        description="Premium furniture solutions designed for the hospitality industry. From grand banquets to intimate bar settings and tranquil hotel rooms, our collection elevates the guest experience."
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
            href="/product-categories/furniture/hospitality-collection"
            className="hover:text-secondary transition"
          >
            Furniture Categories
          </Link>
          <span>›</span>

          <span className="font-semibold text-secondary">Hospitality Collection</span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 font-sans">
        {/* Page Title */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary">Hospitality Collection</h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Explore our specialized range of hospitality furniture, including the BANQUET AURA CREST, SIPORA BAR CREST, and TRANQUIL HOTEL CREST collections. 
            Designed to enhance guest experiences through superior comfort, durability, and timeless design.
          </p>
        </header>

        {/* Card Grid - Updated to lg:grid-cols-2 for 2 items per row */}
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