'use client'

import GlobalStage from '@/components/GlobalStage'
import PageHeader from '@/components/PageHeader'

export default function GlobalStagePage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Global Stage — The Vision"
        subtitle="Kenya's presence on the world stage is marked by excellence, innovation, and a commitment to making a positive global impact."
        backgroundImage="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1920&h=600&fit=crop"
      />
      <GlobalStage />
    </div>
  )
}
