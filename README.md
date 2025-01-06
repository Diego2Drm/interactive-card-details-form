# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./src/assets/screenshot.jpeg)

### Links

- Solution URL: [github](https://github.com/Diego2Drm/interactive-card-details-form)
- Live Site URL: [interactive-card-details-form](https://diego2drm.github.io/interactive-card-details-form/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- TypeScript
- Tailwind Css
- Tailwind custom properties

### What I learned

I learned how to use React js + TypeScript

```tsx
interface CardsProps {
  formData: CardFormData | null;
  showData: boolean;
}

const Cards: React.FC<CardsProps> = ({ formData, showData }) => {

  return (
  );
};
```

### Continued development

-  React js + TypeScript

## Author

- Frontend Mentor - [@Diego2Drm](https://www.frontendmentor.io/profile/Diego2Drm)
- Gmail - [diego.ramirez2d03@gmail.com]
