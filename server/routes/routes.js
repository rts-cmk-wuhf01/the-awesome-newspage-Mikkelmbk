module.exports = (app) => {

   app.get('/', (req, res, next) => {
      res.render('home', {
         "latestPostWidgetData":
            [
               {
                  "title": "Finances",
                  "image": "19.jpg",
                  "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Politics",
                  "image": "20.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Health",
                  "image": "21.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Finance",
                  "image": "22.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Travel",
                  "image": "23.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Politics",
                  "image": "24.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
            ]
      });
   });

   app.get('/categories', (req, res, next) => {
      res.render('categories', {
         "latestPostWidgetData":
            [
               {
                  "title": "Finances",
                  "image": "19.jpg",
                  "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Politics",
                  "image": "20.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Health",
                  "image": "21.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Finance",
                  "image": "22.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Travel",
                  "image": "23.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Politics",
                  "image": "24.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
            ]
      });
   });

   app.get('/single-article', (req, res, next) => {
      res.render('single-article', {
         "latestPostWidgetData":
            [
               {
                  "title": "Finances",
                  "image": "19.jpg",
                  "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Politics",
                  "image": "20.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Health",
                  "image": "21.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Finance",
                  "image": "22.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Travel",
                  "image": "23.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
               {
                  "title": "Politics",
                  "image": "24.jpg",
                  "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
                  "dateTime": "2019-05-14 07:00:00"
               },
            ]
      });
   });

   app.get('/about-us', (req, res, next) => {
      res.render('about-us');
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });

};