"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Define the data constants outside the component
const skills = [
    {
        category: "Design",
        items: ["Brand Identity", "Graphics Design", "Color Theory", "Flyer Design", "Poster Design", "Logo Design", "Social Media Content"]
    },
    {
        category: "Software",
        items: ["Adobe Creative Suite", "Canva", "Sketch"]
    },
    {
        category: "Additional Skills",
        items: ["Project Management", "Client Communication", "Problem Solving"]
    }
]

const experience = [
    {
        title: "Graphics Designer",
        company: "Alpha Tech Business",
        period: "2024 - Present",
        description: "Lead designer responsible for creating and implementing visual design solutions for various clients across different industries.",
        achievements: [
            "Successfully led and delivered over 12 branding projects",
            "Mentored junior designers and improved team productivity by 30%",
            "Implemented new design system that reduced project delivery time by 40%"
        ]
    },
    {
        title: "Logo and Branding Specialist",
        company: "DeCoders Family",
        period: "2022 - 2024",
        description: "Collaborated with creative team to develop visual solutions for digital and print media.",
        achievements: [
            "Increased client satisfaction rate to 95%",
            "Streamlined design process through template creation",
            "Developed brand guidelines for 3+ startups"
        ]
    }
]

const education = [
    {
        degree: "BSc in Computer Science & Engineering",
        institution: "Daffodil International University",
        period: "2011 - 2015",
        description: "Focused on UI/UX design and interactive technology. Graduated with honors."
    },
    {
        degree: "Certificate in Graphic Design",
        institution: "Design Academy",
        period: "2014",
        description: "Intensive program covering advanced design principles and practical applications."
    }
]

// Define the page component
export default function Page() {
    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/#about" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            <span className="hidden sm:inline">Back to Home</span>
                        </Link>
                    </Button>
                    <Link href="/" className="font-bold text-lg sm:text-xl">
                        SONGEETA<span className="text-primary">PAUL</span>
                    </Link>
                </div>
            </header>

            <main className="container px-4 py-6 md:px-6 md:py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8 md:space-y-12"
                >
                    {/* Hero Section */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        <div className="w-full md:flex-1">
                            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg border-8 border-primary/20">
                                <Image
                                    src="/avater2.jpg?height=1000&width=800"
                                    alt="Songeeta Paul"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="w-full md:flex-1 space-y-4 md:space-y-6">
                            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                                About Me
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl">
                                Passionate Graphics Designer
                            </h1>
                            <p className="text-base md:text-lg text-muted-foreground">
                                With over 2 years of experience in graphic design and visual arts, I've dedicated my career to creating impactful visual experiences that help brands connect with their audience and stand out in today's digital landscape.
                            </p>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                                <Link href="#" download>
                                    Download Resume
                                    <Download className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <section className="space-y-6 md:space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Skills & Expertise</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="rounded-lg bg-muted p-4 md:p-6 space-y-3">
                                    <h3 className="text-lg md:text-xl font-bold">{skill.category}</h3>
                                    <div className="space-y-2">
                                        {skill.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm md:text-base">
                                                <div className="h-2 w-2 rounded-full bg-primary" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className="space-y-6 md:space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Work Experience</h2>
                        <div className="space-y-4 md:space-y-6">
                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-lg bg-muted p-4 md:p-6 space-y-4"
                                >
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold">{job.title}</h3>
                                            <p className="text-primary text-sm md:text-base">{job.company}</p>
                                        </div>
                                        <span className="text-sm md:text-base text-muted-foreground">{job.period}</span>
                                    </div>
                                    <p className="text-sm md:text-base text-muted-foreground">{job.description}</p>
                                    <ul className="space-y-2">
                                        {job.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                                                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="space-y-6 md:space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Education</h2>
                        <div className="space-y-4 md:space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-lg bg-muted p-4 md:p-6"
                                >
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold">{edu.degree}</h3>
                                            <p className="text-primary text-sm md:text-base">{edu.institution}</p>
                                        </div>
                                        <span className="text-sm md:text-base text-muted-foreground">{edu.period}</span>
                                    </div>
                                    <p className="text-sm md:text-base text-muted-foreground mt-2">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="rounded-lg bg-muted p-4 md:p-8">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                            <div className="w-full md:flex-1 space-y-3 md:space-y-4">
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Let's Connect</h2>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                                </p>
                            </div>
                            <div className="w-full md:flex-1">
                                <div className="space-y-4">
                                    {[
                                        { icon: Mail, title: "Email", value: "sangitapal148@gmail.com" },
                                        { icon: Phone, title: "Phone", value: "+8801927852747" },
                                        { icon: MapPin, title: "Location", value: "Dhaka, Bangladesh" }
                                    ].map((contact, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary/10">
                                                <contact.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-sm md:text-base">{contact.title}</h3>
                                                <p className="text-sm md:text-base text-muted-foreground">{contact.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </main>
        </div>
    )
} 