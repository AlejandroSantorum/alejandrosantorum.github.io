import React, { useContext} from 'react';

import './Certification.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { certificationData } from '../../data/certificationData'
import CertificationCard from './CertificationCard';

function Certification() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {certificationData.certifications.length > 0 && (
                <div className="certification" id="certification" style={{backgroundColor: theme.secondary}}>
                <div className="certification-body">
                    <h1 style={{color: theme.primary}}>Certifications</h1>
                    <h4 style={{color:theme.tertiary}}>{certificationData.bio}</h4>
                </div>
                <div className="certification-cards">
                    {certificationData.certifications.map(certif => ( 
                        <CertificationCard 
                        key={certif.id}
                        id={certif.id}
                        title={certif.title}
                        title_url={certif.title_url}
                        details={certif.details}
                        date={certif.date}
                        credential_id={certif.credential_id}
                        credential_url={certif.credential_url}
                        image={certif.image}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Certification
