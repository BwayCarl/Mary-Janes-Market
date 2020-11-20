# GIT COMMANDS CHEAT SHEET

### **GETTING AND CREATING**

| Command | Description |
| ------- | ----------- |
| `git init` | Initialize a local Git repository |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repository |

### **BASIC SNAPSHOTS**

| Command | Description |
| ------- | ----------- |
| `git status` | Check status |
| `git add [file-name.txt]` | Add a file to the staging area |
| `git add -A` | Add all new and changed files to the staging area |
| `git commit -m "[commit message]"` | Commit changes |
| `git rm -r [file-name.txt]` | Remove a file (or folder) |

### **BRANCHING & MERGING**

| Command | Description |
| ------- | ----------- |
| `git branch` | List branches (the asterisk denotes the current branch) |
| `git branch -a` | List all branches (local and remote) |
| `git branch [branch name]` | Create a new branch |
| `git branch -d [branch name]` | Delete a branch |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git checkout -b [branch name]` | Create a new branch and switch to it |
| `git checkout -b [branch name] origin/[branch name]` | Clone a remote branch and switch to it |
| `git branch -m [old branch name] [new branch name]` | Rename a local branch |
| `git checkout [branch name]` | Switch to a branch |
| `git checkout -` | Switch to the branch last checked out |
| `git checkout -- [file-name.txt]` | Discard changes to a file |
| `git merge [branch name]` | Merge a branch into the active branch |
| `git merge [source branch] [target branch]` | Merge a branch into a target branch |
| `git stash` | Stash changes in a dirty working directory |
| `git stash clear` | Remove all stashed entries |

### **SHARING & UPDATING**

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | Push a branch to your remote repository |
| `git push -u origin [branch name]` | Push changes to remote repository (and remember the branch) |
| `git push` | Push changes to remote repository (remembered branch) |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git pull` | Update local repository to the newest commit |
| `git pull origin [branch name]` | Pull changes from remote repository |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Add a remote repository |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Set a repository's origin branch to SSH |

### **INSPECTION & COMPARISON**

| Command | Description |
| ------- | ----------- |
| `git log` | View changes |
| `git log --summary` | View changes (detailed) |
| `git log --oneline` | View changes (briefly) |
| `git diff [source branch] [target branch]` | Preview changes before merging |
||

### **7 STEP PROCESS FOR COMMITTING TO GITHUB USING YOUR BRANCH**


* 1 - `git add -A` to all all changes *OR* `git add (name of file or folder)`
* 2 - ` git commit -m "(description)"`
* 3 - `git pull` your branch from Github to ensure you are always tracking from the the latest version.

* 4 - Any changes or merge conflicts?

**If NO:** 
* 4a - `git pull origin main` Then onto *STEP 5.*

**If YES:** 
* 4b - Address conflict. Pull from every potential source and resolve conflicts before you push. Then go back to *STEP 1.*

* 5 - Any changes or merge conflicts?

**If NO:** 
* 5a - `git push (your branch name)` Then onto *STEP 6.*

**If YES:** 
* 5b - Address conflict. Pull from every potential source and resolve conflicts before you push. Then go back to *STEP 1.*

* 6 - Go to the Github repository.

* 7 - Git pull request to master and merge.


**Add more commands as you discover them.**