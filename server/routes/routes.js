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

   app.get('/', async (req, res, next) => {
      let db = await mysql.connect();
      
      let categories = await getCategoriesWithLimit(db);

      let latest_post_widget = await getLatestPostWidgets(db);

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

      let news_widget = await getNewsWidget(db);

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
      let footer_contact_widget = await getFooterContactWidget(db);

      let mega_menu_articles = await getMegaMenuArticles(db);

      db.end();

      res.render('home', {
         "latestPostWidgetData": latest_post_widget,
         "largeFeaturedPostData": large_featured_post[0],// Når man modtager data fra en database er det ALTID et array, så hvis der kun er 1 objekt i det og man IKKE har tænkt sig at forEache, så SKAL man huske at skrive Index 0 så den er klar over at det er præcist det objekt du vil have fat i.
         "mediumFeaturedPostData": medium_featured_post,
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
         "navigationCategoryData": categories,
         "megaMenuArticlesData": mega_menu_articles
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

      let categories = await getCategoriesWithoutLimit(db);

      let latest_post_widget = await getLatestPostWidgets(db);

      let news_widget = await getNewsWidget(db);

      let footer_contact_widget = await getFooterContactWidget(db);

      let mega_menu_articles = await getMegaMenuArticles(db);

      let latest_comments_widget = await getLatestCommentsWidget(db);

      db.end();
      res.render('categories', { // så hentes filen ved navn categories og vises. (kommentar del af linje 155 kommentar)
         "latestPostWidgetData": latest_post_widget,
         "newsWidgetData": news_widget,
         "footerContactWidgetData": footer_contact_widget[0],
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "navigationCategoryData": categories,
         "articlesData": articles,
         "megaMenuArticlesData": mega_menu_articles,
         "latestCommentsWidgetData": latest_comments_widget

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

      let categories = await getCategoriesWithoutLimit(db);
      
      let latest_post_widget = await getLatestPostWidgets(db);

      let news_widget = await getNewsWidget(db);

      let footer_contact_widget = await getFooterContactWidget(db);

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

      let mega_menu_articles = await getMegaMenuArticles(db);

      let latest_comments_widget = await getLatestCommentsWidget(db)

      db.end();
      
      res.render('single-article', {
         "latestPostWidgetData": latest_post_widget,
         "singleArticleData": article[0],
         "newsWidgetData": news_widget,
         "footerContactWidgetData": footer_contact_widget[0],
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "singleArticleCommentAreaData": single_article_comment_area,
         "navigationCategoryData": categories,
         "relatedSingleArticles": related_single_article,
         "megaMenuArticlesData": mega_menu_articles,
         "latestCommentsWidgetData": latest_comments_widget
      });
   });

   app.get('/about-us', async (req, res, next) => {
      let db = await mysql.connect();

      let categories = await getCategoriesWithoutLimit(db);

      let footer_contact_widget = await getFooterContactWidget(db);

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
      `);

      let mega_menu_articles = await getMegaMenuArticles(db);

      db.end();
      res.render('about-us', {
         "footerContactWidgetData": footer_contact_widget[0],
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "navigationCategoryData": categories,
         "aboutUsIntroData": about_us_intro[0],
         "aboutUsEmployeesData": about_us_employees,
         "megaMenuArticlesData": mega_menu_articles
      });
   });

   app.get('/contact', async (req, res, next) => {
      let db = await mysql.connect();
      let categories = await getCategoriesWithoutLimit(db);

      let footer_contact_widget = await getFooterContactWidget(db);

      let mega_menu_articles = await getMegaMenuArticles(db);

      db.end();
      let return_message = ""

      if (req.query.success != undefined) { // hvis der står ?success i url'en, så sæt return_message til at være nedenstående string.
         return_message = "Tak for din Besked vi vender tilbage hurtigst muligt";

      }
      res.render('contact', {
         "footerContactWidgetData": footer_contact_widget[0],
         "footerPoliticsWidgetData": footer_politics_widget,
         "footerFeaturedWidgetData": footer_featured_widget,
         "footerFAQWidgetData": footer_fAQ_widget,
         "footerMoreWidgetData": footer_more_widget,
         "navigationCategoryData": categories,
         "megaMenuArticlesData": mega_menu_articles,
         "returnMessageData": return_message // send return_message og udskriv den i h4 tag (Se replyForm.ejs filen)
                                             // return_message har intet med return_message i app.post routet at gøre.
      });
   });

   app.post('/contact', async (req, res, next) => {

      let name = req.body.name;
      let email = req.body.email;
      let subject = req.body.subject;
      let message = req.body.message;
      let contactDate = new Date();

      let return_message = [];

      if (typeof name == 'undefined' || name == '') {
         return_message.push('Navn Mangler');
      };

      if (typeof email == 'undefined' || email == '') {
         return_message.push('Email Mangler');
      };

      if (typeof subject == 'undefined' || subject == '') {
         return_message.push('Emne Mangler');
      };

      if (typeof message == 'undefined' || message == '') {
         return_message.push('Besked Mangler');
      };

      if (return_message.length > 0) { // hvis arrayet return_message's længde er større end 0
         let db = await mysql.connect();
         let categories = await getCategoriesWithoutLimit(db);

         let footer_contact_widget = await getFooterContactWidget(db);

         let mega_menu_articles = await getMegaMenuArticles(db);

         db.end();
         res.render('contact', {
            "footerContactWidgetData": footer_contact_widget[0],
            "footerPoliticsWidgetData": footer_politics_widget,
            "footerFeaturedWidgetData": footer_featured_widget,
            "footerFAQWidgetData": footer_fAQ_widget,
            "footerMoreWidgetData": footer_more_widget,
            "navigationCategoryData": categories,
            "megaMenuArticlesData": mega_menu_articles,
            "returnMessageData": return_message.join(', '), // tag hvert index i arrayet og placer dem i en samlet string, men med komma og mellemrum imellem hver af dem.
            "valuesData": req.body // er en del af body-parser modulet, body her har intet med html body tagget at gøre.
         });

      }
      else {

         return_message = "Tak for din Besked vi vender tilbage hurtigst muligt";
         let db = await mysql.connect();
         let categories = await getCategoriesWithoutLimit(db);

         let footer_contact_widget = await getFooterContactWidget(db);

         let mega_menu_articles = await getMegaMenuArticles(db);

         let result = await db.execute(`
         INSERT INTO modtaget_data 
         SET
         modtaget_data_name = ?,
         modtaget_data_email = ?,
         modtaget_data_subject = ?,
         modtaget_data_message = ?,
         modtaget_data_date = ?`, [name, email, subject, message, contactDate]);

         if (result[0].affectedRows > 0) { // hvis der er mere end 1 række der er blevet påvirket i databasen (altså at den har modtaget noget) så kør if statement koden
            res.redirect('/contact?success'); // omdirriger til /contact siden men med ?success på.
         }
         else {
            res.render('contact', {
               "footerContactWidgetData": footer_contact_widget[0],
               "footerPoliticsWidgetData": footer_politics_widget,
               "footerFeaturedWidgetData": footer_featured_widget,
               "footerFAQWidgetData": footer_fAQ_widget,
               "footerMoreWidgetData": footer_more_widget,
               "navigationCategoryData": categories,
               "megaMenuArticlesData": mega_menu_articles,
               "returnMessageData": return_message,
               "valuesData": []
            });
         }
         db.end();

      }

   });

   async function getCategoriesWithoutLimit(db){
      let [categories] = await db.execute('SELECT category_title, category_id FROM categories');
      return categories
   };

   async function getCategoriesWithLimit(db){
      let [categories] = await db.execute(`
      SELECT category_title, category_id 
      FROM categories
      LIMIT 8`);
      return categories
   };

   async function getLatestPostWidgets(db){
      let [latest_post_widget] = await db.execute(`
      SELECT * 
      FROM categories 
      INNER JOIN article ON fk_category_id = category_id
      INNER JOIN image ON image_id = fk_article_image_id
      GROUP BY category_id`
      );
      return latest_post_widget
   };

   async function getNewsWidget(db){
      let [news_widget] = await db.execute(`
      SELECT article_date, article_title, article_id, article_like_count
      FROM article 
      ORDER BY article_like_count DESC LIMIT 4
      `);
      return news_widget;
   }

   async function getFooterContactWidget(db){
      let [footer_contact_widget] = await db.execute(`
      SELECT contact_mail, contact_phone, contact_website
      FROM contact
      `);
      return footer_contact_widget;
   };

   async function getMegaMenuArticles(db){
      let [mega_menu_articles] = await db.execute(`
      SELECT image_name, article_date, category_title, article_title, article_id, category_id
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      INNER JOIN categories ON fk_category_id = category_id
      ORDER BY article_date ASC
      LIMIT 2
      `);
      return mega_menu_articles;
   };

   async function getLatestCommentsWidget(db){
      let [latest_comments_widget] = await db.execute(`
      SELECT image_name, user_name, article_title, article_date, article_id
      FROM article
      INNER JOIN image ON fk_article_image_id = image_id
      INNER JOIN user ON fk_user_id = user_id
      ORDER BY article_date
      LIMIT 4
      `);
      return latest_comments_widget;
   };

};