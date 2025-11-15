# Git Notebook Setup Summary

## 1. Folder Structure
Create the main notebook and language folders:

```bash
mkdir -p notebook/javascript/basic_exercises
mkdir -p notebook/javascript/intermediate_exercises
mkdir -p notebook/javascript/projects
mkdir -p notebook/python/basic_exercises
mkdir -p notebook/python/intermediate_exercises
mkdir -p notebook/python/projects
mkdir -p notebook/html_css/exercises
mkdir -p notebook/html_css/projects
mkdir -p notebook/git/exercises
mkdir -p notebook/daily_notes

```

<!-- you should be at the dedicated directory to craft your notebook -->

## 2. Add .gitkeep to Empty folders

Add .gitkeep to all empty folders
```bash
find notebook -type d -empty -exec touch {}/.gitkeep \;
```
Optional: add .gitkeep to main notebook folder
```bash
touch notebook/.gitkeep

```

## 3. Initialize Git

```bash
cd notebook
git init
git add .
git commit -m "Initial coding notebook structure"
```

## 4. Push to GitHub
````bash
git remote add origin https://github.com/yourusername/coding-notebook.git
git branch -M main
git push -u origin main
```
