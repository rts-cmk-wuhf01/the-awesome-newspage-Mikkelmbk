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
            },
            {
               "image":"13.jpg",
               "title":"Finance",
               "textContent":"Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet",
               "likeImage":"like.png",
               "chatImage":"chat.png",
               "likeCount":"392",
               "chatCount":"10"
            },
            {
               "image":"14.jpg",
               "title":"Finance",
               "textContent":"Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet",
               "likeImage":"like.png",
               "chatImage":"chat.png",
               "likeCount":"392",
               "chatCount":"10"
            },
            {
               "image":"15.jpg",
               "title":"Finance",
               "textContent":"Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet",
               "likeImage":"like.png",
               "chatImage":"chat.png",
               "likeCount":"392",
               "chatCount":"10"
            },
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
const videoContent = [
     {
        "image":"video1.jpg",
        "videoLink":"https://www.youtube.com/watch?v=8u1eyw9p1hg"
     },
     {
        "image":"video2.jpg",
        "videoLink":"https://www.youtube.com/watch?v=1wiz0UsBPac"
     },
     {
        "image":"video3.jpg",
        "videoLink":"https://www.youtube.com/watch?v=sFYo2-KUeTA"
     },
     {
        "image":"16.jpg",
        "videoLink":"https://www.youtube.com/watch?v=Dd7FixvoKBw"
     },
     {
        "image":"17.jpg",
        "videoLink":"https://www.youtube.com/watch?v=WLAq3JVJ6Ho"
     },
  ]
const editorialMainPost = [
   {
      "image":"1.jpg",
      "textContent":"Orci varius natoque penatibus et magnis dis parturient montes.",
      "date":"February 11, 2018"
   },
   {
      "image":"2.jpg",
      "textContent":"Orci varius natoque penatibus et magnis dis parturient montes.",
      "date":"February 11, 2018"
   },
   {
      "image":"3.jpg",
      "textContent":"Orci varius natoque penatibus et magnis dis parturient montes.",
      "date":"February 11, 2018"
   },
   {
      "image":"4.jpg",
      "textContent":"Orci varius natoque penatibus et magnis dis parturient montes.",
      "date":"February 11, 2018"
   },
   {
      "image":"5.jpg",
      "textContent":"Orci varius natoque penatibus et magnis dis parturient montes.",
      "date":"February 11, 2018"
   },
   {
      "image":"6.jpg",
      "textContent":"Orci varius natoque penatibus et magnis dis parturient montes.",
      "date":"February 11, 2018"
   }
]
   app.get('/', (req, res, next) => {
      
      res.render('home', {
        "latestPostWidgetData":latestPostWidget,
        "newsSinglePostData":newsSinglePost,
        "newsWidgetData":newsWidget,
        "videoData":videoContent,
        "editorialMainPostData":editorialMainPost
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