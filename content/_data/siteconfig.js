require("dotenv").config();

module.exports = {
    // Website title, shown in left sidebar and in page title
    title: "Assaf Tzur-El",
    // Site URL to generate absolute URLs. Used across the board.
    url: process.env.URL || "http://www.tzurel.co.il",
    email: "assaf@tzurel.co.il",
    // Profile image for left sidebar
    image: "/assets/images/assaf-profile.jpg",
    // Image alt text for left sidebar
    imageAlt: "Assaf Tzur-El",
    // Author name, shown in left sidebar, and used in JSON-LD
    author: "Assaf Tzur-El",
    // Site description, shown below site image (optional)
    description: "Empowering Dev Teams | Engineering Excellence",
    // OpenGraph default image, in case you don't have an `image`
    // set in your Markdown frontmatter; relevant for social
    // sharing.
    openGraphDefaultImage: "/assets/images/assaf-profile.jpg",
    // GitHub ID (optional, remove it not needed), used for link in the left sidebar
    socialGitHub: "AssafTzurEl",
    // LinkedIn ID  (optional, remove it not needed), used for link in the left sidebar
    socialLinkedIn: "assaftzurel",
    // Twitter ID  (optional, remove it not needed), used for link in the left sidebar, and for OpenGraph sharing information
    //socialTwitter: "muenzpraeger",
    // YouTube ID/Channel  (optional, remove it not needed), used for link in the left sidebar
    //socialYouTube: "UCH60RRaY2GI9m62z1loLjcA",
    // Google Analytics ID  (optional, remove it not needed), used for... well, Google Analytics
    googleAnalytics: "G-C0JG54YQ03",
};
