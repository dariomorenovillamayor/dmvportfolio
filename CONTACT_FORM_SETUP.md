# Contact Form Setup Guide

## Overview

We've implemented a modern slide-up contact form that replaces all the `mailto:` links across your portfolio. The form provides a better user experience and collects structured data about potential clients.

## Features

- **Slide-up panel**: Modern, mobile-friendly design
- **Service pre-selection**: Automatically fills the service based on which page the user clicked from
- **Form validation**: Real-time validation with error messages
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Responsive design**: Works perfectly on all devices
- **Success feedback**: Shows confirmation message after submission

## Form Submission Setup

### Option 1: Formspree (Recommended - Free)

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Create a new form
3. Copy your form ID (it will look like `xrgjqkqr`)
4. Update the form submission URL in `src/components/ContactForm.tsx`:

```tsx
// Replace YOUR_FORM_ID with your actual Formspree form ID
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

### Option 2: Netlify Forms (If hosting on Netlify)

1. Add `name="contact"` to the form element in `ContactForm.tsx`
2. Netlify will automatically detect and handle form submissions
3. You can view submissions in your Netlify dashboard

### Option 3: Custom API Endpoint

1. Create your own API endpoint (e.g., `/api/contact`)
2. Update the fetch URL in `ContactForm.tsx`
3. Handle the form data on your server

## Customization

### Adding New Services

To add new services to the dropdown, update the `services` array in `src/components/ContactForm.tsx`:

```tsx
const services = [
  { value: "salud-prevencion", label: "Salud, Prevención y Control de Peso" },
  { value: "nutricion-deporte", label: "Nutrición Deportiva Online" },
  { value: "coaching-personalizado", label: "Coaching Nutricional Personalizado" },
  { value: "talleres-grupales", label: "Talleres Grupales de Nutrición" },
  { value: "consulta-general", label: "Consulta General" },
  // Add your new service here
  { value: "nuevo-servicio", label: "Nuevo Servicio" },
];
```

### Styling Customization

The form uses your existing design system (Once UI). To customize colors or styling:

1. **Colors**: Update CSS variables in your theme
2. **Layout**: Modify the `ContactPanel.tsx` component
3. **Form fields**: Update the `ContactForm.tsx` component

### Adding New Fields

To add new form fields:

1. Update the `formData` state in `ContactForm.tsx`
2. Add the new field to the form JSX
3. Update validation logic
4. Update the form submission data

## Usage

The contact form is now available throughout your app via the `useContact` hook:

```tsx
import { useContact } from '@/components';

export default function MyPage() {
  const { openContact } = useContact();
  
  return (
    <Button onClick={() => openContact('service-name')}>
      Contact Us
    </Button>
  );
}
```

## Service Mapping

The form automatically pre-selects services based on the page:

- `salud-prevencion` → "Salud, Prevención y Control de Peso"
- `nutricion-deporte` → "Nutrición Deportiva Online"
- `coaching-personalizado` → "Coaching Nutricional Personalizado"
- `talleres-grupales` → "Talleres Grupales de Nutrición"
- `consulta-general` → "Consulta General"

## Testing

1. Start your development server: `npm run dev`
2. Navigate to any service page
3. Click the contact button
4. Fill out the form and submit
5. Check your email (if using Formspree) or dashboard for the submission

## Accessibility Features

- **Keyboard navigation**: Tab through all form fields
- **Escape key**: Closes the panel
- **Screen reader support**: Proper ARIA labels and roles
- **Focus management**: Automatically focuses the first field when opened
- **Error announcements**: Screen readers announce validation errors

## Troubleshooting

### Form not submitting
- Check your form submission URL
- Verify your Formspree form ID
- Check browser console for errors

### Styling issues
- Ensure Once UI CSS is properly loaded
- Check CSS variable definitions
- Verify responsive breakpoints

### Accessibility issues
- Test with keyboard navigation
- Verify screen reader compatibility
- Check ARIA attributes

## Next Steps

1. Set up your preferred form submission service
2. Test the form on different devices
3. Customize the styling if needed
4. Add any additional fields required
5. Set up email notifications

The contact form is now fully integrated and ready to use! 🎉 