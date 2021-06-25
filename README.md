# cypress-ind
# npm i --save-dev cypress-mochawesome-reporter
# Single command = cypress-mochawesome-reporter mocha mochawesome mochawesome-merge mochawesome-report-generator cypress-multi-reporters


# Now we need to merge the reports into single html file
# npm i --save-dev mochawesome-merge
# Target = "report:merge": "mochawesome-merge --reportDir cypress/results/json > cypress/results/mochawesome-bundle.json"

# AFter merging, we have to generate a html file now
# npm i --save-dev mochawesome-report-generator
# target = "report:generate": "marge cypress/results/mochawesome-bundle.json -o cypress/reports/html"

# target to clean reports = "pretest:run": "rm -rf cypress/screenshots cypress/results cypress/reports"


Clean reports:
rmdir = remove directory
/s = deletes a directory tree, the specified directory and all its subdirectories, including all files
/q = Specifies quiet mode. Does not prompt for confirmation when deleting a directory tree. The /q parameter works only if /s is also specified




