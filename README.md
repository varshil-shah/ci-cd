# AIM: Study DevOps and implement CI/CD pipeline:

## Demo:
[ankitverma-cicd](https://ankitverma-cicd.netlify.app/)

# Netlify Setup:
- Signup/Login on https://www.netlify.com/
- Download build folder from here: https://drive.google.com/drive/folders/1B0-LX17DJmNHPvjyBz4HCAwV0J852ZOH?usp=sharing 
- Drag and drop build folder here you will get live url of your site: https://app.netlify.com/drop 
- Go to https://app.netlify.com/user/applications#personal-access-tokens and generate a new access token. You can use "Gitlab CD" as the description of your token. Copy and save this token we need this later
- Go to Site Overview => Site Settings => General => Copy site ID (We will need it later)

# Gitlab Setup:
- Signup/Login on https://gitlab.com/
- Go to https://gitlab.com/projects/new#blank_project =>  Give it any name(eg: cicd-pipeline) => Visibility Level = Public => Create project
- Go to settings => ci/cd => variables these two variables:
  - key: NETLIFY_AUTH_TOKEN, value: (copied earlier)
  - key: NETLIFY_SITE_ID, value: (copied earlier)
- Go to Repository/Project => Branches => New Branch => Create a new branch from main with any name(eg: feat-calculator)
- Clone the project on your local machine using git clone command


# Local Machine Setup And Changes:
- Download this folder and copy all inner files/folder into your cloned folder https://drive.google.com/drive/folders/1hc6hpT6oJSGLWO_gawokDYrvxC26IxCj?usp=sharing
- Open the cloned project in code editor
- **IMPORTANT:** Checkout the branch which you have created earlier and NOT THE MAIN BRANCH. You will do all changes in your branch and we will merge this branch in main on successful pipeline build
- Run command in terminal(in case of error, install nodejs https://nodejs.org/en/download/):  **npm i** 
- Go to src/calculator => only add.js is implemented. You will need to implement for subtract.js, multiply.js, divide.js
- Go to src/index.test.js => only Addition is implemented. You will need to implement Subtraction, Multiplication, Division
- Run this command to build project: **npm run build**
- Run this command to run test cases: **npm run test** 
- You can open and view build/index.html file in broweser to check you changes
- In case of successful build and test, commit changes in your branch and push the changes to remote repository and wait for piplines/jobs to pass
- Go to gitlab => new merge request => **Source branch:** (Your branch name) => **Target branch:** main
- **Title:** changes you made, Merge options: uncheck delete => Create merge request => merge 
- Go to pipelines => once build, test is completed => click on deploy play icon
- Site will be deployed automatically to netlify and all functionalities should work(add, subtract, multiply, delete)

# Useful Links:
- [Basic Git Commands](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/)
- [CI/CD](https://about.gitlab.com/topics/ci-cd/)
- [About DevOps](https://aws.amazon.com/devops/what-is-devops/)
- [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/)
- [About DevOps](https://aws.amazon.com/devops/what-is-devops/)
