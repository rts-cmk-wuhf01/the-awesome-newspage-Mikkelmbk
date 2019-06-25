const mysql = require("../config/mysql");

module.exports = app => {


   // her placeres alle de routes administrations panelet har brug for 

   app.get("/admin/categories", async (req, res, next) => {
	let categories = await getCategoriesWithoutLimit();
	res.render('admin_categories',{
		'categoriesData':categories
	});
  });


  app.post("/admin/categories", async (req, res, next) => {


		
		let title = req.body.category_title;
  
		let return_message = [];
  
		if (typeof title == 'undefined' || title == '' || !isNaN(title)) {
		   return_message.push('Hov, der gik noget galt med din title');
		};
  
  
		if (return_message.length > 0) { // hvis arrayet return_message's længde er større end 0
		   let db = await mysql.connect();
		   let categories = await getCategoriesWithoutLimit();
  
		   db.end();
		   res.render('admin_categories', {
			'categoriesData':categories,
			"returnMessageData": return_message.join(', '), // tag hvert index i arrayet og placer dem i en samlet string, men med komma og mellemrum imellem hver af dem.
			"valuesData": req.body // er en del af body-parser modulet, body her har intet med html body tagget at gøre.
		   });
  
		}
		else {
  
		   return_message = "Tak for din Besked vi vender tilbage hurtigst muligt";
		   let db = await mysql.connect();
		   let categories = await getCategoriesWithoutLimit();
  
		   let result = await db.execute(`
			INSERT INTO categories
			SET
			category_title = ?`,
			[title]);
  
		   if (result[0].affectedRows > 0) { // hvis der er mere end 1 række der er blevet påvirket i databasen (altså at den har modtaget noget) så kør if statement koden
			  // console.log(affectedRows);
			  res.redirect('/admin_categories'); // omdirriger til /contact siden men med ?success på.
		   }
		   else {
			  res.render('admin_categories', {
				 "categoriesData":categories,
				 "returnMessageData": return_message,
				 "valuesData": []
			  });
		   }
		   db.end();
  
		}
  });

  app.get("/admin/categories/edit/:category_id", async (req, res, next)=> {
	let categories = await getCategoriesWithoutLimit();
	let db = await mysql.connect();
	let [category] = await db.execute(`
	SELECT category_title, category_id FROM categories
	WHERE category_id = ?`, [req.params.category_id]);
	db.end();

	res.render('admin_categories',{
		"categoriesData":categories,
		"categoryData":category[0]
	})
  });


  async function getCategoriesWithoutLimit(){
	let db = await mysql.connect();
	let [categories] = await db.execute('SELECT category_title, category_id FROM categories');
	db.end();
	return categories
 };

};