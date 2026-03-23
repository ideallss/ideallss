import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';
import OnlineBrochure from '@/app/(users)/components/OnlineBrochure';
import Image from 'next/image';
import Link from 'next/link';

export default function Floorings() {
  const productTypes = [
    {
      title: 'Sports Grass',
      description:
        'Professional-grade artificial grass designed specifically for sports applications.',
      features: [
        'FIFA certified options',
        'Shock absorption',
        'Weather resistant',
        'High durability',
      ],
      applications: [
        'Football fields',
        'Tennis courts',
        'Multi-sport facilities',
        'Training grounds',
      ],
      imageUrl: '/assets/products/floorings/ArtificialandSportsGrass/Sports Grass-1.jpg',
      href: '/product-categories/floorings/artificial-grass/sports',
    },
    {
      title: 'Artificial Grass',
      description:
        'Premium synthetic grass for landscaping and decorative applications.',
      features: [
        'Natural appearance',
        'Low maintenance',
        'UV resistant',
        'Pet-friendly options',
      ],
      applications: [
        'Residential gardens',
        'Commercial landscaping',
        'Rooftop gardens',
        'Play areas',
      ],
      imageUrl: '/assets/products/floorings/ArtificialandSportsGrass/Artificial Grass-1.jpg',
      href: '/product-categories/floorings/artificial-grass/landscape',
    },
    {
      title: 'PE Turf',
      description:
        'Polyethylene-based artificial turf offering excellent durability and comfort.',
      features: [
        'Soft texture',
        'Realistic look',
        'Fade resistant',
        'Easy installation',
      ],
      applications: [
        'Residential lawns',
        'Playground surfaces',
        'Decorative areas',
        'Indoor applications',
      ],
      imageUrl: '/assets/products/floorings/ArtificialandSportsGrass/PE Turf-2.jpg',
      href: '/product-categories/floorings/artificial-grass/pe-turf',
    },
  ];

  return (
    <>
      <HeroVideoSection
        heading="Artificial Grass"
        description="Explore our range of artificial grass solutions for sports, landscaping, and decorative applications."
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
            Artificial Grass
          </span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 font-sans">
        {/* Page Title */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary">
            Artificial Grass
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Explore our range of artificial grass solutions designed for sports,
            landscaping, and decorative applications.
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
      </main>

      {/* <OnlineBrochure /> */}
    </>
  );
}