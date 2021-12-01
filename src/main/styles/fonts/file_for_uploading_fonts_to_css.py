import os
from copy import *

list_of_fonts = []
i = 0
file_css = '../css.src/_fonts.css'

path = os.getcwd()
print(path)

with open(file_css, 'w') as w_f:

    for dirs, folder, files in os.walk(path):
        dirs = dirs.split('\\')
        dirs = '/'.join(dirs)

        for el in files:
            file_split = os.path.splitext(el)
            if file_split[1] not in ['.otf', '.ttf', '.woff']:
                continue

            w_f.write('@font-face {')
            w_f.write(('   font-family: \'{0}\';').format(file_split[0]))
            w_f.write('   font-style: normal;')
            w_f.write('   font-weight: normal;')
            
            w_f.write(('   src: url({0}/{1}{2}) format(\'opentype\');').format(dirs, file_split[0], file_split[1]))
            w_f.write('}')
            print(('Сохранение {0}{1} шрифта завершено').format(file_split[0], file_split[1]))

print('_'*100)
print("Скрипт завершился удачно")
print('Сохранено в: ', file_css)
print("Для продолжение нажмите \"Enter\"")
input()

""" 
Использование скрипта:
 - Поместите скрипт в папку fonts
 - Запустите
 - Подключите к проэкту _fonts.css
 - Готово!
"""