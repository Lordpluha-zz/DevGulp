#!/usr/bin/python
# -*- coding: utf-8 -*-

'''

Script for creating fonts styles file and fill/refile them by styles

creator: Lordpluha

'''

import os
from copy import *

list_of_fonts = []
i = 0

# Dir of page in which you work
page_css_dir = str(input('Input web-page in which you want to complete _fonts.scss: '))

# Fonts file
file_css = os.path.join('..', 'src', page_css_dir, 'styles', 'css.src', '_fonts.scss')

# Fonts dir
path = os.path.join(os.getcwd(), '..', 'src', page_css_dir, 'styles', 'fonts')
print(path)

with open(file_css, 'w') as w_f:

    for dirs, folder, files in os.walk(path):
        dirs = dirs.split('\\')
        dirs = '/'.join(dirs)

        w_f.write('// Fonts file')
        
        for el in files:
            file_split = os.path.splitext(el)

            if file_split[1] not in ['.otf', '.ttf', '.woff']:
                continue

            w_f.write('// {0} '.format(file_split[0]))
            w_f.write('@font-face {')
            w_f.write('    font-family: \'{0}\';'.format(file_split[0]))
            w_f.write('    font-style: normal;')
            w_f.write('    font-weight: normal;')
            w_f.write('    src: url({0}/{1}{2}) format(\'opentype\');'.format(dirs, file_split[0], file_split[1]))
            w_f.write('}')


            print(('Сохранение {0}{1} шрифта завершено').format(file_split[0], file_split[1]))

print('_'*100)
print("Скрипт завершился удачно")
print('Сохранено в: ', file_css)
print("Для продолжение нажмите \"Enter\"")
input()

""" 
Использование скрипта:
 - Запустите
 - Укажите папку web-страницы
 - Убедитесь в корректности отработки скрипта
 - Подключите к проэкту _fonts.css
 - Готово!
"""