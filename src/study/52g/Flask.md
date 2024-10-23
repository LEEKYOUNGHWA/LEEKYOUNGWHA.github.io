---
lastUpdated: 2024/10/23 14:19:00
description: 52g
image: https://flask.palletsprojects.com/en/3.0.x/_images/flask-horizontal.png
---

# Flask

## 설치 및 실행

```sh
# 설치
conda install anaconda::flask

# 실행
python server.py
```

## 생활코딩 강의

- [생활코딩 Flask web framework Youtube](https://www.youtube.com/watch?v=X_n6IZmieV8&list=PLuHgQVnccGMClNOIuT3b3M4YZjxmult2y)

:::details 생활코딩 강의 내용
`server.py`
```python
from flask import Flask, request, redirect

app = Flask(__name__)


nextId = 4
topics = [
    {'id': 1, 'title': 'html', 'body': 'html is ...'},
    {'id': 2, 'title': 'css', 'body': 'css is ...'},
    {'id': 3, 'title': 'javascript', 'body': 'javascript is ...'}
]


def template(contents, content, id=None):
    contextUI = ''
    if id != None:
        contextUI = f'''
            <li><a href="/update/{id}/">update</a></li>
            <li><form action="/delete/{id}/" method="POST"><input type="submit" value="delete"></form></li>
        '''
    return f'''<!doctype html>
    <html>
        <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
                {contents}
            </ol>
            {content}
            <ul>
                <li><a href="/create/">create</a></li>
                {contextUI}
            </ul>
        </body>
    </html>
    '''


def getContents():
    liTags = ''
    for topic in topics:
        liTags = liTags + f'<li><a href="/read/{topic["id"]}/">{topic["title"]}</a></li>'
    return liTags


@app.route('/')
def index():
    return template(getContents(), '<h2>Welcome</h2>Hello, WEB')


@app.route('/read/<int:id>/')
def read(id):
    title = ''
    body = ''
    for topic in topics:
        if id == topic['id']:
            title = topic['title']
            body = topic['body']
            break
    return template(getContents(), f'<h2>{title}</h2>{body}', id)


@app.route('/create/', methods=['GET', 'POST'])
def create():
    if request.method == 'GET': 
        content = '''
            <form action="/create/" method="POST">
                <p><input type="text" name="title" placeholder="title"></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" value="create"></p>
            </form>
        '''
        return template(getContents(), content)
    elif request.method == 'POST':
        global nextId
        title = request.form['title']
        body = request.form['body']
        newTopic = {'id': nextId, 'title': title, 'body': body}
        topics.append(newTopic)
        url = '/read/'+str(nextId)+'/'
        nextId = nextId + 1
        return redirect(url)


@app.route('/update/<int:id>/', methods=['GET', 'POST'])
def update(id):
    if request.method == 'GET': 
        title = ''
        body = ''
        for topic in topics:
            if id == topic['id']:
                title = topic['title']
                body = topic['body']
                break
        content = f'''
            <form action="/update/{id}/" method="POST">
                <p><input type="text" name="title" placeholder="title" value="{title}"></p>
                <p><textarea name="body" placeholder="body">{body}</textarea></p>
                <p><input type="submit" value="update"></p>
            </form>
        '''
        return template(getContents(), content)
    elif request.method == 'POST':
        global nextId
        title = request.form['title']
        body = request.form['body']
        for topic in topics:
            if id == topic['id']:
                topic['title'] = title
                topic['body'] = body
                break
        url = '/read/'+str(id)+'/'
        return redirect(url)


@app.route('/delete/<int:id>/', methods=['POST'])
def delete(id):
    for topic in topics:
        if id == topic['id']:
            topics.remove(topic)
            break
    return redirect('/')


app.run(debug=True) # 디버그모드
```
:::

## Flask + Jappa 배포

- [블로그](https://yoonminlee.com/zappa-flask-serverless-deployment) 참고하였습니다.

1. 가상환경 설치

```sh
mkdir zappa-tutorial
cd zappa-tutorial
conda install anaconda::virtualenv
virtualenv zappa_venv
# 아나콘다에서 리눅스 명령어 쓰기 conda install m2-base
.\zappa_venv\Scripts\activate
pip3 install Flask
pip3 install zappa
```
1. aws 계정, 인스턴스(있음)
2. 액세스 키 생성
3. 

