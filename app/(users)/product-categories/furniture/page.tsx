// app/(users)/furniture/page.tsx
import Subcategory from '../../components/categories/Subcategory';
import HeroVideoSection from '../../components/HeroVideoSection';

export default function Furniture() {
  const data = {
    title: 'Furniture',
    description:
      'Premium furniture collections designed for modern living, commercial spaces, and hospitality environments with superior craftsmanship and durability.',
    productCategories: [
      {
        name: 'Residential Collections',
        imageUrl:
          '/assets/images/Residential_cover.jpg',
        description:
          'Stylish and comfortable furniture tailored for modern homes.',
      },
      {
        name: 'Commercial Solutions',
        imageUrl:
          '/assets/images/Commercial_cover.jpg',
        description:
          'Durable and functional furniture for offices and workspaces.',
      },
      {
        name: 'Custom Manufacturing',
        imageUrl:
          '/assets/images/Custom_cover.jpg',
        description:
          'Bespoke furniture solutions crafted to meet unique design requirements.',
      },
      {
        name: 'Office Furniture Systems',
        imageUrl:
          '/assets/images/Office_Furniture_cover.jpg',
        description:
          'Ergonomic and modular systems to enhance workplace productivity.',
      },
      {
        name: 'Hospitality Furnishings',
        imageUrl:
          '/assets/images/Hospitality_cover.jpg',
        description:
          'Elegant and durable furniture crafted for hotels, restaurants, and resorts.',
      },
    ],
    qualityAssurance: [
      'Premium raw materials and finishes',
      'Rigorous strength and durability testing',
      'Ergonomic and comfort evaluation',
      'Sustainability and eco-friendly certifications',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
    overlaySubtitle:
      'Our Global Sourcing Network provides access to premium furniture manufacturers worldwide. We deliver modern, ergonomic, and durable furniture solutions for residential, commercial, and hospitality sectors. By partnering with trusted vendors, we ensure consistent quality, innovative designs, and sustainable production practices. From bespoke pieces to large-scale supply, we streamline logistics for efficient, on-time delivery.',
  };

  return (
    <main>
      <HeroVideoSection
        heading="Furniture"
        description="Premium furniture collections designed for modern living, commercial spaces, and hospitality environments."
        videoSrc="/assets/video/video4.mp4"
      />
      <Subcategory {...data} />
    </main>
  );
}
