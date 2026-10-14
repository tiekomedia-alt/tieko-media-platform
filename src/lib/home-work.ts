export const reviewRequestHref = "/book-a-call?interest=digital-infrastructure-review";

export const infrastructureReviewAreas = [
  "Digital presence and reputation",
  "Website and search visibility",
  "Brand and content consistency",
  "Compliance and licensing",
  "Records and information systems",
  "Automation opportunities",
  "Measurement and decision-making",
] as const;

export type SelectedWorkProject = {
  name: string;
  category: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  href?: string;
};

export const selectedWorkProjects: SelectedWorkProject[] = [
  {
    name: "TeamShuffle",
    category: "Digital product design and development",
    location: "Global web product",
    description:
      "We designed and built TeamShuffle, a responsive web-based toolkit for creating teams, making random selections and sharing transparent results.",
    image: "/images/work/teamshuffle-home.webp",
    imageAlt: "TeamShuffle homepage showing its team shuffler, dice roller, coin flip and spin wheel tools",
    imageCaption: "TeamShuffle homepage",
    href: "https://teamshuffle.win/",
  },
  {
    name: "Nairafolio",
    category: "Compliance partnership",
    location: "Nigeria",
    description:
      "We supported Nairafolio as its compliance partner, helping to coordinate business compliance requirements and related documentation.",
    image: "/images/work/nairafolio.webp",
    imageAlt: "Nairafolio brand identity on a deep teal background",
    imageCaption: "Nairafolio brand identity",
  },
  {
    name: "Passion Care Academy",
    category: "Website design and development",
    location: "Delaware, United States",
    description:
      "We designed and built a clear, conversion-focused website for a childcare academy, helping families understand its programmes, schedule a tour and find the centre.",
    image: "/images/work/passion-care-academy.webp",
    imageAlt: "Passion Care Academy website homepage designed and built by Tieko Media",
    imageCaption: "Live website preview",
    href: "https://www.passioncareacademy.org/",
  },
  {
    name: "White House Resort",
    category: "Website design and development",
    location: "Delaware, United States",
    description:
      "We designed and built a Victorian-inspired website for a resort and event venue, using the property’s character and imagery to create a distinctive online presence.",
    image: "/images/work/white-house-resort.webp",
    imageAlt: "White House Resort property featured on the website designed and built by Tieko Media",
    imageCaption: "Published website imagery",
    href: "https://whitehouseresort-e352f.firebaseapp.com/",
  },
  {
    name: "Compassionate Heart World Mission",
    category: "Nonprofit website design and development",
    location: "International nonprofit organisation",
    description:
      "We designed and built a clear digital home for Compassionate Heart World Mission, bringing its programmes, volunteering opportunities and donation pathways together in one place.",
    image: "/images/work/compassionate-heart-world-mission.webp",
    imageAlt: "Compassionate Heart World Mission website homepage designed and built by Tieko Media",
    imageCaption: "Live website preview",
    href: "https://www.compassionatemission.org/",
  },
];
