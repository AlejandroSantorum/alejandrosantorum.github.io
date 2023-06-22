import React from 'react'
import { Helmet } from 'react-helmet'

import {Navbar, Footer, Landing, About, Skills,
        Testimonials, Blog, Education, Experience,
        Contacts, Projects, Services, Certification,
        ExperienceTimeline
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
            <Education />
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
