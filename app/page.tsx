import React from 'react'
import { Button } from "@/components/ui/button"
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      
      <section className='home-section'>
        <CompanionCard 
          id = "123" 
          name = "Neura the Brain Explorer"
          topic = "Neural Network of the Brain"
          subject = "science"
          duration = {45}
          color = "#ffda6e"
        />
        <CompanionCard 
          id = "456" 
          name = "Countsy the Number Wizard"
          topic = "Derivatives & Integrals"
          subject = "Maths"
          duration = {30}
          color = "#e5d0ff"
        />
        <CompanionCard 
          id = "789" 
          name = "Verba the Vocabulary Builder"
          topic = "language"
          subject = "English literacture"
          duration = {30}
          color = "#BDE7FF"
        />
      </section>

      <section className='home-section'>
        <CompanionsList 
          title= "Recently completed sessions"
          companions= {recentSessions}
          classNames="overflow-x-auto"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page