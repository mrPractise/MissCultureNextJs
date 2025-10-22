'use client'

import OurCulture from '@/components/OurCulture'
import PageHeader from '@/components/PageHeader'

export default function OurCulturePage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Culture — The Soul"
        subtitle="Immerse yourself in the vibrant traditions, languages, and artistic expressions that define Kenya's cultural identity."
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=600&fit=crop"
      />
      <OurCulture />
    </div>
  )
}
