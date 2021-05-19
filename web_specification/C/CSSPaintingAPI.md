# CSS Painting API

The CSS Painting API - part of the CSS Houdini unbrella of APIs - allows developer tot write JavaScript functions that can draw drectly into an element's background, border, or content.

## Concepts and usage

Essentially, the CSS Painting API contains functionally allowing developers to create custom values for paint(). a CSS image function. YOu can the apply these values to properties like background-image to set complex custom background on an element.

```css
aside {
  background-image: paint(myPaintedImage);
} 
```
The APi defines PaintWorklet, a worklet that can be used to programmatically generate an image that responds to computed style changes. To find out more about how this is used, consult Using the CSS Painting API.

## Interfaces

- PaintWorlet

## 参考

1. [CSS_Painting_API MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API)
