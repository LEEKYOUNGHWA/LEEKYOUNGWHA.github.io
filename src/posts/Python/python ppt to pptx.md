# python 으로 .ppt 파일 .pptx로 저장

[https://stackoverflow.com/questions/45670024/convert-ppt-file-to-pptx-in-python](https://stackoverflow.com/questions/45670024/convert-ppt-file-to-pptx-in-python)

python3에서 안된다고 되어 있는데.. 아나콘다 에서는 잘 동작함 

문서 5000개 정리하면서 사용했던 파이썬 소스
```python
from glob import glob
import re
import os
import win32com.client

# Create list of paths to .doc files
paths = glob('C:\\Users\\lkh\\Documents\\01.편의점가맹지원\\보고서설계서\\*.ppt', recursive=True)

def save_as_pptx(path):
    PptApp = win32com.client.Dispatch("Powerpoint.Application")
    PptApp.Visible = True
    PPtPresentation = PptApp.Presentations.Open(path)
    PPtPresentation.SaveAs(path+'x', 24)
    PPtPresentation.close()
    PptApp.Quit()
    
for path in paths:
    print(path.replace("\\보고서설계서\\", "\\보고서설계서_ppt\\"))
    save_as_pptx(path)
```
    



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2ODkxMjU5LC0xMjY1MDgyNTgwXX0=
-->