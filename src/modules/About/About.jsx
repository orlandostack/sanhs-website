import React, { useState } from "react";
import * as S from "./About.styled";
import { aboutData } from "../../data/aboutData";
import SectionTitle from "../../components/SectionTitle";
import Logo from "../../assets/logo.png";
import IMG1 from "../../assets/about-thumbnail-1.jpg";
import IMG2 from "../../assets/about-thumbnail-2.jpg";
import IMG3 from "../../assets/about-thumbnail-3.jpg";

const About = ({ id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <S.AboutWrapper>
      <S.Content id={id}>
        <SectionTitle title="About" subtitle="Know something about us" />
        <S.AboutHeader>
          <img className="Logo" src={Logo} alt="SANHS Logo" />
          <div className="Header">
            <h1>{aboutData.school.name}</h1>
            <h2>{aboutData.school.established}</h2>
          </div>
        </S.AboutHeader>
        <S.AboutInfo className="Info" $isExpanded={isExpanded}>
          {aboutData.content}
        </S.AboutInfo>
        <S.ToggleButton onClick={toggleExpand}>
          {isExpanded ? "See Less" : "See More"}
        </S.ToggleButton>
        <S.Collage>
          <div className="LeftSide">
            <img src={IMG1} alt="About Thumbnail" />
          </div>
          <div className="RightSide">
            <img src={IMG2} alt="About Thumbnail" />
            <div className="Top"></div>
            <img src={IMG3} alt="About Thumbnail" />
            <div className="Bottom"></div>
          </div>
        </S.Collage>
      </S.Content>
    </S.AboutWrapper>
  );
};

export default About;
