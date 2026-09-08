# Coffee Orders CLI (Git Practice Project)

This is a small Node.js project you can use to practice Git commands safely.

## Run the project

```bash
node hello.js list
node hello.js add "Mocha"
node hello.js done 2
node hello.js remove 1
node hello.js reset
```

## Suggested Git practice flow

1. **Initial commit**
   - `git add .`
   - `git commit -m "Initial coffee orders CLI project"`

2. **Feature branch**
   - `git checkout -b feature/add-priority`
   - Add a `priority` field in the order model.
   - `git add .`
   - `git commit -m "Add priority field to orders"`

3. **Use diff and log**
   - `git diff`
   - `git log --oneline --graph --decorate`

4. **Undo/restore practice**
   - Make a temporary change in [data/orders.json](C:/Users/pegga/Downloads/testrepo/test-repo/data/orders.json)
   - `git restore data/orders.json`

5. **Merge practice**
   - `git checkout main`
   - `git merge feature/add-priority`

6. **Stash practice**
   - Make local edits
   - `git stash`
   - `git stash list`
   - `git stash pop`
