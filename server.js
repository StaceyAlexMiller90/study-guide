const express = require('express')

const port = process.env.PORT || 3000

const app = express()

process.env.PWD = process.cwd()

app.use(express.static(process.env.PWD + '/img'));

const onListen = () => {
  console.log(`Listening on: ${port}`)
}

app.listen(port, onListen)

const week = {
  Monday: {summary: 'Javascript Fundamentals...', 
          date: '17th February 2020',
          info: `<pre>
          
          Putting the practice to use.
          
          Getting familiar with writing javascript functions & declaring variables.
          
          Debugging tactics including "PRETTIFY, SEPARATE, LOG"
          
          <strong>Lesson of the day:</strong> 
          
          Dont wait till the end of writing your code to start logging your variables, check yourself often
          </pre>`, 
          image: '/js.jpg', 
          resource: `<pre>
          Keep practicing!
          
          <a href='https://coderbyte.com/'>https://coderbyte.com/</a>
          <a href='https://www.freecodecamp.org/'>https://www.freecodecamp.org//</a>
          </pre>`},
  Tuesday: {summary: 'Scope...', 
            date: '18th February 2020', 
            info: `Whatever happens in curly brackets, stays in curly brackets.`, 
            image: '/functions.jpg', 
            resource: `<iframe width="560" height="315" src="https://www.youtube.com/embed/gNhdufVqXeE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}, 
  Wednesday: {summary: 'Callbacks & Key Array Methods...', 
            date: '19th February 2020', 
            info: `
            <pre>
            A callback is when a function is passed as an argument to another function 
            to be called back later (not called directly in the argument).
            
            Learning some must know array methods, to simplify your code.
            
            Particularly map, find, filter.
            
            Understanding the arrow function syntax =>
            </pre>`, 
            image: '/map.jpg',
            resource: `
            <pre>
            
            <a href='https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d'>https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-
            and-filter-bd02c593cc2d</a>
            </pre>`},
  Thursday: {summary: 'Oh shit. Git?!?', 
            info: `
            <pre>

            <strong>create a repo</strong> in git hub

            <strong>git init</strong> - initialize an empty repo in your terminal (in the project folder!)

            <strong>npm init -y</strong>- to initialize npm packages (creates node_modules/ & package.json)

            <strong>create .gitignore file</strong> (not folder!)
            add node_modules/ to .gitignore & save

            <strong>git remote add origin 'yourgithublink'</strong> - to link github & repo in your folder

            <strong>git add nameofileOrfolder</strong>
            or
            <strong>git add . </strong>to add all folders/files ready to commit

            <strong>git commit -m "placeholdermessage e.g."</strong>

            <strong>git push origin master</strong>

            </pre>
            `, 
            date: '20th February 2020', 
            image: '/git.jpg',
            resource: `
            <pre>
            <a href='https://hackr.io/tutorials/learn-git'>https://hackr.io/tutorials/learn-git</a>
            </pre>`},
  Friday: {summary: 'The server & the client...', 
            info: `
            <pre>
            Creating a <strong>server</strong>

            Download express in your project with npm i express

            Ensure to import it js file using require()

            And then activate it e.g. const app = express()

            Add an onListen function to confirm/log when the server starts listening. 
            Local host is on port 3000.

            Register endpoints with app.get(/:paramter/', callbackFunctionToRunWhenItHearsIt)
            / is default path

            Then you can listen for specific endpoints like the ones you are controlling in this website. 

            ***********************************************************************

            Introduction to axios to act as the <strong>client</strong> to get data from the server

            Promises & async/await

            <strong>syncronous option.</strong>
            You could call your friend with a question & 
            wait for them to pick up the phone

            <strong>asyncronous option.</strong>
            You could send them a whatapp with your question & 
            make a cup of tea whilst they reply
            ! Don't forget to try & catch
            </pre>`, 
            date: '21st February 2020', 
            image: '/serverclient.png',
            resource: ''}
}

const render = (day) => {

    const dayPage = 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
    <style>

      body {
        font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
      }

      pre {
        font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
      }
      .spread {
        display: flex;
        justify-content: space-around;
        padding-top: 10px;
      }
      h1 {
        
      }
      a {
        width: 10rem;
        text-align: center;
      }
      .slash {
        width: 3rem;
      }
      img {
        display: block;
        margin-top: 50px;
        width: 350px;
        height: 300px;
      }
    </style>
    <title>${day}</title>
    </head>
    <body>
    <div class="spread">
    <a class="slash f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/">/</a>
    <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/Monday">Monday</a>
    <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/Tuesday">Tuesday</a>
    <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/Wednesday">Wednesday</a>
    <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/Thursday">Thursday</a>
    <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/Friday">Friday</a>
  </div>
    <article class="cf ph3 ph5-ns pv5">
      <header class="fn fl-ns w-50-ns pr4-ns">
        <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
          ${day}
        </h1>
        <h2 class="f3 mid-gray lh-title">
          ${week[day].summary}
        </h2>
        <time class="f6 ttu tracked gray">${week[day].date}</time>
        <img src='${week[day].image}' alt='image'></img>
      </header>
      <div class="fn fl-ns w-50-ns">
        <p class="f5 lh-copy measure mt0-ns">
          ${week[day].info}
        </p>
        <p class="f5 lh-copy measure">
           ${week[day].resource}
        </p>
      </div>
    </article>
    </body>
    </html>
    `
    return dayPage
}

const home = 
`
<!DOCTYPE html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
<style>
  .spread {
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
  }
  h1 {
    font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    margin-left: 10px;
  }
  a {
    width: 10rem;
    text-align: center;
  }
</style>
<title>week-1 @ codaisseur</title>
</head>
<body>
<header class="bg-gold sans-serif">
<div class="mw9 center pa4 pt5-ns ph7-l">
  <time class="f6 mb2 dib ttu tracked"><small>21st Feb 2020</small></time>
  <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
    <span class="bg-black-90 lh-copy white pa1 tracked-tight">
     Argghh brand new information!
    </span>
  </h3>
  <h4 class="f3 fw1 georgia i">A summary of Week 1 at Codaissseur...</h4>
  <h5 class="f6 ttu tracked black-80">By Stacey Miller</h5>
</div>
</header>
<h1 class="fw2 black-90 mv3">Pick a day, any day...</h1>
    <div class="spread">
      <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/Monday">Monday</a>
      <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/Tuesday">Tuesday</a>
      <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/Wednesday">Wednesday</a>
      <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/Thursday">Thursday</a>
      <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="/Friday">Friday</a>
    </div>
</body>
</html>
`

const displayPage = (request, response) => {
   const day = request.params.day
   if (Object.keys(week).includes(`${day}`)) {
     response.send(render(`${day}`))
   } else {
    response.send(home)
}
}

app.get('/', displayPage)
app.get('/:day/', displayPage)
//app.get('/summary/:day/', send)