# python 으로 ppt 테이블 읽기

```js
import os
from pptx import Presentation
import glob
import sys

path = "C:\\Users\\lkh\\Documents\\01.편의점가맹지원\\보고서설계서"
files = glob.glob(path + '/*')

for file in files:
    prs = Presentation(file)
    for slide in prs.slides:
        for shape in slide.shapes:
            if shape.has_table:
                for i in range(0,len(shape.table.rows)-1):
                    for j in range(0,len(shape.table.rows[i].cells)-1):
                        cell = shape.table.rows[i].cells[j].text
                        print(cell)
```
    



<!--stackedit_data:
eyJoaXN0b3J5IjpbNTY0NDU3ODI2XX0=
-->