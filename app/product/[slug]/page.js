import { products } from '../../../data/products'
import ProductDetailClient from '../../../components/ProductDetailClient'

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.slug === params?.slug)
  if (!product) {
    return <div className="py-16">Product not found.</div>
  }
  return <ProductDetailClient product={product} />
}
