This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Take home task

We'd recommend that it should take 1 to 1.5 hours to work on - but we'd love to see you demonstrate what you can achieve in that timeframe. If you find you can quickly accomplish the tasks, use the remaining time to impress us with documentation, tests and delivering production quality code. If you find you haven't completed everything in 1.5 hours, let's discuss what you achieved and where you spent your time in our follow up conversation.

Create your own fork of this Codesandbox, the fork button is in the top right corner of the screen next to Share. If desired you can work locally and submit a Github repository instead.

Feel free to use any dependencies you want.

## Login Page & Protected Route

Within /src/pages/login/ is a basic HTML login form which we'd like you to finish.

### Criteria

1. The email and password fields should have JS validation (HTML5 validation would be to easy)

- Display help messages indicating the error
- Use the `is-invalid` CSS class on the inputs fields for invalid values

2. When clicking "Sign in" the user should be successful if the login matches one in accounts.json.

- Since there is no backend server, store the logged in status client side within state, context, Redux or another state management solution of your choice.

3. When logged in there should be an option to Logout which resets the state when clicked.

4. The merchants page (located in /src/pages/merchant-list/) should not be accessible to logged out users and the link should not be visible.

5. Write tests for the features you have implemented - @testing-library/react and Jest is setup, but feel free to use another.

### Submission

Once completed send back the forked URL of your code sandbox or repostiroy.
