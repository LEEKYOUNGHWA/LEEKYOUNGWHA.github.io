---
sidebar: false
---

![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fleekyounghwa.github.io&count_bg=%23413DC9&title_bg=%23555555&icon=vue-dot-js.svg&icon_color=%2335A843&title=KH%27s+Blog+Hits&edge_flat=true)

# Tags

<TagList /><TagList />testtttt

## Browser API Access Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:<TagList />
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIxNjI0NTU1LC0xNzQ0NzA5MTA4XX0=
-->