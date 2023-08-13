import React from 'react'
import { Helmet } from 'react-helmet'

import {
    Navbar, Footer, Landing, About, Skills,
    Contacts, Projects , Certification,
    ExperienceTimeline, Publications,
    // Testimonials, Blog, Experience, Education, Services
} from '../../components'

import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} {headerData.second_surname}</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <ExperienceTimeline />
            <Publications />
            {/* <Education /> */}
            {/* <Experience /> */}
            <Projects />
            <Skills />
            <Certification />
            {/* <Services /> */}
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
