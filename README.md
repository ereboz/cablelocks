# cablelocks


# Paths to change Dev > Prod

## index.html & Views/Shared/_Layout.cshtml

dist/images/
/skins/skin_22_cablelocks/dist/images

## less/style.less
## .carousel

background-image: url("http://localhost:63342/cablelocks/dist/images/carousel-main-background-3.jpg");
background-image: url("/skins/skin_22_cablelocks/dist/images/carousel-main-background-3.jpg");

# dist/js/page.js
## Swap local and prod as needed for testing

if (locPath != "/") {              // local (there is something in the path. toggle to show effects)
if (locPath === "/") {              // server (nothing in the path)


