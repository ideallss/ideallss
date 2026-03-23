// app/(users)/fabrics/page.tsx
import Subcategory from '../../components/categories/Subcategory';
import HeroVideoSection from '../../components/HeroVideoSection';

export default function Fabrics() {
  const data = {
    title: 'Fabrics',
    description:
      'High-quality fabrics designed for upholstery, window treatments, and performance-driven applications with a focus on durability and sustainability.',
    productCategories: [
      {
        name: 'Upholstery Materials',
        imageUrl: '/assets/products/fabrics/Upholstery Materials.jpg',
        description: 'Durable and stylish fabrics for sofas, chairs, and soft furnishings.',
      },
      {
        name: 'Window Treatments',
        imageUrl: '/assets/products/fabrics/Window Treatments.jpg',
        description: 'Elegant drapery and curtain fabrics for residential and commercial spaces.',
      },
      {
        name: 'Technical Fabrics',
        imageUrl: '/assets/products/fabrics/Technical Fabrics.jpg',
        description: 'Specialized textiles engineered for functionality and performance.',
      },
      {
        name: 'Performance Textiles',
        imageUrl: '/assets/products/fabrics/Performance Textiles.jpg',
        description: 'High-performance fabrics resistant to wear, stains, and fading.',
      },
      {
        name: 'Sustainable Fiber Options',
        imageUrl: '/assets/products/fabrics/Sustainable Fiber Options.jpg',
        description: 'Eco-friendly fabrics made from recycled and renewable fibers.',
      },
    ],
    qualityAssurance: [
      'Colorfastness and fade resistance',
      'Abrasion and durability testing',
      'Non-toxic and safe materials',
      'Certified eco-friendly fiber sourcing',
    ],
    overlaySubtitle:
      'Our Global Sourcing Network connects businesses with premium fabric suppliers worldwide. From upholstery to sustainable textiles, we ensure quality, durability, and design versatility. Every material is tested for performance, comfort, and compliance with international standards.',
  };

  return (
    <main>
      <HeroVideoSection
        heading="Fabrics"
        description="High-quality fabrics designed for upholstery, window treatments, and performance-driven applications."
        videoSrc="/assets/video/video4.mp4"
      />
      <Subcategory {...data} />
    </main>
  );
}