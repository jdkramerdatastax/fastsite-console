<!--- STARTEXCLUDE --->
# FastSite
*60m, advanced, [Start Building](https://github.com/DataStax-Examples/fastsite-console)*

FastSite is a no-code tool to generate content-driven websites. It leverages the power of modern JAMStack and cloud-native technologies. 
<!--- ENDEXCLUDE --->

![fastsite](https://raw.githubusercontent.com/DataStax-Examples/fastsite-console/master/hero.png)

Demo Video: [https://youtu.be/3Pw0-7XqjC8](https://youtu.be/3Pw0-7XqjC8)

## How this works

| Layer     | Technology                   | Provider        |
| --------- | ---------------------------- | --------------- |
| Front-end | SPA/ SPA-SSR/ Static website | Netlify/ Vercel |
| Back-end  | Serverless Functions         | Netlify/ Vercel |
| Database  | Cloud-native NoSQL DB        | DataStax Astra  |


## Get Started
To build and play with this app, follow the build instructions that are located here: [https://github.com/DataStax-Examples/fastsite-console](https://github.com/DataStax-Examples/fastsite-console)

<!--- STARTEXCLUDE --->
# Running FastSite
Follow the instructions below to get started.

## Prerequisites
Let's do some initial setup by creating a serverless(!) database.

### DataStax Astra
1. Create a [DataStax Astra account](https://dtsx.io/3DKySgr) if you don't already have one:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-register-basic-auth.png)

2. On the home page. Locate the button **`Create Database`**
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-dashboard.png)

3. Locate the **`Get Started`** button to continue
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-select-plan.png)

4. Define a **database name**, **keyspace name** and select a database **region**, then click **create database**.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-create-db.png)

5. Your Astra DB will be ready when the status will change from *`Pending`* to **`Active`** 💥💥💥 
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-active.png)

6. After your database is provisioned, we need to generate an Application Token for our App. Go to the `Settings` tab in the database home screen.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings.png)

7. Select `Admin User` for the role for this Sample App and then generate the token. Download the CSV so that we can use the credentials we need later.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings-token.png)

8. After you have your Application Token, head to the database connect screen and copy the connection information that we'll need later. We'll replace `ASTRA_DB_APPLICATION_TOKEN` with the `Token` value that is part of your Application Token.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-connect.png)


### Github
1. Click `Use this template` at the top of the [GitHub Repository](https://github.com/DataStax-Examples/fastsite-console):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-use-template.png)

2. Enter a repository name and click 'Create repository from template':
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-create-repository.png)

3. Clone the repository:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-clone.png)

<!--- 
Include locally as a minimum so that folks will
create an Astra DB and use your repository as a template.

Remove paths that you don't need.
--->
## 🚀 Getting Started Paths:
*Make sure you've completed the [prerequisites](#prerequisites) before starting this step*
  - [Running on your local machine](#running-on-your-local-machine)
  - [Running on Gitpod](#running-on-gitpod)
  - [Deploying to Netlify](#deploying-to-netlify)

### Running on your local machine

- Install all the project's dependencies:
```
npm i
```
- Enter the values in `.env` file for below variables: 

  DataStax Astra connection details: 
```
ASTRA_DB_ID
ASTRA_DB_REGION
ASTRA_DB_USERNAME
ASTRA_DB_KEYSPACE
ASTRA_DB_PASSWORD
```
​	  Access token to secure serverless functions: 

```
FUNCTIONS_ACCESS_TOKEN
```

​	Base URL of FastSite-Sites deployment: 

```
REACT_APP_SITES_URL
```

- Run the project locally:
```
netlify dev
```
- Build the project: 
```
npm run build
```

- Deploy: 

```
netlify deploy -p 
```

### Running on Gitpod
1. Click the 'Open in Gitpod' link:
[![Open in IDE](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Examples/fastsite-console)


### Deploying to Netlify
1. Click the 'Deploy to Netlify' button:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DataStax-Examples/fastsite-console)

<!--- ENDEXCLUDE --->
