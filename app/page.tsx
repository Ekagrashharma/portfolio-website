"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Palette,
  Brain,
  Code,
  Zap,
  GitBranch,
  Users,
  BarChart3,
  ShoppingCart,
  Sparkles,
  Menu,
  X,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    title: "AI Content Platform",
    description: "Full-stack SaaS for AI-powered content generation with real-time collaboration",
    type: "SaaS",
    icon: Brain,
    href: "#",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "Design System",
    description: "Comprehensive component library with 50+ components and live documentation",
    type: "Design",
    icon: Palette,
    href: "#",
    tech: ["React", "Tailwind CSS", "Storybook"],
  },
  {
    title: "Real-time Analytics",
    description: "Dashboard for tracking user behavior and product metrics with WebSocket integration",
    type: "Analytics",
    icon: BarChart3,
    href: "#",
    tech: ["Next.js", "WebSocket", "D3.js", "Redis"],
  },
  {
    title: "E-Commerce Platform",
    description: "Full shopping experience with inventory management and payment processing",
    type: "E-Commerce",
    icon: ShoppingCart,
    href: "#",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
  },
]

const SKILLS_CATEGORIES = [
  {
    category: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: GitBranch,
    skills: ["Node.js", "PostgreSQL", "API Design", "Authentication", "WebSockets", "Caching"],
  },
  {
    category: "Full Stack",
    icon: Zap,
    skills: ["System Design", "Database Architecture", "DevOps", "Cloud Deployment", "Scaling", "Testing"],
  },
  {
    category: "Design",
    icon: Palette,
    skills: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "Wireframing"],
  },
  {
    category: "AI & Tools",
    icon: Sparkles,
    skills: ["AI Integration", "OpenAI API", "LangChain", "Prompt Engineering", "Vector DBs"],
  },
  {
    category: "DevOps",
    icon: Users,
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "GitHub Actions", "Monitoring"],
  },
]

const EXPERIENCE = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Startup",
    duration: "2022 - Present",
    description:
      "Led development of AI-powered platform serving 10k+ users. Architected microservices, implemented real-time features, and scaled infrastructure to handle 100k requests/day.",
    achievements: ["Scaled to 10k+ users", "Built AI features", "Led team of 3 developers"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    duration: "2020 - 2022",
    description:
      "Built 20+ client projects using modern web technologies. Specialized in SaaS platforms and real-time applications with focus on performance and UX.",
    achievements: ["Delivered 20+ projects", "100% client satisfaction", "Mentored 2 junior developers"],
  },
]

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  const nameRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(nameRef.current, {
        duration: 1,
        opacity: 0,
        y: 50,
      })
        .from(
          subtitleRef.current,
          {
            duration: 0.8,
            opacity: 0,
            y: 30,
          },
          "-=0.5",
        )
        .from(
          imageRef.current,
          {
            duration: 0.8,
            opacity: 0,
            scale: 0.9,
          },
          "-=0.5",
        )
        .from(
          ctaRef.current,
          {
            duration: 0.6,
            opacity: 0,
            y: 20,
          },
          "-=0.4",
        )
    })

    return () => ctx.revert()
  }, [])

  const socials = [
    { icon: Github, href: "https://github.com/Ekagrashharma", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ekagrashharma", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ekagrashharma@gmail.com", label: "Email" },
  ]

  return (
    <section className="min-h-screen pt-10 pb-7 px-6 noise-bg" id="home">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <div className="accent-line mb-8" />
            <h1 ref={nameRef} className="text-7xl lg:text-8xl font-black  text-red-500 leading-tight">
              Ekagra <span className="text-accent">Sharma</span>
            </h1>
            <p ref={subtitleRef} className="text-2xl lg:text-3xl text-muted-foreground mt-6 font-medium">
              Full Stack Developer & Designer
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            I build modern web products with beautiful interfaces and robust backends. Expertise in Next.js, TypeScript,
            and AI integration.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-effect font-bold rounded-lg hover:border-accent/50 transition-all"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>


        <div ref={imageRef} className="relative h-96 lg:h-[78%] min-h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl" />
          <img
            src="/myImage.jpeg"
            alt="Ekagra Sharma"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// ABOUT SECTION
// ============================================================================
function AboutSection() {
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
      })

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        delay: 0.2,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen  pb-20 px-6 noise-bg" id="about">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <div className="accent-line mb-8" />
          <h2 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
            About <span className="text-accent">Me</span>
          </h2>
        </div>

        <div ref={contentRef} className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm <span className="text-accent font-semibold">Ekagra Sharma</span>, a full-stack developer and designer
            passionate about building elegant, scalable products that solve real-world problems. With a deep interest in
            both engineering and design, I believe the best products emerge at the intersection of these disciplines.
          </p>

          <p>
            My journey into tech started with a curiosity about how things work. I've since built multiple SaaS
            projects, designed robust systems, and continuously pushed myself to learn cutting-edge technologies. I'm
            fascinated by AI, systems thinking, and the 20/80 rule — doing the 20% of work that generates 80% of the
            value.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-12">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="accent-line" /> Skills
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Full-stack development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> UI/UX design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> AI integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> System design
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="accent-line" /> Tech Stack
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Next.js & React
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> GSAP & Framer Motion
                </li>
              </ul>
            </div>
          </div>

          <p>
            I'm constantly learning, experimenting with new technologies, and staying updated with industry trends. My
            approach is driven by the philosophy that great products are built through collaboration, clear thinking,
            and relentless focus on what matters most.
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PROJECTS SECTION
// ============================================================================
function ProjectsSection() {
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
      })

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        stagger: 0.1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen  pb-20 px-6 noise-bg" id="projects">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <div className="accent-line mb-8" />
          <h2 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
            A selection of work that demonstrates my approach to design, engineering, and product development.
          </p>
        </div>
          <div
  ref={cardsRef}
  className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
>
  {PROJECTS.map((project) => {
    const Icon = project.icon

    return (
      <a
        key={project.title}
        href={project.href}
        className="group p-6 rounded-xl border border-white/10 bg-black/10 hover:bg-black/20 transition-all duration-200 hover:scale-[1.03] cursor-pointer"
      >
        {/* top */}
        <div className="flex items-start justify-between mb-5">
          <div className="p-3 rounded-lg bg-accent/10">
            <Icon size={28} className="text-accent" />
          </div>

          <span className="text-xs font-semibold text-accent uppercase">
            {project.type}
          </span>
        </div>

        {/* title */}
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* description */}
        <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* tech list */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1 rounded-full bg-white/[0.05] text-muted-foreground border border-white/[0.08]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* view btn */}
        <div className="flex items-center gap-3 text-accent font-medium group-hover:gap-5 transition-all">
          <span>View Project</span>
          <ArrowRight
            size={15}
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </a>
    )
  })}
</div>

      </div>
    </section>
  )
}

// ============================================================================
// SKILLS SECTION
// ============================================================================
function SkillsSection() {
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
      })

      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        stagger: 0.05,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen  pb-20 px-6 noise-bg" id="skills">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <div className="accent-line mb-8" />
          <h2 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
            A comprehensive overview of my technical and professional capabilities.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {SKILLS_CATEGORIES.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.category}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200 hover:-translate-y-1"
                >
                  {/* header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.category}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {item.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <span className="text-accent text-xs">▸</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

        {/* Tools Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="accent-line" /> Development Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {["VS Code", "Git", "Vercel", "GitHub", "NPM/Yarn", "Docker", "AWS", "Stripe"].map((tool) => (
                <div
                  key={tool}
                  className="glass-effect p-4 rounded-lg text-center hover:border-accent/50 transition-all"
                >
                  <p className="text-sm font-medium text-foreground">{tool}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="accent-line" /> Design Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {["Figma", "Adobe XD", "Protopie", "Framer", "Photoshop", "Illustrator", "InVision", "Webflow"].map(
                (tool) => (
                  <div
                    key={tool}
                    className="glass-effect p-4 rounded-lg text-center hover:border-accent/50 transition-all"
                  >
                    <p className="text-sm font-medium text-foreground">{tool}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// EXPERIENCE SECTION
// ============================================================================
function ExperienceSection() {
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
      })

      gsap.from(".exp-item", {
        scrollTrigger: {
          trigger: ".exp-item",
          start: "top 80%",
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        stagger: 0.2,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen pb-20 px-6 noise-bg" id="experience">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <div className="accent-line mb-8" />
          <h2 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
            Experience & <span className="text-accent">Achievements</span>
          </h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.company}
              className="exp-item glass-effect p-8 rounded-xl border-l-4 border-accent hover:border-accent/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-semibold mt-2">{exp.company}</p>
                </div>
                <span className="text-muted-foreground text-sm">{exp.duration}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exp.achievements.map((achievement) => (
                  <div key={achievement} className="bg-accent/5 p-4 rounded-lg">
                    <p className="text-sm text-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CONTACT SECTION
// ============================================================================
function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
      })

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        delay: 0.2,
      })
    })

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    }, 1500)
  }

  return (
    <section className="min-h-screen  pb-20 px-6 noise-bg" id="contact">
      <div className="max-w-2xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <div className="accent-line mb-8 mx-auto w-fit" />
          <h2 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>
        
        <div className=" border-2 rounded-2xl">
        <form onSubmit={handleSubmit} className="contact-form glass-effect p-8 rounded-xl  space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-200 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
          />

          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-200  border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-gray-200  border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-8 py-4 bg-red-500 text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-accent text-center">Thanks for reaching out. I'll get back to you soon!</p>
          )}
        </form>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// NAVBAR COMPONENT
// ============================================================================
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-foreground">
          ES<span className="text-accent">.</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.href.slice(1) ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu with gradient background */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 md:hidden bg-gradient-to-b from-background via-background/95 to-background/80 border-b border-border backdrop-blur-md">
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1) ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// ============================================================================
// FOOTER COMPONENT
// ============================================================================
function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center text-muted-foreground space-y-2">
        <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        <p className="text-sm mt-2">© 2025 Ekagra Sharma. All rights reserved.</p>
      </div>
    </footer>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default Home
