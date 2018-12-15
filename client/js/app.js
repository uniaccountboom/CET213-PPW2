// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});
 
//load up data from the API at runtime
app.request.json('http://localhost:3000/allreview', function(mydata1){ 
  app.data.review = mydata1; 
});
app.request.json('http://localhost:3000/allmusic', function(mydata2){ 
  app.data.music = mydata2; 
});
app.request.json('http://localhost:3000/allselling', function(mydata3){ 
  app.data.selling = mydata3; 
});

 
 console.log(app.data);

