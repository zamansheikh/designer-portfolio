"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { AnimatedText } from "@/components/animated-text"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/app/project-data"

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedGradientBackground />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl whitespace-nowrap">
            SONGEETA<span className="text-primary">PAUL</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button className="hidden md:inline-flex">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {/* Hamburger menu for mobile */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-background border-t absolute left-0 top-16 z-50">
            <nav className="flex flex-col gap-4 p-4">
              <Link href="#home" className="text-sm font-medium">
                Home
              </Link>
              <Link href="#about" className="text-sm font-medium">
                About
              </Link>
              <Link href="#portfolio" className="text-sm font-medium">
                Portfolio
              </Link>
              <Link href="#services" className="text-sm font-medium">
                Services
              </Link>
              <Link href="#testimonials" className="text-sm font-medium">
                Testimonials
              </Link>
              <Link href="#contact" className="text-sm font-medium">
                Contact
              </Link>
              <Button className="w-full mt-2">
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
                Close
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-8 md:py-32">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm">
                Graphic Designer & Visual Artist
              </div>
              <AnimatedText
                text="Bringing "
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl inline"
              />
              <span className="gradient-text text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Creative
              </span>

              <AnimatedText
                text=" Visions To Life Through Design"
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl inline"
              />
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I create impactful visual experiences that help brands connect with their audience and stand out in
                today's digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#portfolio">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center mt-4 md:mt-0">
              <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-primary/20 animate-float">
                <Image
                  src="/avater2.jpg"
                  alt="Designer Portrait"
                  fill
                  sizes="(max-width: 768px) 160px, (max-width: 1200px) 240px, 400px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 md:mt-0 rounded-lg bg-background p-4 shadow-lg flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-sm font-medium">Available for freelance</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="bg-muted py-12 md:py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto">
                <div className="relative h-48 sm:h-64 md:h-[500px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/aveter1.jpg"
                    alt="Designer at work"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  A passionate designer with 2+ years of experience
                </h2>
                <p className="text-muted-foreground">
                  I’m Songeeta Paul, a self-taught graphic designer with a deep love for creativity and design. I enjoy creating visuals for social media, posters, brochures, and branding that are both eye-catching and meaningful.

                  I’ve gained hands-on experience by exploring design tools like Photoshop, Illustrator, Figma, and Canva, and I’m always eager to learn and grow as a designer. For me, design is not just work—it’s a passion that drives me every day.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold">Education</h3>
                    <p className="text-sm text-muted-foreground">
                      BSc in Computer Science & Engineering, Daffodil International University
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Experience</h3>
                    <p className="text-sm text-muted-foreground">Graphics Designer at Alpha Tech Business</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Expertise</h3>
                    <p className="text-sm text-muted-foreground">Brand Identity, Design, Illustration</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Software</h3>
                    <p className="text-sm text-muted-foreground">Adobe Creative Suite, Canva, Sketch</p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/about">
                    More About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">My Work</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                A selection of my recent work across various design disciplines, from branding to digital design.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="w-full flex justify-center overflow-x-auto">
                <TabsList className="mb-8 flex-nowrap overflow-x-auto scrollbar-hide px-4 w-max">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="branding">Branding</TabsTrigger>
                  <TabsTrigger value="print">Print</TabsTrigger>
                  <TabsTrigger value="digital">Digital</TabsTrigger>
                  <TabsTrigger value="illustration">Illustration</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="branding" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((p) => p.category === "branding")
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="print" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((p) => p.category === "print")
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="digital" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((p) => p.category === "digital")
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="illustration" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((p) => p.category === "illustration")
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="bg-muted py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Offer</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Comprehensive design solutions tailored to your specific needs and business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      {service.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id="testimonials"
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Clients Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Feedback from clients I've had the pleasure of working with over the years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="bg-muted py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Contact Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Work Together</h2>
                <p className="text-muted-foreground">
                  Have a project in mind? Get in touch and let's create something amazing together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">sangitapal148@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">+8801927852747</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Location</h3>
                      <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <form className="space-y-4 rounded-lg bg-background p-6 shadow-lg">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="font-bold text-xl">
              SONGEETA<span className="text-primary">PAUL</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Songeeta Paul. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/_sangitapa_/" className="text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </Link>
            <Link href="https://facebook.com/sangita.paul.90663894/" className="text-muted-foreground hover:text-foreground transition-colors">
              Facebook
            </Link>
            <Link href="https://www.behance.net/sangeetapaul/" className="text-muted-foreground hover:text-foreground transition-colors">
              Behance
            </Link>
            <Link href="https://www.linkedin.com/in/sangeetapaul/" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Services data
const services = [
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

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "Working with Songeeta was a game-changer for our brand. The designs perfectly captured our vision while bringing fresh ideas to the table.",
  },
  {
    name: "Michael Chen",
    position: "Founder, Startup Hub",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "The branding package exceeded our expectations. Our startup now has a professional, cohesive look that has helped us attract investors.",
  },
  {
    name: "Emily Rodriguez",
    position: "Creative Director, Design Agency",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "Songeeta's attention to detail and creative problem-solving made our collaboration seamless. The illustrations created for our campaign were stunning.",
  },
]
