DevGulp Project
============================================================================
###### created by @Lordpluha:wink:

### Main targets of a project

> Realization gulp-building and processing based on new modern tendation of front-end and back-end dev.

Using
--------------------------------------------------
Main target of gulpfile is using automatisation functions for web-dev, written on node.js.

> You might have to installed **Node.js** and **git** *in you terminal* !!!

1. Open your terminal **in directory which** you want
2. Enter this line ```git clone https://github.com/Lordpluha/DevGulp.git```
3. *Rename your project* in **package.json**
4. ```npm i``` to install all project depencies
5. ```npm start``` / ```gulp```

**Have a good work)**

Structure
--------------------------------------------------
<details><summary>Show</summary>

     _________
    |         |
    | DevGulp |
    |_________|
        |
        |   .eslintrc
        |   .gitattributes
        |   .gitignore
        |   .htaccess
        |   .stylelintrc.json
        |   Apache_2.4-PHP_8.0+Nginx_1.21_vhosta.conf
        |   CONTRIBUTING.md
        |   gmail_ico.png
        |   inst_ico.png
        |   LICENSE
        |   package-lock.json
        |   package.json
        |   postcss.config.js
        |   README.md
        |   SECURITY.md
        |   structure.txt
        |
        +---.github
        |   \---workflows
        |           codeql-analysis.yml
        |
        +---certificates
        |       localhost-rootCA.crt
        |       localhost-rootCA.key
        |       localhost-server.crt
        |       localhost-server.key
        |       rootCA.crt
        |       rootCA.key
        |       server.crt
        |       server.key
        |
        +---gulpfile.js
        |   |   file_for_uploading_fonts_to_scss.py
        |   |   index.js
        |   |
        |   \---tasks
        |       |   build.js
        |       |   clean.js
        |       |   CreatePage.js
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
        |               pages_list.json
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
                |           MYbeauty_fx.js
                |           scripts.js
                |           scripts.js.min.map
                |           scripts.min.js
                |
                +---php
                |   |   index.min.php
                |   |   index.php
                |   |
                |   \---blocks
                |       |   article.php
                |       |   aside.php
                |       |   footer.php
                |       |   header.php
                |       |   nav.php
                |       |
                |       \---templates
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

Tasks
--------------------------------------------------

|  Function name  |               Description                 |   File     |
|      :---:      | :---                                      |   :---:    |
| `index`         | processing html calling reload.           | tasks/index.js   |
| `php`           | processing php, calling reload.           | tasks/index.js   |
| `styles`        | processing and modificating scss -> css   | tasks/styles.js  |
| `fonts`         | upload fonts to _fonts.css by using file_for_uploading_fonts_to_css.py                            | tasks/styles.js  | 
| `js`            | processing javascript, calling reload.    | tasks/scripts.js |
| `images`        | processing images, calling reload.        | tasks/images.js  |
| `NewPage`       | create new page 'main'                    | tasks/CreatePage.js |
| `build`         | build project from src/ to dist/ (copy .min)| tasks/build.js |
| `default`       | initializate standart processing and serving files on localhost                                                     | index.js   |
| `test`          | starting auditing of project              | index.js   |


Plugins
--------------------------------------------------

### Fundamental elements
- [`gulp`]@4.0.2
- [`gulp-cli`]@2.3.0
- [`npm`]@8.5.1

### Files system
- [`debug`]@4.3.3
- [`del`]@6.0.0
- [`fs`]@0.0.1-security
- [`gulp-rename`]@2.0.0

### HTML/PHP
- [`gulp-file-include`]@2.3.0
- [`gulp-html-bem-validator`]@1.0.5
- [`gulp-htmlhint`]@4.0.1
- [`gulp-htmlmin`]@5.0.1

### Styles proceeding
- [`autoprefixer`]@10.4.2
- [`cssnano`]@5.0.15
- [`cssnano-preset-advanced`]@5.1.10

- [`sass`]@1.49.8
- [`gulp-sass`]@5.1.0
- [`gulp-clean-css`]@4.3.0
- [`gulp-eslint`]@6.0.0
- [`gulp-postcss`]@9.0.1

- [`postcss`]@8.4.5
- [`postcss-browser-reporter`]@0.6.0
- [`postcss-cli`]@9.1.0
- [`postcss-combine-duplicated-selectors`]@10.0.3
- [`postcss-fixes`]@3.0.0
- [`postcss-pow`]@1.0.1
- [`postcss-pxtorem`]@6.0.0
- [`postcss-scss`]@4.0.3
- [`postcss-sorting`]@7.0.1
- [`postcss-sqrt`]@1.0.1
- [`postcss-unopacity`]@2.0.0
- [`postcss-vwh`]@1.0.0

- [`stylelint`]@14.5.1
- [`stylelint-config-standard`]@25.0.0
- [`stylelint-scss`]@4.1.0

- [`sugarss`]@4.0.1
- [`doiuse`]@4.4.1

- [`webp-in-css`]@0.7.0

### Images
- [`gulp-imagemin`]@7.1.0
- [`gulp-webp`]@4.0.1
- [`imagemin-pngquant`]@9.0.2

### Javascript
- [`gulp-jshint`]@2.1.0
- [`gulp-complexity`]@0.3.2
- [`gulp-uglify-es`]@3.0.0
- [`jshint`]@2.13.4
- [`jshint-stylish`]@2.2.1
- [`nanoid`]@3.3.1
- [`gulp-babel`]@8.0.0

### Serving
- [`browser-sync`]@2.27.5

### Tools
- [`gulp-plumber`]@1.2.1
- [`gulp-concat`]@2.6.1
- [`gulp-sourcemaps`]@3.0.0

[`autoprefixer`]:                           https://www.npmjs.com/package/autoprefixer
[`cssnano`]:                                https://www.npmjs.com/package/cssnano
[`cssnano-preset-advanced`]:                https://www.npmjs.com/package/cssnano-preset-advanced
[`sass`]:                                   https://www.npmjs.com/package/sass
[`gulp-sass`]:                              https://www.npmjs.com/package/gulp-sass
[`gulp-clean-css`]:                         https://www.npmjs.com/package/gulp-clean-css
[`gulp-eslint`]:                            https://www.npmjs.com/package/gulp-eslint
[`gulp-postcss`]:                           https://www.npmjs.com/package/gulp-postcss
[`postcss`]:                                https://www.npmjs.com/package/postcss
[`postcss-browser-reporter`]:               https://www.npmjs.com/package/postcss-browser-report
[`postcss-cli`]:                            https://www.npmjs.com/package/postcss-cli
[`postcss-combine-duplicated-selectors`]:   https://www.npmjs.com/package/postcss-combine-duplicated-selectors
[`postcss-fixes`]:                          https://www.npmjs.com/package/postcss-fixes
[`postcss-pow`]:                            https://www.npmjs.com/package/postcss-pow
[`postcss-pxtorem`]:                        https://www.npmjs.com/package/postcss-pxtorem
[`postcss-scss`]:                           https://www.npmjs.com/package/postcss-scss
[`postcss-sorting`]:                        https://www.npmjs.com/package/postcss-sorting
[`postcss-sqrt`]:                           https://www.npmjs.com/package/postcss-sqrt
[`postcss-unopacity`]:                      https://www.npmjs.com/package/postcss-unopacity
[`postcss-vwh`]:                            https://www.npmjs.com/package/postcss-vwh
[`stylelint`]:                              https://www.npmjs.com/package/stylelint
[`stylelint-config-standard`]:              https://www.npmjs.com/package/stylelint-config-standard
[`stylelint-scss`]:                         https://www.npmjs.com/package/stylelint-scss
[`sugarss`]:                                https://www.npmjs.com/package/sugarss
[`doiuse`]:                                 https://www.npmjs.com/package/doiuse
[`webp-in-css`]:                            https://www.npmjs.com/package/webp-in-css
[`browser-sync`]:                           https://www.npmjs.com/package/browser-sync
[`debug`]:                                  https://www.npmjs.com/package/debug
[`del`]:                                    https://www.npmjs.com/package/del
[`fs`]:                                     https://www.npmjs.com/package/fs
[`gulp-rename`]:                            https://www.npmjs.com/package/gulp-rename
[`gulp`]:                                   https://www.npmjs.com/package/gulp
[`gulp-cli`]:                               https://www.npmjs.com/package/gulp-cli
[`npm`]:                                    https://www.npmjs.com/package/npm
[`gulp-plumber`]:                           https://www.npmjs.com/package/gulp-plumber
[`gulp-concat`]:                            https://www.npmjs.com/package/gulp-concat
[`gulp-sourcemaps`]:                        https://www.npmjs.com/package/gulp-sourcemaps
[`gulp-file-include`]:                      https://www.npmjs.com/package/gulp-file-include
[`gulp-html-bem-validator`]:                https://www.npmjs.com/package/gulp-html-bem-validator
[`gulp-htmlhint`]:                          https://www.npmjs.com/package/gulp-htmlhint
[`gulp-htmlmin`]:                           https://www.npmjs.com/package/gulp-htmlmin   
[`gulp-imagemin`]:                          https://www.npmjs.com/package/gulp-imagemin
[`gulp-webp`]:                              https://www.npmjs.com/package/gulp-webp
[`imagemin-pngquant`]:                      https://www.npmjs.com/package/imagemin-pngquant
[`gulp-jshint`]:                            https://www.npmjs.com/package/gulp-jshint
[`gulp-complexity`]:                        https://www.npmjs.com/package/gulp-complexity
[`gulp-uglify-es`]:                         https://www.npmjs.com/package/gulp-uglify-es
[`jshint`]:                                 https://www.npmjs.com/package/jshint
[`jshint-stylish`]:                         https://www.npmjs.com/package/jshint-stylish
[`nanoid`]:                                 https://www.npmjs.com/package/nanoid
[`gulp-babel`]:                             https://www.npmjs.com/package/gulp-babel

Future opportunities
--------------------------------------------------
- [`gulp-changed`] и [`gulp-newer`] 
- [`tmi`]
- [`gulp-duration`]
- [`husky`]
- [`pug`]
- [`bower`]
- [`psi`]
- [`ngrok`]
- [`gulp-plato`]

[`gulp-changed`]:                   https://www.npmjs.com/package/gulp-changed
[`gulp-newer`]:                     https://www.npmjs.com/package/gulp-newer
[`tmi`]:                            https://www.npmjs.com/package/tmi
[`gulp-duration`]:                  https://www.npmjs.com/package/gulp-duration
[`husky`]:                          https://www.npmjs.com/package/husky
[`pug`]:                            https://www.npmjs.com/package/pug
[`bower`]:                          https://www.npmjs.com/package/bower
[`psi`]:                            https://www.npmjs.com/package/psi
[`ngrok`]:                          https://www.npmjs.com/package/ngrok
[`gulp-plato`]:                     https://www.npmjs.com/package/gulp-plato

Contact me)
--------------------------------------------------

https://github.com/Lordpluha