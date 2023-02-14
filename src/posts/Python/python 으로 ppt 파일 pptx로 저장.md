# python 으로 .ppt 파일 .pptx로 저장

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
eyJoaXN0b3J5IjpbMjA2Mzg3Mjg4Ml19
-->