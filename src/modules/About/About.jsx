import { memo, useState } from "react";
import * as S from "./About.styled";
import { aboutData } from "../../data/aboutData";
import Logo from "../../assets/logo.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useAbout } from "../../utils/hooks/useAbout";

const About = memo(({ id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { loading, error, about, thumbnails } = useAbout();

  const handleToggleExpand = () => setIsExpanded((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load content</p>;

  return (
    <S.AboutWrapper id={id}>
      <S.Content>
        <SectionTitle
          title="School Overview"
          subtitle="Discover the journey of San Antonio National High School in shaping generations of learners."
        />

        <S.AboutDetails>
          <S.AboutHeader>
            <img
              className="logo"
              src={Logo}
              alt="San Antonio National High School logo"
              width={72}
              height={72}
              loading="lazy"
              decoding="async"
            />
            <div className="header">
              <h2>{aboutData.school.name}</h2>
              <p>{aboutData.school.established}</p>
            </div>
          </S.AboutHeader>

          <S.AboutInfo $isExpanded={isExpanded}>
            {about?.aboutInfo.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </S.AboutInfo>

          <S.ToggleButton
            onClick={handleToggleExpand}
            aria-expanded={isExpanded}
            aria-label={
              isExpanded
                ? "Show less about the school"
                : "Show more about the school"
            }
          >
            {isExpanded ? "See Less" : "See More"}
          </S.ToggleButton>
        </S.AboutDetails>

        <S.Collage aria-label="School photo collage">
          <div className="left-side">
            <img
              src={thumbnails?.[0]?.url}
              alt="School campus view"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="right-side">
            <img
              src={thumbnails?.[1]?.url}
              alt="Students and faculty"
              loading="lazy"
              decoding="async"
            />
            <img
              src={thumbnails?.[2]?.url}
              alt="School activities"
              loading="lazy"
              decoding="async"
            />
          </div>
        </S.Collage>
      </S.Content>
    </S.AboutWrapper>
  );
});

About.displayName = "About";

export default About;