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
const editorialSinglePost = [
   {
      "image":"7.jpg",
      "textContent":"Orci varius natoque penatibus et magnis",
      "date":"February 11, 2018"
   },
   {
      "image":"8.jpg",
      "textContent":"Orci varius natoque penatibus et magnis",
      "date":"February 11, 2018"
   },
   {
      "image":"9.jpg",
      "textContent":"Orci varius natoque penatibus et magnis",
      "date":"February 11, 2018"
   },
   {
      "image":"10.jpg",
      "textContent":"Orci varius natoque penatibus et magnis",
      "date":"February 11, 2018"
   },
   {
      "image":"11.jpg",
      "textContent":"Orci varius natoque penatibus et magnis",
      "date":"February 11, 2018"
   }
]
const footerContactWidget = {
      "mail":"contact@youremail.com",
      "phone":"+43 5278 2883 884",
      "website":"www.yoursitename.com"
   }
const footerPoliticsWidget = {
   "title":"Politics",
   "business":"Business",
   "markets":"Markets",
   "tech":"Tech",
   "luxury":"Luxury"
}
const footerFeaturedWidget = {
   "title":"Featured",
   "football":"Football",
   "golf":"Golf",
   "tennis":"Tennis",
   "motorsport":"Motorsport",
   "horseracing":"Horseracing",
   "equestrian":"Equestrian",
   "sailing":"Sailing",
   "skiing":"Skiing"
}
const footerFAQWidget = {
   "title":"FAQ",
   "aviation":"Aviation",
   "business":"Business",
   "traveller":"Traveller",
   "destinations":"Destinations",
   "features":"Features",
   "fooddrink":"Food/Drink",
   "hotels":"Hotels",
   "partnerhotels":"Partner Hotels"
}
const footerMoreWidget = {
   "title":"+More",
   "fashion":"Fashion",
   "design":"Design",
   "architecture":"Architecture",
   "arts":"Arts",
   "autos":"Autos",
   "luxury":"Luxury"
}
const singleArticleCommentArea = [
   {
      "author":"Tim-Othy",
      "image":"30.jpg",
      "date":"April 15, 2018",
      "commentText":"Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed"
   },
   {
      "author":"A-aron",
      "image":"30.jpg",
      "date":"April 15, 2018",
      "commentText":"Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed"
   },
   {
      "author":"B-LAKE",
      "image":"31.jpg",
      "date":"April 15, 2018",
      "commentText":"Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed"
   },
   {
      "author":"DEE-NICE",
      "image":"32.jpg",
      "date":"April 15, 2018",
      "commentText":"Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed"
   },
]
   app.get('/', (req, res, next) => {
      res.render('home', {
        "latestPostWidgetData":latestPostWidget,
        "newsSinglePostData":newsSinglePost,
        "newsWidgetData":newsWidget,
        "videoData":videoContent,
        "editorialMainPostData":editorialMainPost,
        "editorialSinglePostData":editorialSinglePost,
        "footerContactWidgetData":footerContactWidget,
        "footerPoliticsWidgetData":footerPoliticsWidget,
        "footerFeaturedWidgetData":footerFeaturedWidget,
        "footerFAQWidgetData":footerFAQWidget,
        "footerMoreWidgetData":footerMoreWidget
      });
   });

   app.get('/categories', (req, res, next) => {
      res.render('categories', {
         "latestPostWidgetData":latestPostWidget,
         "newsWidgetData":newsWidget,
         "footerContactWidgetData":footerContactWidget,
         "footerPoliticsWidgetData":footerPoliticsWidget,
         "footerFeaturedWidgetData":footerFeaturedWidget,
         "footerFAQWidgetData":footerFAQWidget,
         "footerMoreWidgetData":footerMoreWidget
      });
   });

   app.get('/single-article', (req, res, next) => {
      res.render('single-article', {
         "latestPostWidgetData":latestPostWidget,
         "newsWidgetData":newsWidget,
         "footerContactWidgetData":footerContactWidget,
         "footerPoliticsWidgetData":footerPoliticsWidget,
         "footerFeaturedWidgetData":footerFeaturedWidget,
         "footerFAQWidgetData":footerFAQWidget,
         "footerMoreWidgetData":footerMoreWidget,
         "singleArticleCommentAreaData":singleArticleCommentArea
      });
   });

   app.get('/about-us', (req, res, next) => {
      res.render('about-us',{
         "footerContactWidgetData":footerContactWidget,
         "footerPoliticsWidgetData":footerPoliticsWidget,
         "footerFeaturedWidgetData":footerFeaturedWidget,
         "footerFAQWidgetData":footerFAQWidget,
         "footerMoreWidgetData":footerMoreWidget
      });
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact',{
         "footerContactWidgetData":footerContactWidget,
         "footerPoliticsWidgetData":footerPoliticsWidget,
         "footerFeaturedWidgetData":footerFeaturedWidget,
         "footerFAQWidgetData":footerFAQWidget,
         "footerMoreWidgetData":footerMoreWidget
      });
   });

};