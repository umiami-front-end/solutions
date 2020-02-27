# Read Me

## CSS Selectors

### Objectives

- Reinforce experience of type, id, class, descendent and combined selectors
- Develop familiarity with universal, child, sibling, attribute selectors
- Practice using pseudo-classes and pseudo-elements

### Instructions

Included in this repository are the following files.

- README.md
- css
  - style.css
- zen-garden.html


1. Use a *type* selector to style all text content on the page. Set the font-family to be `sans-serif`, the font size to 14 pixels and the line-height to 1.5.

2. Use an *id* selector to style the `zen-intro` section to have a background color of `#eee`.

3. Use a *class* selector to set all `designer-name` classes to have font style of italic.

4. Use a *descendant* selector to style all list items inside a `nav` to have a list style type of `square`.

5. Style all headings (`h1` - `h6`) on the page to have a font color of `rgb(70,20,125)`. Use a *combined* selector to accomplish this.

6. Use a *universal* selector to change the font color to `#222` and the font size to 16 pixels. Place this rule at the very top of `style.css`. How does this impact all other rules you have written to this point? When you identify what the universal selector has done, comment it out so it does not interfere with past and future rules.

7. Use an *attribute* selector to style only the `abbr` tag with a `title` attribute to have a background of `rgba(235,161,83,0.3)`.

8. Use a *child* selector to style any link within a list item to have a font color of `rgb(70,20,125)`.

9. Use a *pseudo-class* to set a hover state on each link. The background color should become `rgba(70,20,125,0.5)` on hover.

10. Use the proper *sibling* selectors to do the following:  Set all paragraphs after the first to have a font color of `#999`. Set the first paragraph of every article to have a font color of `#222`.

**Now for some challenges!**

11. Eliminate any styling on `abbr` tags nested inside the `aside`. (Set the background color to `#fff` and remove the text decoration.)

12. Style the first line of every first paragraph of an article to be bold. (There are *two!* ways to do this!)

13. Include `link.svg` using the `content` property in the area after each external link. (If you're picky about it's alignment, set this selector to include the following properties: `position: relative;` and `top: 8px;`.) Not sure about including images in CSS? Look at how the `background-image` property works.

**Good Luck!**
