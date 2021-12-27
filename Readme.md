# Add bootstrap to your website

👉 Go to bootstrap website signin template

https://getbootstrap.com/docs/5.1/examples/sign-in/?

👉 View the page source and copy all the code in the 'signup.html' file

Change the required fields in signup.html

## Add bootstrap css

👉 Visit the bootstarp cdn website

    https://www.bootstrapcdn.com/

👉 In signup.html, change the 'Bootstrap core CSS' link

    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"

👉 Change 'Custom stylesheets for this template' link

👉 Visit the signin.css file and copy all code and paste it in new css file and change the href

# Access static files in express

👉 When the server runs on a port, it cannot access the files on the system(static files).

👉 Create a folder named 'public' and move all the styles and images to that folder.

    app.use(express.static('public'));
