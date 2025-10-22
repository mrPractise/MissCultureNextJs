'use client'

import Ambassador from '@/components/Ambassador'
import PageHeader from '@/components/PageHeader'

export default function AmbassadorPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="The Ambassador — Susan's Journey"
        subtitle="Meet the inspiring individual who represents Kenya's cultural heritage and values on the global stage."
        backgroundImage="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=600&fit=crop"
      />
      <Ambassador />
    </div>
  )
}
