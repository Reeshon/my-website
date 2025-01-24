@echo off
echo Updating GitHub Repository...

REM Navigate to the project directory
cd /d %~dp0

REM Configure Git user if not already configured
git config --global user.email "reeshonrs@gmail.com"
git config --global user.name "Reeshon"

REM Add safe directory exception
git config --global --add safe.directory C:/Users/reesh/my-website

REM Check if Git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    git remote add origin https://github.com/Reeshon/my-website.git
)

REM Check Git status
echo Checking status...
git status

REM Pull the latest changes from the remote repository
echo Pulling the latest changes from the remote repository...
git pull origin main

REM Add all changes to git
echo Adding changes...
git add .

REM Commit the changes with a message
echo Committing changes...
git commit -m "Update website content"

REM Push the changes to the main branch
echo Pushing to GitHub...
git push -u origin main

REM Show status and pause
echo.
echo Repository update complete!
echo Check above for any error messages.
pause
