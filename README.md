DevGulp Project
============================================================================
## Main targets of a project
 Creating of new gulpfile based on new modern tendation of front-end dev([`gulp-postcss`] ...) in futures maybe i will concatenate with back-end gulp-file for more effectiveness.


Plugins
--------------------------------------------------

### CSS

* [`gulp-sass`]
* [`gulp-postcss`]

#### Solve Global CSS Problem
* [`postcss-use`] allows you to explicitly set PostCSS plugins within CSS and execute them only for the current file.
* [`postcss-modules`] and [`react-css-modules`] automatically isolate selectors within components.
* [`postcss-autoreset`] is an alternative to using a global reset that is better for isolatable components.
* [`postcss-initial`] adds `all: initial` support, which resets all inherited styles.
* [`cq-prolyfill`] adds container query support, allowing styles that respond to the width of the parent.


#### Use Future CSS, Today
* [`autoprefixer`] adds vendor prefixes, using data from Can I Use.
* [`postcss-preset-env`] allows you to use future CSS features today.


#### Better CSS Readability
* [`postcss-nested`] unwraps nested rules the way Sass does.
* [`postcss-sorting`] sorts the content of rules and at-rules.
* [`postcss-utilities`] includes the most commonly used shortcuts and helpers.
* [`short`] adds and extends numerous shorthand properties.


#### Images and Fonts
* [`postcss-assets`] inserts image dimensions and inlines files.
* [`postcss-sprites`] generates image sprites.
* [`font-magician`] generates all the `@font-face` rules needed in CSS.
* [`postcss-inline-svg`] allows you to inline SVG and customize its styles.
* [`postcss-write-svg`] allows you to write simple SVG directly in your CSS.
* [`webp-in-css`] to use WebP image format in CSS background.
* [`avif-in-css`] to use AVIF image format in CSS background.


#### Linters
* [`stylelint`] is a modular stylesheet linter.
* [`stylefmt`] is a tool that automatically formats CSS
  according `stylelint` rules.
* [`doiuse`] lints CSS for browser support, using data from Can I Use.
* [`colorguard`] helps you maintain a consistent color palette.


#### Other
* [`postcss-rtl`] combines both-directional (left-to-right and right-to-left) styles in one CSS file.
* [`cssnano`] is a modular CSS minifier.
* [`lost`] is a feature-rich `calc()` grid system.
* [`rtlcss`] mirrors styles for right-to-left locales.

* [`gulp-sourcemaps`]
* ...



[`gulp-sass`]:       https://www.npmjs.com/package/gulp-sass
[`gulp-postcss`]:    https://www.npmjs.com/package/gulp-postcss

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

Using
--------------------------------------------------

Main target of gulpfile is using automatisation functions, writen on node.js.

> You might have to installed *Node.js* and *git in you terminal* **!!!**

1. ***Open your terminal in directory which you want and then copy next***
2. ```npm init```
3. ***Set needed options***
4. ```git clone https://github.com/Lordpluha/DevGulp.git```
5. ```cd DevGulp```
6. ```npm i```
7. ```gulp CPF```
8. ```gulp```

**Have a fun)**

Structure
--------------------------------------------------

```
┌────────────────────┐
│DevGulp/Your_project├─┐
└────────────────────┘ │
                       ├─►src
                       │  │
                       │  └─►Current_page
                       │          │
                       │          ├─►Html
                       │          │  │
                       │          │  ├─►Blocks───────────┐►header.html
                       │          │  │                   │
                       │          │  │►index.html        │►nav.html
                       │          │  │                   │
                       │          │  │►index.src.html    │►aside.html
                       │          │  │                   │
                       │          │  └►index.min.html    │►article.html
                       │          │                      │
                       │          │                      └►footer.html
                       │          │
                       │          ├─►Js
                       │          │  │
                       │          │  ├─►scripts─┐►scripts.js
                       │          │  │          │
                       │          │  │          └►script.min.js
                       │          │  │
                       │          │  ├─►Ajax─┐►AjSx.js
                       │          │  │       │
                       │          │  │       └►Ajax.min.js
                       │          │  │
                       │          │  └─►Json─┐►data.json
                       │          │          │
                       │          │          └►data.min.json
                       │          │
                       │          └─►Styles
                       │               │
                       │               ├─►Fonts──►....
                       │               │
                       │               ├─►css.src──┐►styles.css
                       │               │           │
                       │               │           │►_header.css
                       │               │           │
                       │               │           │►_article.css
                       │               │           │
                       │               │           │►_aside.css
                       │               │           │
                       │               │           │►_nav.css
                       │               │           │
                       │               │           │►_footer.css
                       │               │           │
                       │               │           │►_fonts.css
                       │               │           │
                       │               │           │►_fonts.css.py
                       │               │           │
                       │               │           │►_mixins.css
                       │               │           │
                       │               │           │►_zer0.css
                       │               │           │
                       │               │           │►_media.css
                       │               │           │
                       │               │           └►_preloader.css
                       │               │
                       │               └─►css.dist─┐►styles.css
                       │                           │
                       │                           │►styles.min.css
                       │                           │
                       │                           └►styles.css.map
                       │
                       │
                       │
                       └───►dist
                            │
                            └─►Current_page
                                    │
                                    ├─►Html
                                    │  │
                                    │  │►index.html
                                    │  │
                                    │  │►index.src.html
                                    │  │
                                    │  └►index.min.html
                                    │
                                    ├─►Js
                                    │  │
                                    │  ├─►scripts─┐►scripts.js
                                    │  │          │
                                    │  │          └►script.min.js
                                    │  │
                                    │  ├─►Ajax─┐►AjSx.js
                                    │  │       │
                                    │  │       └►Ajax.min.js
                                    │  │
                                    │  └─►Json─┐►data.json
                                    │          │
                                    │          └►data.min.json
                                    │
                                    └─►Styles
                                         │
                                         ├─►Fonts──►....
                                         │
                                         └─►Css─┐►styles.css
                                                │
                                                └►styles.min.css

```

Functions
--------------------------------------------------

* ### Browser

> This function must be responsible for **local server** of a page and injection file in project *on the fly*.



* ### Index

> This function responsible for processing html ([``], [``], [``]) and php ([``], [``], [``]) files and calling reload of a page when they are changed.



* ### Styles

> This function responsible for processing css files and perfectioning them.



* ### Fonts

> This function responsible for uploading fonts to _fonts.css by using file_for_uploading_fonts_to_css.py.



* ### Scripts

> This function responsible for processing js files and perfectioning them.



* ### Img

> This function responsible for processing images.



* ### FileWatcher

> This function responsible for watching files (html, php, js, json, css )



* ### Build

> This function must build project from src dir to dist dir.



* ### GitHub

> ...



Tasks
--------------------------------------------------

### default
> ...

### build
> ...

Futures
--------------------------------------------------

* Develope Build function
* [`gulp-changed`] и [`gulp-newer`] 
* [`tmi`]
* [`grunt-phantomas`]
* [`grunt-gitbook`]
* [`gulp-duration`]
* [`grunt-conventional-changelog`]
* [`grunt-usebanner`]
* Html -> Pug



[`gulp-changed`]:                 https://github.com/Lordpluha/DevGulp
[`gulp-newer`]:                   https://github.com/Lordpluha/DevGulp
[`tmi`]:                          https://github.com/Lordpluha/DevGulp
[`grunt-phantomas`]:              https://github.com/Lordpluha/DevGulp
[`grunt-gitbook`]:                https://github.com/Lordpluha/DevGulp
[`gulp-duration`]:                https://github.com/Lordpluha/DevGulp
[`grunt-conventional-changelog`]: https://github.com/Lordpluha/DevGulp
[`grunt-usebanner`]:              https://github.com/Lordpluha/DevGulp



Contact with me)
--------------------------------------------------

[![Gmail][gmail_ico]][gmail_href] \
[![Phone][phone_ico]][phone] \
[![Instagram][instagram_ico]][inst_href]





[gmail_ico]: https://raw.githubusercontent.com/Lordpluha/DevGulp/main/gmail_ico.png  
[gmail_href]: Tesluakevlad@gmail.com

[phone_ico]: https://raw.githubusercontent.com/Lordpluha/DevGulp/main/phone_ico.png
[phone]: +380689448449


[instagram_ico]:    https://raw.githubusercontent.com/Lordpluha/DevGulp/main/inst_ico.png
[inst_href]:        https://www.instagram.com/def.__init__/