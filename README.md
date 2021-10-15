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

Суть всего gulp состоит в использовании автоматизирующих функций, написаных на node.js

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

html ---
    'blocks': {
        'files': [
            'header.html',
            'nav.html',
            'aside.html',
            'article.html',
            'footer.html'
        ]
    },
    'files': [
        'index.html',
        'index.min.html',
        'index.src.html'
    ]
},
'js': {
    'scripts': {
        'files': [
            'script.js',
            'script.min.js'
        ]
    }
},
'styles': {
    'css': {
        'files': [
            'styles.css',
            'styles.min.css',
            'styles.css.map'
        ]
    },
    'scss': {
        'files': [
            'styles.scss',

            '_zer0.scss',
            '_mixins.scss',
            '_fonts.scss',
            '_preloader.scss',

            '_header.scss',
            '_aside.scss',
            '_nav.scss',
            '_article.scss',
            '_foooter.scss',

            '_media.scss'
        ]
    },
    'fonts': {

    }

## Functions

### CPF (CreateProjectFiles):
This function must goin throught all folder-base and callback all element with fucntion, which creating selected folder in selected depth of architecture



## Проблемы
    Develope Build function