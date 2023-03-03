import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { GoLocation } from "react-icons/go";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";

import React,{useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import 'react-vertical-timeline-component/style.min.css';
import './ExperienceTimeline.css';

import cambridgeCrestImg from '../../assets/png/cambridge_crest_logo.png'
import toshibaLogo from '../../assets/png/toshiba_logo.png'
import uamLogo from '../../assets/png/uam_logo.png'



function ExperienceTimeline() {
    const { theme } = useContext(ThemeContext);

    return(
        <div className="experience-timeline" id="experience-timeline" style={{backgroundColor: theme.secondary}}>
            <h1 className="experience-time-title" style={{color: theme.primary}}>
                Experience
            </h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: theme.primary50, color: theme.tertiary }}
                    //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Oct. 2022 - present"
                    dateClassName='experience-timeline-date'
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Data Engineer</h3>
                    <div className="location-next-to-text">
                        <GoLocation style={{paddingRight: "5px"}}/>
                        <h5 className="vertical-timeline-element-subtitle">Sports betting consultancy, London, UK</h5>
                    </div>
                    <p>
                    Data Engineer for an undisclosed sports betting company that invests on betting markets using machine learning to make profit.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: theme.primary50, color: theme.tertiary }}
                    date="Apr. 2022 - Sept. 2022"
                    dateClassName='experience-timeline-date'
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <img src={toshibaLogo} alt="Toshiba logo" style={{width: "130px", float: "right"}}/>
                    <h3 className="vertical-timeline-element-title">Machine Learning Research Intern</h3>
                    <div className="location-next-to-text">
                        <GoLocation style={{paddingRight: "5px"}}/>
                        <h5 className="vertical-timeline-element-subtitle">Toshiba Europe Ltd., Cambridge, UK</h5>
                    </div>
                    <p>
                    Internship in collaboration with the Cambridge University Engineering Department. The research focused on improving SOTA multimodal transformer models on the coreference resolution task. 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: theme.primary50, color: theme.tertiary }}
                    date="Oct. 2021 - Aug. 2022"
                    dateClassName='experience-timeline-date'
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <img src={cambridgeCrestImg} alt="Cambridge crest logo" style={{width: "90px", float: "right"}}/>
                    <h3 className="vertical-timeline-element-title">MPhil. Machine Learning and Machine Intelligence</h3>
                    <div className="location-next-to-text">
                        <GoLocation style={{paddingRight: "5px"}}/>
                        <h5 className="vertical-timeline-element-subtitle">Cambridge University, Engineering Department</h5>
                    </div>
                    <p>
                    The final dissertation focused on multimodal coreference resolution, awarded with a distinction.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: theme.primary50, color: theme.tertiary }}
                    date="Sept. 2016 - Jun. 2021"
                    dateClassName='experience-timeline-date'
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <img src={uamLogo} alt="UAM logo" style={{width: "120px", float: "right"}}/>
                    <h3 className="vertical-timeline-element-title">Joint B.Sc. in Computer Science and Mathematics</h3>
                    <div className="location-next-to-text">
                        <GoLocation style={{paddingRight: "5px"}}/>
                        <h5 className="vertical-timeline-element-subtitle">Autonomous University of Madrid, Spain</h5>
                    </div>
                    <p>
                    Specialized in machine learning, probability and statistics.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default ExperienceTimeline