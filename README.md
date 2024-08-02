
## Why Vite?

I chose Vite for this project, cuz it gives us super quick server start times, creates production builds that are optimized and efficient, keeping our final bundle size nice and small, also supports TypeScript right out of the box.

## Why Material UI?

I chose this framework cuz it comes with a set of pre-designed components, and the technical assignment included to create card components.

## Architecture

for my resusable components, I've created a component folder, from where these components could be exported, on different pages, and to fecth data I've created a servcie folder, and imported endpoints from a conts file in the data folder, this way if the projects extends we can create multiple services, to calculate the no.of day i had create a date util inside the util folder, which works as a shared directory for the whole project.