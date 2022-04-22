This small test case hopefully helps to track down the bug:   

```
react-dom.development.js:86 Warning: Internal React error: Expected static flag was missing. Please notify the React team.
```

It _only_ appears if I render the component with a timeout as well as when I'm using Jss. It _could_ have something to do with the new concurrency model in React (at least that would make sense to me).

How to start:
- clone the repo
- run yarn
- run yarn run dev

The div is rendered after 1 second. This is when the exception comes up