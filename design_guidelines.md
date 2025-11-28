# True Levy Financial Consultant - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium financial services websites (Stripe's sophistication, Goldman Sachs' gravitas, Wise's modern trust-building) combined with contemporary SaaS landing page excellence. This creates a balance between financial credibility and modern web design.

**Core Design Principles**:
- Premium minimalism with purposeful whitespace
- Trust through visual polish and consistency
- Professionalism without stuffiness
- Modern sophistication that respects financial industry expectations

---

## Typography System

**Font Stack**:
- **Headlines**: Inter or Manrope (700-800 weight) - Modern, professional, excellent at large sizes
- **Body/UI**: Inter (400-600 weight) - Clean, highly readable
- **Accent/Numbers**: DM Sans or Space Grotesk (500-700 weight) - For statistics, pricing, emphasis

**Hierarchy**:
- Hero Headline: 4xl-6xl (responsive), 700-800 weight, tight leading (-0.02em tracking)
- Section Headlines: 3xl-4xl, 700 weight, balanced leading
- Service Titles: xl-2xl, 600 weight
- Body Text: base-lg, 400-500 weight, relaxed leading (1.6-1.7)
- Captions/Meta: sm, 400-500 weight

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistency

**Container Strategy**:
- Full-width sections with inner max-w-7xl containers
- Content sections: max-w-6xl for generous breathing room
- Text-heavy content: max-w-4xl for optimal reading

**Vertical Rhythm**:
- Section padding: py-16 (mobile) → py-24 (tablet) → py-32 (desktop)
- Component spacing: space-y-12 to space-y-16
- Card internal padding: p-8 to p-12

**Grid Systems**:
- Services: 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Features/Stats: 4-column for metrics, 2-column for detailed content
- All grids collapse to single column on mobile

---

## Component Library

### Navigation
- Sticky header with subtle backdrop blur on scroll
- Logo (left-aligned, height h-8 to h-10)
- Horizontal navigation links (hidden on mobile, hamburger menu)
- Primary CTA button (right-aligned)
- Mobile: Full-screen overlay menu with large, accessible links

### Hero Section
**Layout**: Full-viewport hero (min-h-screen) with asymmetric two-column layout
- Left column (60%): Headline, subheadline, dual CTA buttons, trust indicators
- Right column (40%): Large hero image or abstract financial visualization
- Trust bar below fold: Client logos or "Trusted by 500+ businesses" metrics

**Hero Image**: Yes - Use a professional financial consultation scene (handshake, modern office, or abstract financial graphics representing growth/stability). Image should be high-quality, with subtle overlay for text contrast.

### Services Showcase
**Card Design**: 
- 3-column grid with hover elevation effect
- Each card: Icon (top), Service title, 2-3 line description, subtle "Learn more" link
- Icons: Use simple line icons from Heroicons
- Cards have consistent aspect ratio, subtle border, generous internal padding (p-8)

**Services to Feature**:
1. Company / LLP Registration
2. ROC Filing
3. GST Registration & Filing
4. Income Tax & TDS Filing
5. Preparation of Financial Statements
6. Project Finance Assistance
7. EPF / ESI Registration
8. Regulatory License Support & Compliance Consulting

### Stats/Trust Section
- 4-column grid showcasing key metrics (Years of Experience, Clients Served, Filings Completed, Success Rate)
- Large numbers (4xl-5xl) with labels
- Subtle dividers between stats

### Process/How It Works
- Horizontal timeline or 4-step process
- Number badges, step titles, brief descriptions
- Connector lines between steps (desktop only)

### Testimonials
- 2-column layout with client quotes
- Avatar, name, company, quote in card format
- Subtle quotation marks as decorative element

### Contact/CTA Section
- Two-column split: Contact form (left) + Business details/map placeholder (right)
- Form fields: Name, Email, Phone, Service Interest (dropdown), Message
- Business details include: Address, Phone, Email, Business hours
- Primary CTA button for form submission

### Footer
- Multi-column footer (4 columns on desktop, stack on mobile)
- Columns: About/Tagline, Services quick links, Company links, Contact info
- Logo at top of footer
- Social media icons
- Copyright and legal links at bottom

---

## Animations & Interactions

**Page Load**: Subtle fade-up on hero elements (stagger by 100ms)
**Scroll Animations**: Fade-in-up on section entry (intersection observer)
**Hover States**: 
- Cards: Subtle lift (translateY(-4px)) + shadow increase
- Buttons: Slight scale (1.02) + subtle glow
- Links: Underline animation from left to right

**Keep Minimal**: Animations should enhance, not distract. Focus animation budget on hero section and service cards only.

---

## Images

**Hero Section**: 
- Large, high-quality professional image (business meeting, financial planning, or modern office)
- Aspect ratio: 16:9 or custom to fit asymmetric layout
- Subtle gradient overlay if text overlay needed
- Buttons on hero have backdrop-blur-md background

**Service Icons**: 
- Use Heroicons line icons (outline style)
- Consistent size across all cards (w-12 h-12 or w-16 h-16)

**Trust/Social Proof**: 
- Client logos in grayscale (hover to color)
- Team photos if applicable (circular crops, consistent sizing)

**No decorative abstract shapes or unnecessary imagery** - maintain premium restraint

---

## Responsive Behavior

**Breakpoints**:
- Mobile: Single column, stacked navigation, full-width cards
- Tablet (md:): 2-column grids, horizontal navigation appears
- Desktop (lg:): 3-4 column grids, full layout complexity

**Mobile-Specific**:
- Hamburger menu with smooth slide-in animation
- Reduced vertical spacing (py-12 instead of py-32)
- Font sizes scale down appropriately
- Touch-friendly button sizes (min 44px height)

---

## Accessibility

- All interactive elements have focus states with visible outline
- Form inputs have clear labels and error states
- Minimum contrast ratio 4.5:1 for all text
- Skip to main content link for keyboard users
- ARIA labels for icon-only buttons
- Semantic HTML structure maintained throughout