# python 으로 ppt 읽기

```js
import os
from pptx import Presentation
import glob
import sys

path = "C:\\Users\\lkh\\Documents\\01.편의점가맹지원\\보고서설계서"
path_ = "C:\\Users\\lkh\\Documents\\01.편의점가맹지원\\보고서설계서_"
files = glob.glob(path + '/*')

for file in files:
    f=file
    rename=''
    name = ''
    idd = ''
    yn = '.pptx' in os.path.basename(f) and 'VFS' in os.path.basename(f)
    if (yn == True) :
        prs = Presentation(f)
        for slide in prs.slides:
            for shape in slide.shapes:
                if shape.has_table:
                    for i in range(0,len(shape.table.rows)-1):
                        for j in range(0,len(shape.table.rows[i].cells)-1):
                            cell = shape.table.rows[i].cells[j].text
                            print(cell)
```
    



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5OTg5NDc3MTNdfQ==
-->