# pytoh .doc to .docx

문서 5000개 정리하면서 사용했던 파이썬 소스

```python
from glob import glob
import re
import os
import win32com.client as win32
from win32com.client import constants

# Create list of paths to .doc files
paths = glob('C:\\Users\\lkh\\Documents\\01.편의점가맹지원\\프로그램설계서_doc\\*.doc', recursive=True)

def save_as_docx(path):
    # Opening MS Word
    word = win32.gencache.EnsureDispatch('Word.Application')
    doc = word.Documents.Open(path)
    doc.Activate ()

    # Rename path with .docx
    new_file_abs = os.path.abspath(path)
    new_file_abs = re.sub(r'\.\w+$', '.docx', new_file_abs)

    # Save and Close
    word.ActiveDocument.SaveAs(
        new_file_abs, FileFormat=constants.wdFormatXMLDocument
    )
    doc.Close(False)

count=0
for path in paths:
#     print(path.replace("\\프로그램설계서\\","\\프로그램설계서_doc\\"))
    save_as_docx(path)
#     os.renames(path, path.replace("\\프로그램설계서\\","\\프로그램설계서_doc\\"))
    count+=1

print(count)
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgyOTM4MjgwOSwxNDkxMjQwNjU0XX0=
-->