import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

//import eduImgWhite from '../../assets/svg/publications/eduImgWhite.svg'
//import eduImgBlack from '../../assets/svg/publications/eduImgBlack.svg'

import './Publications.css'

function PublicationsCard({ id, title, publicationDate, authors, journal, logo_img }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        publicationsCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`publications-card ${classes.publicationsCard}`} >
                <div className="educard-img" style={{backgroundColor: "white"}}>
                    {/* <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" /> */}
                    <img src={logo_img} alt="journal logo" />
                </div>
                <div className="publications-details">
                    <h6 style={{color: theme.primary}}>{publicationDate}</h6>
                    <h4 style={{color: theme.tertiary}}>{title}</h4>
                    <h5 style={{color: theme.tertiary80}}>{authors}</h5>
                    <h5 style={{color: theme.tertiary80}}>{journal}</h5>
                </div>
            </div>
        </Fade>        
    )
}

export default PublicationsCard
