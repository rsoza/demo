
## Demo

Please visit [here](https://fir-599e4.web.app/) for the live website.

## Installation

Install demo 

```bash
  git clone https://github.com/rsoza/demo.git
  cd demo
  npm Install
```
    
## Deployment


1. To enable firebase account does this once in demo directory:

```bash
  firebase use y
```
2. Update build and deploy to line demo:
```bash
  npm run build
  firebase deploy
```


## TODO

- [X] Link compiler to breaker/fixer game
  - [X] Compiler output
- [X] Use copilot or create a demo of how it could behave
  - [X] Make read-only parts
  - [X] Read-only should be greyed out 
- [X] Functionality:
  - [X] Insert lines/text
  - [X] Delete lines/text
    - [X] Right click to edit/delete
- [ ] Make a point system
- [X] Timer implementation
- [ ] Game rules page
- [X] Update unit test to account for syntax errors

 ## Known bugs

  - [X] Code is not rerendering with changes
  - [X] Compiler is not in real time
  - [X] Mobile/desktop view is finicky 
 


