# python 으로 ppt 모든 글 읽기

```python
prs = Presentation(file)
for slide in prs.slides:
    for shape in slide.shapes:
        if shape.has_text_frame:
		    print(shape.text_frame.text)
    for paragraph in shape.text_frame.paragraphs:
        print(paragraph.text)

    for idx in range(0,len(shape.text_frame.paragraphs)-1):
        for ridx in range(0,len(shape.text_frame.paragraphs[idx].runs)):
            print(shape.text_frame.paragraphs[idx].runs[ridx].text)
```
    



<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE5NDU1MDUzLC02MTg5OTY0MjVdfQ==
-->