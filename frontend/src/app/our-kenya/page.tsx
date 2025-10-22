'use client'

import OurKenya from '@/components/OurKenya'
import PageHeader from '@/components/PageHeader'

export default function OurKenyaPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Kenya — The Heartland"
        subtitle="Discover the diverse regions and communities that make Kenya a truly special place, united by the spirit of Harambee (pulling together)."
        backgroundImage="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=600&fit=crop"
      />
      <OurKenya />
    </div>
  )
}
