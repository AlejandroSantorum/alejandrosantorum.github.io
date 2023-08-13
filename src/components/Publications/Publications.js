import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Publications.css'
import PublicationsCard from './PublicationsCard';

import { publicationsData } from '../../data/publicationsData'

function Publications() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="publications" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="publications-body">
                <div className="publications-description">
                <h1 style={{color:theme.primary}}>Publications</h1>
                    {publicationsData.map(edu => (
                        <PublicationsCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="publications-image">
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Publications
