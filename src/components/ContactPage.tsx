import React, { useState } from 'react';
import { SlidingWords } from './SlidingWords';

const CONTACT_INTRO =
  "If you want to connect with us, feel free to reach out! We're eager to hear your thoughts and ideas.";
const FARM_VISIT_INTRO =
  'Visit us in our farm and get to know more about our organic productions';

export const ContactPage: React.FC = () => {
  const [formNotice, setFormNotice] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormNotice('This preview form does not send messages yet.');
  };

  return (
    <div className="bg-cream pb-24 font-sans">
      <section className="pt-[172px] max-[991px]:pt-[120px] max-[570px]:pt-[104px]">
        <div className="mx-auto w-full max-w-[1635px] px-6 pr-10 max-[991px]:px-8 max-[991px]:pr-[47px] max-[576px]:pr-[39px] max-[570px]:px-4 max-[570px]:pr-[31px]">
          <h1
            aria-label={CONTACT_INTRO}
            className="max-w-[667px] text-[44px] font-normal leading-[56px] -tracking-[2px] text-forest max-[991px]:max-w-[625px] max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[570px]:text-[28px] max-[570px]:leading-[34px] max-[570px]:-tracking-[1.2px]"
          >
            <SlidingWords text={CONTACT_INTRO} />
          </h1>

          <div className="mt-12 flex w-full items-start justify-between gap-6 max-[576px]:gap-4 max-[570px]:mt-8 max-[570px]:flex-col max-[570px]:gap-6">
            <div className="w-1/2 min-w-0 max-w-[741px] max-[991px]:w-[342px] max-[767px]:w-1/2 max-[767px]:max-w-none max-[570px]:order-last max-[570px]:w-full">
              <img
                src="https://greensprout.kirki.io/wp-content/uploads/2025/11/contact-page-img-.webp"
                alt="GreenSprout farmer tending crops in the field"
                className="aspect-[528/291] w-full rounded-2xl object-cover max-[991px]:aspect-[10/9] max-[570px]:aspect-[513/453]"
              />

              <div className="mt-4 grid grid-cols-2 gap-6 rounded-xl bg-soft-sage p-4 text-olive max-[570px]:gap-3 max-[570px]:p-3">
                <div>
                  <p className="text-[18px] leading-[26px]">Phone</p>
                  <a
                    href="tel:+13474387215"
                    className="mt-1 inline-block text-[16px] leading-6 text-forest no-underline hover:underline"
                  >
                    (347) 438-7215
                  </a>
                </div>
                <div>
                  <p className="text-[18px] leading-[26px]">Email</p>
                  <a
                    href="mailto:mail@example.com"
                    className="mt-1 inline-block text-[16px] leading-6 text-forest no-underline hover:underline"
                  >
                    mail@example.com
                  </a>
                </div>
              </div>
            </div>

            <form
              aria-label="Contact form"
              onSubmit={handleSubmit}
              className="flex w-1/2 min-w-0 flex-col pb-12 max-[991px]:pb-6 max-[768px]:pb-12 max-[570px]:order-first max-[570px]:w-full max-[570px]:pb-4"
            >
              <label htmlFor="contact-name" className="sr-only">
                Full Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full Name"
                required
                className="h-[57px] w-full border-b border-sage-border bg-transparent px-0 py-[15px] text-[18px] leading-[25.92px] -tracking-[.4px] text-forest outline-none placeholder:text-olive focus:border-olive max-[991px]:h-[55px] max-[768px]:h-[57px] max-[570px]:h-[51px] max-[570px]:text-[14px] max-[570px]:leading-[19.88px]"
              />

              <label htmlFor="contact-email" className="sr-only">
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email Address"
                required
                className="mt-12 h-[57px] w-full border-b border-sage-border bg-transparent px-0 py-[15px] text-[18px] leading-[25.92px] -tracking-[.4px] text-forest outline-none placeholder:text-olive focus:border-olive max-[991px]:mt-6 max-[991px]:h-[55px] max-[768px]:mt-12 max-[768px]:h-[57px] max-[570px]:mt-4 max-[570px]:h-[51px] max-[570px]:text-[14px] max-[570px]:leading-[19.88px]"
              />

              <label htmlFor="contact-message" className="sr-only">
                Write your concern
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your concern"
                required
                className="mt-[47px] h-[110px] min-h-[110px] w-full resize-y border-b border-sage-border bg-transparent px-0 py-[15px] text-[18px] leading-[25.92px] -tracking-[.4px] text-forest outline-none placeholder:text-olive focus:border-olive max-[991px]:mt-6 max-[768px]:mt-[47px] max-[570px]:mt-[15px] max-[570px]:text-[14px] max-[570px]:leading-[19.88px]"
              />

              <label
                htmlFor="contact-consent"
                className="mt-12 flex items-start gap-3 py-1 text-[18px] leading-[26px] -tracking-[.4px] text-olive max-[991px]:mt-6 max-[991px]:text-[16px] max-[991px]:leading-6 max-[768px]:mt-12 max-[768px]:text-[18px] max-[768px]:leading-[26px] max-[570px]:mt-4 max-[570px]:text-[14px] max-[570px]:leading-5"
              >
                <input
                  id="contact-consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="m-1.5 h-5 w-5 shrink-0 accent-olive"
                />
                <span>
                  By proceeding, you agree to Greensprout Terms of Use and acknowledge that we use
                  personal information as outlined in our Privacy Policy.
                </span>
              </label>

              <button
                type="submit"
                className="mt-12 inline-flex h-[42px] w-fit items-center gap-2 rounded-full bg-bright-yellow py-3 pl-6 pr-5 text-[18px] font-medium leading-4 -tracking-[1px] text-forest transition-colors hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest max-[991px]:mt-8 max-[768px]:mt-12 max-[570px]:mt-8 max-[570px]:w-full max-[570px]:justify-center"
              >
                Submit
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {formNotice && (
                <p role="status" className="mt-4 text-[14px] leading-5 text-olive">
                  {formNotice}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="mt-[164px] max-[767px]:mt-24">
        <div className="mx-auto w-full max-w-[1635px] px-6 pr-[39px] max-[768px]:px-8 max-[768px]:pr-[31px] max-[576px]:pr-[47px] max-[570px]:px-4 max-[570px]:pr-[31px]">
          <h2
            aria-label={FARM_VISIT_INTRO}
            className="mx-auto max-w-[869px] text-center text-[44px] font-normal leading-[56px] -tracking-[2px] text-forest max-[991px]:text-[36px] max-[991px]:leading-[42px] max-[575px]:text-[28px] max-[575px]:leading-[34px] max-[575px]:-tracking-[1.2px]"
          >
            <SlidingWords text={FARM_VISIT_INTRO} />
          </h2>
        </div>

        <div className="mx-auto mt-16 flex w-full max-w-[1635px] items-start gap-6 px-6 pr-[39px] max-[768px]:flex-col max-[768px]:px-8 max-[768px]:pr-[31px] max-[576px]:pr-[47px] max-[570px]:px-4 max-[570px]:pr-[31px]">
          <img
            src="https://greensprout.kirki.io/wp-content/uploads/2025/11/contact-page-img-2-1536x903.webp"
            alt="GreenSprout farm and surrounding fields"
            loading="lazy"
            className="h-[629px] min-w-0 flex-1 rounded-2xl object-cover max-[768px]:h-auto max-[768px]:aspect-[17/10]"
          />

          <div className="w-[523px] shrink-0 px-8 pt-8 max-[768px]:w-full max-[768px]:px-6 max-[570px]:px-4">
            <div>
              <p className="text-[18px] font-medium leading-[18px] -tracking-[.3px] text-forest">Address</p>
              <p className="mt-3 text-[18px] leading-[26px] -tracking-[.4px] text-olive">
                199 Oakway Lane, Woodland Hills, CA 91303
              </p>
            </div>
            <div className="mt-8">
              <p className="text-[18px] font-medium leading-[18px] -tracking-[.3px] text-forest">Visiting days</p>
              <p className="mt-3 text-[18px] leading-[26px] -tracking-[.4px] text-olive">
                Everyday from 9:00am to 11:00pm
              </p>
            </div>
            <div className="mt-8">
              <p className="text-[18px] font-medium leading-[18px] -tracking-[.3px] text-forest">See location</p>
              <a
                href="https://maps.app.goo.gl/wayKmHgbz1sHamUt6"
                target="_blank"
                rel="noreferrer"
                className="mt-[17px] inline-flex items-center gap-3 text-[18px] leading-[26px] -tracking-[.4px] text-olive no-underline hover:underline"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                </svg>
                Open Google Map
              </a>
              <a
                href="https://maps.app.goo.gl/wayKmHgbz1sHamUt6"
                target="_blank"
                rel="noreferrer"
                aria-label="Open GreenSprout location in Google Maps"
                className="mt-[14px] block max-[768px]:max-w-[640px] overflow-hidden rounded-xl"
              >
                <img
                  src="https://greensprout.kirki.io/wp-content/uploads/2025/11/map.webp"
                  alt="Map showing the GreenSprout farm location"
                  loading="lazy"
                  className="aspect-[459/311] w-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
