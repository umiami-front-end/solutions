# Read Me

## Print & Responsive Design

### Objectives

- Critical thinking involving adjustments for different media
- Modifying a web design for print media
- Creating a responsive design for mobile devices, tablets


### Instructions

Included in this repository are the following files.

- README.md
- assets
  - print-example.pdf
- css
  - style.css
- img
  - cat-lg.jpg
  - cat-md.jpg
  - cat-sm.jpg
- original
  - charlie-deets-unsplash.jpg
  - eric-han-unsplash.jpg
  - jae-park-unsplash.jpg
- index.html

#### Print Design

1. Add a print style sheet to the page.

2. Adjust the design to account for print media. At a minimum, your page should:

  - Be designed for an 8" x 11" sheet of paper
  - Account for page margins
  - Use only black and white for colors
  - Use absolute (print) units
  - Adjust font sizes for print
  - Remove navigation
  - Lay out all content in one column (one sheet of paper)
  - Print URLs for external links
  - Remove URLs for internal links (i.e. `about.html`)


An example of these changes can be seen in the `print-example.pdf` provided in the `assets` directory.

Feel free to be creative with the design to make it presentable.

3. When finished, test your design by printing it out. Rather than *actually* print it out, save it as a pdf. In Firefox's print screen, in the bottom right corner, select the "PDF" menu and select "Open in Preview".


#### Responsive Design

This exercise may have variations in font sizes, navigation, column sizes, margins, etc. Feel free to be creative with the design to make it presentable beyond what is provided.

1. Add a style sheet which contains only CSS for mobile and tablet rules.

2. Set the mobile breakpoint at 400px (25em / 25rem). Set the table breakpoint at 768px (48em / 48rem). You do not need to set the orientation property in the breakpoints.

3. Adjust the design so it is acceptable for viewing on a mobile device or tablet. Consider:

  - font sizes
  - navigation (is it easy to tap?)
  - layout (one column for mobile; two for tablet)
  - margins (mobile, tablets have less room to sacrifice)
  - remove unnecessary borders


4. Included in the `img` directory are three photos of cats. Using the `picture` element, add images for each breakpoint (`sm` for mobile, `md` for tablet, `lg` for laptop/desktop) below the `h2` in the first article ("I like fish..."). Be sure to make the image responsive in your default style sheet.

5. Using the built-in responsive design mode in Firefox, test your design against: iPhone 6/7/8, Galaxy S9/S9+, iPad, Nexus 10.

**Good Luck!**
