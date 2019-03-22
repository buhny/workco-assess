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
- also using some flexbox
- added breakpoint mixin I've used in other projects. may be a bit overkill here, but I like it.
- I've never had a project with strict rules around breakpoint implementation. I tend to add them in by larger parent blocks or sections in an effort to keep the breakpoint changes closer to the original styles they're modifying, w/o including one for every single block or selector.
- added icons as svgs to change their colors with css
- made the CartStatus component to dynamically show the quantity of items in the cart & trigger cart visibility
- there's a bug where if you add the entire qty of a product to the cart then hit checkout, the product qty doesn't reset and the buttons stay disabled.
- using 3rd party images since sketch file images won't match api data anyways
- adding axios package for api requests
- considered using the Unsplash api for images, but would need to keep the API keys secure and didn't want to get bogged down in that. gitlab has a nice system for handling ENV keys fwiw
- so went with direct public image urls from Lorem Picsum instead. https://picsum.photos/


#### Task 3
- I struggled for a while with trying to use the same flow as the initial local product data setup, but found it much easier to bypass shop.js entirely and stick to making the api call in the action
- updating the PropTypes was unexpected and the first time I've done that, but makes sense


#### Task 2
- Styling the cart further and deciding what additional components I want to make.
- Went back and forth on using a definition list or a table for the subtotal/taxes/total and ultimately went with a table because it seems more appropriate semantically.
- Decided to try using React.Fragments, but after some errors discovered this version of React was too old and feels possibly out-of-bounds to update it.
