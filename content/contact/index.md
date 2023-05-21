---
layout: layouts/page.njk
title: Contact me
---

Let's keep in touch! You can contact me on [WhatsApp](https://wa.me/972543330085) or [email](mailto:{{ siteconfig.email }}), or just fill in the form and I'll get back to you:

<form accept-charset="UTF-8" action="https://getform.io/f/55b4f464-339f-4a71-a8ca-5992d4998d9e" method="POST" enctype="multipart/form-data"  target="_blank" id="contactform">
    <div>
        Name: <input type="text" name="name" placeholder="Your name" required />
    </div>
    <div>
        Email: <input type="email" name="email" placeholder="Your email address" required />
    </div>
    <div>
        Phone: <input type="text" name="phone" placeholder="Your phone number" required />
    </div>
    <div>
        Message:<br/>
        <textarea type="text" name="message" placeholder="Enter your message here" required></textarea>
    </div>
    <!-- add hidden Honeypot input to prevent spams -->
    <input type="hidden" name="_gotcha" style="display:none !important" />
    <div>
        <button type="submit">Send</button>
    </div>
</form>
