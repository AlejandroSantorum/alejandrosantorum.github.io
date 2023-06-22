import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineSafetyCertificate } from "react-icons/ai";

import './Certification.css'

function CertificationCard(
    {id, title, title_url, details, date, credential_id, credential_url, image}
) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        certificationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
           <div key={id} className={`certification-card ${classes.certificationCard}`}>
               <div className="certificationcard-content">
                    <div className="certificationcard-details1">
                        <h2 style={{color: theme.tertiary}}>
                            <a style={{color: theme.tertiary}} href={title_url}>
                                {title}
                            </a>
                        </h2>
                        <p style={{color: theme.tertiary80}}>{details}</p>
                    </div>
                    <div className="certificationcard-details2" style={{color: theme.primary}}>
                        <h5>{date}</h5>
                        <div className="certificationcard-credential">
                            <AiOutlineSafetyCertificate />
                            <h5>
                                <a style={{color: theme.primary}} href={credential_url}>
                                    {credential_id}
                                </a>
                            </h5>
                        </div>   
                    </div>
                </div> 
                <div className="certificationcard-imgcontainer">
                    <img src={image} alt="" />
                </div>
           </div>
        </Fade>
        
    )
}

export default CertificationCard
