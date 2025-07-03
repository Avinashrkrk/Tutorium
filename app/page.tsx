export const dynamic = 'force-dynamic'

import React from 'react'
import { Button } from "@/components/ui/button"
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { getAllCompanion, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'

const Page =  async () => {
  const companions = await getAllCompanion({limit: 3})
  const recentSessionCompanions = await getRecentSessions()

  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>

      <section className='home-section'>
        {companions.map((companion) =>(
          <CompanionCard 
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className='home-section'>
        <CompanionsList 
          title= "Recently completed sessions"
          companions= {recentSessionCompanions}
          classNames="overflow-x-auto"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page
