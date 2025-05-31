// app/site-data.ts
// Centralized data for services and testimonials

// Services data
export const services = [
  {
    title: "Website Graphics",
    description:
      "Comprehensive branding solutions including logo design, color palettes, typography, and brand guidelines.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M5 3a2 2 0 0 0-2 2" />
        <path d="M19 3a2 2 0 0 1 2 2" />
        <path d="M21 19a2 2 0 0 1-2 2" />
        <path d="M5 21a2 2 0 0 1-2-2" />
        <path d="M9 3h1" />
        <path d="M9 21h1" />
        <path d="M14 3h1" />
        <path d="M14 21h1" />
        <path d="M3 9v1" />
        <path d="M21 9v1" />
        <path d="M3 14v1" />
        <path d="M21 14v1" />
      </svg>
    ),
  },
  {
    title: "Poster Design",
    description:
      "From business cards to billboards, creating impactful print materials that communicate your message effectively.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M6 2v6h.01" />
        <path d="M6 16h.01" />
        <path d="M2 6h12" />
        <path d="M8 10v8" />
        <path d="M2 10h12" />
        <path d="M18 12V6h2a2 2 0 0 1 2 2v4" />
        <path d="M18 18h4" />
        <path d="M18 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4z" />
      </svg>
    ),
  },
  {
    title: "Logo Design",
    description:
      "Creating intuitive, user-friendly logos that effectively represent your brand identity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h10" />
      </svg>
    ),
  },
  {
    title: "Illustration",
    description:
      "Custom illustrations and artwork that bring your ideas to life and add a unique visual element to your brand.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Flyer Design",
    description: "Eye-catching flyer designs that effectively communicate your message.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    ),
  },
  {
    title: "Social Media Content",
    description: "Engaging social media graphics and content that enhance your online presence.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
  },
]

export const testimonials = [
  {
    name: "Rashid Ahmed",
    position: "Owner, Dhaka Food Corner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Songeeta created an amazing logo and poster design for my restaurant. Her creativity and understanding of my vision was outstanding. The designs helped attract more customers to my business. Highly recommended!",
  },
  {
    name: "Fatema Khan",
    position: "Founder, Elegant Fashion House",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "I needed social media graphics for my clothing brand and Songeeta delivered beyond my expectations. The designs were modern, eye-catching and perfectly represented my brand aesthetic. Will definitely work with her again!",
  },
  {
    name: "Mohammad Hasan",
    position: "Marketing Manager, Tech Solutions BD",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Working with Songeeta was a pleasure. She designed our company brochure and business cards with such professionalism. Her attention to detail and quick turnaround time impressed our entire team. Great work!",
  },
  {
    name: "Priya Sharma",
    position: "Event Organizer, Celebration Events",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "Songeeta designed beautiful invitation cards and event posters for our wedding planning business. Her creative ideas and ability to understand client needs made the collaboration smooth and successful.",
  },
  {
    name: "Karim Rahman",
    position: "Director, Green Valley School",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: "We hired Songeeta to design our school's annual report and promotional materials. She created clean, professional designs that perfectly communicated our school's values. Very satisfied with her work!",
  },
]