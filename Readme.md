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

# Mailchimp api

👉 Signup for mailchimp api

    https://mailchimp.com/

Docs for mailchimp api

    https://mailchimp.com/help/about-api-keys/
    https://mailchimp.com/developer/
    https://mailchimp.com/developer/marketing/guides/quick-start

Get an API key ---- Login -> Account -> Extras -> API Keys -> Create API Key

    mailchimp/developer ---- Marketing API -> API Reference

1.  Lists -> Batch sub/unsub list members
    Requires List id and Members.

    🔯Login -> Audience -> All Contacts -> Settings -> Audience name and campaign defaults

    Note the unique Audience id or List id.

    🔯Members is a JSON object in the form of string sent to the mailchimp subscribers list.

2.  To sent data to the mailchimp API,

    🔯data = {
    🔯members:[
    {
    email_address: '',
    status: 'subscribed',
    merge_fields: {FNAME: '', LNAME:''}
    }
    ]
    }

merge_fields ---- Login -> Audience -> Settings -> Audience fields and MERGE tags

    https://mailchimp.com/developer/marketing/docs/merge-fields/#structure

X in the url is the last number in the api key (us-20).

# To make a POST request using npm

    import the 'request' module.

    const request = require('request');

https.request(url, options, function (response)

🔯url = 'https://usX.api.mailchimp.com/3.0/lists/{list_id}'
🔯options = {
method: 'POST',
user 'username:apikey'
}

### Check the subscribers under

Login -> Audience -> All contacts
