# Rafutech Ltd - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from modern tech companies like Linear, Stripe, and Vercel. Focus on clean professionalism, trust-building, and showcasing technical expertise through sophisticated layouts and clear information hierarchy.

## Typography System
- **Primary Font**: Inter (Google Fonts) - for UI elements, body text, and most content
- **Display Font**: Space Grotesk (Google Fonts) - for hero headlines and section titles
- **Hierarchy**:
  - Hero Headline: text-5xl to text-7xl, font-bold (Space Grotesk)
  - Section Headers: text-3xl to text-4xl, font-bold (Space Grotesk)
  - Service Cards/Titles: text-xl to text-2xl, font-semibold (Inter)
  - Body Text: text-base to text-lg, font-normal (Inter)
  - Small Text/Captions: text-sm, font-medium (Inter)

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm
- Section vertical padding: py-20 (desktop), py-12 (mobile)
- Card/component spacing: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8
- Container max-width: max-w-7xl for full sections, max-w-6xl for content-focused areas

## Page Structure & Sections

### 1. Hero Section (100vh or 90vh)
**Large Hero Image**: Full-width background showcasing modern tech workspace or abstract digital/AI visualization
- Overlay with subtle gradient for text readability
- Centered content with Rafutech Ltd logo/wordmark
- Bold headline emphasizing innovation ("Transforming Ideas into Intelligent Solutions")
- Subheadline highlighting service areas (AI • Web Development • Fintech • Custom Solutions)
- Dual CTA buttons with blurred glass-morphic backgrounds sitting on the hero image
- Trust indicator below CTAs: "Trusted by 50+ businesses worldwide"

### 2. Services Overview (4-column grid on desktop → 2-col tablet → 1-col mobile)
Each service card includes:
- Icon (Heroicons) at top
- Service title
- 2-3 sentence description
- "Learn More" link
Services: AI Solutions, Web Development, Fintech Solutions, Custom Development

### 3. Why Choose Rafutech (2-column layout)
Left: Large image showing team collaboration or technology
Right: 
- Section heading
- 4-5 bullet points with icons highlighting: Expertise, Innovation, Client-Centric, Cutting-Edge Tech, Proven Results
- Each point includes brief description

### 4. Portfolio/Case Studies (3-column masonry grid)
Featured project cards with:
- Project image/mockup
- Client industry tag
- Project title
- Technology stack tags
- Brief outcome/result
Mix real and placeholder projects across AI, web, and fintech categories

### 5. Our Process (Horizontal timeline or 4-step grid)
Visual representation of: Discovery → Design → Development → Deployment
Each step with icon, title, and description

### 6. Client Testimonials (2-column grid)
Quote cards with:
- Client photo (circular)
- Testimonial text
- Name, title, company
- 5-star rating visual

### 7. Tech Stack Showcase
Logos/badges grid showcasing: JavaScript, Python, React, Node.js, TensorFlow, Blockchain tech, Cloud platforms
Demonstrates technical capabilities

### 8. Contact Section (2-column split)
Left: Contact form (Name, Email, Service Interest dropdown, Message)
Right: 
- Office hours
- Email/phone
- Response time promise ("We respond within 24 hours")
- Small location/map reference

### 9. Footer (Rich multi-column)
- Company info & brief description
- Quick links (Services, About, Portfolio, Contact)
- Social media icons
- Newsletter signup ("Stay updated on tech trends")
- Copyright & legal links

## Component Library

**Navigation**
- Fixed header with logo left, navigation center, "Get Started" CTA right
- Mobile: Hamburger menu with smooth slide-in
- Transparent on hero, solid white with shadow on scroll

**Buttons**
- Primary: Solid with rounded corners (rounded-lg), px-6 py-3
- Secondary: Outline style
- When on images: backdrop-blur-md with semi-transparent background

**Cards**
- Service cards: White background, rounded-xl, p-8, subtle shadow (hover: lift effect with increased shadow)
- Portfolio cards: Image top, content below, rounded-lg overflow-hidden
- Testimonial cards: Soft border, rounded-lg, p-6

**Forms**
- Input fields: rounded-lg border, px-4 py-3, focus:ring effect
- Consistent spacing between fields: space-y-4

## Icons
**Heroicons** (outline style) via CDN for all iconography - maintain consistent stroke-width throughout

## Images

**Hero Background**: Modern tech office, digital network visualization, or abstract AI-themed imagery (full-width, 100vh)

**Why Choose Section**: Team collaboration photo or futuristic technology workspace

**Portfolio Cards**: UI mockups, dashboard screenshots, or product visuals for each case study (3-4 project images minimum)

**Client Testimonials**: Professional headshots (circular, 64x64px minimum)

**About/Team**: Optional group photo or office environment shot

All images should convey professionalism, innovation, and technical expertise. Use high-quality, modern photography with good lighting.

## Animations
Minimal, purposeful animations:
- Subtle fade-up on scroll for section entry
- Card hover lift effect (translateY)
- Button hover scale (subtle, 102%)
- Smooth page scroll behavior
NO complex scroll-triggered animations or parallax effects

## Accessibility
- Semantic HTML5 structure
- ARIA labels on interactive elements
- Sufficient color contrast (will be addressed in color phase)
- Keyboard navigable interface
- Alt text for all images