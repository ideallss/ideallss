import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';
import OnlineBrochure from '@/app/(users)/components/OnlineBrochure';
import Image from 'next/image';
import Link from 'next/link';

export default function Floorings() {
  const productTypes = [
    {
      title: 'Vinyl Rolls',
      description:
        'Wide-format vinyl flooring rolls for seamless large area installations.',
      features: [
        'Seamless installation',
        'Water resistant',
        'Easy maintenance',
        'Commercial grade',
      ],
      applications: [
        'Healthcare facilities',
        'Retail spaces',
        'Educational institutions',
        'Hospitality',
      ],
      imageUrl: '/assets/products/floorings/VinylFloorings&Laminates/Vinyl Rolls.jpg',
      href: '/product-categories/floorings/vinyl-rolls',
    },
    {
      title: 'LVT (Luxury Vinyl Tile)',
      description:
        'Premium luxury vinyl tiles with realistic wood and stone appearances.',
      features: [
        'Realistic textures',
        'Click-lock system',
        'Waterproof core',
        'Scratch resistant',
      ],
      applications: [
        'Residential interiors',
        'Boutique retail',
        'Executive offices',
        'Showrooms',
      ],
      imageUrl: '/assets/products/floorings/VinylFloorings&Laminates/LVT.jpg',
      href: '/product-categories/floorings/lvt',
    },
    {
      title: 'SPC (Stone Plastic Composite)',
      description:
        'Rigid core vinyl flooring with enhanced stability and durability.',
      features: [
        '100% waterproof',
        'Dimensional stability',
        'Heavy-duty core',
        'Easy installation',
      ],
      applications: [
        'Basements',
        'Bathrooms',
        'Commercial kitchens',
        'High-traffic areas',
      ],
      imageUrl: '/assets/products/floorings/VinylFloorings&Laminates/SPC.jpg',
      href: '/product-categories/floorings/spc',
    },
    {
      title: 'Laminates',
      description:
        'High-pressure laminate flooring with authentic wood appearances.',
      features: [
        'Natural wood textures',
        'AC rating system',
        'Easy click installation',
        'Fade resistant',
      ],
      applications: [
        'Residential homes',
        'Offices',
        'Retail environments',
        'Hospitality spaces',
      ],
      imageUrl: '/assets/products/floorings/VinylFloorings&Laminates/Laminates.jpg',
      href: '/product-categories/floorings/laminates',
    },
    {
      title: 'Woven Vinyl',
      description:
        'Textile-backed vinyl flooring combining comfort with durability.',
      features: [
        'Soft underfoot',
        'Sound absorption',
        'Dimensional stability',
        'Design flexibility',
      ],
      applications: [
        'Healthcare',
        'Senior living',
        'Educational facilities',
        'Hospitality',
      ],
      imageUrl: '/assets/products/floorings/VinylFloorings&Laminates/Woven Vinyl.jpg',
      href: '/product-categories/floorings/woven-vinyl',
    },
  ];

  return (
    <>
      <HeroVideoSection
        heading="Vinyl Flooring & Laminates"
        description="Comprehensive range of vinyl and laminate flooring solutions from leading global manufacturers, offering durability, style, and performance for diverse applications."
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
            Vinyl Flooring & Laminates
          </span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 font-sans">
        {/* Page Title */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary">
            Vinyl Flooring & Laminates
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Comprehensive range of vinyl and laminate flooring solutions from leading global manufacturers,
            offering durability, style, and performance for diverse applications.
          </p>
        </header>

        {/* Card Grid */}
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
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

        {/* Why Choose Section */}
        <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Why Choose Our Vinyl & Laminate Solutions
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Water Resistance */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Water Resistance</h4>
              <p className="text-gray-600 text-sm">
                Superior moisture protection suitable for wet areas and high-humidity environments
              </p>
            </div>

            {/* Easy Maintenance */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Easy Maintenance</h4>
              <p className="text-gray-600 text-sm">
                Simple cleaning requirements with excellent stain and spill resistance
              </p>
            </div>

            {/* Design Versatility */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Design Versatility</h4>
              <p className="text-gray-600 text-sm">
                Extensive range of colors, patterns, and textures to match any design aesthetic
              </p>
            </div>

            {/* Installation Speed */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Installation Speed</h4>
              <p className="text-gray-600 text-sm">
                Quick and efficient installation with minimal disruption to operations
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specifications & Installation Support */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Specifications */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-secondary mb-6">Technical Specifications</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Performance Standards</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 text-sm">EN 649 Commercial vinyl classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 text-sm">ASTM F1700 resilient floor covering standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 text-sm">AC rating system for laminate durability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 text-sm">FloorScore certified for indoor air quality</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Installation Support */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-secondary mb-6">Installation Support</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Services Provided</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 text-sm">Technical installation guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 text-sm">Subfloor preparation specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 text-sm">Adhesive and tools recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-600 text-sm">Project consultation and support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* <OnlineBrochure /> */}
    </>
  );
}