# Image Implementation Plan

## Goal
Implement the user-approved image recommendations and the specific request for a full-screen image slider in the Hero section.

## Proposed Changes

### 1. Image Generation
Generate high-quality images for various sections of the website.
*   **Hero Section**: 3 images (Exterior, Interior, Community).
*   **Headers**: 3 images (About - Bible, News - Bulletin, Worship - Stained Glass).
*   **Content**: Vision (Community), Map (Illustration), Gallery (3 samples).

### 2. Component Updates

#### `components/Hero.tsx`
*   **[MODIFY]**: Convert to a client component using `useState` and `useEffect` for the slider.
*   **[NEW]**: Add logic to cycle through the 3 generated hero images.
*   **[NEW]**: Add navigation dots/arrows if needed (optional for full screen, but good for UX).

#### Page Updates (`app/**/*.tsx`)
*   **[MODIFY]** `app/about/page.tsx`: Update header background and Vision section image.
*   **[MODIFY]** `app/news/page.tsx`: Update header background and Gallery placeholder.
*   **[MODIFY]** `app/worship/page.tsx`: Update header background.
*   **[MODIFY]** `app/location/page.tsx`: Update Map placeholder image.

## Verification Plan
*   **Visual Check**: Verify all generated images look good and match the "Sacred Gold" theme.
*   **Functional Check**: Ensure the Hero slider works smoothly (transitions, auto-play).
*   **Responsiveness**: Check how images look on mobile vs desktop.
