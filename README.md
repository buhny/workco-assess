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

## Thoughts

### Questions

- do i need to relearn Sketch? I'm really missing InVision here.
- should this be more fast/prototype-y or intentional/thinking about production concerns-y? i default to the latter. this will probably be a combo.
- is the Lora font in the quantity ticker intentional or overlooked from v1?
- should individual products be articles? haven't worked on much e-commerce so not sure about this, can see arguments both ways.
- what are the general padding/margin/spacing rules? I'm not discerning a real consistent pattern (ex: multiples of 8)
- should the cart status in the header be centered to the title on the largest screens? the positioning is a little odd relative to the title.
- questions around how the product images should behave: should they always cover their area? where should they scale from? what if there's a lot of text and the card gets really long? they don't really seem to have the same ratio between breakpoints, is that ok?
- cart on desktop - not really sure if there should be a scrim over the rest of the content behind or just this modal?


### Decisions

- went with design v2
- importing from google fonts instead of serving directly
- adding Sass because there are some css organization conventions we've developed that i really like
- turned off Prettier because it was messing up the scss formatting i want
- added Normalize
- not adding another framework, would want to understand more of the site's content first
- going BEMish with classNames
- using CSS Grid bc i started learning it recently and want to keep playing with it. Its a little tough though because of all the wrapping divs React wants. Keep refactoring.
- added breakpoint mixin I've used in other projects. may be a bit overkill here, but I like it.
- I've never had a project with strict rules around breakpoint implementation. I tend to add them in by larger parent blocks or sections in an effort to keep the breakpoint changes closer to the original styles they're modifying, w/o including one for every single block or selector.
