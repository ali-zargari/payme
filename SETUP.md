# Payment Setup Instructions

## Option 1: Stripe Payment Links (Recommended)
1. Go to https://stripe.com and create an account
2. Navigate to Payment Links in the dashboard
3. Create a new payment link:
   - Amount: $5.00
   - Name: "Developer Support" or whatever you prefer
   - One-time payment
4. Copy your payment link URL
5. Replace the dummy URL in `app/page.tsx` line 12

## Option 2: Direct PayPal
If you prefer PayPal, change line 12 to:
```javascript
const paymentLink = "https://paypal.me/YourUsername/5USD"
```

## Option 3: Cash App
For Cash App, use:
```javascript
const paymentLink = "https://cash.app/$YourCashtag/5"
```

## Privacy Tips
- Stripe: Use a business name (DBA) instead of personal name
- PayPal: Create a business account
- Cash App: Use a cashtag that doesn't reveal your identity

The app will work with any payment link that accepts URL parameters for amounts.