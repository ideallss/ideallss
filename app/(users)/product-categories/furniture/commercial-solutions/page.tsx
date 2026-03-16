import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';
import OnlineBrochure from '@/app/(users)/components/OnlineBrochure';
import Image from 'next/image';
import Link from 'next/link';

export default function Furniture() {
  const productTypes = [
    {
      title: 'Hospital Furniture',
      description: 'Specialized furniture designed for healthcare environments, prioritizing hygiene, patient comfort, and staff efficiency.',
      features: ['Antimicrobial surfaces', 'Easy to clean', 'Patient safety', 'Ergonomic staff stations'],
      applications: ['Patient rooms', 'Waiting areas', 'Nurse stations', 'Consultation rooms'],
      imageUrl: '/assets/images/Hospitality_cover.jpg',
      href: '/product-categories/furniture/hospital',
    },
    {
      title: 'School Furniture',
      description: 'Durable and ergonomic learning solutions designed to enhance student engagement and withstand heavy daily use.',
      features: ['Heavy-duty construction', 'Ergonomic seating', 'Flexible layouts', 'Safety compliant'],
      applications: ['Classrooms', 'Libraries', 'Cafeterias', 'Administrative offices'],
      imageUrl: '/assets/images/school-cover.jpg',
      href: '/product-categories/furniture/school',
    },
  ];

  return (
    <>
      <HeroVideoSection
        heading="Commercial Solutions"
        description="High-performance furniture solutions for healthcare and educational facilities. Our collection combines durability, hygiene, and ergonomics to support better outcomes for patients and students alike."
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
            href="/product-categories/furniture/commercial-solutions"
            className="hover:text-secondary transition"
          >
            Furniture Categories
          </Link>
          <span>›</span>

          <span className="font-semibold text-secondary">Commercial Solutions</span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 font-sans">
        {/* Page Title */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary">Commercial Solutions</h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Our commercial solutions include durable desks, chairs, and hospital furniture designed for comfort, functionality, and long-term use.
            Ideal for educational and healthcare environments, combining reliability, safety, and ergonomic design.

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