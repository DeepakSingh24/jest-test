- Jest is a javscript testing framework.
- Jest is a test runner that finds the test, runs the test, determines weather test is passed or failed
- and reports it back in human readable manner.

- RTL- RTL is a Javascript testing utility, that provides a virtual DOM for testing react components.
- using that we can interact with component and verify the behaviour of React components.
- Basically we can fire the events and check mocking of callbacks and expected behaviour using DOM
- interaction.
- Testing library is a family of packages to test UI Components.
- Actual libarary is called DOM testing library and RTL is a wrapper around that library.

- Types of Automation test
- Unit test
- Integration test.(RTL + cypress)
- End to End test.

- Unit test writing pattern.
- describe is a wrapper of all the test blocks.
- test(name, callback, timeout before testabort).
- Test Driven Development(TDD)
- Test Driven development is a software development process where we write test cases before writing
- the software code
- In this process we are following RGR pattern.
- Red(failed state) to Green(Passed state) to refactoring code according to need
- Jest watch mode
- Execute test only in those files which has been changed since last commit.
- test.only-It will only run that test
- test.skip-It will skip that test from running
- describe.only()
- describe.skip()
- Nesting of describe and multiple describe is also possible
- Filename convention
- Filename.test.js Filename.test.tsx
- Filename.spec.js and Filename.spec.tsx
- Folder name (**test**) can contain all the test
- we can replace test with
- 1>it() is a alternative name to test() function, anyway it does the same thing.
- 2>fit()
- 3>xit()
- fit-run only that specific test
- xit-skip that specific test
- Code coverage- A metric that can help you understand how much your software code has been tested
- Statement, branches, functions, Line
- What to test in a component-
- 1>Test component renders
- 2>Test component render perfectly with props
- 3>Test component renders in differnt states
- 4>Test component behaviour to events
- make sure all the callbacks are mocked
- What not to test.(kya Nahi check karna h)
- 1>Implemaintation details
- 2>Third part code
- 3>Code that is not important from user point of view

- Every test we write generally involve 3 steps
- 1>Renders the component by using render method
- 2>Find a element rendered by the component
- 3>Assertion of that element found in step 2 which will pass or fail the test using expect method

- Single element | Multiple elements
- getBy(gives Element or Error) | getAllBy
- queryBy(it will give null if not found) | queryAllBy
- findBy(Async rendered elements) | findAllBy

By default many semantic HTML element have a role
Button element has a button role, anchor element has a link role, h1 to h6 element have a heading role
checkboxes has a checkbox role, radio button have a radio role and so on
we can also add a custom role to elements by adding attribute role="button"

- getByRole 2nd argument is a object with name property {name}
- name can be any one of them
- label of a form element
- text content of a button
- value of aria label attribute
  2nd argument can be
- 1>name
- 2>level
- 3>hidden
- 4>selected
- 5>checked
- 6>pressed
- 7>toBeVisible
- 8>toBeChecked
- getByRole should be the first priority options of querying Dom(element type) than other method
- getByLabeltext-to catch the DOM elements with labelText, 2nd option could be a selector text like input
- getByPlaceholderText -to catch placeholder attribute
- getByText -Paragraph text content
- getByDisplayValue- to catch the value attribute of input and textarea attribute
- getByAltText-This is only applicable for elements supporting alt attribute
- getByTitle-Element with title attribute
- getByTestId- dom attribute that matches data-testid attribute
- screen.debug() and logRoles()
- Convinience api
- user.setup();//first thing to do
- user.click();
- user.dblClick();
- user.tripleClick();
- user.hover();
- user.unhover();
- There is a difference between utility API and Convenince API
- type is utility api, clear()
- tab is a convenience api
- renderHook() function is used for rendering custom Hooks
- act() is used for synchronously update state of custom hook
- How to user event setup for calling callBack function
- Use msw for mocking api in background testing
- yarn add -D eslint-plugin-jest-dom
- yarn add --dev --exact prettier
- yarn add -D eslint-config-prettier
- npx husky-init && yarn
- yarn add -D lint-staged
- npx husky add .husky/pre-push "yarn test -- --watchAll=false"
