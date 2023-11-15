# vuepress plugins

## mermaid
mermaid를 쓰고 싶은 이유는 단 한가지다 Stackedit 에서 지원하기 때문... 암튼 첨에 걍 설치하고 적용했더니 동작이 되지 않는 거시다 
[vuepress/issues/111](https://github.com/vuejs/vuepress/issues/111)
보고 시키는대로 다 해봤는데 적용이 안된다.... 
포기하고 다른 공식 플러그인을 적용해서 쓸까.. 했는데
stackedit에서 사용하는 그 편리함을 포기하지 못하겠어서.. 다음날 다시 시도...

[공식 문서](https://www.npmjs.com/package/vuepress-plugin-mermaidjs?activeTab=versions)에 mermaid 1.xx 버전이 vuepress 1.xx 버전과 호환된다고 되어 있기에... 이번에 1.9.1을 설치 했다
(씁 근데 어제도 1.XX 설치 해봤었는데 안됐었는데... 아무튼 지금 내 vuepress 버전 1.9.10 이랑 mermaid 버전 1.9.1 이 잘 맞는걸로...)
`npm i vuepress-plugin-mermaidjs@1.9.1`

``` js
--config.js 

plugins: [
    'flowchart',
    'vuepress-plugin-mermaidjs',
    ['sitemap', { hostname: 'https://leekyounghwa.github.io'}],
  ],
```
    ```mermaid
    graph LR
    A[짜] --> B[증]
    A --> C[나]
    ```

그랬더니... 허망하게 바로 적용되어 버림... 결론... 버전 체크하고 명시하는 습관을 가지자... ㅜㅜ.....