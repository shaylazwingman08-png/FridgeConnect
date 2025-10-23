# Community Fridge System - Design Guidelines

## Design Approach

**Selected Approach**: Design System with Community Focus  
**Rationale**: This is a utility-focused community resource where clarity, accessibility, and trustworthiness are paramount. Users need to quickly find fridge locations, hours, and guidelines. Drawing inspiration from successful community resources and food bank websites, combined with Material Design principles for accessibility.

**Core Principles**:
- Warmth meets clarity: Welcoming but highly functional
- Mobile-first: Users often search for locations on-the-go
- Universal accessibility: Diverse user base requires exceptional readability
- Trust through transparency: Clear information presentation

---

## Typography System

**Font Families**:
- Primary: Inter (via Google Fonts) - clean, highly legible for body text and UI
- Headings: Poppins (via Google Fonts) - friendly, approachable for headlines

**Hierarchy**:
- Page Titles: Poppins, text-5xl font-bold (mobile: text-4xl)
- Section Headers: Poppins, text-3xl font-semibold (mobile: text-2xl)
- Subsections: Poppins, text-xl font-medium
- Body Text: Inter, text-base leading-relaxed
- Captions/Meta: Inter, text-sm
- CTA Buttons: Inter, text-lg font-semibold

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Consistent spacing creates rhythm: p-6, gap-8, mb-12, py-20
- Component padding: p-6 (mobile), p-8 (tablet), p-12 (desktop)
- Section spacing: py-16 (mobile), py-20 (tablet), py-24 (desktop)
- Container max-width: max-w-6xl for content, max-w-7xl for full sections

**Grid Structure**:
- Single column on mobile (always)
- 2-column for location details on tablet+
- 3-column for feature cards (What We Provide, How It Works)
- Use gap-6 (mobile), gap-8 (desktop)

---

## Component Library

### Navigation
- Sticky header with site logo/name
- Horizontal menu on desktop, hamburger on mobile
- Clear active page indicator
- Links: Home | About Us | Chapel Hill | UNC
- Mobile menu: full-screen overlay with large, touch-friendly links

### Homepage Components

**Hero Section** (80vh minimum):
- Large hero image showing community members at a fridge (warm, inclusive photography)
- Overlay with blurred background for text/CTA readability
- Centered headline: "Nourishing Our Community Together"
- Subheading explaining the mission (1-2 sentences)
- Two CTAs with blurred backgrounds: "Find a Fridge" (primary), "Learn More" (secondary)

**Quick Location Cards** (2-column grid):
- Chapel Hill and UNC locations side-by-side
- Each card includes: fridge name, address snippet, hours, "View Details" link
- Icons: map pin, clock (using Heroicons)
- Cards have subtle elevation

**How It Works Section**:
- 3-column grid (stacks on mobile)
- Icons for each step: Find, Take/Give, Community
- Short title + 2-3 sentence description per step
- Section padding: py-20

**Impact Stats** (3-4 column grid):
- Numerical highlights: "500+ Meals Shared", "2 Locations", "Open 24/7"
- Large numbers with supporting text
- Simple, clean presentation

**Community Guidelines Summary**:
- Bulleted list of key guidelines
- "Respect the fridge, respect the community" messaging
- Link to full guidelines on About page

### About Us Page

**Mission Statement Section**:
- Full-width with contained text (max-w-3xl)
- Compelling opener about food insecurity and community
- Image: volunteers stocking fridge

**Our Story**:
- Timeline or narrative format
- Mix of text blocks and supporting images
- 2-column alternating layout (text/image)

**How Our Fridges Work**:
- Detailed guidelines in clear, organized format
- Numbered lists for take/give rules
- Icons for visual clarity
- Emphasis on "No questions asked, no judgment"

**Get Involved Section**:
- Multiple pathways: Donate food, Volunteer, Financial support
- 3-column cards with clear CTAs
- Contact information

### Location Pages (Chapel Hill & UNC)

**Location Hero**:
- Large image of the specific fridge location
- Fridge name as headline
- Exact address prominently displayed

**Essential Information Grid** (2-column):
- Left: Map integration placeholder, address, directions
- Right: Hours (24/7 emphasized), Contact, Special notes

**Accepted Items**:
- Visual grid showing what to donate
- Icons + short labels (Fresh produce, Prepared meals, etc.)
- Clear "Please Don't" list as well

**Photo Gallery**:
- 3-4 images showing the fridge, location context, community members
- Masonry or simple grid layout

**Guidelines Specific to Location**:
- Any location-specific rules (parking, access, etc.)

**Nearby Resources**:
- List of complementary services (food pantries, etc.)
- Simple cards with name, address, hours

### Footer (All Pages)
- 3-column layout (stacks on mobile)
- Column 1: Mission statement excerpt, social links
- Column 2: Quick links to all pages
- Column 3: Contact information, newsletter signup
- Bottom bar: Copyright, accessibility statement

---

## Icon System

**Library**: Heroicons (via CDN)
- Navigation: menu, x-mark, chevron-down
- Location: map-pin, clock, phone
- Actions: heart, hand-raised, arrow-right
- Social: brand icons as needed
- Use outline style for consistency

---

## Images

**Required Images**:
1. **Homepage Hero**: Wide shot of diverse community members at fridge, warm lighting (1920x1080)
2. **Chapel Hill Location**: Photo of specific fridge exterior/context (1200x800)
3. **UNC Location**: Photo of specific fridge exterior/context (1200x800)
4. **About Us**: 2-3 images of volunteers, community members, food sharing (800x600 each)
5. **How It Works**: Supporting imagery for donation/access process (600x400 each)

**Treatment**: All images should feel authentic, warm, and community-focused. Avoid overly polished stock photography. Documentary-style photography works best.

---

## Accessibility Requirements

- Minimum touch target: 44x44px for all interactive elements
- High contrast text throughout
- Alt text for all images
- Semantic HTML headings (h1, h2, h3)
- Focus indicators on all interactive elements
- ARIA labels for icon-only buttons
- Responsive text sizing (no fixed pixels)
- Form labels explicitly associated with inputs

---

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile-Specific Adjustments**:
- Larger touch targets (minimum 48px)
- Simplified navigation (hamburger menu)
- Full-width cards/components
- Reduced section padding (py-12 vs py-20)
- Stacked location information (no side-by-side)