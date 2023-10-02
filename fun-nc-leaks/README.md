You can find the instructions for this sprint [here](https://l2c.northcoders.com/courses/fun/nc-leaks). Feel free to use this repo to fork and clone to store your code. 

Instructions

Your first task is to retrieve the instructions left for you by your mole on the inside...

Make a request using node's https module to the following endpoint to get the instructions left for you: /api/confidential

Once you have your instructions, save them in a markdown file (a file with a .md extension)

That is all...

Hint: Once you've finished building up the body from each of the packets you receive, this body of your response will be a stringified JSON object. How can you turn this into a useable object? You should now have an object with a key of instructions holding the value of a long string (with markdown formatting embedded in it). Only save this string containing your instructions to a markdown file - you don't need to save the whole response object.