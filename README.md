# Bird of the Day

At home, we have one of those tear-off "bird a day" calendars. 

As a challenge, we like to try to identify the bird by slowly
revealing the photo from top to bottom until we've seen just enough of
the bird to identify it.

This client-side single-page app does the same thing.  It selects a
random species from the entire catalog of the 
[Cornell Lab of Ornithology](https://birds.cornell.edu) (over 16,000
at this point) and tries to find public photos of the bird on Flickr.
It provides a trivial UI that lets you "reveal" the photo a little at
a time and show the answer (common name + scientific name) to confirm
your guess.

The keel-billed toucan (Ramphastos sulfuratus) always comes up first
because that's the bird we used to have.

Thanks to Cornell Labs/eBird API and Flickr API for making this
possible, and for Netlify for hosting the app for free at
[birdoftheday.armandofox.com](http://birdoftheday.armandofox.com).

