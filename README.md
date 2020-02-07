# IPS Gallery Enhancements

This plugin contains various tweaks and adjustments I have made to the IP.Gallery application to make it more suitable for my own personal use.

After losing the original code for this plugin and having to reverse engineer the last build I made of it in order to apply a minor bugfix with the latest IPS release, I have decided to go ahead and open source my modifications here to submit as a general suggestion to IPS in regards to changes I'd like to see to the IP.Gallery platform.

## What this plugin does
#### 1. Changes the scaling of images in the gallery. I find the default gallery window _way_ too small for most use. This plugin, by default, modifies the gallery window to utilize up to 65% of the browser window.

Here is a before and after demonstrating this:

**Before**
![Before](https://i.imgur.com/GaEJRgm.png)

**After**
![After](https://i.imgur.com/rJ4C2gc.png)

16x9 aspect ratios can cleanly fill the entire box with this setup, while other images still are able to be viewed at much more reasonable resolutions.

#### 2. Allows you to disable the gallery lightbox.
The gallery lightbox is neat. It's nice to have in certain areas of the site, like when clicking on a gallery image linked in a forum post.

It is not, however, nice to have literally everywhere you go in the gallery. It does not replace traditional gallery navigation for me, and based on the vast amount of user feedback I've seen, most members I've ineteracted with do not like this system either.

This is ancedotal, but shares my personal experience.

This plugin will let you disable having the lighbox open when you click on images in category and album overview pages. You will instead be directed to the normal image overview page.

#### 3. (Or more 2.1), disables the gallery lightbox when loading an image link directly. 

Why is the lightbox being forced here? It's redundant and not any more user friendly than just looking at the page that's already been loaded. It's just an annoyance. So I've disabled it.

#### 4. View full image **_actually_** opens the full image.

This I consider more of a bug. The "view full image" link does not, as its name implies, open the full image. It opens the large, scaled down image in a new tab instead.

This plugin fixes it so that it links to the original image instead.
