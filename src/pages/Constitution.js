import React from 'react';
import { useSpring, animated } from 'react-spring';
import { animationConfig } from '../animations';
import './Constitution.css';

const Constitution = () => {

  const animationProps = useSpring(animationConfig);

  return (
    <animated.div className="container constitution-page" style={animationProps}>
      <h2 className="header-trigger">CAPE Constitution</h2>
      <p>​CAPE is an independent group that enables networking between professionals who support child protection and safeguarding activities across a range of education settings and services, and others with similar responsibilities. Its geographical base is in the north of England, but membership is not limited by this.</p>
      <h3>Aims</h3>
      <p>To promote and develop good child protection and safeguarding practice in education.  A central principle to its work is the need to safeguard children and promote their welfare.</p>
      <h3>Nature and Scope of CAPE Activities</h3>
      <ul>
        <li>To provide a supportive forum for members to discuss, share and develop policies, approaches and practices</li>
        <li>To contribute to national debates (eg via consultations) and developments (eg national working parties such as the Safer Recruitment Consortium) - also see 'CAPE Comments' below</li>
        <li>To provide opportunities for personal learning and development for members and non-members via conferences and other learning opportunities</li>
        <li>To support and contribute to relevant research activities.</li>
      </ul>
      <h3>Responsibilities</h3>
      <p>CAPE should be an independent voice for a range of professionals who work collaboratively to further the aims of the group.  Activities that promote personal interests or seek advantage or benefits for CAPE members are not consistent with these aims</p>
      <p>CAPE will not tolerate any form of discrimination.</p>
      <h3>Meetings</h3>
      <p>Meetings, to which all CAPE members will be invited, should be arranged at least once a term.  Additional meetings may be held as appropriate. At least 13 current members must be present for a meeting to be quorate. If a meeting is inquorate, decisions taken should be ratified by referring them to the full group either at the next meeting, or if urgent, via email
Meetings should be held at various venues across the north of England, to reduce the burden of travel for individual members.  The cost of the venue should be borne by the host where possible
The Chair for each meeting and the production and circulation of minutes should be seen as separate responsibilities, which will rotate amongst members
The Chair of each meeting will retain the responsibilities until the following meeting and may take Chair's action between meetings if needed.
      </p>
      <h3>Accessibility</h3>
      <p>Every effort will be made to accommodate the specific needs of members and guests at meetings and conferences as appropriate and applicable.</p>
      <h3>Communication</h3>
      <ul>
        <li>Minutes, details of conferences and other information will be sent electronically when possible</li>
        <li>Care will be taken in accordance with the Data Protection Act 1998 and associated legislation to ensure that confidential or case-specific information that could identify individual organisations, children, young people, or families is not included in minutes or other CAPE information, unless that information is already in the public domain</li>
        <li>Membership records will be held and managed according to principles of the Data Protection Act 2018 and GDPR.</li>
      </ul>
      <h3>Membership Criteria</h3>
      <p>Membership will be open to professionals primarily within the north of England who work in roles that support child protection and safeguarding activities and training across a range of education settings and services and others with similar responsibilities 
Individuals who have undertaken this type of role may join or continue to be a member if their current work enables ongoing development of knowledge or skills relevant to the aims of CAPE
Applications for membership submitted via the application form will be considered by a quorate meeting of CAPE, in line with safeguarding principles. If it is agreed that the individual meets the criteria outlined above, membership will be confirmed 
Membership will be refused or curtailed if an individual has:</p>
      <ul>
        <li>failed to pay the membership fee within a reasonable period </li>
        <li>misrepresented or defrauded CAPE</li>
        <li>misused or misappropriated CAPE materials</li>
        <li>acted in a way that is deemed to have sullied or weakened CAPE</li>
      </ul>
      <p>If a decision to refuse or curtail membership is disputed, an appeal will be considered by three members who were not involved in the original decision.​</p>
      <h3>Types of Membership</h3>
      <p>CAPE membership will be awarded on an individual, non-transferable basis. More than one individual from the same organisation may be a member, in which case the full fee will be payable by each
The membership fee will be waived for CAPE members who take on key roles (eg treasurer, membership secretary and website administrator)
Individuals who are deemed to have made a significant contribution to CAPE may be offered honorary membership at the discretion of CAPE members.
      </p>
      <h3>Privacy Statement</h3>
      <p>CAPE will hold the personal information provided when an individual applies to become a member only for as long as s/he remains a member
Personal information provided by individuals who apply to attend conferences or other CAPE activities will be held and used in relation to the conference and to notify them of future events that are organised by CAPE
CAPE does not and will not divulge any personal information to third persons.</p>
      <h3>Specific Responsibilities</h3>
      <p>All CAPE members will be of equal standing
Some of the day-to-day business of CAPE may be undertaken or coordinated by one person (eg management of CAPE finances and membership records), or a small group (eg organisation of conferences, drafting of CAPE material and administration of the website), in which case each arrangement will be agreed at a CAPE meeting. The individuals/group may continue in that role for as long as they are willing to do so and perform the function satisfactorily.  All major decisions made by these individuals/groups must be ratified by the wider CAPE group
All members will be expected to work collectively in the best interests of CAPE, according to protocols agreed at meetings and to use material that is shared through CAPE as outlined in ‘Use of CAPE and CAPE Members' Materials and Documents’
It is contrary to the collaborative nature of CAPE for membership to be used for promotion of individual interests, or individual gain.
      </p>
      <h3>CAPE Comments</h3>
      <p>On occasion, CAPE may choose to comment on current issues or in response to direct or indirect invitation.  The response should:</p>
      <ul>
        <li>be made on behalf of CAPE, not an individual member</li>
        <li>be agreed by representative members, or the whole group</li>
        <li>not refer to, or be based on confidential or case-specific information </li>
        <li>be designed to explain a position or influence policy-making for the benefit of children, without emotive content</li>
        <li>reflect the majority position of CAPE members.</li>
      </ul>
      <h3>Ongoing review of CAPE arrangements</h3>
      <p>The last meeting of each calendar year will review this constitution, membership fee and other matters as required.</p>
    </animated.div>
  );
};

export default Constitution;