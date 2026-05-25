# Defect Report

## DEFECT-001 - Submit button interaction may become inconsistent due to viewport and scrolling behavior

### Description
During test execution on the DemoQA Practice Form page, some interactive elements may become partially covered or positioned outside the visible viewport depending on browser size and scroll position.

This can cause intermittent interaction issues when attempting to click buttons or interact with form elements.

### Steps to Reproduce

1. Navigate to:
   `https://demoqa.com/automation-practice-form`

2. Resize the browser viewport or execute tests in different resolutions

3. Scroll through the page and attempt to interact with lower form elements or the submit button

### Expected Result

Elements should remain consistently accessible and fully interactable regardless of viewport size or scrolling behavior.

### Actual Result

Some elements may require additional scrolling or visibility handling before interaction succeeds consistently.

### Severity

Medium

### Priority

Medium

### Rationale

The issue does not completely block functionality, but it can introduce flaky behavior during automated execution and negatively affect test stability.

### Mitigation Applied

A reusable Cypress command was implemented to centralize scrolling and visibility handling before clicking elements.

Additionally, the framework configuration uses centered scrolling behavior to reduce overlap and visibility issues.