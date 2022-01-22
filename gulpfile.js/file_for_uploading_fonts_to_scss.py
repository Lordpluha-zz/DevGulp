#!/usr/bin/python
# -*- coding: utf-8 -*-
'''
Script for creating fonts styles file and fill/refile them by styles
Creator: https://github.com/Lordpluha/
'''

import os
from copy import *
from itertools import groupby
import numpy as np

list_of_fonts = []
i = 0
# Dir of page in which you work
page_css_dir = 'main' #str(input('Input web-page in which you want to complete _fonts.scss: '))

prog_dir = ''.join(os.getcwd().split('\\gulpfile.js'))

# Fonts file
file_css = os.path.join(prog_dir, 'src', page_css_dir, 'styles', 'css.src', '_fonts.scss')

# Fonts dir
path = os.path.join(prog_dir, 'src', page_css_dir, 'styles', 'fonts')
fonts_types = ['.otf', '.ttf', '.woff', '.woff2', '.eot', '.eot?#iefix']

print("______ file_for_uploading_fonts_to_scss.py ______")

for dirs, folder, files in os.walk(path):
    # Dir of current font
    dirs = dirs.split('\\')
    dirs = '/'.join(dirs)
    # Files => all files, grouped by dirs
    # 1) ✓

    fonts_list = [] # => Список фрифтов шрифты
    # i => full filename
    for i in files:
        for a in os.path.splitext(i):
            if a in fonts_types:
                fonts_list.append(i)
    # ______________________________________________


    # 2) ✓
    fonts_split_name_s_type = []
    for i in fonts_list:
        for a in os.path.splitext(i):
            fonts_split_name_s_type.append(a)
    
    #print(fonts_split_name_s_type)
    # ______________________________________________


    # 3) ✓
    np_fonts_split_name_s_type = np.array(fonts_split_name_s_type)
    indexes_list = []
    for i in fonts_split_name_s_type:
        if i not in fonts_types:
            indexes = np.where(np_fonts_split_name_s_type == i)[0]
            indexes = list(indexes) # Индексы повторений
            
            indexes_list.append(indexes)
            indexes_list = [el for el, _ in groupby(indexes_list)]

    new_fonts = []
    for i in indexes_list:
        add_lst = []
        for a in i:
            add_lst.append(fonts_split_name_s_type[a])
            add_lst.append(fonts_split_name_s_type[a+1])
        new_fonts.append(add_lst)

    # print(new_fonts)
    # ______________________________________________


    # 4) ✓
    final_fonts = []
    for i in new_fonts:
        final_fonts.append(list(set(i)))

    # print(final_fonts)
    # ______________________________________________


    w_f = open(file_css, 'w')
    w_f.write('// Fonts file\n\n')
    w_f.close()

    path = os.path.join('..', 'fonts')

    for i in final_fonts:
        for a in i:
            if a not in fonts_types:

                a_f = open(file_css, 'a')
                a_f.write('// '+str(a)+'\n')
                a_f.write('@font-face {\n')
                a_f.write('    font-family: "{0}";\n'.format(a))
                a_f.write('    font-style: normal;\n')
                a_f.write('    font-weight: normal;\n')

                c = 0
                for b in i:
                    if b in fonts_types:
                        if b == '.eot':
                            a_f.write('    src: url("{0}");\n'.format(os.path.join(path, a+'.eot')))

                        else:
                            if c == 0:
                                a_f.write('    src: ')

                            c+=1
                            

                            if b == '.eot?#iefix':
                                a_f.write('url("{0}") format("embedded-opentype"),'.format(os.path.join(path, a+b)))

                            elif b == '.otf':
                                a_f.write('url("{0}") format("opentype"),'.format(os.path.join(path, a+b)))

                            elif b == '.ttf':
                                a_f.write('url("{0}") format("truetype"),'.format(os.path.join(path, a+b)))

                            elif b == '.woff':
                                a_f.write('url("{0}") format("woff"),'.format(os.path.join(path, a+b)))

                            elif b == '.woff2':
                                a_f.write('url("{0}") format("woff2"),'.format(os.path.join(path, a+b)))
                a_f.close()
                            

                r_f = open(file_css, 'rb+')
                r_f.seek(-1, os.SEEK_END)
                r_f.truncate()
                r_f.close()

                a_f = open(file_css, 'a')
                a_f.write(';\n')
                a_f.close()

                a_f = open(file_css, 'a')
                a_f.write('};\n\n')
                a_f.close()


print("Script success")
print('Saved in: ', file_css)
# print("For continue press \"Enter\"")
# input()

""" 
Использование скрипта:
 - Запустите
 - Укажите папку web-страницы
 - Убедитесь в корректности отработки скрипта
 - Подключите к проэкту _fonts.css
 - Готово!
"""
