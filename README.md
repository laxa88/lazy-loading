# Redux Lazy Loading

This repo is for experimenting with lazy loading React and Redux code.

If implemented correctly, we can speed up loading React components via lazy-loading, and also dynamically load redux-related code instead of initializing everything in the entry file.

## Problems to solve

* Can a component safely reference a lazy file's `actions.js` without other files in the folder?
* Can a component safely load a lazy file's `Component.js` without other files in the folder?
* Can we easily load the requisite files when a lazy file's `action.js` or `Component.js` are referenced from another component?

## Progress

* Successfully loaded `actions.js` by itself
* Successfully loaded `Component.js` by itself, which includes requisite files `actions.js`, `selectors.js`, `reducer.js`
* Problem: `Component.js` is bundled together with requisite files because they're not lazy-loaded. Some notes:
  * If you load `Component.js` first then `actions.js`, `actions.js` won't be reloaded because the code already exists in `Component.js`
  * If you load `actions.js` first then `Component.js`, the code for `actions.js` is loaded twice.

## Questions

* Should we load all feature files when one of them is loaded?
* Should we allow each individual feature file to be lazy loaded?

## References

https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52/
