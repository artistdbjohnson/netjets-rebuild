/**
 * Footer — Wren §L verbatim. §P gaps omitted — zero invention.
 */
export const footerData = {
  brand: "NetJets",
  phone: "+1.877.356.5823",
  phoneHref: "tel:+1.877.356.5823",
  address: "4111 Bridgeway Avenue, Columbus, Ohio 43219",
  addressHref:
    "https://www.google.com/maps/search/?api=1&query=4111%20Bridgeway%20Avenue%2C%20Columbus%2C%20Ohio%2043219",
  otherCompaniesHeading: "Other NetJets Companies",
  copyright: "© 2026 NetJets IP, LLC",
  scrollToTopLabel: "scroll to top",
  otherCompanies: [
    { name: "Executive Jet Management", href: "https://www.executivejetmanagement.com/s/" },
    { name: "QS Partners", href: "https://www.qspartners.com" },
    { name: "QS Security", href: "https://qssecurity.com/" },
  ],
  links: [
    { name: "Careers", href: "/careers" },
    { name: "Global Network", href: "/locations" },
    { name: "Legal & Privacy", href: "/privacy-main" },
    { name: "CA Privacy", href: "/ccpa-privacy-policy" },
    { name: "Sitemap", href: "/sitemap" },
  ],
} as const;
