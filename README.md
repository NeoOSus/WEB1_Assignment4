# Assignment 4 — Forms and Validation

Student: [Your full name]  
Group: [Your group]

A simple frontend project built with HTML, CSS, JavaScript, and Bootstrap 5.

## Pages

- `index.html` — Task 0: a basic contact form.
- `task1.html` — Task 1: HTML5 validation using required, email, and maxlength.
- `task2.html` — Task 2: Bootstrap forms, grid, placeholders, and helper text.
- `task3.html` — Task 3: is-valid/is-invalid classes and validation feedback.
- `task4.html` — Task 4: registration with password confirmation, radio buttons, checkboxes, a country dropdown, and a Reset button.
- `style.css` — shared styles.
- `script.js` — form validation.

## Run locally

Extract the ZIP and open `index.html` in a browser. No installation or build is required.
Bootstrap loads from a CDN, so an internet connection is needed for styling.
The forms are demos: no data is sent or stored, and no account is created.

## Test the forms

1. Task 1: submit an empty form, then enter an invalid email. The browser should block submission. The message is limited to 500 characters.
2. Task 3: submit an empty form, then fill in the fields correctly. Red feedback should change to green.
3. Task 4: try a password shorter than 8 characters, mismatched passwords, an empty country, and no gender selection.
4. Complete the registration correctly to see the success message. Click Reset to clear the values and feedback.
5. Resize the browser window. Bootstrap grid fields should stack into one column on small screens.

## Publish with GitHub Pages

1. Create a public repository on GitHub.
2. Upload the contents of the `assignment4` folder to the repository root. Make sure `index.html` is in the root.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Select the **main** branch and **/(root)** folder, then click **Save**.
6. Wait for deployment. The website link will appear in Pages: `https://USERNAME.github.io/REPOSITORY/`.
7. Replace the student name and group above, add your website link to this README, and submit the repository link.

## References

- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Bootstrap validation](https://getbootstrap.com/docs/5.3/forms/validation/)
