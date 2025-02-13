# Cougar Clicker

[My Notes](notes.md)

Imagine Cookie Cliker but with Cosmo instead delectible baked treats. Users will click on a image of Cosmo's face to update a score of how many times they've done so. With a scores page of player's high scores, they can compete with other users to see who can be the best Cougar Clicker!


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Click. Click click. Click click click. Is there anything more satisfying than clicking? The answer is yes! Clicking a big image of Cosmo The Cougar's face on your screen! Now you can enjoy your favorite passtime of clicking with this new BYU spirit on Cougar Clicker! Rise and Shout! The clickers are now out! Compete against friends to see who will be the Cougar Clicker Champion.

### Design

![IMG_7068](https://github.com/user-attachments/assets/07745fdc-21a5-4c81-b65d-916e3ec5b590)

At launch, the user will be on the login page where they will either have to create an account or login in using previously made credentials. After succesffully logining, the user will be directed to the main page, the game page. It will have the button of Cosmo's face with a score counter above it. Once Cosmo is clicked, the counter increases. At the bottom of the page, there are the links to go back to the login page to logout or go to the scores page. The scores page will contain an up-to-date, table with the top 10 users of Cougar Clicker based on their score.

### Key features

- Secure login over HTTPS
- Clicking the icon button to update the score counter
- Scores from all players displayed in realtime
- User scores are persistently stored

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. HTML pages for login, for the main page of cliking, and for the scores page
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **React** -  Provides login, updating clicker score, displays other users scores, and use of React for routing and components.
- **Service** - Backend service with endpoints for:
  - login
  - storing scores
  - retrieving scores
  - calling a 3rd party quote API to display random quotes
- **DB/Login** -  Store users and scores in database. Register and login users. Credentials securely stored in database. Can't access clicker or scores unless authenticated.
- **WebSocket** - Scores page automically updates according to players' scores in real time.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [peachfromtheirs.click](https://peachfromtheirs.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I have 4 html pages: home (named index.html), play, scores, about.
- [x] **Proper HTML element usage** - I use various html elements correctly, including a `nav` on every page and each of my `body` elements has a `header`, `main` and `footer`.
- [x] **Links** - I used links in the `nav` of every page to access the other pages of the site. Also the link to my GitHub repo is in the footer of every page.
- [x] **Text** - I use text in `paragraph` elements as well as others.
- [x] **3rd party API placeholder** - On the play.html page, there is a placeholder for the Anime Quote API I will be implementing.
- [x] **Images** - I changed the icon for the site as well as added the image of Cosmo's face as the button on the play.html page. There is also an image of BYU campus on the about.html page.
- [x] **Login placeholder** - There is a mock login page that has the `form` element to send the username and password to the server.
- [x] **DB data placeholder** - The scores.html page contains a table that will be propogated by the inforamtion of other player's scores as stored and accessed from a DB.
- [x] **WebSocket placeholder** - On the play.html page, there is the placeholder for when the WebSocket will display when another user starts playing the game and how many clicks the have.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I used my main.css file to give default settings to these elements.
- [x] **Navigation elements** - I used bootstrap for the menu but overrode it to make it horizontal.
- [x] **Responsive to window resizing** - I gave the elements in my html files flex identifier and made most elements responsively stay in the center of the screen.
- [x] **Application elements** - I made my play page look all officaily with the styling of the Cosmo button and showing the score.
- [x] **Application text content** - I styled the text on all my pages.
- [x] **Application images** - I have a styled image of Cosmo on my play screen and a picture of byu campus on my about page.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
