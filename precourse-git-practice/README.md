# Git Practice

This repo will give you a chance to use the command line to make changes to the files and directories in this repo, as well as adding, committing, and pushing those changes to GitHub.

## Opening and viewing this file in VSCode

Once you have forked, cloned, and copied this repo locally, you will want to open it inside VSCode.

### Opening a directory

When you open a new instance of VSCode, you should be greeted with a welcome page. Under the **Start** section of this page are three options (New file, Open, Clone Git Repository). Click on the **Open** link, and you can then navigate to the local folder where you copied this repo.

If you do not see the welcome screen, no worries! In the left-hand menu bar, you should see an icon that looks like two pieces of paper. Clicking on this will also give you the option to **Open Folder** in the same way.

Alternatively, clicking on **File** on the top menu bar should also present you with a list of options, including **Open Folder**.

### Open a terminal

In order to open a terminal, you can use the following keyboard shortcut: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>`</kbd>

Alternatively, clicking on **Terminal** on the top menu bar will show you the terminal options, including **New Terminal**.

### Viewing this file in VSCode

For a better way of viewing `.md` files, right click on this file in your file explorer in VSCode and click `Open Preview`. That should make it easier to see all the nice formatting!

## About this repo

By the end of this exercise, this repo should contain some information about some of your favourite things stored in markdown files.

Before you make any changes, this repo should contain two directories (`books` and `films`). Our `books` contains one strangely named file (`worstSocks`), whereas `films` contains a single markdown file, `favouriteFilms.md`. Take a moment in VSCode to look through these files and directories on the left-hand side before jumping in to the tasks.

## Useful commands

```bash
cd directoryName
cd ..
touch exampleFile.md
echo "text" > exampleFile.md
echo "text" >> exampleFile.md
rm exampleFile.md
```

```bash
git status
git add file.md
git commit -m "Descriptive commit message"
git push origin main
```

## Task 1

Our `favouriteFilms.md` is currently empty. Using the `echo` command in your terminal, add three of your own favourite films to this file.

You should not be editing this file directly in VSCode, but feel free to open it after you have run the command to make sure that everything has worked correctly!

Once you have made these changes, go ahead and run the following command in your terminal:

`git status`

You should see that the `favouriteFilms` file has now been changed, so it's time to push up our changes!

Using the commands `git add`, `git commit` and `git push`, let's save your favourite films centrally.

If you need a refresher, [this video](https://www.youtube.com/watch?v=9p2d-CuVlgc&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV&index=7&ab_channel=TheCodingTrain) has a good walkthrough of what to do. Remember to keep your commit messages descriptive to explain what changes have been made.

## Task 2

As mentioned earlier, our `books` directory has a pretty strange file inside! Let's go ahead and remove `worstSocks.md`, as we won't be needing it.

After, let's go ahead and create a file of our own. Our `books` directory is looking a little empty now, so let's add a new file (`favouriteBooks.md`) into it using the `touch` command.

Once you've created that file, go ahead and add your three favourite books into it, much like we did with our films.

After, let's add, commit, and push up our changes. Remember to choose a good commit message!

## Task 3

For our final task, let's go ahead and create a new directory alongside our `books` and `films`. You can name this whatever you want, but feel free to pick something such as `colours`, `food`, `pets`, or `video games` if you're stuck for ideas!

Afterwards, let's add a file inside this newly created directory where we can put three of our favourite examples of whatever you chose to name the directory. If you created a directory called `trains`, for example, then our file should be called something along the lines of `favouriteTrains.md`.

Go ahead and add those three favourite examples of whatever you picked, and then let's do a final add, commit, and push.

## Review

Congratulations! Hopefully, you've had a chance to flex your command line muscles, being able to add new files and directories, and add things to them as needed. You should also have used git to add, commit, and push up your changes so that your repo on GitHub now has all your favourite things.

If you're feeling like you need a recap of any of these topics, then do pop back into the precourse and review the command line and git sections as needed.
