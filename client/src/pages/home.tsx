import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Sparkles, 
  Globe, 
  Wallet, 
  Code2, 
  Search, 
  Lightbulb, 
  Users, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Mail,
  Clock,
  MapPin,
  Star,
  icons,
  CodeXml,
  GoalIcon,
  Projector,
  Phone
} from "lucide-react";
import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiTensorflow,
  SiAmazon,
  SiDocker,
  SiPostgresql, 
  SiSpringboot,
  SiFlutter,
  SiAngular,
  SiPhp,
  SiGoodreads,
  SiQualtrics,
  SiTestin,
  SiTestcafe,
  SiPm2,
  SiNotion,
  SiAndroid
} from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { onlineManager, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import heroBackground from "@assets/generated_images/hero_background_tech_ai.png";
import teamCollaboration from "@assets/generated_images/team_collaboration_workspace.png";
import fintechMockup from "@assets/generated_images/fintech_app_mockup.png";
import aiDashboard from "@assets/generated_images/ai_analytics_dashboard.png";
import ecommerceMockup from "@assets/generated_images/e-commerce_web_mockup.png";
import blockchainPlatform from "@assets/generated_images/blockchain_crypto_platform.png";
import clientWoman from "@assets/generated_images/client_testimonial_woman.png";
import clientMan from "@assets/generated_images/client_testimonial_man.png";
import { title } from "process";
import { Description } from "@radix-ui/react-toast";
import App from "@/App";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      serviceInterest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  const services = [
    {
      icon: Sparkles,
      title: "AI Solutions",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation with custom AI models and machine learning solutions.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build stunning, responsive websites and web applications with cutting-edge technologies, optimized for performance and user experience.",
    },
    {
      icon: SiAndroid, 
      title: "Mobile App Development",
      description: "End-to-end mobile application development services for Android and iOS, creating user-friendly, high-performance apps tailored to your business requirements.",
    },
    {
      icon: Wallet,
      title: "Fintech Solutions",
      description: "Develop secure, scalable financial technology platforms including payment systems, digital wallets, and blockchain-based solutions.",
    },
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored software solutions designed specifically for your business needs, from enterprise applications to mobile apps.",
    },
    {
      icon: SiNotion,
      title: "Project management",
      description:"Professional project management services for contract-based engagements, guiding your project from planning, resource allocation, and execution to successful go-live, ensuring timely delivery and quality outcomes."
    },
    {
      icon: SiTestcafe, // replace with your actual icon
      title: "Quality Assurance ",
      description: "Contract-based quality assurance services ensuring your software meets functional and performance standards through rigorous testing and validation processes.",
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled developers and engineers with years of industry experience",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging the latest technologies to deliver cutting-edge solutions",
    },
    {
      icon: CheckCircle2,
      title: "Client-Centric",
      description: "Your success is our priority with dedicated support and collaboration",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients worldwide",
    },
  ];

  const portfolio = [
    {
      image: aiDashboard,
      category: "AI Solutions",
      title: "Predictive Analytics Platform",
      description: "Machine learning dashboard for real-time business intelligence",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
    },
    {
      image: fintechMockup,
      category: "Fintech",
      title: "Mobile Banking App",
      description: "Secure digital banking solution with seamless UX",
      technologies: ["React Native", "Blockchain", "AWS"],
    },
    {
      image: ecommerceMockup,
      category: "Web Development",
      title: "E-Commerce Platform",
      description: "Modern online retail experience with AI recommendations",
      technologies: ["Next.js", "PostgreSQL", "Stripe"],
    },
    {
      image: blockchainPlatform,
      category: "Fintech",
      title: "Crypto Trading Platform",
      description: "Decentralized finance application with real-time market data",
      technologies: ["Solidity", "Web3", "React", "Node.js"],
    },
  ];

  const processSteps = [
    {
      icon: Search,
      title: "Discovery",
      description: "Understanding your needs, goals, and project requirements",
    },
    {
      icon: Lightbulb,
      title: "Design",
      description: "Creating user-centric designs and technical architecture",
    },
    {
      icon: Code2,
      title: "Development",
      description: "Building robust, scalable solutions with best practices",
    },
    {
      icon: CheckCircle2,
      title: "Deployment",
      description: "Launching your solution with ongoing support and optimization",
    },
  ];

  const testimonials = [
    {
      image: clientWoman,
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechVision Inc",
      content: "Rafutech transformed our operations with their AI solution. The team's expertise and dedication to our success exceeded all expectations. Highly recommended!",
      rating: 5,
    },
    {
      image: clientMan,
      name: "Michael Chen",
      title: "CTO",
      company: "FinanceFlow",
      content: "Working with Rafutech on our fintech platform was exceptional. Their technical knowledge and ability to deliver on time made them the perfect partner for our project.",
      rating: 5,
    },
  ];

  const techStack = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiPython, name: "Python" },
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiTensorflow, name: "TensorFlow" },
    { icon: SiAmazon, name: "AWS" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiSpringboot, name: "SpringBoot" },
    { icon : SiFlutter, name: " Flutter" },
    {icon: SiAngular, name: "Angular"},
    {icon: SiPhp, name: "PHP"},
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {/* <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div> */}
              <div className="h-10 w-10 rounded-md flex items-center justify-center">
              <img 
                src="/favicon.png" 
                alt="Logo" 
                className="h-7 w-7 object-contain" 
              />
            </div>


              <span className={`text-xl font-display font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>
                Rafutech Ltd
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                data-testid="link-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                data-testid="link-portfolio"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                data-testid="link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                data-testid="link-contact"
              >
                Contact
              </button>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              variant={isScrolled ? "default" : "outline"}
              className={!isScrolled ? "backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20" : ""}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Technology background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="h-100 w-100 rounded-md flex items-center justify-center">
            <img 
              src="/favicon.png" 
              alt="Logo" 
              className="h-65 w-65 object-contain" 
            />
          </div>

          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Transforming Ideas into Intelligent Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            AI • Web Development • Fintech • Custom Solutions • Mobile Application 
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="backdrop-blur-md bg-primary/90 hover:bg-primary text-primary-foreground border border-primary-border"
              data-testid="button-hero-start-project"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("portfolio")}
              className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="button-hero-view-work"
            >
              View Our Work
            </Button>
          </div>
          <p className="text-sm text-white/70">
            Trusted by 50+ businesses worldwide
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <button
                    className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 hover-elevate px-2 py-1 -ml-2 rounded-md"
                    data-testid={`link-learn-more-${index}`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Rafutech */}
      <section id="about" className="py-20 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={teamCollaboration}
                alt="Team collaboration"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-card-foreground mb-6">
                Why Choose Rafutech
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical excellence with a deep understanding of business needs to deliver solutions that drive real results.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4" data-testid={`benefit-${index}`}>
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-card-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering innovative solutions across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg"
                data-testid={`card-project-${index}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="font-semibold text-xl mb-2 text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-card-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">
                  Step {index + 1}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8" data-testid={`card-testimonial-${index}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-card-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging industry-leading technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 hover-elevate p-4 rounded-md transition-all duration-300"
                data-testid={`tech-${index}`}
              >
                <tech.icon className="h-12 w-12 text-muted-foreground hover:text-primary transition-colors" />
                <span className="text-sm text-muted-foreground text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your project? Let's discuss how we can help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interest</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger data-testid="select-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="fintech">Fintech Solutions</SelectItem>
                            <SelectItem value="custom-development">Custom Development</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-32"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-4 text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <a
                        href="mailto:jeihezmurithi@gmail.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        contact@rafutech.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Office Hours</div>
                      <div className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-muted-foreground">
                        Global Services Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20 p-6">
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  Response Time
                </h4>
                <p className="text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-display font-bold text-card-foreground">
                  Rafutech Ltd
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Transforming ideas into intelligent solutions through AI, web development, and fintech innovation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-primary hover-elevate px-2 py-1 -ml-2 rounded-md"
                  >
                    AI Solutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-primary hover-elevate px-2 py-1 -ml-2 rounded-md"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-primary hover-elevate px-2 py-1 -ml-2 rounded-md"
                  >
                    Fintech Solutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-primary hover-elevate px-2 py-1 -ml-2 rounded-md"
                  >
                    Custom Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-primary hover-elevate px-2 py-1 -ml-2 rounded-md"
                  >
                    Mobile Apps.
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-muted-foreground hover:text-primary hover-elevate px-2 py-1 -ml-2 rounded-md"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-muted-foreground hover:text-primary hover-elevate px-2 py-1 -ml-2 rounded-md"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-muted-foreground hover:text-primary hover-elevate px-2 py-1 -ml-2 rounded-md"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for tech trends and insights
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="text-sm"
                  data-testid="input-newsletter"
                />
                <Button size="sm" data-testid="button-subscribe">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rafutech Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-muted-foreground hover:text-primary hover-elevate px-2 py-1 rounded-md">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary hover-elevate px-2 py-1 rounded-md">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
