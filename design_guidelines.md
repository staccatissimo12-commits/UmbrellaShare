# Design Guidelines: 유니버슈룹 Campus Umbrella Rental Service

## Design Approach

**Hybrid Approach**: Combining Korean youth-focused aesthetics (inspired by Toss, Karrot, 배달의민족) with functional design system principles for forms and admin interface. The design targets Korean university students (early 20s) with approachable, optimistic, and trustworthy aesthetics while maintaining professional functionality.

## Core Design Elements

### A. Color Palette

**Light Mode (Primary)**:
- Primary: 45 95% 55% (Bright optimistic green - eco-friendly umbrella theme)
- Primary Hover: 45 95% 45%
- Secondary: 210 100% 50% (Trust-building blue for forms)
- Background: 0 0% 98% (Soft off-white)
- Card Background: 0 0% 100%
- Text Primary: 220 20% 15%
- Text Secondary: 220 10% 50%
- Border: 220 15% 90%
- Success: 140 70% 45%
- Warning: 35 100% 55%

**Dark Mode**:
- Primary: 45 90% 60%
- Background: 220 20% 10%
- Card Background: 220 15% 14%
- Text Primary: 0 0% 95%
- Border: 220 15% 25%

### B. Typography

**Font Family**: Noto Sans KR (Google Fonts CDN)
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)

**Hierarchy**:
- Hero Headline: text-4xl md:text-6xl font-bold (한글 최적화)
- Section Headers: text-3xl md:text-4xl font-bold
- Subsection Headers: text-2xl font-semibold
- Body Text: text-base md:text-lg font-normal
- Small Text: text-sm font-light
- Form Labels: text-sm font-medium
- Buttons: text-base font-medium

### C. Layout System

**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section Padding: py-16 md:py-24
- Container Max Width: max-w-6xl
- Card Spacing: p-6 md:p-8
- Form Field Gaps: space-y-6
- Button Padding: px-6 py-3

**Grid System**:
- Benefits Section: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Forms: Single column max-w-2xl centered
- Admin Dashboard: Full-width tables with responsive overflow

### D. Component Library

**Navigation**:
- Sticky header with white/dark background
- Logo (유니버슈룹) + navigation links
- Mobile: Hamburger menu
- CTA button in header (우산 대여하기)

**Hero Section**:
- Full-width with gradient overlay (green to blue)
- Large hero image showing campus umbrella sharing scene
- Headline emphasizing free eco-friendly service
- Subheadline about advertising model
- Primary CTA button (우산 신청하기)
- Trust indicators (사용자 수, 파트너 대학)

**Benefits Section**:
- 3-column grid on desktop
- Icon + Title + Description cards
- Benefits: 무료 서비스, 캠퍼스 편의성, 환경 보호, 분실 걱정 없음, 광고 모델, 쉬운 반납
- Soft rounded cards (rounded-2xl) with subtle shadows
- Hover effects: slight lift and shadow increase

**Forms (Rental & Advertiser)**:
- Clean white cards on subtle background
- All fields required with clear labels
- Date pickers for rental/return dates
- Input styling: rounded-lg border focus:ring-2
- Large submit button (w-full)
- Success toast notification on submission
- Validation with Korean error messages

**Footer**:
- Multi-column layout
- Company info (유니버슈룹)
- Privacy officer (최성준)
- Address (성북구 정릉로 77...)
- Quick links
- Social media icons
- Copyright notice

**Admin Dashboard**:
- Login page: Centered card with clean form
- Dashboard: Sidebar navigation
- Tables: Striped rows, sortable columns
- Real-time data display
- Export functionality
- Tabs for rental/advertiser submissions
- Responsive cards on mobile

### E. Animations

**Minimal, purposeful animations**:
- Hero fade-in on load
- Button hover: slight scale (scale-105)
- Card hover: lift effect (translateY(-4px))
- Form submission: Loading spinner
- Success: Checkmark animation
- Page transitions: Smooth fade

### F. Images

**Required Images**:
1. **Hero Image**: University campus students sharing colorful branded umbrellas on rainy day, bright and optimistic mood - full-width background
2. **Benefits Icons**: Use Heroicons for each benefit (shield-check, sparkles, globe, heart, megaphone, arrow-path)
3. **Advertiser Section**: Image showing branded umbrella close-up with ad space highlighted

## Korean Youth Aesthetic Elements

- **Friendly Tone**: Conversational Korean copy (반말 느낌 but respectful)
- **Playful Elements**: Rounded corners throughout (rounded-xl, rounded-2xl)
- **Bright Optimism**: High-saturation primary colors with soft backgrounds
- **Trust Building**: Clear information hierarchy, professional forms
- **Mobile-First**: All interactions optimized for mobile touch
- **Generous Whitespace**: Never cramped, breathing room between sections
- **Clear CTAs**: High-contrast buttons with action-oriented Korean text

## Responsive Behavior

- Mobile (< 768px): Single column, stacked sections, full-width CTAs
- Tablet (768-1024px): 2-column grids, sidebar collapses
- Desktop (> 1024px): Full multi-column layouts, fixed sidebar

## Accessibility

- High contrast ratios (WCAG AA minimum)
- Focus indicators on all interactive elements
- Korean screen reader optimized labels
- Keyboard navigation support
- Form validation with clear error states