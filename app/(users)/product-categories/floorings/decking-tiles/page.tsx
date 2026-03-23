import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';
import OnlineBrochure from '@/app/(users)/components/OnlineBrochure';
import Image from 'next/image';
import Link from 'next/link';

export default function Floorings() {
  const productTypes = [
    {
      title: 'WPC Outdoor',
      description:
        'Weather-resistant Wood Plastic Composite decking tiles for outdoor applications.',
      features: [
        'Weather resistant',
        'Anti-slip surface',
        'UV protection',
        'Easy installation',
        'Maintenance-free',
      ],
      applications: [
        'Balconies',
        'Terraces',
        'Pool areas',
        'Rooftop decks',
        'Garden pathways',
      ],
      imageUrl: '/assets/products/floorings/DeckingTiles/WPC Outdoor-1.jpg',
      href: '/product-categories/floorings/wpc/outdoor',
    },
    {
      title: 'WPC Indoor',
      description:
        'Premium Wood Plastic Composite tiles designed for indoor decorative applications.',
      features: [
        'Scratch resistant',
        'Water resistant',
        'Easy cleaning',
        'Natural wood appearance',
        'Stable dimensions',
      ],
      applications: [
        'Bathrooms',
        'Kitchens',
        'Saunas',
        'Spa areas',
        'Indoor pools',
      ],
      imageUrl: '/assets/products/floorings/DeckingTiles/WPC Indoor-1.jpg',
      href: '/product-categories/floorings/wpc/indoor',
    },
  ];

  const whyChooseFeatures = [
    {
      title: 'Durability',
      description: 'Engineered to withstand extreme weather conditions and heavy foot traffic',
      icon: '🛡️',
    },
    {
      title: 'Sustainability',
      description: 'Made from recycled materials with minimal environmental impact',
      icon: '♻️',
    },
    {
      title: 'Versatility',
      description: 'Suitable for both residential and commercial applications',
      icon: '🔧',
    },
    {
      title: 'Aesthetics',
      description: 'Natural wood appearance without the maintenance requirements',
      icon: '✨',
    },
  ];

  const installationSteps = [
    {
      number: 1,
      title: 'Surface Preparation',
      description: 'Clean, level, and dry the installation surface',
    },
    {
      number: 2,
      title: 'Layout Planning',
      description: 'Plan tile layout and starting position',
    },
    {
      number: 3,
      title: 'Tile Installation',
      description: 'Connect interlocking tiles systematically',
    },
    {
      number: 4,
      title: 'Final Inspection',
      description: 'Check alignment and secure connections',
    },
  ];

  const maintenanceGuidelines = {
    regularCleaning: [
      'Sweep or vacuum regularly',
      'Mop with mild soap solution',
      'Remove stains immediately',
    ],
    periodicMaintenance: [
      'Check drainage channels',
      'Inspect interlocking connections',
      'Remove debris from gaps',
    ],
  };

  const colorsAndFinishes = [
    {
      title: 'Teak',
      description: 'Classic golden brown with wood grain texture',
      color: 'bg-amber-700',
    },
    {
      title: 'Grey Oak',
      description: 'Contemporary grey with subtle wood pattern',
      color: 'bg-gray-700',
    },
    {
      title: 'Mahogany',
      description: 'Rich reddish-brown with natural grain',
      color: 'bg-red-800',
    },
  ];

  return (
    <>
      <HeroVideoSection
        heading="Decking Tiles"
        description="Premium WPC (Wood Plastic Composite) decking tiles combining the beauty of natural wood with the durability of modern composite materials for both indoor and outdoor applications."
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
            href="/product-categories/floorings"
            className="hover:text-secondary transition"
          >
            Flooring
          </Link>
          <span>›</span>

          <span className="font-semibold text-secondary">
            Decking Tiles
          </span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 font-sans">
        {/* Page Title */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary">
            Decking Tiles
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Premium WPC (Wood Plastic Composite) decking tiles combining the beauty of natural wood with
            the durability of modern composite materials for both indoor and outdoor applications.
          </p>
        </header>

        {/* Card Grid */}
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 mb-16">
          {productTypes.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border-secondary-600 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
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

                {/* Features */}
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

                {/* Applications */}
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

        {/* Why Choose WPC Decking Tiles */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-12">
              Why Choose WPC Decking Tiles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {whyChooseFeatures.map((feature, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process & Maintenance Guidelines */}
        <section className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Installation Process */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Installation Process
            </h3>
            <div className="space-y-4">
              {installationSteps.map((step, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700 mr-4">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Guidelines */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Maintenance Guidelines
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-800 text-sm mb-3">
                  Regular Cleaning
                </h4>
                <ul className="space-y-2">
                  {maintenanceGuidelines.regularCleaning.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 text-sm mb-3">
                  Periodic Maintenance
                </h4>
                <ul className="space-y-2">
                  {maintenanceGuidelines.periodicMaintenance.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Available Colors & Finishes */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
              Available Colors & Finishes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {colorsAndFinishes.map((color, idx) => (
                <div key={idx} className="text-center">
                  <div className={`w-24 h-24 mx-auto mb-4 ${color.color} rounded-lg shadow-lg`}></div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {color.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {color.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* <OnlineBrochure /> */}
    </>
  );
}