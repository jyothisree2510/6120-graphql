# 6120-graphql
Graphql server setup and analysis files

Graphql 

Numerous businesses are increasingly depending on mobile applications, which has led to serious worries about data security, particularly for apps that serve vulnerable user groups. These populations may need particular assistance via mobile applications, such as those with impairments, those who are homeless, and those who are abusing drugs. However since these populations frequently use programs that handle sensitive data, security is crucial. Using GraphQL server management, vulnerability evaluations, and network traffic monitoring, this paper thoroughly investigates a few chosen apps, emphasizing security flaws and privacy issues.

This analysis serves two purposes: 
1. To find possible weaknesses in these apps' functionality and design, such as unsafe data transfer, inadequate access control, and disclosing personally identifiable information (PII) to other parties.
2. To illustrate useful methods for identifying and recording security flaws and making suggestions to improve application security. 

Graphql server analysis
We have created a GraphQL server to facilitate the storage and retrieval of application data. This enables each app to manage and query data such as ID, name, sensitive data, and queries made. The code that sets up the GraphQL server, schema, and resolvers to track and increase the number of queries for each application is shown below.
 
Structure and Use of the File
There are four primary files which we used

1. server.js: This is the primary file used to launch the Apollo GraphQL server.
2. schema.js: The GraphQL schema also specifies the types, queries, and mutations.
3. resolvers.js: Puts the resolver functions into practice to manage data retrieval and alteration.
4. analysis.js: Has logic for analyzing app data, including determining use trends and data sensitivity.
The software may be easily expanded by adding additional kinds, queries, or analytical logic as needed thanks to its modular nature.

1.	Main server initialization:
The schema and resolvers are initialized in the Apollo Server by the server.js file. At initialization, it records the server URL and binds the server to a certain port.
 

The server file serves as the entry point for the API by configuring and starting the GraphQL server.
The functionality here is it listens on a designated port after importing the schema and resolvers, which provide the logic and structure of the API.

The GraphQL server is started via the server.js file, which also connects the resolvers and schema and makes the API available at http://localhost:4000.

2. Developing the Schema
The data types, queries, and mutations are defined in the schema.js file using the GraphQL schema language.
 
The schema file specifies the GraphQL API's structure, including App, AppAnalysis, and the operations that are provided.

Here, the AppAnalysis is  Stores risk assessment data, including queriesRisk and riskLevel.
GetAllApps is a query that retrieves all applications along with an analysis of them.
appAnalysis is that it Retrieves information about a certain app by using its ID.
createApp is that it generates a new application with sensitive data fields and a name.
increment series is that it increases an application's queries made count.

The schema specifies the format and accessibility of app data, including elements for evaluating the sensitivity of each app's data and usage trends. While mutations permit change, such as the creation of apps or the updating of query counts, queries permit the retrieval of app data.


3. Dealing with Data Mutations and Retrieval
The logic for every query and modification is implemented in the resolvers.js file. Additionally, the analysis methods from analysis.js are imported.

 

 

The main goal is to manage the functionality for every query and schema mutation.
Queries: getAllApps: Utilizes analysis's getAllAppAnalyses().JavaScript to get and analyze app data.
appAnalysis: It retrieves the analysis for a certain app using getAppAnalysis(id).

createApp: It updates the appDataStore with a new application.
increaseQueries: It boosts the number of queries made for the designated application.

The real data and the API are connected using a js file. It makes use of analytical assistance functions.JavaScript to give each app's computed risk ratings according to its queries made and sensitive data.

4. Logic for App Analysis
Each app's risk level and query risk are determined by the analysis.js file according to its use and data sensitivity.
 
 


The goal of analysis.js is to use the app attributes to determine the risk level and query risk.
the risk level is set to "Low" normally, or "High" if sensitive data is true.
queriesRisk: "Low Usage" if queriesMade is less than 10, and "High Usage" otherwise.


getAppAnalysis(id): Provides analysis for a particular application based on its id.
Analysis for every app in the appDataStore is returned by the getAllAppAnalyses() function.

Here for every app, a computed analysis based on use and sensitivity is provided via the js file. By providing techniques for both single-app and bulk analysis, it supports the API.
This GraphQL server configuration offers a dynamic and adaptable method of evaluating application usage and sensitivity. This API facilitates effective and customized app analysis by fusing GraphQL's robust querying features with unique analytic logic, assisting stakeholders in comprehending data sensitivity and use trends across various apps. As needs change, the modular design makes it simple to add additional features or analytical parameters.


Windows power shell or Terminal

 


In the above screenshot, we got a successful startup of a GraphQL server using Apollo Server. 
The command `node src/server.js` is run in the terminal, starting the server at `http://localhost:4000/`. 
This shows that now the server is ready for testing queries and mutations via Apollo Playground, accessible through the provided URL.

GraphQL query: getAllApps
The getAllApps query is intended to obtain an exhaustive list of apps from the GraphQL server, including full information about the use trends and data sensitivity of each application. For the analysis and monitoring of several apps in a single request, this query is crucial.


**Structure of Queries**
For every application, the following fields are retrieved by the getAllApps query:
•	id: Each application's unique identification, which guarantees unique data retrieval.
•	name: The application's name, which is useful for recognizing each app in the list.

•	sensitiveData: A boolean field that indicates if sensitive data—such as private or sensitive information—is included in the application.
•	queriesMade: An integer value that indicates how many times an application query has been made; this value aids in monitoring use trends.

•	analysis: An embedded object that offers a risk evaluation according to the queriesMade values and sensitiveData of each app.

•	riskLevel: A computed field that displays the app's risk level according to its sensitivity. "High" is the riskLevel of an application with sensitiveData set to true, whereas "Low" is the riskLevel of an application with sensitiveData set to false.

•	queriesRisk: Using the queriesMade value as a basis, this field offers information on the usage risk. "Low Usage" for the queriesRisk is often the consequence of low usage (e.g., queriesMade of 0).


When evaluating data security and consumption across several applications, the getAllApps query is essential.
By compiling all of this data into a single query, we can:
•	Find High-Risk applications: By highlighting applications that handle sensitive data, the riskLevel field enables targeted attention to data security procedures.
•	Track Usage Trends: By tracking how frequently each app is viewed, the queriesRisk field might reveal information on possible data exposure or operational monitoring requirements.
•	Analyze Data Sensitivity: To assist with compliance and privacy audits, the sensitive data field highlights apps that handle sensitive data.

 
 

**Results from 14 Applications**
The 14 applications' GraphQL testing identified similar trends in security procedures and data sensitivity management. To determine risk levels, each application's sensitiveData, queriesMade, and analysis fields were examined. The results point to places where data security should be improved as well as certain systemic security issues that affect several apps. The main conclusions are described as follows:

1.	Exposure to Sensitive Data:

Approximately 70% of apps deal with sensitive data, including behavioral and personal data. GraphQL endpoints did not exhibit any direct weaknesses, however managing sensitive data always increases risk.
Applications that handle sensitive data without strong data security measures run the risk of privacy issues in the event that endpoint vulnerabilities develop later.

2.	Sensitivity is high while query frequency is low:

"Low Usage" danger is shown in the low query frequency (queriesMade of 0 or minimum use) displayed by the majority of programs. The existence of sensitive data in numerous apps, even with modest utilization, raises the danger of total data exposure in the event that usage patterns alter.

3.	Lack of Security Procedures:

Although the GraphQL API does not specifically evaluate popular security methods like HTTPS, it is believed that many apps might not have encryption in transit. This presumption is supported by findings from related apps where unencrypted connections were found.
Sensitive information may be exposed by applications without encrypted connections, particularly when used over open or unprotected networks.

4.	Absence of rate limiting and query limits:

There were no limitations on query limits, despite the minimal utilization at the moment. Applications may eventually become susceptible to excessive querying or data scraping if query throttling is not implemented, particularly as traffic grows.

5.	Sensitive Endpoints Without Authentication:

If GraphQL endpoints are publicly available, testing showed no particular authentication, which might result in illegal data access.
When endpoints are not limited to authorized users, the dangers of sensitive data exposure grow.

**Suggestions for Enhancements in Security**
Several suggestions may be put into practice in light of these findings to strengthen these apps' security posture:

1. Make All API Connections HTTPS:

Enforce HTTPS to guarantee that all data sent between the client and server is encrypted. This prevents private data from being intercepted while in transit.
Unauthorized data interception and man-in-the-middle (MITM) attacks may be avoided by using HTTPS on all endpoints, including GraphQL.

2.	Put Authorization and Authentication into Practice for GraphQL Endpoints:

To protect GraphQL endpoints and limit access to authorized users exclusively, utilize robust authentication techniques (such as OAuth2 and JWT).
Make sure that only authorized staff may access certain data by enforcing role-based access control (RBAC), which limits access to sensitive data based on user authorization.

3.	Tokens for Secure Sessions:

Avoid keeping session tokens in local storage, where they may be subject to XSS attacks, and instead store them securely (for example, by utilizing HTTP-only and Secure options for cookies).
To reduce the possibility of session hijacking, put in place methods for session expiration and automated token refreshes.

4.	Employing Field-Level Permissions to Reduce Data Exposure:

To prevent extraneous information from being revealed through API answers, set up GraphQL resolvers to limit sensitive fields according to the user's role or permissions.
By restricting the data provided in response to particular queries, field-level access control helps reduce data exposure.

5.	Put Rate Limiting and Throttling into Practice:

To stop misuse by making numerous requests, set rate restrictions on GraphQL queries. This can aid in defending against data scraping and denial-of-service (DoS) assaults.
To manage the amount of queries, use API rate-limiting solutions such as API Gateway or a custom middleware in Apollo Server.

6.	Restrict the sharing of third-party data:

Limit the amount of data that is exchanged with outside services, particularly for apps that handle private data. Employ privacy-by-design guidelines to make sure that private information isn't shared with outside services without the express permission of the user.
Establish data-sharing guidelines to guarantee third-party integrations adhere to industry privacy regulations, such the CCPA or GDPR, in order to safeguard user data.

7.	Put GraphQL Endpoint Monitoring and Logging into Practice:

Configure GraphQL endpoint monitoring and logging to identify odd trends, including frequent searches or illegal access attempts.
Logging solutions such as Datadog, Prometheus, or Elasticsearch may be used to monitor use trends, spot any security breaches, and assist with compliance audits.

8.	GraphQL queries should use strong input validation:

To stop injection attacks, make sure that only intended input is handled by enforcing input validation in GraphQL resolvers.
Reduce the possibility of unwanted data modification by using libraries or middleware that verify query syntax and filter hazardous requests.


Conclusion

In particular, in this report we are describing how to set up a “GraphQL server” to measure query counts, manage application data, and keep an eye on critical data access. Systemic security vulnerabilities are highlighted in this paper for 14 apps, with a focus on data exposure, endpoint security, and handling sensitive data. Implementing robust encryption, access controls, data-sharing restrictions, and endpoint monitoring are necessary to mitigate these dangers. By implementing these suggestions, companies may improve endpoint security, reduce the risks of data exposure, and foster user confidence through strong data protection procedures. In order to ensure compliance with privacy rules and industry standards, these actions are crucial for apps managing sensitive information, especially those serving vulnerable populations.

