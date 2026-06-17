import React from 'react';
import * as S from './RestrictionPage.styled';

const SERVICES = [
  'Lifetime Website Hosting using Vercel Subdomain (vercel.app)',
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
          <S.HeroTitle>Service Access Temporarily Limited</S.HeroTitle>
          <S.HeroDescription>
            <p>This deployment is currently unable to serve public traffic.</p>
            <p>
              The free trial period for beta testing on this hosting account
              has expired. As a result, access to this application has been
              temporarily restricted until an active subscription is in place.
            </p>
            <p>
              Once the hosting account has been reactivated, service
              availability will be restored automatically.
            </p>
          </S.HeroDescription>
        </S.Hero>

        {/* ── Card 1 — Current Status ── */}
        <S.Card>
          <S.CardTitle>Current Status</S.CardTitle>
          <S.CardDivider />
          <S.StatusLabel>
            <S.StatusDot />
            <S.StatusName>Beta Trial Expired — Subscription Required</S.StatusName>
          </S.StatusLabel>
          <S.CardBody>
            Access to this deployment has been temporarily restricted because
            the free beta testing trial for this hosting account has expired
            and no active subscription is currently in place.
          </S.CardBody>
          <S.CardBodySecondary>
            Project files and deployment configuration remain preserved within
            the hosting environment.
          </S.CardBodySecondary>
        </S.Card>

        {/* ── Card 3 — Required Action ── */}
        <S.ActionCard>
          <S.CardTitle>Required Action</S.CardTitle>
          <S.CardDivider />
          <S.CardBody>
            A one-time payment of <strong>₱5,000</strong> is now available to
            reactivate and permanently settle this hosting account.
          </S.CardBody>
          <S.CardBodySecondary>
            This one-time payment includes lifetime free web hosting for this
            deployment, along with continued developer access to manage and
            update the project at any time.
          </S.CardBodySecondary>
        </S.ActionCard>

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



        {/* ── CTA ── */}
        <S.CTAGroup>
          <S.PrimaryButton href="https://vercel.com/pricing" target='_blank'>
            Visit Vercel Payment
          </S.PrimaryButton>
          <S.SecondaryLink as="span">
            Whether you're a business owner or an institution, contact your developers to handle the web hosting payment setup for a smoother, safer, and error-free experience.
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