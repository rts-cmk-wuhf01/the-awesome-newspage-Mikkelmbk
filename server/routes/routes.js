const mysql = require('../config/mysql');

module.exports = (app) => {

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

   app.get('/database/:category_id', async (req, res, next) => {
      let db = await mysql.connect();
      let [articles] = await db.execute('SELECT * FROM article');
      let [test] = await db.execute('SELECT * FROM article WHERE fk_category_id = ?', [req.params.category_id]);
      db.end();

      res.send(test);

      // res.render('testTemplate.ejs', {
      //    'products': products
      // });

   });


   app.get('/', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT category_title, category_id FROM categories');
      let [latest_post_widget] = await db.execute(`
      SELECT * 
      FROM categories 
      INNER JOIN article ON fk_category_id = category_id
      INNER JOIN image ON image_id = fk_article_image_id
      GROUP BY category_id`
      );

      db.end();

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
         "footerMoreWidgetData": footer_more_widget,
         "navigationCategoryData":categories
      });
   });



   app.get('/categories/:category_id', async (req, res, next) => { // når der står /categories i url'en
      let db = await mysql.connect();
      let [articles] = await db.execute(`
      SELECT image_name, category_title, article_title, author_name, article_like_count, article_comment_count
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      INNER JOIN categories ON fk_category_id = category_id
      INNER JOIN author ON fk_author_id = author_id
      WHERE fk_category_id = ?`, [req.params.category_id]);

      let [categories] = await db.execute('SELECT category_title, category_id FROM categories');
      let [latest_post_widget] = await db.execute(`
      SELECT * 
      FROM categories 
      INNER JOIN article ON fk_category_id = category_id
      INNER JOIN image ON image_id = fk_article_image_id
      GROUP BY category_id`
      );
      db.end();
      res.render('categories', { // så hentes filen ved navn categories og vises.
         "latestPostWidgetData": latest_post_widget,
         "newsWidgetData": news_widget,
         "footerContactWidgetData": footer_contact_widget,
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "navigationCategoryData":categories,
         "articlesData":articles


      });
   });

   app.get('/single-article', async (req, res, next) => {
      let db = await mysql.connect();
      let [articles] = await db.execute('SELECT * FROM article');
      let [categories] = await db.execute('SELECT category_title, category_id FROM categories');
      let [latest_post_widget] = await db.execute(`
      SELECT * 
      FROM categories 
      INNER JOIN article ON fk_category_id = category_id
      INNER JOIN image ON image_id = fk_article_image_id
      GROUP BY category_id`
      );
      db.end();
      res.render('single-article', {
         "latestPostWidgetData": latest_post_widget,
         "newsWidgetData": news_widget,
         "footerContactWidgetData": footer_contact_widget,
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "singleArticleCommentAreaData": single_article_comment_area,
         "navigationCategoryData":categories
      });
   });

   app.get('/about-us', async (req, res, next) => {
      let db = await mysql.connect();
      let [articles] = await db.execute('SELECT * FROM article');
      let [categories] = await db.execute('SELECT category_title, category_id FROM categories');
      db.end();
      res.render('about-us', {
         "footerContactWidgetData": footer_contact_widget,
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "navigationCategoryData":categories
      });
   });

   app.get('/contact', async (req, res, next) => {
      let db = await mysql.connect();
      let [articles] = await db.execute('SELECT * FROM article');
      let [categories] = await db.execute('SELECT category_title, category_id FROM categories');
      db.end();
      res.render('contact', {
         "footerContactWidgetData": footer_contact_widget,
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "navigationCategoryData":categories
      });
   });

};