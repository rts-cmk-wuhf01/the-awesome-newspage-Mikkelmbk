module.exports = (app) => {

  const latestPostWidget =  [
            {
               "title": "Finances",
               "image": "19.jpg",
               "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
               "dateTime": "April 14, 2019, 07:00:00"
            },
            {
               "title": "Politics",
               "image": "20.jpg",
               "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
               "dateTime": "April 14, 2019, 07:00:00"
            },
            {
               "title": "Health",
               "image": "21.jpg",
               "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
               "dateTime": "April 14, 2019, 07:00:00"
            },
            {
               "title": "Finance",
               "image": "22.jpg",
               "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
               "dateTime": "April 14, 2019, 07:00:00"
            },
            {
               "title": "Travel",
               "image": "23.jpg",
               "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
               "dateTime": "April 14, 2019, 07:00:00"
            },
            {
               "title": "Politics",
               "image": "24.jpg",
               "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
               "dateTime": "April 14, 2019, 07:00:00"
            },
         ]
  const newsSinglePost = [
            {
               "image":"12.jpg",
               "title":"Finance",
               "textContent":"Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet",
               "likeImage":"like.png",
               "chatImage":"chat.png",
               "likeCount":"392",
               "chatCount":"10"
            }

         ]
  const newsWidget = [
      {
         "newsWidgetDate":"April 14, 2018"
      },
      {
         "newsWidgetDate":"April 14, 2018"
      },
      {
         "newsWidgetDate":"April 14, 2018"
      },
      {
         "newsWidgetDate":"April 14, 2018"
      },
]

   app.get('/', (req, res, next) => {
      
      res.render('home', {
        "latestPostWidgetData":latestPostWidget,
        "newsSinglePostData":newsSinglePost,
        "newsWidgetData":newsWidget
      });
   });

   app.get('/categories', (req, res, next) => {
      res.render('categories', {
         "latestPostWidgetData":latestPostWidget,
         "newsWidgetData":newsWidget
      });
   });

   app.get('/single-article', (req, res, next) => {
      res.render('single-article', {
         "latestPostWidgetData":latestPostWidget,
         "newsWidgetData":newsWidget
      });
   });

   app.get('/about-us', (req, res, next) => {
      res.render('about-us');
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });

};