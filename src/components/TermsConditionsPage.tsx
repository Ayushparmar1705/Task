import React from 'react';
import { CharacterReveal } from './CharacterReveal';

const acceptanceText =
  'Welcome to GreenSprout. By using our website or accessing our content, you agree to comply with and be bound by these Terms & Conditions. Please read them carefully.';

interface TermsSection {
  title: string;
  paragraph?: string;
  items?: string[];
}

const termsSections: TermsSection[] = [
  {
    title: '1. Acceptance of Terms',
    paragraph: acceptanceText,
  },
  {
    title: '2.\u00a0Website Purpose',
    paragraph:
      'GreenSprout is committed to providing information about our farm, our organic products, and organic farming practices. Our website is intended to showcase our offerings and expertise, and to provide a way for users to contact GreenSprout.',
  },
  {
    title: '3.\u00a0No Online Sales or Shipping',
    items: [
      'GreenSprout does not conduct online sales or offer shipping through this website.',
      'Product information, prices, and details are for informational purposes only.',
      'To purchase products, users must visit our farm or contact us directly through the website.',
    ],
  },
  {
    title: '4.\u00a0Contact and Inquiries',
    items: [
      'The website includes a contact form or contact details for users to get in touch with GreenSprout regarding products, farm visits, collaborations, or further information.',
      'We aim to respond to all genuine inquiries in a timely manner, but response times may vary.',
    ],
  },
  {
    title: '5.\u00a0\u00a0Intellectual Property',
    items: [
      'All website content, including text, images, videos, and logos, are the property of GreenSprout and protected by intellectual property laws.',
      'You may not reproduce, copy, or use any content without written consent from GreenSprout.',
    ],
  },
  {
    title: '6.\u00a0User Conduct',
    items: [
      'Users must not misuse the website, transmit harmful material, or attempt unauthorized access to any part of the site.',
      'Content may not be used for unlawful, harmful, or misleading purposes.',
    ],
  },
  {
    title: '7.\u00a0Disclaimer',
    items: [
      'The information and content on GreenSprout are for general informational purposes only and do not constitute professional or medical advice.',
      'GreenSprout does not guarantee the completeness, reliability, or suitability of any information on this website.',
    ],
  },
  {
    title: '8.\u00a0\u00a0Limitation of Liability',
    paragraph:
      'GreenSprout will not be responsible for any losses or damages arising from use of this website or reliance on its information.',
  },
  {
    title: '9.\u00a0Changes to Terms',
    paragraph:
      'We may update these Terms & Conditions at any time. Continued use of the website indicates acceptance of any changes.',
  },
  {
    title: '10.\u00a0Contact Information',
    paragraph:
      'For any questions regarding these Terms & Conditions, please contact us at:\nEmail: info.greensprout@gmail.com\nAddress: 199 Oakway Lane, Woodland Hills, CA 91303',
  },
];

const introClassName =
  'text-[18px] leading-[26px] -tracking-[.4px] text-[#464646] max-[991px]:text-[16px] max-[991px]:leading-6 max-[991px]:tracking-normal max-[575px]:text-[14px] max-[575px]:leading-5';

const sectionBodyClassName =
  'mt-4 text-[18px] leading-[26px] -tracking-[.4px] text-[#464646] max-[991px]:text-[16px] max-[991px]:leading-6 max-[991px]:tracking-normal max-[575px]:text-[14px] max-[575px]:leading-5';

const listClassName =
  'mt-4 list-disc pl-6 text-[18px] leading-[26px] -tracking-[.4px] text-[#464646] max-[991px]:pl-4 max-[991px]:text-[16px] max-[991px]:leading-6 max-[991px]:tracking-normal max-[575px]:text-[14px] max-[575px]:leading-[20.16px]';

const headingClassName =
  'text-[28px] font-medium leading-10 tracking-[-1px] text-black max-[991px]:text-2xl max-[991px]:leading-[30px] max-[575px]:text-[20px] max-[575px]:leading-7 max-[575px]:tracking-[-.5px]';

export const TermsConditionsPage: React.FC = () => (
  <section className="bg-cream pb-16 pt-[136px] font-sans text-olive max-[575px]:pt-[104px] max-[575px]:pb-12">
    <header className="flex flex-col items-center text-center">
      <h1
        aria-label="Terms & Conditions"
        className="text-[44px] font-normal leading-[56px] -tracking-[.76px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[991px]:-tracking-[1.02px] max-[575px]:text-[28px] max-[575px]:leading-[34px] max-[575px]:-tracking-[.39px]"
      >
        <CharacterReveal
          text="Terms & Conditions"
          direction="horizontal"
          duration={500}
          easing="power1.out"
        />
      </h1>
      <p className="mt-3 text-[18px] font-light leading-[18px] -tracking-[.3px] text-[#5e5e5e] max-[991px]:text-[16px] max-[991px]:-tracking-[.4px]">
        Effective Date: August 24th, 2025
      </p>
    </header>

    <div className="mx-auto mt-16 w-full max-w-[900px] max-[991px]:mt-12 max-[991px]:w-[calc(100%-64px)] max-[575px]:w-[calc(100%-32px)]">
      <p className={introClassName}>{acceptanceText}</p>

      {termsSections.map((section, index) => {
        const Heading = index === 0 ? 'h2' : 'h3';

        return (
          <section key={section.title} className="mt-8 max-[991px]:mt-6">
            <Heading className={headingClassName}>{section.title}</Heading>
            {section.paragraph && (
              <p className={`${sectionBodyClassName} whitespace-pre-line`}>{section.paragraph}</p>
            )}
            {section.items && (
              <ul className={listClassName}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  </section>
);
