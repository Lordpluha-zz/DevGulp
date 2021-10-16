DevGulp Project
============================================================================
## Main targets of a project
 Creating of new gulpfile based on new modern tendation of front-end dev([`gulp-postcss`] ...) in futures maybe i will concatenate with back-end gulp-file for more effectiveness.


Plugins
--------------------------------------------------

### CSS

* [`gulp-sass`]
* [`gulp-postcss`]
    ### Postcss plugins
    * [``] -
    * [``] -
    * [``] -
    * [``] -
    * [``] -
    * ...

    [``]:
    [``]:
    [``]:
    [``]:
    [``]:


* [`gulp-sourcemaps`]
* ...








[`gulp-sass`]:       https://www.npmjs.com/package/gulp-sass
[`gulp-postcss`]:    https://www.npmjs.com/package/gulp-postcss


[`gulp-sourcemaps`]: https://www.npmjs.com/package/gulp-sourcemaps

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

**Have a good work)**

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
                       │               ├─►Scss──┐►styles.scss
                       │               │        │
                       │               │        │►_header.scss
                       │               │        │
                       │               │        │►_article.scss
                       │               │        │
                       │               │        │►_aside.scss
                       │               │        │
                       │               │        │►_nav.scss
                       │               │        │
                       │               │        │►_footer.scss
                       │               │        │
                       │               │        │►_fonts.scss
                       │               │        │
                       │               │        │►_fonts.scss.py
                       │               │        │
                       │               │        │►_mixins.scss
                       │               │        │
                       │               │        │►_zer0.scss
                       │               │        │
                       │               │        │►_media.scss
                       │               │        │
                       │               │        └►_preloader.scss
                       │               │
                       │               └─►Css─┐►styles.css
                       │                      │
                       │                      │►styles.min.css
                       │                      │
                       │                      └►styles.css.map
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

* ### CPF (CreateProjectFiles)

> This function must goin throught all folder-base and callback all element with fucntion, which creating selected folder in selected depth of architecture



* ### AddPage

> This function can add page with useless name which you can set in console with current fucntion



* ### Browser

> This function must be responsible for **local server** of a page and injection file in project *on the fly*.



* ### Index

> This function responsible for processing html ([``], [``], [``]) and php ([``], [``], [``]) files and calling reload of a page when they are changed.



* ### Styles

> This fucntion responsible for processing scss files 



* ### Scripts

> ...



* ### Img

> ...



* ### FileWatcher

> ...



* ### Build

> ...



* ### ResizeImg

> ...



* ### Fonts

> ...



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



[`gulp-changed`]:                   https://github.com/Lordpluha/DevGulp
[`gulp-newer`] :                    https://github.com/Lordpluha/DevGulp
[`tmi`]:                            https://github.com/Lordpluha/DevGulp
[`grunt-phantomas`]:                https://github.com/Lordpluha/DevGulp
[`grunt-gitbook`]:                  https://github.com/Lordpluha/DevGulp
[`gulp-duration`]:                  https://github.com/Lordpluha/DevGulp
[`grunt-conventional-changelog`]:   https://github.com/Lordpluha/DevGulp
[`grunt-usebanner`]:                https://github.com/Lordpluha/DevGulp



Contact with me)
--------------------------------------------------

[![Gmail][gmail_ico]][gmail_href] \
[![Phone][phone_ico]][phone] \
[![Instagram][instagram_ico]][inst_href] \





[gmail_ico]: https://raw.githubusercontent.com/Lordpluha/DevGulp/main/gmail_ico.png  
[gmail_href]: Tesluakevlad@gmail.com

[phone_ico]: https://raw.githubusercontent.com/Lordpluha/DevGulp/main/phone_ico.png
[phone]: +380689448449


[instagram_ico]:    https://raw.githubusercontent.com/Lordpluha/DevGulp/main/inst_ico.png
[inst_href]:        https://www.instagram.com/def.__init__/