/*BOOTSTRAP GRID----------------------------------

*viewport* AKA screen

Bootstrap is a mobile first design meaning we can easily
 make mobile-friendly pages that look great and are
  responsive on smaller devices. Responsive means that
  the page changes the way it looks and how it displays/orders
 content based on the size of the device viewing the pg.
 (mobile version vs full version)

One of the tools that helps with this mobile responsiveness
 is bootstrap's grid system using rows/columns to lay out
  and align content which is difficult to do with CSS.

container class content is centered and horizontally
 padded when applied to HTML elements (it doesn't take
 up entire width of screen). Using the container fluid
  class takes up 100% width on all screen sizes

-We can add as many rows as we want in our containers 
and the column sizes in each row can differ from other
rows.

-We can nest rows inside of columns:

    <div class="col-sm">
        <div class="row">
            <div class="col-md-8">
                Here's my 8
            </div>
            <div class="col-md-4">
                Here's my 4
            </div>
        </div>
    </div>

-columns can be different sizes (auto, sm, med,lg, & xL)

The sizes don't directly relate to the width of the
 columns but instead refer to the size of the screen
  displaying them.

-3 xl columns will remain side by side as long as the
 viewport is 1140 pixels or larger(once its smaller,
    the columns will stack on top of each other).

-3 sm columns will remain side by side as long as they
 are greater than of equal to a width of 576 pixels.

12 = 100% of screen
(we can divide it up however we want among our rows)

if we had 3 rows and wanted them split 50/25/25, we'd
 use: 6 3 3 

NAVBAR--------------------------------------------------




*/