# Curology iFrame - Implementation Summary

## Overview

Created a dual-scenario demonstration application for the Curology website with contextual engagement dialogs.

## What Was Built

### 1. Home Page (`HomePage.tsx`)

- Beautiful landing page with two scenario cards
- Gradient background with modern UI design
- Icon-based visual differentiation (ShoppingCart & RefreshCcw)
- Detailed scenario descriptions
- Click-to-activate functionality

### 2. Scenario 1: Urgency & Scarcity Alert (`UrgencyDialog.tsx`)

**Purpose**: Convert browsers into buyers with urgency tactics

**Features**:

- Product display: **Dark Spot Serum** (actual product from Curology)
  - Discoloration Fading Complex with niacinamide
  - $18.40 (20% OFF from $23.00)
- Two urgency indicators:
  - ⏰ Holiday Sale - Ends 12/4/2025 (matches actual Curology promotion)
  - 📈 Popular Choice - Trending product alert
- Primary CTA: "Add to Cart - Save 20%"
- Secondary option: "Continue Browsing"

**Trigger**: Displays 3 seconds after loading the iframe

### 3. Scenario 2: Subscription Renewal (`SubscriptionDialog.tsx`)

**Purpose**: Re-engage existing customers for subscription renewal

**Features**:

- Product display: **Custom Formula Rˣ** (actual prescription product from Curology)
  - Personalized prescription treatment for acne, rosacea & dark spots
  - $5.45 first month trial (then $29.95/month subscription)
- Two status indicators:
  - ✅ Great Progress (1 month consistent usage of Custom Formula)
  - 📅 Time to Restock (first month trial ending)
- Benefits section highlighting:
  - Personalized formula adjusted as skin improves
  - 24/7 access to dermatology provider
  - Free shipping & easy auto-refills
  - Cancel or pause anytime
- Primary CTA: "Resubscribe Now"
- Secondary option: "Remind Me Later"

**Trigger**: Displays 3 seconds after loading the iframe

### 4. Updated IframeLayout (`IframeLayout.tsx`)

- Accepts scenario prop to determine which dialog to show
- Implements 3-second delay before showing dialog
- Includes "Back to Home" button for navigation
- Full-screen iframe integration

### 5. UI Components Added

- `dialog.tsx` - Shadcn Dialog component for modal overlays
- `card.tsx` - Shadcn Card component for homepage cards

## User Flow

1. **Landing**: User sees homepage with two scenario cards
2. **Selection**: User clicks on either:
   - "Urgency & Scarcity Alert" card, OR
   - "Subscription Renewal" card
3. **Iframe Load**: Curology website loads in iframe
4. **Dialog Trigger**: After 3 seconds, appropriate dialog appears
5. **Interaction**: User can:
   - Take action (Add to Cart / Resubscribe)
   - Dismiss the dialog
   - Use "Back to Home" button to return

## Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Shadcn UI** for component library
- **Radix UI** for accessible primitives
- **Lucide React** for icons

## Key Design Decisions

1. **Separate Scenarios**: Instead of one complex component, created two focused dialog components
2. **Visual Hierarchy**: Used color coding (purple for urgency, blue for subscription)
3. **Timed Triggers**: 3-second delay allows users to orient themselves first
4. **Clear CTAs**: Primary actions are prominent, secondary options are subtle
5. **Product Integration**: Used actual Curology product imagery and branding
6. **Back Navigation**: Easy escape route to home page maintains good UX

## File Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx          (NEW)
│   │   ├── dialog.tsx        (NEW)
│   │   ├── input.tsx
│   │   ├── sheet.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   └── use-toast.ts
│   ├── HomePage.tsx           (NEW)
│   ├── IframeLayout.tsx       (UPDATED)
│   ├── SubscriptionDialog.tsx (NEW)
│   └── UrgencyDialog.tsx      (NEW)
├── App.tsx                    (UPDATED)
└── ...
```

## Running the Application

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open browser to `http://localhost:3009`

4. Build for production:
   ```bash
   npm run build
   ```

## Future Enhancements

- Add analytics tracking for dialog interactions
- Implement actual cart functionality
- Add more scenarios (abandoned cart, price drop alerts, etc.)
- Integrate with Curology API for real product data
- Add A/B testing capabilities
- Implement user segmentation logic
