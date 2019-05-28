module.exports = (app) => {

   app.get('/', (req, res, next) => {
      res.render('home');
   });

   app.get('/categories', (req, res, next) => {
      res.render('categories');
   });

   app.get('/single-article', (req, res, next) => {
      res.render('single-article');
   });

   app.get('/about-us', (req, res, next) => {
      res.render('about-us');
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });

};