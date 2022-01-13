# React Project for Dynamic Forms

This is a simple React project that demonstrates the problem we are trying to resolve.

## Problem Statement

The application starts with a form that invites the user to add a new form. When `Add` is clicked, a new form is added to the application above the `add-new-form` component.

**Requirement 1:** We would like to disable the `Add` button until the new form has been saved.

The form that appears after clicking `Add` should have a `Save` button. When the user clicks the `Save` button, the form should be saved and the `Add` button should be enabled again.

**Requirement 2:** Only the `Save` button should appear when it is first created.

Once the `Save` button is clicked, the `Edit` button should appear and the `Add` button on the `add-new-form` component should be enabled.

**Requirement 3:** The `Edit` button appear when the form is saved.

**Requirement 4:** The `Add` button should only be enabled when all forms have been saved.

There is no limit to the number of forms we should be able to add.
