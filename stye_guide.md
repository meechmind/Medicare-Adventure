
# Maryland Medicare Adventure - Design System & Style Guide

## 1. Color Palette

### Primary Brand Colors
*   **Chesapeake Blue:** `#273469` (Tailwind arbitrary value)
    *   *Usage:* Headers, Primary Buttons, Section Headings, Text emphasis.
    *   *Hover State:* `#1a2347` (Darker variant for interactions).
*   **Maryland Gold:** `#FFC425` (Tailwind arbitrary value)
    *   *Usage:* Accent borders, Focus rings, Highlighted text, Branding accents.

### Neutral Tones
*   **Background (Body):** `bg-slate-100` (#f1f5f9)
*   **Background (Cards):** `bg-white` (#ffffff)
*   **Background (Secondary/Inset):** `bg-slate-50` (#f8fafc)
*   **Text (Body):** `text-gray-900` or `text-gray-700`
*   **Text (Subtitles/Footer):** `text-gray-600` or `text-gray-300` (on dark backgrounds)
*   **Borders/Dividers:** `border-slate-100` or `border-slate-200`

### Semantic/Status Colors
*   **Success (Jackpot/Good Choice):** `text-green-600`
*   **Warning (Gap/Caution):** `text-amber-600`
*   **Error (Loss/Risk):** `text-red-600`
*   **Neutral Info:** `text-blue-800`

---

## 2. Typography

*   **Font Family:** Default Sans-serif (Tailwind default: Inter/system-ui).
*   **Headings:**
    *   *H1 (Main Title):* `text-3xl md:text-4xl font-bold`
    *   *H2 (Scenario Title):* `text-2xl md:text-3xl font-extrabold`
    *   *H3 (Outcome Title):* `text-3xl md:text-4xl font-extrabold`
    *   *H4 (Section Headers):* `text-xl font-bold`
*   **Body Text:**
    *   *Scenario Intro:* `text-lg text-gray-900 leading-relaxed`
    *   *Standard Text:* `text-lg` or `text-base` for lists.
    *   *Subtitles:* `text-sm` or `text-md`.

---

## 3. UI Components

### Containers & Cards
*   **Main Container:** `max-w-4xl mx-auto p-4 md:p-8`.
*   **Content Card:**
    *   `bg-white rounded-xl shadow-lg`
    *   *Signature Style:* `border-l-8 border-[#FFC425]` (Left thick gold border).
    *   Padding: `p-6 md:p-8`.

### Buttons (Choices)
*   **Style:** Block-level cards acting as buttons.
*   **Base:** `bg-[#273469] text-white rounded-lg shadow-md`.
*   **Spacing:** `p-6`.
*   **Layout:** Flex column (`flex flex-col justify-between`).
*   **Interaction:**
    *   Hover: `hover:bg-[#1a2347]`
    *   Focus: `focus:ring-4 focus:ring-[#FFC425] focus:ring-opacity-50`
    *   Transition: `transition-all duration-300`.

### Buttons (Navigation/Actions)
*   **Base:** `bg-gray-700 text-white font-bold rounded-lg shadow-md`.
*   **Size:** `py-3 px-8` or `px-10`.
*   **Interaction:** `hover:bg-gray-600` + standard focus ring.

### Accordion / Reveal Card
*   **Container:** `bg-white border-2 border-slate-100 rounded-xl overflow-hidden shadow-sm`.
*   **Toggle Header:** `w-full flex justify-between p-6 bg-slate-50 hover:bg-slate-100`.
*   **Icon:** Chevron SVG that rotates 180 degrees on toggle (`transition-transform duration-300`).
*   **Content Area:** Uses max-height transition (`transition-all duration-500 ease-in-out`).

### Icons
*   **Check Icon:** Simple SVG outline, `text-green-500`, used in lists.

---

## 4. Layout Patterns

*   **Header:** Full width, dark background (`bg-[#273469]`), centered text, shadow (`shadow-2xl`).
*   **Grid System:** Used for choices.
    *   `grid grid-cols-1 md:grid-cols-3 gap-4`.
    *   Responsive design: Stacks on mobile, 3 columns on tablet/desktop.

---

## 5. Motion & Animation

### View Transitions
*   **Concept:** Fade In / Fade Out when switching between Scenarios and Outcomes.
*   **Duration:** ~300-400ms.
*   **CSS Keyframes:**
    *   `fadeIn`: Opacity 0->1, TranslateY 10px->0.
    *   `fadeOut`: Opacity 1->0, TranslateY 0->-10px.

### Micro-interactions
*   **Hover:** Buttons darken slightly, List items get `bg-slate-50/50`.
*   **Focus:** Distinctive Gold (`#FFC425`) ring for accessibility.
*   **Expand/Collapse:** Smooth height and opacity transition for the "Key Takeaways" section.
