import React from "react";
import { useSpring, animated } from "react-spring";
import { animationConfig } from "../../animations";
import "./About.css";
import JoinTemp from "../../components/JoinTemp";

const About = () => {
  const animationProps = useSpring(animationConfig);

  return (
    <animated.div
      className="about-component medium-vertical-padding"
      style={animationProps}
    >
      <div className="about container">
        <h3 className="header-trigger">CAPE - What We Do</h3>
        <p>
          CAPE is a professional network of people who support education
          establishments in their safeguarding responsibilities. CAPE provides
          support, networking opportunities and an independent voice for a range
          of safeguarding professionals. Membership includes trainers and
          consultants, officers in local authorities, voluntary organisations
          and independent consultants.
        </p>
        <p>
          Members work individually and in groups to share good practice, update
          and develop materials, respond to consultations, influence the
          development of current policies and practice, or organise national
          conferences and training events as the need arises.
        </p>
        <p>
          CAPE contributes to the development of national policy through its
          regular response to government consultations. CAPE is one of the four
          member organisations of the Safer Recruitment Consortium. CAPE has
          also recently taken part in the development of a National Operational
          Framework for Children and Young People with Harmful Sexual
          Behaviours, led by the NSPCC.
        </p>
        <p>
          CAPE meetings are held at least once a term with the purpose of
          developing and promoting good child protection/safeguarding practice
          in education at both local and national level.
        </p>
        <p>
          CAPE is recognised as an organisation that offers good professional
          advice to its members and other organisations involved in the
          protection of children from harm.
        </p>
        <p>
          CAPE offers one national conference per year that is open to members
          and to non members who have a responsibility for safeguarding in
          education.
        </p>
        <p>
          CAPE offers members professional development opportunities specific to
          their role of supporting schools and education services.
        </p>
        <p>
          CAPE welcomes applications for membership from people in similar roles
          who are interested in contributing to or expanding our work and are
          able to reach meetings in the North of England. Please get in touch
          via the membership application page.
        </p>
        <h3>About CAPE</h3>
        <p>
          CAPE was formed over 25 years ago by a group of professionals employed
          by Local Authorities across the north of England to support schools in
          developing their child Protection responsibilities.
        </p>
        <p>
          CAPE's geographical base remains in the north however, as CAPE has
          grown we have welcomed members from further afield and membership now
          stretches the full length of the country.
        </p>
      </div>
      <JoinTemp />
    </animated.div>
  );
};

export default About;
