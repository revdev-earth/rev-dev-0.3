export type Partner = {
  name: string;
  category: string;
  focus: string;
  image: string;
  url?: string;
};

// Static data for now. Names are DRAFTS — swap for the real partners.
export const partners: Partner[] = [
  {
    name: "Nexus Partners",
    category: "Business & Contacts",
    focus:
      "Thanks to this alliance, the contacts and resources you need are placed within reach of your hand, so your product and everything it takes to build it is finally within grasp.",
    image: "/partners/business.jpg",
    url: "#",
  },
  {
    name: "Aurora Studio",
    category: "Design",
    focus:
      "Thanks to them we share an alliance where we reach the very best design, the kind that illustrates exactly what the company desires and makes people stop and feel it.",
    image: "/partners/design.jpg",
    url: "#",
  },
  {
    name: "Summit SEO",
    category: "Search & SEO",
    focus:
      "Thanks to this craft with words, we say exactly what people long to hear, finding the right phrasing to reach that which they most desire to listen to.",
    image: "/partners/seo.jpg",
    url: "#",
  },
];
