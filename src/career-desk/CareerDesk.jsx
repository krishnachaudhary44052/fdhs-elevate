import React from 'react';
import CareerDeskHeader from './CareerDeskHeader.jsx';
import CareerHero from './CareerHero.jsx';
import CountryDesks from './CountryDesks.jsx';
import QuestionTopics from './QuestionTopics.jsx';
import LatestGuidance from './LatestGuidance.jsx';
import FAQs from './FAQs.jsx';
import Newsletter from './Newsletter.jsx';
import ProfileAdvice from './ProfileAdvice.jsx';
import CareerDeskFooter from './CareerDeskFooter.jsx';
import './career-desk.css';
export default function CareerDesk(){return <div className="career-page"><CareerDeskHeader/><main><CareerHero/><CountryDesks/><QuestionTopics/><LatestGuidance/><FAQs/><Newsletter/><ProfileAdvice/></main><CareerDeskFooter/></div>}
