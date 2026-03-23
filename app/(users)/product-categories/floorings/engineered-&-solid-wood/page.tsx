import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';
import OnlineBrochure from '@/app/(users)/components/OnlineBrochure';
import Image from 'next/image';
import Link from 'next/link';

export default function Floorings() {
  const productTypes = [
    {
      title: 'Engineered Wood',
      description:
        'Multi-layer wood flooring with enhanced stability and moisture resistance.',
      features: [
        'Dimensional stability',
        'Multiple installation methods',
        'Real wood veneer',
        'Refinishable surface',
      ],
      applications: [
        'Residential homes',
        'Commercial offices',
        'Hospitality venues',
        'Retail spaces',
      ],
      imageUrl: '/assets/products/floorings/Engineered&SolidWood/Engineered Wood.jpg',
      href: '/product-categories/floorings/engineered-wood',
    },
    {
      title: 'Solid Wood',
      description:
        'Traditional solid hardwood flooring offering timeless beauty and longevity.',
      features: [
        '100% solid wood',
        'Multiple refinishing cycles',
        'Natural variations',
        'Long-term value',
      ],
      applications: [
        'Premium residences',
        'Historic renovations',
        'Executive offices',
        'Luxury retail',
      ],
      imageUrl: '/assets/products/floorings/Engineered&SolidWood/Solid Wood.jpg',
      href: '/product-categories/floorings/solid-wood',
    },
  ];

  const finishesAndTreatments = [
    {
      title: 'Natural Oil',
      description: 'Penetrating oil finish that enhances wood grain',
      icon: '🟦',
    },
    {
      title: 'UV Lacquer',
      description: 'Durable factory-applied protective coating',
      icon: '🟦',
    },
    {
      title: 'Brushed',
      description: 'Textured surface highlighting wood character',
      icon: '🟦',
    },
    {
      title: 'Smoked',
      description: 'Heat-treated for distinctive color variations',
      icon: '🟦',
    },
    {
      title: 'Distressed',
      description: 'Aged appearance with character marks',
      icon: '🟦',
    },
    {
      title: 'Hand-scraped',
      description: 'Artisanal texture with traditional appeal',
      icon: '🟦',
    },
  ];

  const qualityStandards = [
    'Grade selection and quality control',
    'Moisture content verification',
    'Dimensional accuracy testing',
    'Finish durability assessment',
    'Installation system verification',
  ];

  const sustainabilityFeatures = [
    'FSC certified sustainable sources',
    'PEFC chain of custody verified',
    'Low VOC emissions certified',
    'Responsible harvesting practices',
    'Carbon footprint documentation',
  ];

  const installationSteps = [
    {
      number: 1,
      title: 'Site Assessment',
      description: 'Subfloor evaluation and environmental condition analysis',
    },
    {
      number: 2,
      title: 'Preparation',
      description: 'Subfloor preparation and moisture barrier installation',
    },
    {
      number: 3,
      title: 'Installation',
      description: 'Professional installation by certified technicians',
    },
    {
      number: 4,
      title: 'Finishing',
      description: 'Final sanding, finishing, and quality inspection',
    },
  ];

  return (
    <>
      <HeroVideoSection
        heading="Engineered & Solid Wood"
        description="Premium wood flooring solutions sourced from sustainable forests and leading manufacturers worldwide, offering natural beauty and exceptional quality for discerning projects."
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
            Engineered & Solid Wood
          </span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 font-sans">
        {/* Page Title */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary">
            Engineered & Solid Wood
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Premium wood flooring solutions sourced from sustainable forests and leading manufacturers
            worldwide, offering natural beauty and exceptional quality for discerning projects.
          </p>
        </header>

        {/* Product Cards Grid - Updated Design */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mb-16">
          {productTypes.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
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
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Title and View Details */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-semibold text-[#B8956B]">
                    {item.title}
                  </h3>
                  <Link
                    href={item.href}
                    className="text-[#B8956B] text-sm font-medium hover:underline flex items-center transition-colors"
                  >
                    View Details →
                  </Link>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Features */}
                <div className="mb-5">
                  <h4 className="font-semibold text-gray-800 text-sm mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm">
                        <span className="text-gray-400 mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">
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

        {/* Available Finishes & Treatments */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
              Available Finishes & Treatments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {finishesAndTreatments.map((finish, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-lg flex items-center justify-center text-3xl">
                    {finish.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {finish.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {finish.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards & Sustainability */}
        <section className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Quality Standards */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Quality Standards
            </h3>
            <ul className="space-y-3">
              {qualityStandards.map((standard, idx) => (
                <li key={idx} className="flex items-start text-gray-600 text-sm">
                  <span className="text-green-500 mr-3">✓</span>
                  {standard}
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Sustainability
            </h3>
            <ul className="space-y-3">
              {sustainabilityFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-600 text-sm">
                  <span className="text-green-600 mr-3">🌿</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Complete Installation Support */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
              Complete Installation Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {installationSteps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center text-2xl font-semibold text-indigo-800">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {step.description}
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