# FastSite - Console
FastSite is a no-code tool to generate content-driven websites. It leverages the power of modern JAMStack and cloud-native technologies. 

**Stack:** 

| Layer     | Technology            | Provider          |
| --------- | --------------------- | ----------------- |
| Front-end | Static website        | Netlify           |
| Back-end  | Serverless Functions  | Netlify-functions |
| Database  | Cloud-native NoSQL DB | DataStax Astra    |

**Architecture**: 

FastSite consists of two sub-systems: 

1. FastSite-Console  (This project) - [Code](https://github.com/mtalwadiya/fastsite-console) - [Demo](https://fastsite-console.netlify.app/)
2. FastSite-Sites  - [Code](https://github.com/mtalwadiya/fastsite-sites) - [Demo](https://fastsite-sites.netlify.app/books)

![](https://drive.google.com/uc?id=1UgJPvB2SD_6jbL8sOUFoasRvfhv0sNuI)

# How to setup 

To get the project running, clone this repository and follow these steps:

- Install Netlify CLI:

```
npm install netlify-cli -g
```

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

 