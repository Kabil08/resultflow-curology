# Curology iFrame

A React + TypeScript + Vite + Shadcn UI application that displays the Curology website (https://curology.com) in an iframe with contextual engagement dialogs.

## Features

- **iFrame Integration**: Displays Curology website in a responsive iframe
- **Multiple Scenarios**: Choose between different user engagement strategies
- **Urgency & Scarcity Dialog**: Shows limited-time offers and stock alerts
- **Subscription Renewal Dialog**: Reminds users to resubscribe for products
- **Responsive Design**: Mobile-friendly with adaptive UI components
- **Modern Stack**: Built with React, TypeScript, Tailwind CSS, and Shadcn UI

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scenarios

### Scenario 1: Urgency & Scarcity Alert

- **Trigger**: Displays 3 seconds after user visits the site
- **Message**: Alerts about product interest, limited stock, and special pricing
- **CTA**: "Add to Cart - Save 33%"
- **Use Case**: Engage users who have been browsing specific products

### Scenario 2: Subscription Renewal

- **Trigger**: Displays 3 seconds after user visits the site
- **Message**: Reminds about consistent usage and upcoming product end
- **CTA**: "Resubscribe Now"
- **Use Case**: Re-engage existing customers for subscription renewal

## Project Structure

```
curology-iframe/
├── src/
│   ├── components/
│   │   ├── ui/          # Shadcn UI components
│   │   ├── HomePage.tsx
│   │   ├── IframeLayout.tsx
│   │   ├── UrgencyDialog.tsx
│   │   └── SubscriptionDialog.tsx
│   ├── hooks/
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── vite.config.ts
├── tailwind.config.cjs
└── package.json
```

## Technologies Used

- **React 18**: UI library
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: Beautiful, accessible React components
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Icon library

## Development Notes

- The application starts with a home page displaying two scenario cards
- Each scenario triggers a contextual dialog after 3 seconds on the iframe page
- Users can navigate back to the home page using the "Back to Home" button
- The dialogs are built with Shadcn UI and Radix UI for accessibility

## License

Private
