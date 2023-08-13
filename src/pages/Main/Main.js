import React from 'react'
import { Helmet } from 'react-helmet'

import {Navbar, Footer, Landing, About, Skills,
        Testimonials, Blog, Experience, // Education,
        Contacts, Projects, Services, Certification,
        ExperienceTimeline, Publications,
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
            <Skills />
            <Experience />
            <Projects />
            <Certification />
            <Services />
            <Testimonials />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
