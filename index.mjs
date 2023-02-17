import inquirer from "inquirer";

import fs from "fs/promises";

// input

const { title, overview, technicalCriteria, applicationDemo, links, builtWith, whatILearned, futureDevelopment, usefulResources, author, github, acknowledgements  } = await inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "overview",
    message: "Please provide an overview of your project:",
  },
  {
    type: "input",
    name: "technicalCriteria",
    message:
      "Please provide the technical acceptance criteria for your project:",
  },
  {
    type: "input",
    name: "applicationDemo",
    message: "Please provide a link to an application demo:",
  },
  {
    type: "input",
    name: "links",
    message: "Please provide any relevant links:",
  },
  {
    type: "input",
    name: "builtWith",
    message: "What technologies did you use to build your project?",
  },
  {
    type: "input",
    name: "whatILearned",
    message: "What did you learn while building this project?",
  },
  {
    type: "input",
    name: "futureDevelopment",
    message: "What plans do you have for future development of this project?",
  },
  {
    type: "input",
    name: "usefulResources",
    message: "Please list any useful resources you used:",
  },
  {
    type: "input",
    name: "author",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "acknowledgements",
    message: "Please provide any acknowledgements:",
  },
]);

const readMeInput = `# ${title}

## Table of contents

- [Overview](#overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Application Demo](#application-demo)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Future Development](#future-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Overview

${overview}

## Acceptance Criteria

${technicalCriteria}

#### Technical Acceptance Criteria

## Application Demo

${applicationDemo}

## Links

${links}

## Built with...

${builtWith}

## What I learned

${whatILearned}

## Future Development

${futureDevelopment}

## Useful Resources

${usefulResources}

## Author
- ${author}

- [${author}](https://github.com/${github})


## Acknowledgements}
`;

await fs.writeFile("README.md", readMeInput);
