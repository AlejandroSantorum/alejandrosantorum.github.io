import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import orcid_logo from '../../assets/png/publications/orcid_org_logo.png'

import './Publications.css'
import PublicationsCard from './PublicationsCard';

import { publicationsData } from '../../data/publicationsData'

function Publications() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="publications" id="publications" style={{backgroundColor: theme.secondary}}>
           
            <div className="publications-body">
                <div className="publications-description">
                <h1 style={{color:theme.primary}}>Publications</h1>
                    {publicationsData.map(pub => (
                        <PublicationsCard 
                            key={pub.id}
                            id={pub.id}
                            title={pub.title}
                            publicationDate={pub.publicationDate}
                            authors={pub.authors}
                            journal={pub.journal}
                            logo_img={pub.logo_img}
                            paperLink={pub.link}
                        />
                    ))}
                </div>
                <div className="publications-image" >
                    <a href='https://orcid.org/0000-0003-3555-9501'>
                        <img src={orcid_logo} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Publications
