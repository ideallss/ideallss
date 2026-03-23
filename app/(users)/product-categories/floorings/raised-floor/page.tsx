import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';
import OnlineBrochure from '@/app/(users)/components/OnlineBrochure';
import Image from 'next/image';
import Link from 'next/link';

export default function Floorings() {
  const pedestalSystems = [
    {
      title: 'Steel Pedestal System',
      description: 'Heavy-duty steel pedestals with adjustable height for commercial applications',
      features: [
        'Load capacity: 1000-1500 kg/m²',
        'Height range: 100-1200mm',
        'Seismic resistance',
        'Corrosion protection',
      ],
      applications: [
        'Data centers',
        'Trading floors',
        'Control rooms',
        'Server rooms',
      ],
      imageUrl: '/assets/products/floorings/RaisedFloor/Steel Pedestal System.jpg',
      href: '/product-categories/floorings/raised/steel-pedestal',
    },
    {
      title: 'Aluminum System',
      description: 'Lightweight aluminum construction ideal for moderate load applications',
      features: [
        'Load capacity: 500-800 kg/m²',
        'Height range: 50-600mm',
        'Lightweight design',
        'Easy installation',
      ],
      applications: [
        'Offices',
        'Broadcasting studios',
        'Clean rooms',
        'Computer rooms',
      ],
      imageUrl: '/assets/products/floorings/RaisedFloor/Aluminum System-2.jpg',
      href: '/product-categories/floorings/raised/aluminum',
    },
    {
      title: 'Concrete Panel System',
      description: 'High-strength concrete panels for maximum durability and fire resistance',
      features: [
        'Fire resistant',
        'High load capacity',
        'Excellent stability',
        'Sound dampening',
      ],
      applications: [
        'Industrial facilities',
        'High-security areas',
        'Heavy equipment rooms',
      ],
      imageUrl: '/assets/products/floorings/RaisedFloor/Concrete Panel System.jpg',
      href: '/product-categories/floorings/raised/concrete',
    },
  ];

  const accessFloorPanels = [
    {
      title: 'Calcium Sulfate',
      properties: [
        'High load capacity',
        'Fire resistant',
        'Moisture resistant',
        'Smooth finish',
      ],
      sizes: [
        { dimension: '600x600mm', thickness: '28mm' },
        { dimension: '500x500mm', thickness: '32mm' },
        { dimension: '500x500mm', thickness: '38mm' },
      ],
    },
    {
      title: 'Steel Encased',
      properties: [
        'Maximum strength',
        'Welded construction',
        'Anti-static options',
        'Precise dimensions',
      ],
      sizes: [
        { dimension: '600x600mm', thickness: '30mm' },
        { dimension: '600x600mm', thickness: '35mm' },
        { dimension: '600x600mm', thickness: '40mm' },
      ],
    },
    {
      title: 'Aluminum',
      properties: [
        'Lightweight',
        'Corrosion resistant',
        'Easy handling',
        'Perforated options',
      ],
      sizes: [
        { dimension: '600x600mm', thickness: '25mm' },
        { dimension: '500x500mm', thickness: '30mm' },
      ],
    },
  ];

  const whyChooseFeatures = [
    {
      title: 'Cable Management',
      description: 'Complete under-floor space for power, data, and HVAC distribution',
      icon: '🔌',
    },
    {
      title: 'Accessibility',
      description: 'Easy access to services without disrupting workspace above',
      icon: '🔧',
    },
    {
      title: 'Load Distribution',
      description: 'Even load distribution with high capacity for heavy equipment',
      icon: '⚖️',
    },
    {
      title: 'Environmental Control',
      description: 'Improved airflow and climate control through under-floor plenum',
      icon: '🌡️',
    },
  ];

  const loadClassifications = [
    {
      title: 'Light Duty',
      capacity: '250-500 kg/m²',
    },
    {
      title: 'Medium Duty',
      capacity: '500-1000 kg/m²',
    },
    {
      title: 'Heavy Duty',
      capacity: '1000-1500 kg/m²',
    },
    {
      title: 'Extra Heavy',
      capacity: '1500+ kg/m²',
    },
  ];

  const standardsCompliance = [
    'EN 12825 - European raised floor standard',
    'CISCA - Ceilings & Interior Systems Construction',
    'UL Listed components and systems',
    'ASTM testing protocols compliance',
    'Seismic zone certifications available',
  ];

  const installationSteps = [
    {
      number: 1,
      title: 'Site Survey',
      description: 'Comprehensive site assessment and load requirement analysis',
    },
    {
      number: 2,
      title: 'Layout Design',
      description: 'Detailed floor plan with pedestal and panel positioning',
    },
    {
      number: 3,
      title: 'Installation',
      description: 'Professional installation by certified technicians',
    },
    {
      number: 4,
      title: 'Testing',
      description: 'Load testing and system verification before handover',
    },
  ];

  return (
    <>
      <HeroVideoSection
        heading="Raised Floor Systems"
        description="Professional raised access floor systems providing flexible infrastructure solutions for modern commercial environments with comprehensive cable management and service access."
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
            Raised Floor Systems
          </span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 font-sans">
        {/* Page Title */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary">
            Raised Floor Systems
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Professional raised access floor systems providing flexible infrastructure solutions for modern
            commercial environments with comprehensive cable management and service access.
          </p>
        </header>

        {/* Pedestal Systems - Cards */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-secondary mb-4">
            Pedestal Systems
          </h3>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Choose from our range of pedestal systems designed to meet specific load requirements and installation conditions.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pedestalSystems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="text-gray-400 text-sm flex flex-col items-center justify-center h-full">
                      <span className="text-4xl">🏗️</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">
                      Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary text-white text-xs rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={item.href}
                    className="mt-4 inline-block text-secondary text-sm font-medium hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Access Floor Panels - Simple Display */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center text-secondary mb-4">
            Access Floor Panels
          </h3>
          <div className="grid gap-8 md:grid-cols-3 mt-8">
            {accessFloorPanels.map((panel, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {panel.title}
                </h4>

                <div className="mb-6">
                  <h5 className="font-medium text-gray-800 mb-2">Properties</h5>
                  <ul className="space-y-1">
                    {panel.properties.map((prop, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {prop}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Sizes</h5>
                  <div className="space-y-1">
                    {panel.sizes.map((size, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-600">{size.dimension}</span>
                        <span className="text-gray-600">{size.thickness}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Benefits */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-12">
              System Benefits
            </h3>
            <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              Raised floor systems provide comprehensive solutions for modern facility infrastructure requirements.
            </p>
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

        {/* Load Classifications & Standards Compliance */}
        <section className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Load Classifications */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Load Classifications
            </h3>
            <div className="space-y-4">
              {loadClassifications.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 font-medium">{item.title}</span>
                  <span className="text-gray-600 text-sm">{item.capacity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Standards Compliance */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Standards Compliance
            </h3>
            <ul className="space-y-3">
              {standardsCompliance.map((item, idx) => (
                <li key={idx} className="text-gray-600 text-sm flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Professional Installation Process */}
        <section className="mb-16 bg-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-12">
            Professional Installation Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {installationSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* <OnlineBrochure /> */}
    </>
  );
}