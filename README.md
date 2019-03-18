# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Setup

Please create a new, public Github repository where your assessment can be reviewed. We recommend the following steps:

- Create a repository on your personal Github. Make sure the `Initialize this repository with a README` box is unchecked.
- Visit your new repository. Copy the `…or push an existing repository from the command line` code provided and run it in your terminal in the same directory as this README file. It will look something like this:

```
git remote add origin git@github.com:my-username/my-assessment.git
git push -u origin master
```

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your git history.

## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

You're welcome (but not required) to add any libraries you think would be helpful.

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.

## notes

### Questions/Thoughts

- do i need to relearn Sketch? I'm really missing InVision here.
- should this be more fast/prototype-y or intentional/thinking about production concerns-y? i default to the latter. this will probably be a combo.
- is the Lora font in the quantity ticker intentional or overlooked from v1?
- should individual products be articles? haven't worked on much e-commerce so not sure about this, can see arguments both ways.


### Decisions

- went with design v2
- importing from google fonts instead of serving directly
- adding Sass because there are some css organization conventions we've developed that i really like
- turned off Prettier because it was messing up the scss formatting i want
- added Normalize
- not adding another framework, would want to understand more of the site's content first
- going BEMish with classNames
- using CSS Grid bc i started learning it recently and want to keep playing with it. Its a little tough though because of all the wrapping divs React wants. Keep refactoring.
