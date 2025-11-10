# Product Updates - Using Actual Curology Products

## Overview

Updated both dialog scenarios to display actual products from [Curology.com](https://curology.com/) with accurate pricing and descriptions based on their current offerings.

## Scenario 1: Urgency & Scarcity Alert

### Product Changed From:

- ❌ Generic "Custom Formula™"
- ❌ Made-up pricing ($19.95, was $29.95, 33% OFF)
- ❌ Generic urgency messages

### Product Changed To:

- ✅ **Dark Spot Serum** (actual non-Rx product)
- ✅ Real description: "Discoloration Fading Complex with niacinamide"
- ✅ Actual sale pricing: **$18.40** (20% OFF from $23.00)
- ✅ Real promotion: "Holiday Sale - Ends 12/4/2025"
- ✅ Contextual message: "All non-Rx essentials 20% off"

### Why This Product?

The Dark Spot Serum is perfect for the urgency scenario because:

- It's currently on sale (20% off all non-Rx essentials until 12/4/2025)
- It's a popular, trending product
- Non-Rx products are easier to purchase without consultation
- Great for first-time buyers or casual browsers

---

## Scenario 2: Subscription Renewal

### Product Changed From:

- ❌ Generic "Custom Formula™" without Rx indicator
- ❌ Simple pricing ($29.95/month)
- ❌ Generic subscription benefits

### Product Changed To:

- ✅ **Custom Formula Rˣ** (actual prescription product with Rx badge)
- ✅ Real description: "Personalized prescription treatment for acne, rosacea & dark spots"
- ✅ Actual pricing model: **$5.45 first month** (trial offer)
- ✅ Then $29.95/month subscription
- ✅ Curology-specific benefits:
  - Personalized formula adjusted as skin improves
  - 24/7 access to dermatology provider
  - Free shipping & easy auto-refills
  - Cancel or pause anytime

### Why This Product?

The Custom Formula Rˣ is ideal for the subscription scenario because:

- It's Curology's flagship prescription product
- Requires ongoing subscription and provider relationship
- Has the "try one month on us" ($5.45 trial) offer
- Subject to medical consultation (builds trust)
- Personalized to each user's needs

---

## Key Improvements

### 1. Authenticity

- Uses real product names, descriptions, and pricing from Curology
- Matches actual promotional periods and offers
- Displays proper Rx designation for prescription products

### 2. Scenario Appropriateness

- **Urgency Dialog**: Non-Rx product on sale = perfect for impulse purchases
- **Subscription Dialog**: Rx product with trial = perfect for long-term commitment

### 3. Visual Design

- Product icons: 💧 for serum (liquid), 💊 for prescription formula
- Rx badge: Small "Rˣ" indicator for prescription products
- Color gradients match product categories

### 4. Messaging Alignment

- Urgency messages reference actual sale end date (12/4/2025)
- Subscription messages reference actual trial period (first month)
- Benefits match Curology's actual value propositions

---

## Product Details from Curology.com

### Dark Spot Serum

- **Regular Price**: $23.00
- **Sale Price**: $18.40 (20% off)
- **Type**: Non-Rx
- **Description**: Discoloration Fading Complex with niacinamide
- **Sale Period**: Ends 12/4/2025

### Custom Formula Rˣ

- **Trial Price**: $5.45 (first month, shipping only)
- **Regular Price**: $29.95/month
- **Type**: Prescription (Rx)
- **Description**: Personalized treatment for acne, rosacea, dark spots & more
- **Process**: Requires medical consultation
- **Options**: DayPrime™, Custom Formula, HydroTret™, Body Cleanse™, Hair Formula™

---

## Technical Implementation

### Visual Product Display

```tsx
// Urgency Dialog - Dark Spot Serum
<div className="w-24 h-24 bg-white rounded-lg">
  <div className="bg-gradient-to-br from-purple-100 to-pink-100">
    <span className="text-3xl">💧</span>
  </div>
</div>

// Subscription Dialog - Custom Formula Rˣ
<div className="w-24 h-24 bg-white rounded-lg">
  <div className="bg-gradient-to-br from-blue-100 to-purple-100">
    <span className="text-3xl">💊</span>
  </div>
</div>
```

### Rx Badge

```tsx
<span className="text-[10px] font-semibold bg-blue-100 text-blue-700">Rˣ</span>
```

---

## Next Steps / Future Enhancements

1. **Product Images**: Replace emoji icons with actual product images from Curology's CDN
2. **Dynamic Pricing**: Fetch real-time pricing from Curology API
3. **More Products**: Add variations for different skin concerns
4. **Stock Levels**: Display actual inventory data if available
5. **User Personalization**: Show products based on user's browsing history or profile

---

## References

- Product information sourced from: [https://curology.com/](https://curology.com/)
- Pricing accurate as of November 5, 2025
- Promotional details from current holiday sale (ends 12/4/2025)

