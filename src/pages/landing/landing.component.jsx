import React from 'react'
import './landing.styles.scss'
import TopSection from '../../components/TopSection/top-section.component'
import OnlineJobFair from '../../components/OnlineJobFair/online-job-fair.component'
import OurSolutions from '../../components/OurSolutions/our-solutions.component'
import Queries from '../../components/Queries/queries.component'
import RegisteredUsers from '../../components/RegisteredUsers/registered-users.component'
import Universities from '../../components/Universities/universities.component'
import Ambassadors from '../../components/Ambassadors/ambassadors.component'
import Pricing from '../../components/Pricing/pricing.component'
import LatestNews from '../../components/LatestNews/latest-news.component'
import Testimonials from '../../components/Testimonials/testimonials.component'

function LandingPage() {
    return (
        <div className='landing-page'>
            <TopSection/>
            <OnlineJobFair/>
            <OurSolutions/>
            <Queries/>
            <RegisteredUsers/>
            <Universities/>
            <Ambassadors/>
            <Pricing/>
            {/* <LatestNews/>
            <Testimonials/> */}
        </div>
    )
}

export default LandingPage
