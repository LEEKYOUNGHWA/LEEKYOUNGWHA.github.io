# parse mybatis query and save to excel

```python
#anaconda prompt> pip install xmltodict
import xmltodict
import json
from openpyxl import Workbook
from pathlib import Path
from openpyxl import load_workbook
wb = load_workbook(filename = '쿼리조사.xlsx')
smtc = wb['커넥션  조사']
#newwb = Workbook()  
#newwb = load_workbook(filename = 'smtcServer쿼리조사.xlsx')
#ws1 = newwb.active
#ws1 = newwb['persist-impl']
#ws1.append(['번호','ecdDataSource','impl'])

i=1
for row in smtc.iter_rows(min_col=2, min_row=53 ,max_col=2 ,max_row=83):
    for cell in row:
        print(cell.value, end=" ")
        my_file = Path('C:\\workspace\\smart4c_mip_all\\resource\\spring\\persists\\'+cell.value)
        if my_file.is_file() == False:
            continue
        with open('C:\\workspace\\smart4c_mip_all\\resource\\spring\\persists\\'+cell.value, 'r',encoding='utf-8') as f:
            data = f.read()
        doc = xmltodict.parse(data)
        doc = doc['beans']['bean']
#print(json.dumps(doc, indent=4))
        if len(doc)==2 :
            for bean in doc:
                if '.incrementer.' not in bean['@class']:
#print(cell.value, ' ', bean['@class'])
                    classid = bean['@class']
                    print(i, cell.value, classid.split('.')[-1]+'.java')
                    smtc['C'+str(i)] = classid.split('.')[-1]+'.java'
#ws1.append([i,cell.value,classid.split('.')[-1]+'.java'])
        else :
#print(cell.value, ' ',doc['@class'])
            classid = doc['@class']
            print(i, cell.value, classid.split('.')[-1]+'.java')
            smtc['C'+str(i)] = classid.split('.')[-1]+'.java'
#ws1.append([i,cell.value,classid.split('.')[-1]+'.java'])
        i = i+1
#if 'impl' in bean['@class']:
#print(bean['@class'])
#print(doc)
#doc = doc['@class'].split('.')[-1]+'.java'
#print(doc)
#print(json.dumps(doc, indent=4))

#newwb.save('smtcServer쿼리조사.xlsx')
#newwb.save('smtcServer쿼리조사.xlsx')
#print(smtc['a1'].value)
#smtc['a1'].value = 'ttttttttttttttttttttt\ntttttttt\nttttttt\nttt'

wb.save('쿼리조사.xlsx')

#sheet['A1'] = 1
#sheet.cell(row=2, column=2).value = 2

#book.save('write2cell.xlsx')
```


```python
import re
from pathlib import Path
import glob
from openpyxl import load_workbook
newwb = load_workbook(filename = '쿼리조사.xlsx')
ws1 = newwb['커넥션  조사']
ws2 = newwb.create_sheet("상품이외2")
ws2.append(['번호','ecdDataSource','impl','queryid'])

i=1
for row in ws1.iter_rows(min_col=1, min_row=53 ,max_col=4 ,max_row=53):
    print(row[0].value, row[1].value, row[2].value)

    my_file = glob.glob('C:\\workspace\\smart4c_mip_all\\src\\smart4c\\modules\\**/*'+row[2].value, recursive=True)
    my_file = Path(my_file[0])
    with open(my_file, 'r',encoding='utf-8') as f:
        data = f.read()
    all = re.findall('getSqlFromXml\(\"(.*)\"', data)
#print(cell.value, all)
    for sqlid in all:
        print(row[0].value, row[1].value, row[2].value, sqlid)
        ws2.append([row[0].value, row[1].value, row[2].value, sqlid])
#with open('C:\\Users\\lkh\\smtc\\smart4c_mip_all\\resource\\spring\\persists\\'+cell.value, 'r',encoding='utf-8') as f:
#data = f.read()
#doc = xmltodict.parse(data)
#newwb.save('쿼리조사.xlsx')        
#with open('C:\\Users\\lkh\\smtc\\smart4c_mip_all\\src\\smart4c\\modules\\prd\\dao\\impl\\DlvInfoEntDaoImpl.java', 'r',encoding='utf-8') as f:
#data = f.read()
#print(data)
#all = re.findall(r"getSqlFromXml(\w+[\w\.]*)",data)
#all = re.findall('getSqlFromXml\(\"(.*)\"', data)
#print(all)
newwb.save('쿼리조사.xlsx')
```

```python
import re
from pathlib import Path
import glob
import xmltodict

wb = load_workbook(filename = '쿼리조사.xlsx')
ws1 = wb["상품이외2"]
i=2
for row in ws1.iter_rows(min_col=1, min_row=2):
    print(i,row[0].value, row[1].value, row[2].value, row[3].value)
    queryfile = row[3].value.split('.')[0]
#my_file = Path('C:\\Users\\lkh\\smtc\\smart4c_mip_all\\src\\smart4c\\modules\\prd\\dao\\impl\\'+cell.value)
    my_file = Path('C:\\workspace\\smart4c_mip_all\\resource\\spring\\query\\prd' + queryfile + '.xml')
    if my_file.is_file():
        with open(my_file,'r',encoding='utf-8') as f:
            data = f.read()
            doc = xmltodict.parse(data)
            doc = doc['properties']['entry']
#print("lendoc",len(doc))
#print(isinstance(doc, (list, tuple)))
            if isinstance(doc, (list, tuple)):
                for query in doc:
                    if query['@key'] == row[3].value:
                        print(query['#text'])
#query.get('#text')
                        ws1['E'+str(i)] = query.get('#text')
            else :
#print(doc)
                if doc['@key'] == row[3].value:
                        print(doc['#text'])
                        ws1['E'+str(i)] = query.get('#text')        
    i+=1
#if my_file.is_file():
#print(i, cell.value,my_file)
#else :
#print(i, cell.value,"false")

#wb.save('smtcServer쿼리조사.xlsx')
```

```python
import re
from pathlib import Path
import glob

newwb = load_workbook(filename = '쿼리조사.xlsx')
ws1 = newwb["상품이외2"]
#sharews = newwb["쉐어플렉스테이블"]
i=1
for row in ws1.iter_rows(min_col=1, min_row=2):
#print(i,row[4].value)
    i+=1
#shtables=''
    if row[5].value==None:
        continue
    if 'SELECT ' in row[5].value:
        ws1['H'+str(i)] = 'Y'
    if 'INSERT ' in row[5].value:
        ws1['I'+str(i)] = 'Y'
    if 'UPDATE ' in row[5].value:
        ws1['J'+str(i)] = 'Y'
    if 'DELETE ' in row[5].value:
        ws1['K'+str(i)] = 'Y'
    if '{0}' in row[5].value:
        ws1['L'+str(i)] = 'Y'
    if '/*+' in row[5].value:
        ws1['M'+str(i)] = 'Y'
    if '@' in row[5].value:
        ws1['N'+str(i)] = 'Y'
    if 'TB_BB002' in row[5].value:
        ws1['N'+str(i)] = 'TB_BB002'
#for sharetable in sharews.iter_rows(min_col=1, min_row=2):
#if sharetable[0].value in row[4].value:
#shtables+=sharetable[0].value + ', '
#ws1['M'+str(i)] = shtables
newwb.save('쿼리조사.xlsx')
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNTA0Mzg5MDldfQ==
-->