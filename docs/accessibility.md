# Accessibility [WIP]

The design system is built with web standards as a priority. Care must be taken to make sure each component is compliant, keyboard navigable and properly interpreted by assistive technologies.

- Provide help in context
- Proactively prevent errors where possible
- Highlight error conditions when they exist
- Provide additional help when errors occur

- Provide click/touch zones large enough to see and interact with
- Label and describe objects
- Enable interaction by mouse, keyboard, pen, fingertips, voice, pointers
- Use focus states to indicate user focus
- Accommodate web pages down to 320px

- Allow users to customise their experience
- Use em units so text can be resized by the user
- Respond to user preferences
- Ensure every task can be completed using just a keyboard

- Reuse components instead of creating new ones
- Provide keyboard shortcuts for common tasks
- Document all accessibility-specific features and workflows
- Include people with diverse ranges of ability in user testing

- Ensure that complex components have a logical reading order
- Set a tab order so that users can navigate content using the Tab key

- Test your interface for colorblindness (Protanopia/Deuteranopia,Tritanopia)
- Try not to indicate actions using colour alone

- Avoid flashing to help prevent photo-epileptic seizures.
- Avoid blinking or moving content that can distract users.

- Include textual content for all elements except in rare exceptions
- Include aria-label roles in HTML
- Make sure labels are concise and clearly relate to page content
- Label all images when possible and provide a short, meaningful text alternative
- Images or icons accompanied by a link with link text do not need alt text
- Provide descriptions of interactive elements for users of assistive technology

- Use design tokens to ensure proper type scale and contrast for blocks of text
- Don't fully justify text. It leads to irregular spacing, bad for dyslexia.
- Ensure column widths are no longer than 80 characters wide


## Further Reading

[The Ally Project](https://a11yproject.com/)
[A11y Matters](https://www.a11ymatters.com)
[Alt-texts: The Ultimate Guide by Daniel Göransson](https://axesslab.com/alt-texts/)
[Inclusive Components by Heydon Pickering](http://book.inclusive-components.design/)
[Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG20/)
