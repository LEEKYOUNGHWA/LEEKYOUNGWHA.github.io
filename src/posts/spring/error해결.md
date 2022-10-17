# SPRING ERROR 해결

## The import org.junit cannot be resolved

프로젝트 우클릭 > properties > Java Build Path > Libraries > Add Library > JUnit 선택 > Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

##
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2MTA3MTIxNTVdfQ==
-->