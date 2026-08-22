// src/pages/DownloadPage/DownloadPage.jsx
import * as S from "./DownloadPage.styled";
import DownloadPageBg from "../../assets/download-page-background.png";
import Navbar from "../../components/Navbar";
import CTA from "../../components/CtaSection/CTA";
import Footer from "../../components/Footer";
import { DownloadOutlined, FileTextOutlined } from "@ant-design/icons";
import { useDownloadFile } from "../../utils/hooks/useDownloadFIle";

const DownloadPage = () => {
  const { downloadFiles, loading, error } = useDownloadFile();

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <S.HeroSection>
        <S.Overlay />
        <S.Banner src={DownloadPageBg} alt="Download page background image" />
        <S.Content>
          <S.Eyebrow>San Antonio National High School</S.Eyebrow>
          <S.Heading>Downloadable Forms</S.Heading>
          <S.SubHeading>
            Access and download official school forms anytime. All files are
            provided in their latest version.
          </S.SubHeading>
        </S.Content>
      </S.HeroSection>

      {/* FORMS GRID */}
      <S.Section>
        <S.SectionHeader>
          <S.SectionTitle>Available Forms</S.SectionTitle>
          <S.SectionSub>
            Click <strong>Download</strong> on any card to save the form to your
            device.
          </S.SectionSub>
        </S.SectionHeader>

        {loading && <p>Loading forms...</p>}

        {error && <p>Failed to load downloadable forms.</p>}

        {!loading && !error && (
          <S.Grid>
            {downloadFiles.map((form) => (
              <S.Card key={form.fileId}>
                <S.CardTop>
                  <S.IconWrap>
                    <FileTextOutlined />
                  </S.IconWrap>

                  <S.CardTitle>{form.title}</S.CardTitle>
                </S.CardTop>

                <S.CardDesc>{form.description}</S.CardDesc>

                <S.DownloadLink
                  href={form.pdfFile?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <DownloadOutlined aria-hidden="true" />
                  Download Form
                </S.DownloadLink>
              </S.Card>
            ))}
          </S.Grid>
        )}
      </S.Section>

      <CTA />
      <Footer />
    </>
  );
};

export default DownloadPage;
