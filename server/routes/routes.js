const mysql = require('../config/mysql');

module.exports = (app) => {

   const latest_post_widget = [
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
   const news_single_post = [
      {
         "image": "12.jpg",
         "title": "Finance",
         "textContent": "Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet",
         "likeImage": "like.png",
         "chatImage": "chat.png",
         "likeCount": "392",
         "chatCount": "10"
      },
      {
         "image": "13.jpg",
         "title": "Finance",
         "textContent": "Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet",
         "likeImage": "like.png",
         "chatImage": "chat.png",
         "likeCount": "392",
         "chatCount": "10"
      },
      {
         "image": "14.jpg",
         "title": "Finance",
         "textContent": "Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet",
         "likeImage": "like.png",
         "chatImage": "chat.png",
         "likeCount": "392",
         "chatCount": "10"
      },
      {
         "image": "15.jpg",
         "title": "Finance",
         "textContent": "Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet",
         "likeImage": "like.png",
         "chatImage": "chat.png",
         "likeCount": "392",
         "chatCount": "10"
      },
   ]
   const news_widget = [
      {
         "newsWidgetDate": "April 14, 2018"
      },
      {
         "newsWidgetDate": "April 14, 2018"
      },
      {
         "newsWidgetDate": "April 14, 2018"
      },
      {
         "newsWidgetDate": "April 14, 2018"
      },
   ]
   const video_content = [
      {
         "image": "video1.jpg",
         "videoLink": "https://www.youtube.com/watch?v=8u1eyw9p1hg"
      },
      {
         "image": "video2.jpg",
         "videoLink": "https://www.youtube.com/watch?v=1wiz0UsBPac"
      },
      {
         "image": "video3.jpg",
         "videoLink": "https://www.youtube.com/watch?v=sFYo2-KUeTA"
      },
      {
         "image": "16.jpg",
         "videoLink": "https://www.youtube.com/watch?v=Dd7FixvoKBw"
      },
      {
         "image": "17.jpg",
         "videoLink": "https://www.youtube.com/watch?v=WLAq3JVJ6Ho"
      },
   ]
   const editorial_main_post = [
      {
         "image": "1.jpg",
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "date": "February 11, 2018"
      },
      {
         "image": "2.jpg",
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "date": "February 11, 2018"
      },
      {
         "image": "3.jpg",
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "date": "February 11, 2018"
      },
      {
         "image": "4.jpg",
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "date": "February 11, 2018"
      },
      {
         "image": "5.jpg",
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "date": "February 11, 2018"
      },
      {
         "image": "6.jpg",
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "date": "February 11, 2018"
      }
   ]
   const editorial_single_post = [
      {
         "image": "7.jpg",
         "textContent": "Orci varius natoque penatibus et magnis",
         "date": "February 11, 2018"
      },
      {
         "image": "8.jpg",
         "textContent": "Orci varius natoque penatibus et magnis",
         "date": "February 11, 2018"
      },
      {
         "image": "9.jpg",
         "textContent": "Orci varius natoque penatibus et magnis",
         "date": "February 11, 2018"
      },
      {
         "image": "10.jpg",
         "textContent": "Orci varius natoque penatibus et magnis",
         "date": "February 11, 2018"
      },
      {
         "image": "11.jpg",
         "textContent": "Orci varius natoque penatibus et magnis",
         "date": "February 11, 2018"
      }
   ]

   const footer_contact_widget = { 
      "contact":[
         "contact@youremail.com",
         "+43 5278 2883 884",
         "www.yoursitename.com"
      ]
   }
   const footer_politics_widget = {
      "title": "Politics",
      "business": "Business",
      "markets": "Markets",
      "tech": "Tech",
      "luxury": "Luxury"
   }
   const footer_featured_widget = {
      "title": "Featured",
      "football": "Football",
      "golf": "Golf",
      "tennis": "Tennis",
      "motorsport": "Motorsport",
      "horseracing": "Horseracing",
      "equestrian": "Equestrian",
      "sailing": "Sailing",
      "skiing": "Skiing"
   }
   const footer_fAQ_widget = {
      "title": "FAQ",
      "aviation": "Aviation",
      "business": "Business",
      "traveller": "Traveller",
      "destinations": "Destinations",
      "features": "Features",
      "fooddrink": "Food/Drink",
      "hotels": "Hotels",
      "partnerhotels": "Partner Hotels"
   }
   const footer_more_widget = {
      "title": "+More",
      "fashion": "Fashion",
      "design": "Design",
      "architecture": "Architecture",
      "arts": "Arts",
      "autos": "Autos",
      "luxury": "Luxury"
   }
   const single_article_comment_area = [
      {
         "author": "Tim-Othy",
         "image": "30.jpg",
         "date": "April 15, 2018",
         "commentText": "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed"
      },
      {
         "author": "A-aron",
         "image": "30.jpg",
         "date": "April 15, 2018",
         "commentText": "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed"
      },
      {
         "author": "B-LAKE",
         "image": "31.jpg",
         "date": "April 15, 2018",
         "commentText": "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed"
      },
      {
         "author": "DEE-NICE",
         "image": "32.jpg",
         "date": "April 15, 2018",
         "commentText": "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed"
      },
   ]

   app.get('/database', async (req, res, next) => {
      let db = await mysql.connect();
      let [products] = await db.execute('SELECT * FROM products');
      db.end();

      res.render('testTemplate.ejs', {
         'products': products
      });

   });


   app.get('/', (req, res, next) => {
      res.render('home', {
         "latestPostWidgetData": latest_post_widget,
         "newsSinglePostData": news_single_post,
         "newsWidgetData": news_widget,
         "videoData": video_content,
         "editorialMainPostData": editorial_main_post,
         "editorialSinglePostData": editorial_single_post,
         "footerContactWidgetData": footer_contact_widget,
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget
      });
   });



   app.get('/categories', (req, res, next) => {
      res.render('categories', {
         "latestPostWidgetData": latest_post_widget,
         "newsWidgetData": news_widget,
         "footerContactWidgetData": footer_contact_widget,
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget
      });
   });

   app.get('/single-article', (req, res, next) => {
      res.render('single-article', {
         "latestPostWidgetData": latest_post_widget,
         "newsWidgetData": news_widget,
         "footerContactWidgetData": footer_contact_widget,
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "singleArticleCommentAreaData": single_article_comment_area
      });
   });

   app.get('/about-us', (req, res, next) => {
      res.render('about-us', {
         "footerContactWidgetData": footer_contact_widget,
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget
      });
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         "footerContactWidgetData": footer_contact_widget,
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget
      });
   });

};