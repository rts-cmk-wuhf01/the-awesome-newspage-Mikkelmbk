const mysql = require('../config/mysql');

module.exports = (app) => {




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
 
   app.get('/database/:category_id', async (req, res, next) => {
      let db = await mysql.connect();
      let [articles] = await db.execute('SELECT * FROM article');
      let [test] = await db.execute('SELECT * FROM article WHERE fk_category_id = ?', [req.params.category_id]);
      db.end();

   });


   app.get('/', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute(`
      SELECT category_title, category_id 
      FROM categories
      `);
      let [latest_post_widget] = await db.execute(`
      SELECT * 
      FROM categories 
      INNER JOIN article ON fk_category_id = category_id
      INNER JOIN image ON image_id = fk_article_image_id
      GROUP BY category_id`
      );
      let [large_featured_post] = await db.execute(`
      SELECT image_name, category_title, article_title, author_name, article_content, article_comment_count, article_like_count, article_id, category_id
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      INNER JOIN categories ON fk_category_id = category_id
      INNER JOIN author ON fk_author_id = author_id
      `);
      let [medium_featured_post] = await db.execute(`
      SELECT image_name, category_title, article_title, article_comment_count, article_like_count, article_id, category_id
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      INNER JOIN categories ON fk_category_id = category_id
      WHERE article_id >= 2 ORDER BY article_id ASC
      LIMIT 2
      `);
      let [news_single_post] = await db.execute(`
      SELECT image_name, category_title, article_title, article_comment_count, article_like_count, article_id, category_id
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      INNER JOIN categories ON fk_category_id = category_id
      WHERE article_id >= 4 ORDER BY article_id ASC
      LIMIT 4
      `);
      let [news_widget] = await db.execute(`
      SELECT article_date, article_title, article_id, article_like_count
      FROM article 
      ORDER BY article_like_count DESC LIMIT 4
      `);
      let [video_content] = await db.execute(`
      SELECT image_name, video_link
      FROM video
      INNER JOIN image ON fk_video_image_id = image_id
      LIMIT 5
      `);
      let [editorial_main_post] = await db.execute(`
      SELECT image_name, article_title, article_date, article_id
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      ORDER BY image_id ASC
      LIMIT 6
      `);
      let [editorial_single_post] = await db.execute(`
      SELECT image_name, article_title, article_date, article_id
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      ORDER BY article_date ASC
      LIMIT 5
      `);
      let [footer_contact_widget] = await db.execute(`
      SELECT contact_mail, contact_phone, contact_website
      FROM contact
      `);


      db.end();

      res.render('home', {
         "latestPostWidgetData": latest_post_widget,
         "largeFeaturedPostData":large_featured_post[0],// Når man modtager data fra en database er det ALTID et array, så hvis der kun er 1 objekt i det og man IKKE har tænkt sig at forEache, så SKAL man huske at skrive Index 0 så den er klar over at det er præcist det objekt du vil have fat i.
         "mediumFeaturedPostData":medium_featured_post,
         "newsSinglePostData": news_single_post,
         "newsWidgetData": news_widget,
         "videoData": video_content,
         "editorialMainPostData": editorial_main_post,
         "editorialSinglePostData": editorial_single_post,
         "footerContactWidgetData": footer_contact_widget[0], // Når man modtager data fra en database er det ALTID et array, så hvis der kun er 1 objekt i det og man IKKE har tænkt sig at forEache, så SKAL man huske at skrive Index 0 så den er klar over at det er præcist det objekt du vil have fat i.
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
      SELECT image_name, category_title, article_title, author_name, article_like_count, article_comment_count, article_content, article_id, category_id
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
      let [news_widget] = await db.execute(`
      SELECT article_date, article_title, article_id, article_like_count
      FROM article 
      ORDER BY article_like_count DESC LIMIT 4
      `);
      let [footer_contact_widget] = await db.execute(`
      SELECT contact_mail, contact_phone, contact_website
      FROM contact
      `);
      db.end();
      res.render('categories', { // så hentes filen ved navn categories og vises.
         "latestPostWidgetData": latest_post_widget,
         "newsWidgetData": news_widget,
         "footerContactWidgetData": footer_contact_widget[0],
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "navigationCategoryData":categories,
         "articlesData":articles


      });
   });

   app.get('/single-article/:article_id', async (req, res, next) => {
      let db = await mysql.connect();
      let [article] = await db.execute(`
      SELECT image_name, category_title, article_title, author_name, author_description, article_like_count, article_comment_count, article_content, author_title, category_id
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      INNER JOIN categories ON fk_category_id = category_id
      INNER JOIN author ON fk_author_id = author_id
      WHERE article_id = ?`, [req.params.article_id]);

      let [categories] = await db.execute('SELECT category_title, category_id FROM categories');
      let [latest_post_widget] = await db.execute(`
      SELECT * 
      FROM categories 
      INNER JOIN article ON fk_category_id = category_id
      INNER JOIN image ON image_id = fk_article_image_id
      GROUP BY category_id`
      );
      let [news_widget] = await db.execute(`
      SELECT article_date, article_title, article_id, article_like_count
      FROM article 
      ORDER BY article_like_count DESC LIMIT 4
      `);
      let [footer_contact_widget] = await db.execute(`
      SELECT contact_mail, contact_phone, contact_website
      FROM contact
      `);
      let [related_single_article] = await db.execute(`
      SELECT image_name, category_title, category_id, article_title, article_comment_count, article_like_count, article_id
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      INNER JOIN categories ON fk_category_id = category_id
      WHERE article_id >= 2
      LIMIT 2
      `);
      let [single_article_comment_area] = await db.execute(`
      SELECT image_name, user_name, comment_timestamp, comment_message
      FROM user
      INNER JOIN image ON fk_user_image_id = image_id
      INNER JOIN comments ON fk_user_id = user_id
      WHERE fk_article_id = ?`, [req.params.article_id]);

      db.end();
      res.render('single-article', {
         "latestPostWidgetData": latest_post_widget,
         "singleArticleData":article[0],
         "newsWidgetData": news_widget,
         "footerContactWidgetData": footer_contact_widget[0],
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "singleArticleCommentAreaData": single_article_comment_area,
         "navigationCategoryData":categories,
         "relatedSingleArticles":related_single_article
      });
   });

   app.get('/about-us', async (req, res, next) => {
      let db = await mysql.connect();
      let [articles] = await db.execute('SELECT * FROM article');
      let [categories] = await db.execute('SELECT category_title, category_id FROM categories');
      let [footer_contact_widget] = await db.execute(`
      SELECT contact_mail, contact_phone, contact_website
      FROM contact
      `);
      let [about_us_intro] = await db.execute(`
      SELECT article_content, article_title
      FROM article
      LIMIT 1
      `);
      let [about_us_employees] = await db.execute(`
      SELECT image_name, author_name, author_title
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      INNER JOIN author ON fk_author_id = author_id
      LIMIT 8
      `)
      db.end();
      res.render('about-us', {
         "footerContactWidgetData": footer_contact_widget[0],
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "navigationCategoryData":categories,
         "aboutUsIntroData":about_us_intro[0],
         "aboutUsEmployeesData":about_us_employees
      });
   });

   app.get('/contact', async (req, res, next) => {
      let db = await mysql.connect();
      let [articles] = await db.execute('SELECT * FROM article');
      let [categories] = await db.execute('SELECT category_title, category_id FROM categories');
      let [footer_contact_widget] = await db.execute(`
      SELECT contact_mail, contact_phone, contact_website
      FROM contact
      `);
      db.end();
      res.render('contact', {
         "footerContactWidgetData": footer_contact_widget[0],
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "navigationCategoryData":categories
      });
   });

};