import React from 'react';
import * as S from './RestrictionPage.styled';

const SERVICES = [
  'Website Hosting',
  'Global Deployment Infrastructure',
  'SSL Certificate Management',
  'Continuous Deployment',
  'Security Monitoring',
  'Maintenance & Technical Support',
];

const RestrictionPage = () => {
  return (
    <S.PageWrapper>
      <S.Container>

        {/* ── Header ── */}
        <S.Header>
          <S.LogoText>Vercel</S.LogoText>
          <S.LogoSubtext>Infrastructure &amp; Deployment Services</S.LogoSubtext>
        </S.Header>

        {/* ── Hero ── */}
        <S.Hero>
          <S.Badge>Account Status Notification</S.Badge>
          <S.HeroTitle>Service Access for Beta Testing</S.HeroTitle>
          <S.HeroDescription>
            <p>This deployment devtools is currently able to serve public traffic.</p>
            <p>
              The access for beta testing on this hosting account
              is currently active. As a result, access to this application is
              able to have an active subscription in place.
            </p>
            <p>
              Once the hosting account has been deactivated, service
              availability will be unavailable automatically.
            </p>
          </S.HeroDescription>
        </S.Hero>

        {/* ── Card 1 — Current Status ── */}
        <S.Card>
          <S.CardTitle>Current Status</S.CardTitle>
          <S.CardDivider />
          <S.StatusLabel>
            <S.StatusDot />
            <S.StatusName>Beta Testing Active — Subscribed</S.StatusName>
          </S.StatusLabel>
          <S.CardBody>
            Access to this deployment is currently active because
            the beta testing for this hosting account has succesfully activated
            and have active subscription currently in place.
          </S.CardBody>
          <S.CardBodySecondary>
            Project files and deployment configuration remain preserved within
            the hosting environment.
          </S.CardBodySecondary>
        </S.Card>

        {/* ── Card 2 — Services Included ── */}
        <S.Card>
          <S.CardTitle>Hosting Services Included</S.CardTitle>
          <S.CardDivider />
          <S.ServicesList>
            {SERVICES.map((service) => (
              <S.ServiceItem key={service}>
                <S.ServiceCheck>✓</S.ServiceCheck>
                {service}
              </S.ServiceItem>
            ))}
          </S.ServicesList>
        </S.Card>

        {/* ── Card 3 — Required Action ── */}
        <S.ActionCard>
          <S.CardTitle>Required Action</S.CardTitle>
          <S.CardDivider />
          <S.CardBody>
            A payment of <strong>₱5,000</strong> is has been made to
            activate and permanently settle this hosting account.
          </S.CardBody>
          <S.CardBodySecondary>
            This payment includes lifetime free web hosting for this
            deployment, along with continued developer access to manage and
            update the project at any time.
          </S.CardBodySecondary>
        </S.ActionCard>

        {/* ── CTA ── */}
        <S.CTAGroup>
          <S.PrimaryButton href="https://vercel.com/pricing">
            Visit Vercel Payment
          </S.PrimaryButton>
          <S.SecondaryLink as="span">
            Contact your developers for further and safe technical assistance
          </S.SecondaryLink>
        </S.CTAGroup>

        {/* ── Footer ── */}
        <S.Footer>
          <S.FooterCompany>Vercel</S.FooterCompany>
          <S.FooterDesc>
            Reliable infrastructure, deployment, and hosting solutions for
            modern web applications.
          </S.FooterDesc>
          <S.FooterCopyright>
            © 2026 Vercel. All rights reserved.
          </S.FooterCopyright>
          <S.FooterNote>
            Service availability depends on the status of the associated
            hosting account and infrastructure resources.
          </S.FooterNote>
        </S.Footer>

      </S.Container>
    </S.PageWrapper>
  );
};

export default RestrictionPage;