import React, { useState } from "react";
import * as S from "./About.styled";
import { aboutData } from "../../data/aboutData";
import Logo from "../../assets/logo.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import { useAbout } from "../../utils/hooks/useAbout";

const About = ({ id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { loading, error, about, thumbnails } = useAbout();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load content</p>;

  return (
    <S.AboutWrapper>
      <S.Content id={id}>
        <SectionTitle title="School Overview" subtitle="Discover the journey of San Antonio National High School in shaping generations of learners." />

        <S.AboutDetails>
          <S.AboutHeader>
            <img className="Logo" src={Logo} alt="SANHS Logo" />
            <div className="Header">
              <h2>{aboutData.school.name}</h2>
              <p>{aboutData.school.established}</p>
            </div>
          </S.AboutHeader>
          <S.AboutInfo className="Info" $isExpanded={isExpanded}>
            {about?.aboutInfo.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </S.AboutInfo>

          <S.ToggleButton onClick={toggleExpand}>
            {isExpanded ? "See Less" : "See More"}
          </S.ToggleButton>
        </S.AboutDetails>


        <S.Collage>
          <div className="LeftSide">
            <img src={thumbnails?.[0]?.url} alt="About Thumbnail 1" />
          </div>
          <div className="RightSide">
            <img src={thumbnails?.[1]?.url} alt="About Thumbnail 2" />
            <div className="Top"></div>
            <img src={thumbnails?.[2]?.url} alt="About Thumbnail 3" />
            <div className="Bottom"></div>
          </div>
        </S.Collage>
      </S.Content>
    </S.AboutWrapper>
  );
};

export default About;
