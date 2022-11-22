# Lab 8 - Starter
Younus Ahmad

Q1.) Option 1 is correct as it will ensure that any code that is pushed will have to go through some quality checks so that the code is working
before moving onto the next part of development. Manually running tests would work, but would be inefficient and a perfect task for automation libraries
like Jest to do.

Q2.) No, for a test like that you would want to use a unit test. Unit tests are appropriate for ensuring the individual components or functions are
returning the correct values.

Q3.) A unit test is only able to determine if the specific output of that function is correct or not. A messaging feature would be better tested with an E2E style testing as there are multiple steps involved in getting a message out to another user. These steps can include getting the correct user, sending and receiving the correct message, etc.

Q4.) Yes, this feature has only one part to it which is the message length. This can easily be verified with a unit test by checking if the string that contains the message has a length of 80 or less.
