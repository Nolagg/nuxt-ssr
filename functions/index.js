// Server side render our html 
const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');
const express = require('express');

const app = express(); // get express server up and running

// config for nuxt server
const config = {
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath : '/'
    }
};

const nuxt = new Nuxt(config); // create new Nuxt server using config

// handle requests to our Nuxt server and return a response in the following function
function handleRequest(req, res) {
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200'); // set up CDN caching for the dynamic server-side rendered response
    nuxt.renderRoute('/') // Go to the root route as we only have one page in our app
      .then(result => { // returns promise of a result
          res.send(result.html);
      })
      .catch(e => { // catch any errors
          res.send(e);
      });
}

app.get('*', handleRequest);  // handle all route requests

exports.ssrapp = functions.https.onRequest(app);