# DemoQA Cypress Framework

Automation testing framework built with Cypress for end-to-end testing scenarios on DemoQA.

## Tech Stack

- Cypress
- JavaScript
- Mochawesome Reporter

## Project Structure

```bash
cypress/
├── e2e/
├── fixtures/
├── pages/
├── support/
└── utils/
```

## Installation

```bash
npm install
```

## Run Tests

Run the complete test suite in headless mode:

```bash
npm test
```

Open Cypress Test Runner:

```bash
npm run cy:open
```

Run tests directly with Cypress:

```bash
npm run cy:run
```

## Reporting

Mochawesome reports are generated after test execution.

Generated artifacts can be found in the project directory after running the suite.