# DevGulp
 Creating of new gulpfile based on new modern tendation of front-end dev(postcss ...)

## Plugins

### CSS

- gulp-scss\
- gulp-postcss\
- gulp-sourcemaps\ 
...

### Javascript

### HTML

### PHP

### Git

### Tools

## Using

Main target of gulpfile is using automatisation functions, writen on node.js.

> You might have to installed *Node.js* and *git in you terminal*

*Open your terminal in directory which you want and then copy next  

1. npm init
    *Set needed options*
2. git clone https://github.com/Lordpluha/DevGulp.git
3. cd DevGulp
4. npm i
5. gulp CPF

*Have a good work)*

## Структура
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
## Functions

### CPF (CreateProjectFiles):
This function must goin throught all folder-base and callback all element with fucntion, which creating selected folder in selected depth of architecture



## Проблемы
    Develope Build function