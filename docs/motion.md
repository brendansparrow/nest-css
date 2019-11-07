# Motion Guidelines [WIP]

Some simple motion guidelines for our design system.

## Principles

1. Informative - motion show what actions are available and indicates relationships between elements
2. Distraction-Free - motion lets the user focus on important features without adding distractions
3. Delightful - motion adds character to the interface and expresses the brands unique personality


### Informative animation

The rule of thumb is to communicate early and often, give the user visual feedback when they interact with the page and to indicate to the user that the system is busy. 

### Focus in motion

Users will feel in control if they can move at their own pace, so animations should be interruptible and respect user preferences for turning off animations.

### Expressiveness

Individual animations should fit with the overall tone of the site. Signature animations should be used to reward the user when important actions are completed.


## RAIL (respond, animate, idle, load)

UI animations in this system follow the RAIL model:

* Respond immediately to give instant feedback.
* Animate the response for a smoother experience.
* While the app is idle, provide distraction and ease tension.
* Load the page early while animations are happening.

## Common Animation techniques

### Transitions

Transitions allow for a property to change smoothly from one value to another. When you transition a property in CSS, the browser interpolates between two values. Transitions can have different speeds and timing functions to achieve different effects.

### Animations

The Web Animations API provides keyframing and timelines for more complex animations. standard CSS animations usee the @keyframe keyword and can produce percentage-based animations or stepped animations using the steps() function.

## Further Reading

[CSS Triggers](https://csstriggers.com/) - Learn which properties affect performance and trigger browser repaints
[Ceaser](https://matthewlein.com/tools/ceaser) - A simple tool for generating custom easing functions

