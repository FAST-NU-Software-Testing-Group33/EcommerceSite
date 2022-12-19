SAST:

Static application security testing (SAST), or static analysis, is a testing methodology that analyzes source code to find security vulnerabilities that make your organization’s applications susceptible to attack. 

I have chosen snyk for my Nodejs project because it was easy to use and configure, and also because it had a free version (I couldn't find many free SAST tools).

Snyk analyses the github repository and detect any security vulnerability or other issue. This tool has detected 31 issues in my project. The problems detected are related to Path Traversal, Hardcoded Secrets, Cross-Site Request Forgery (CSRF), Information Exposure, Improper Type Validation, and Allocation of Resources Without Limits or Throttling.

I have also added a PDF report of the analysis.

Linter:

I have added ESLint for linting in the project. I used npm package manager to install the linter. ESLint detects problems in code quality, performance issues and also enforces code syntax. 