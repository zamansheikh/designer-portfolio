"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Import the projects data
import { projects } from "@/app/page"

interface ProjectPageProps {
    params: {
        slug: string
    }
}

export default function Page({ params }: ProjectPageProps) {
    const currentProjectIndex = projects.findIndex(
        (p) => p.title.toLowerCase().replace(/ /g, "-") === params.slug
    )

    if (currentProjectIndex === -1) {
        return notFound()
    }

    const project = projects[currentProjectIndex]
    const nextProject = projects[(currentProjectIndex + 1) % projects.length]
    const nextProjectSlug = nextProject.title.toLowerCase().replace(/ /g, "-")

    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/#portfolio" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            <span className="hidden sm:inline">Back to Portfolio</span>
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
                    className="space-y-6 md:space-y-8"
                >
                    {/* Project Header */}
                    <div className="space-y-3 md:space-y-4">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                            {project.category}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl">
                            {project.title}
                        </h1>
                        <p className="text-base md:text-xl text-muted-foreground">
                            {project.description}
                        </p>
                    </div>

                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden rounded-lg border-8 border-primary/20">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Project Details */}
                    <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold">Project Overview</h2>
                            <p className="text-sm md:text-base text-muted-foreground">
                                {project.description}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold">Project Details</h2>
                            <dl className="space-y-3 md:space-y-4">
                                <div className="flex items-center justify-between rounded-lg bg-muted p-3 md:p-4">
                                    <dt className="text-sm md:text-base font-medium">Category</dt>
                                    <dd className="text-sm md:text-base text-muted-foreground capitalize">{project.category}</dd>
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-muted p-3 md:p-4">
                                    <dt className="text-sm md:text-base font-medium">Client</dt>
                                    <dd className="text-sm md:text-base text-muted-foreground">{project.client}</dd>
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-muted p-3 md:p-4">
                                    <dt className="text-sm md:text-base font-medium">Timeline</dt>
                                    <dd className="text-sm md:text-base text-muted-foreground">{project.timeline}</dd>
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-muted p-3 md:p-4">
                                    <dt className="text-sm md:text-base font-medium">Deliverables</dt>
                                    <dd className="text-sm md:text-base text-muted-foreground">{project.deliverables}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    {/* Project Gallery */}
                    <div className="space-y-4 md:space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold">Project Gallery</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {project.gallery && project.gallery.map((img, i) => (
                                <div key={i} className="relative aspect-video overflow-hidden rounded-lg border-4 border-primary/10">
                                    <Image
                                        src={img}
                                        alt={`Project detail ${i + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Project */}
                    <div className="rounded-lg bg-muted p-4 md:p-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="space-y-1 md:space-y-2">
                                <p className="text-sm text-primary">Next Project</p>
                                <h3 className="text-lg md:text-xl font-bold">{nextProject.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground line-clamp-2">{nextProject.description}</p>
                            </div>
                            <Button size="lg" className="w-full sm:w-auto" asChild>
                                <Link href={`/project/${nextProjectSlug}`}>
                                    View Project
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    )
}