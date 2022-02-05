DevGulp Project
============================================================================

###### created by @Lordpluha:wink:

### Main targets of a project
> Realization gulp-building and processing based on new modern tendation of front-end and back-end dev.

Using
--------------------------------------------------

Main target of gulpfile is using automatisation functions for web-dev, written on node.js.

> You might have to installed **Node.js** and **git** *in you terminal* !!!

1.  Open your terminal **in directory which** you want and then copy next *
2. ```git clone https://github.com/Lordpluha/DevGulp.git```
3. *Rename your project* in **package.json**
4. ```npm i``` to install all project depencies
5. ```npm start``` / ```gulp```

**Have a fun)**



Structure
--------------------------------------------------
<details><summary>Show structure</summary>
<!-- tree /A /F  (без node_modules)-->
 \_\_\_\_\_\_\_\_\_
|         |
| DevGulp |
|_________|
   |   .gitattributes
   |   .gitignore
   |   .htaccess
   |   .stylelintrc.json
   |   Apache_2.4-PHP_8.0+Nginx_1.21_vhosta.conf
   |   gmail_ico.png
   |   inst_ico.png
   |   LICENSE
   |   localhost-rootCA.crt
   |   localhost-rootCA.key
   |   localhost-server.crt
   |   localhost-server.key
   |   package-lock.json
   |   package.json
   |   postcss.config.js
   |   README.md
   |   rootCA.crt
   |   rootCA.key
   |   SECURITY.md
   |   server.crt
   |   server.key
   |   tree.txt
   |   
   +---dist
   |   \---main
   |       |   index.min.html
   |       |   styles.min.css
   |       |   
   |       \---scripts
   |               scripts.min.js
   |               
   +---gulpfile.js
   |   |   file_for_uploading_fonts_to_scss.py
   |   |   index.js
   |   |   
   |   +---configs
   |   \---tasks
   |       |   build.js
   |       |   clean.js
   |       |   FileWatcher.js
   |       |   github.js
   |       |   images.js
   |       |   index.js
   |       |   lighthouse.js
   |       |   scripts.js
   |       |   serve.js
   |       |   styles.js
   |       |   
   |       +---configs
   |       |   +---index.js
   |       |   |       gulp-htmlhint.config.js
   |       |   |       gulp-htmlmin.config.js
   |       |   |       
   |       |   \---styles.js
   |       |           autoprefixer.config.js
   |       |           cssnano.config.js
   |       |           doiuse.config.js
   |       |           gulp-clean-css.config.js
   |       |           postcss-browser-reporter.config.js
   |       |           postcss-sorting.config.js
   |       |           stylelint.config.js
   |       |           
   |       \---vars
   |               styles.vars.js
   |               
   \---src
       \---main
           +---html
           |   |   index.html
           |   |   index.min.html
           |   |   index.src.html
           |   |   
           |   \---blocks
           |           article.html
           |           aside.html
           |           footer.html
           |           header.html
           |           nav.html
           |           
           +---img
           |   +---article
           |   +---aside
           |   +---footer
           |   +---header
           |   \---nav
           +---js
           |   +---plugins
           |   |   \---HTML5Shiv
           |   |           html5shiv-master.zip
           |   |           html5shiv-printshiv.min.js
           |   |           html5shiv.min.js
           |   |           
           |   \---scripts
           |           scripts.js
           |           scripts.min.js
           |           
           +---php
           \---styles
               +---css.dist
               |       styles.css
               |       styles.css.map
               |       styles.min.css
               |       
               +---css.src
               |       styles.scss
               |       _article.scss
               |       _aside.scss
               |       _fonts.scss
               |       _footer.scss
               |       _header.scss
               |       _media.scss
               |       _mixins.scss
               |       _nav.scss
               |       _preloader.scss
               |       _zer0.scss
               |       
               \---fonts
                   |   Roboto.zip
                   |   
                   \---Roboto
                           LICENSE.txt
                           Roboto-Black.ttf
                           Roboto-BlackItalic.ttf
                           Roboto-Bold.ttf
                           Roboto-BoldItalic.ttf
                           Roboto-Italic.ttf
                           Roboto-Light.ttf
                           Roboto-LightItalic.ttf
                           Roboto-Medium.ttf
                           Roboto-MediumItalic.ttf
                           Roboto-Regular.ttf
                           Roboto-Thin.ttf
                           Roboto-ThinItalic.ttf
                        
</details>

Functions
--------------------------------------------------

|    Function name     |               Description                 |   File    |
|        :---:         | :---                                      |   :---:   |
| `gulp browser`       | **local server** and inject "on the fly". | serve.js  |
| `gulp browserReload` | reload page                               | serve.js  |
| `gulp index`         | processing html calling reload.           | index.js  |
| `gulp php`           | processing php, calling reload.           | index.js  |
| `gulp styles`        | processing and modificating scss -> css   | styles.js |
| `gulp fonts`         | upload fonts to _fonts.css by using file_for_uploading_fonts_to_css.py| styles.js |
|                      |                                           |           |
|                      |                                           |           |
|                      |                                           |           |
|                      |                                           |           |
|                      |                                           |           |
|                      |                                           |           |
|                      |                                           |           |


- ### Fonts

> This function responsible for uploading fonts to _fonts.css by using file_for_uploading_fonts_to_css.py.



- ### Scripts

> This function responsible for processing js files and perfectioning them.



- ### Img

> This function responsible for processing images.



- ### FileWatcher

> This function responsible for watching files (html, php, js, json, css )



- ### Build

> This function must build project from src dir to dist dir.



- ### GitHub

> ...



Tasks
--------------------------------------------------

### default
> ...

### build
> Copy .min files in different directory



Plugins
--------------------------------------------------

### Styles processing
- [`gulp-sass`]
- [`gulp-postcss`]
- [`postcss-scss`]

<!-- #### Solve Global CSS Problem
* [`postcss-use`] allows you to explicitly set PostCSS plugins within CSS and execute them only for the current file.
* [`postcss-modules`] and [`react-css-modules`] automatically isolate selectors within components.
* [`postcss-autoreset`] is an alternative to using a global reset that is better for isolatable components.
* [`postcss-initial`] adds `all: initial` support, which resets all inherited styles.
* [`cq-prolyfill`] adds container query support, allowing styles that respond to the width of the parent. -->


#### Use Future CSS, Today
- [`autoprefixer`] adds vendor prefixes, using data from Can I Use.
<!-- * [`postcss-preset-env`] allows you to use future CSS features today. -->


#### Better CSS Readability
<!-- * [`postcss-nested`] unwraps nested rules the way Sass does. -->
- [`postcss-sorting`] sorts the content of rules and at-rules.
<!-- * [`postcss-utilities`] includes the most commonly used shortcuts and helpers.
* [`short`] adds and extends numerous shorthand properties. -->


#### Images and Fonts
<!-- * [`postcss-assets`] inserts image dimensions and inlines files.
* [`postcss-sprites`] generates image sprites.
* [`font-magician`] generates all the `@font-face` rules needed in CSS.
* [`postcss-inline-svg`] allows you to inline SVG and customize its styles.
* [`postcss-write-svg`] allows you to write simple SVG directly in your CSS. -->
- [`webp-in-css`] to use WebP image format in CSS background.
<!-- * [`avif-in-css`] to use AVIF image format in CSS background. -->


#### Linters
- [`stylelint`] is a modular stylesheet linter.
<!-- * [`stylefmt`] is a tool that automatically formats CSS
  according `stylelint` rules. -->
- [`doiuse`] lints CSS for browser support, using data from Can I Use.
<!-- * [`colorguard`] helps you maintain a consistent color palette. -->


#### Other
<!-- * [`postcss-rtl`] combines both-directional (left-to-right and right-to-left) styles in one CSS file. -->
- [`cssnano`] is a modular CSS minifier.
<!-- * [`lost`] is a feature-rich `calc()` grid system.
* [`rtlcss`] mirrors styles for right-to-left locales.
 -->
- [`gulp-sourcemaps`] serves for more easier see into css dev



[`gulp-sass`]:                  https://www.npmjs.com/package/gulp-sass
[`gulp-postcss`]:               https://www.npmjs.com/package/gulp-postcss
[`postcss-scss`]:               https://github.com/postcss/postcss-scss

[`postcss-inline-svg`]:         https://github.com/TrySound/postcss-inline-svg
[`postcss-preset-env`]:         https://github.com/jonathantneal/postcss-preset-env
[`react-css-modules`]:          https://github.com/gajus/react-css-modules
[`postcss-autoreset`]:          https://github.com/maximkoretskiy/postcss-autoreset
[`postcss-write-svg`]:          https://github.com/jonathantneal/postcss-write-svg
[`postcss-utilities`]:          https://github.com/ismamz/postcss-utilities
[`postcss-initial`]:            https://github.com/maximkoretskiy/postcss-initial
[`postcss-sprites`]:            https://github.com/2createStudio/postcss-sprites
[`postcss-modules`]:            https://github.com/outpunk/postcss-modules
[`postcss-sorting`]:            https://github.com/hudochenkov/postcss-sorting
[`postcss-assets`]:             https://github.com/assetsjs/postcss-assets
[`font-magician`]:              https://github.com/jonathantneal/postcss-font-magician
[`autoprefixer`]:               https://github.com/postcss/autoprefixer
[`cq-prolyfill`]:               https://github.com/ausi/cq-prolyfill
[`postcss-rtl`]:                https://github.com/vkalinichev/postcss-rtl
[`postcss-use`]:                https://github.com/postcss/postcss-use
[`css-modules`]:                https://github.com/css-modules/css-modules
[`webp-in-css`]:                https://github.com/ai/webp-in-css
[`avif-in-css`]:                https://github.com/nucliweb/avif-in-css
[`colorguard`]:                 https://github.com/SlexAxton/css-colorguard
[`stylelint`]:                  https://github.com/stylelint/stylelint
[`stylefmt`]:                   https://github.com/morishitter/stylefmt
[`cssnano`]:                    https://cssnano.co/
[`postcss-nested`]:             https://github.com/postcss/postcss-nested
[`doiuse`]:                     https://github.com/anandthakker/doiuse
[`rtlcss`]:                     https://github.com/MohammadYounes/rtlcss
[`short`]:                      https://github.com/jonathantneal/postcss-short
[`lost`]:                       https://github.com/peterramsing/lost

[`gulp-sourcemaps`]:            https://www.npmjs.com/package/gulp-sourcemaps

### Javascript

### HTML

### PHP

### Git

### Tools


Future opportunities
--------------------------------------------------

- Develope Build function
- [`gulp-changed`] и [`gulp-newer`] 
- [`tmi`]
- [`grunt-phantomas`]
- [`gulp-duration`]
- [`grunt-conventional-changelog`]
- [`grunt-usebanner`]
- [`husky`]
- [`Pug`]
- [`Bower`]
- [`psi`]
- [`ngrok`]
- [`gulp-plato`]



[`gulp-changed`]:                   https://github.com/Lordpluha/DevGulp
[`gulp-newer`]:                     https://github.com/Lordpluha/DevGulp
[`tmi`]:                            https://github.com/Lordpluha/DevGulp
[`grunt-phantomas`]:                https://github.com/Lordpluha/DevGulp
[`gulp-duration`]:                  https://github.com/Lordpluha/DevGulp
[`grunt-conventional-changelog`]:   https://github.com/Lordpluha/DevGulp
[`grunt-usebanner`]:                https://github.com/Lordpluha/DevGulp
[`husky`]:                          https://www.npmjs.com/package/husky



Contacts)
--------------------------------------------------

My email: [![Gmail][gmail_ico]][gmail_href]
My instagram: [![Instagram][instagram_ico]][inst_href]

[gmail_ico]: https://raw.githubusercontent.com/Lordpluha/DevGulp/main/gmail_ico.png  
[gmail_href]: mailto:Tesluakevlad@gmail.com?subject=DevGulp%20proj.

[instagram_ico]:    https://raw.githubusercontent.com/Lordpluha/DevGulp/main/inst_ico.png
[inst_href]:        https://www.instagram.com/def.__init__/