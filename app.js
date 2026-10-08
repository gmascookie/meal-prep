/* Recipe library. Nutrition is per 1 serving (estimates). ing: [name, qty per serving, unit, store section] */
const R=(id,name,meals,m,ing,steps)=>({id,name,meals,...m,ing,steps});
const RECIPES=[
/* ---------- BREAKFAST ---------- */
R("b_pb_oats","Peanut butter overnight oats",["breakfast"],{c:"American",d:"veg",a:["dairy","peanuts"],k:450,p:28,cb:52,f:14,fb:8,t:5,sk:1,$:1,sp:0,fz:0,eq:[]},
 [["Rolled oats",0.5,"cup","Pantry"],["Plain Greek yogurt",0.5,"cup","Dairy & eggs"],["Milk",0.5,"cup","Dairy & eggs"],["Peanut butter",1,"tbsp","Pantry"],["Chia seeds",1,"tbsp","Pantry"],["Banana",0.5,"","Produce"]],
 ["Stir oats, yogurt, milk and chia seeds together in a jar.","Swirl in the peanut butter.","Cover and refrigerate overnight (keeps 4 days).","Top with sliced banana when you eat it."]),
R("b_egg_muffins","Veggie egg muffins",["breakfast"],{c:"American",d:"veg",a:["eggs","dairy"],k:280,p:22,cb:6,f:18,fb:2,t:35,sk:1,$:1,sp:0,fz:1,eq:["oven"]},
 [["Eggs",3,"","Dairy & eggs"],["Spinach",0.5,"cup","Produce"],["Bell pepper",0.25,"","Produce"],["Shredded cheddar",2,"tbsp","Dairy & eggs"],["Salt and pepper",0,"","Spices"]],
 ["Heat oven to 350°F (175°C) and grease a muffin tin.","Chop spinach and pepper and divide into the cups.","Whisk eggs with salt and pepper and pour over the veggies (3 cups per serving).","Sprinkle cheese on top and bake 20–22 minutes until set.","Cool, then refrigerate 4 days or freeze up to 2 months. Microwave 45 seconds."]),
R("b_parfait","Greek yogurt berry parfait",["breakfast"],{c:"American",d:"veg",a:["dairy","gluten"],k:380,p:30,cb:45,f:8,fb:7,t:5,sk:1,$:2,sp:0,fz:0,eq:[]},
 [["Plain Greek yogurt",1,"cup","Dairy & eggs"],["Frozen mixed berries",0.75,"cup","Frozen"],["High-fiber granola",0.33,"cup","Pantry"],["Chia seeds",1,"tbsp","Pantry"]],
 ["Spoon yogurt into a container.","Add berries and chia seeds.","Keep granola in a separate bag and add right before eating so it stays crunchy."]),
R("b_burrito","Freezer breakfast burritos",["breakfast"],{c:"Mexican",d:"meat",a:["eggs","gluten","dairy"],k:480,p:32,cb:42,f:20,fb:8,t:30,sk:2,$:2,sp:1,fz:1,eq:["stove"]},
 [["Large whole-wheat tortillas",1,"","Grains & bread"],["Eggs",2,"","Dairy & eggs"],["Ground turkey",0.13,"lb","Meat & seafood"],["Canned black beans",0.25,"cup","Pantry"],["Salsa",2,"tbsp","Pantry"],["Shredded cheddar",2,"tbsp","Dairy & eggs"]],
 ["Brown the turkey in a pan, breaking it up. Add drained beans.","Push to the side and scramble the eggs in the same pan.","Fill each tortilla with turkey, eggs, salsa and cheese. Roll tightly.","Wrap each in foil or plastic and freeze.","Reheat: unwrap, wrap in a paper towel, microwave 2 minutes, flipping halfway."]),
R("b_tofu_scramble","Tofu scramble with black beans",["breakfast"],{c:"Mexican",d:"vegan",a:["soy","gluten"],k:350,p:26,cb:24,f:16,fb:9,t:15,sk:1,$:1,sp:1,fz:0,eq:["stove"]},
 [["Extra-firm tofu",5,"oz","Meat & seafood"],["Canned black beans",0.33,"cup","Pantry"],["Spinach",1,"cup","Produce"],["Nutritional yeast",1,"tbsp","Pantry"],["Turmeric",0,"","Spices"],["Whole-grain bread",1,"slice","Grains & bread"]],
 ["Pat tofu dry and crumble it into a hot oiled pan.","Add turmeric, salt and pepper and cook 5 minutes.","Stir in beans, spinach and nutritional yeast until the spinach wilts.","Portion into containers. Toast bread fresh when eating."]),
R("b_shake","Berry protein smoothie",["breakfast"],{c:"American",d:"veg",a:["dairy"],k:340,p:32,cb:40,f:6,fb:7,t:5,sk:1,$:2,sp:0,fz:0,eq:["blender"]},
 [["Protein powder",1,"scoop","Pantry"],["Frozen mixed berries",1,"cup","Frozen"],["Banana",0.5,"","Produce"],["Spinach",1,"cup","Produce"],["Milk",1,"cup","Dairy & eggs"]],
 ["Prep: put berries, banana and spinach into freezer bags, one bag per day.","Morning: dump one bag in the blender with milk and protein powder.","Blend 30–45 seconds."]),
R("b_vegan_shake","Vegan protein smoothie",["breakfast"],{c:"American",d:"vegan",a:["soy"],k:330,p:30,cb:38,f:7,fb:8,t:5,sk:1,$:2,sp:0,fz:0,eq:["blender"]},
 [["Plant protein powder",1,"scoop","Pantry"],["Soy milk",1,"cup","Dairy & eggs"],["Frozen mixed berries",1,"cup","Frozen"],["Banana",0.5,"","Produce"],["Rolled oats",2,"tbsp","Pantry"]],
 ["Prep: portion berries, banana and oats into freezer bags.","Morning: blend one bag with soy milk and protein powder."]),
R("b_baked_oats","Blueberry baked oatmeal squares",["breakfast"],{c:"American",d:"veg",a:["eggs","dairy"],k:390,p:20,cb:55,f:10,fb:7,t:40,sk:1,$:1,sp:0,fz:1,eq:["oven"]},
 [["Rolled oats",0.66,"cup","Pantry"],["Eggs",1,"","Dairy & eggs"],["Plain Greek yogurt",0.33,"cup","Dairy & eggs"],["Milk",0.33,"cup","Dairy & eggs"],["Blueberries",0.5,"cup","Produce"],["Maple syrup",1,"tbsp","Pantry"],["Baking powder",0.25,"tsp","Pantry"],["Cinnamon",0,"","Spices"]],
 ["Heat oven to 350°F (175°C) and grease a baking dish.","Mix everything except blueberries in a bowl.","Fold in blueberries and pour into the dish.","Bake 30–35 minutes until the middle is firm.","Cool, cut into squares. Fridge 5 days or freeze."]),
R("b_cottage_toast","Cottage cheese tomato toast",["breakfast"],{c:"Mediterranean",d:"veg",a:["dairy","gluten"],k:330,p:25,cb:34,f:9,fb:6,t:5,sk:1,$:1,sp:0,fz:0,eq:[]},
 [["Whole-grain bread",2,"slice","Grains & bread"],["Cottage cheese",0.75,"cup","Dairy & eggs"],["Cherry tomatoes",0.5,"cup","Produce"],["Everything bagel seasoning",0,"","Spices"]],
 ["Toast the bread.","Spread cottage cheese on top.","Add halved tomatoes and a sprinkle of seasoning."]),
R("b_chia","Vanilla chia pudding",["breakfast"],{c:"American",d:"vegan",a:["soy"],k:320,p:14,cb:30,f:17,fb:15,t:5,sk:1,$:1,sp:0,fz:0,eq:[]},
 [["Chia seeds",3,"tbsp","Pantry"],["Soy milk",1,"cup","Dairy & eggs"],["Frozen mixed berries",0.5,"cup","Frozen"],["Maple syrup",1,"tsp","Pantry"],["Hemp hearts",1,"tbsp","Pantry"]],
 ["Whisk chia seeds, soy milk and maple syrup in a jar.","Wait 5 minutes, whisk again so it doesn't clump.","Refrigerate overnight (keeps 5 days).","Top with berries and hemp hearts."]),
R("b_salmon_bagel","Smoked salmon bagel",["breakfast"],{c:"American",d:"pesc",a:["fish","gluten","dairy"],k:430,p:28,cb:50,f:12,fb:4,t:5,sk:1,$:3,sp:0,fz:0,eq:[]},
 [["Whole-wheat bagels",1,"","Grains & bread"],["Smoked salmon",2,"oz","Meat & seafood"],["Light cream cheese",2,"tbsp","Dairy & eggs"],["Cucumber",0.25,"","Produce"]],
 ["Toast the bagel.","Spread cream cheese, add salmon and sliced cucumber."]),
R("b_shakshuka","Chickpea shakshuka",["breakfast"],{c:"Middle Eastern",d:"veg",a:["eggs","gluten"],k:360,p:20,cb:32,f:16,fb:9,t:30,sk:2,$:1,sp:1,fz:0,eq:["stove"]},
 [["Eggs",2,"","Dairy & eggs"],["Canned crushed tomatoes",0.5,"cup","Pantry"],["Canned chickpeas",0.33,"cup","Pantry"],["Onion",0.25,"","Produce"],["Bell pepper",0.25,"","Produce"],["Cumin and paprika",0,"","Spices"],["Whole-wheat pita",0.5,"","Grains & bread"]],
 ["Cook chopped onion and pepper in oil 5 minutes.","Add tomatoes, chickpeas, cumin and paprika. Simmer 10 minutes.","Portion sauce into containers.","Each morning: heat a portion in a small pan, crack in 2 eggs, cover 5–6 minutes. Eat with pita."]),
R("b_pancakes","Banana oat protein pancakes",["breakfast"],{c:"American",d:"veg",a:["eggs","dairy"],k:400,p:28,cb:48,f:10,fb:6,t:25,sk:2,$:1,sp:0,fz:1,eq:["stove","blender"]},
 [["Rolled oats",0.5,"cup","Pantry"],["Eggs",2,"","Dairy & eggs"],["Cottage cheese",0.33,"cup","Dairy & eggs"],["Banana",1,"","Produce"],["Baking powder",0.5,"tsp","Pantry"]],
 ["Blend everything until smooth.","Cook ¼-cup pours in a lightly oiled pan, 2 minutes per side.","Cool on a rack, then refrigerate or freeze with paper between them.","Reheat in the toaster or microwave."]),

/* ---------- LUNCH & DINNER ---------- */
R("m_burrito_bowl","Chicken burrito bowls",["lunch","dinner"],{c:"Mexican",d:"meat",a:[],k:620,p:48,cb:62,f:16,fb:14,t:40,sk:1,$:2,sp:1,fz:1,eq:["stove"]},
 [["Chicken breast",0.33,"lb","Meat & seafood"],["Brown rice (dry)",0.33,"cup","Grains & bread"],["Canned black beans",0.5,"cup","Pantry"],["Frozen corn",0.25,"cup","Frozen"],["Salsa",0.25,"cup","Pantry"],["Lime",0.25,"","Produce"],["Taco seasoning",1,"tsp","Spices"]],
 ["Cook rice following the package.","Toss chicken with taco seasoning and cook in a hot pan 6–7 minutes per side. Rest, then slice.","Warm beans and corn together.","Divide rice, beans, corn and chicken into containers. Top with salsa and lime."]),
R("m_turkey_chili","Turkey and bean chili",["lunch","dinner"],{c:"American comfort",d:"meat",a:[],k:520,p:42,cb:45,f:14,fb:15,t:45,sk:1,$:1,sp:1,fz:1,eq:["stove"]},
 [["Ground turkey",0.25,"lb","Meat & seafood"],["Canned kidney beans",0.5,"cup","Pantry"],["Canned crushed tomatoes",0.5,"cup","Pantry"],["Onion",0.25,"","Produce"],["Bell pepper",0.25,"","Produce"],["Chili powder",1.5,"tsp","Spices"]],
 ["Brown turkey with chopped onion and pepper in a big pot.","Add chili powder and cook 1 minute.","Add tomatoes and drained beans. Simmer 25 minutes, stirring now and then.","Cool, portion, refrigerate 4 days or freeze 3 months."]),
R("m_dal","Red lentil and spinach dal",["lunch","dinner"],{c:"Indian",d:"vegan",a:[],k:480,p:24,cb:70,f:10,fb:18,t:40,sk:1,$:1,sp:1,fz:1,eq:["stove"]},
 [["Red lentils (dry)",0.5,"cup","Pantry"],["Light coconut milk",0.25,"cup","Pantry"],["Canned crushed tomatoes",0.33,"cup","Pantry"],["Spinach",1,"cup","Produce"],["Onion",0.25,"","Produce"],["Garlic",1,"clove","Produce"],["Curry powder",1,"tsp","Spices"],["Basmati rice (dry)",0.25,"cup","Grains & bread"]],
 ["Cook rice following the package.","Soften onion and garlic in oil, add curry powder.","Add rinsed lentils, tomatoes and 1 cup water per serving. Simmer 20 minutes.","Stir in coconut milk and spinach until wilted.","Portion with rice. Freezes well."]),
R("m_butter_chicken","Lighter butter chicken with chickpeas",["lunch","dinner"],{c:"Indian",d:"meat",a:["dairy"],k:590,p:46,cb:55,f:17,fb:9,t:45,sk:2,$:2,sp:1,fz:1,eq:["stove"]},
 [["Chicken thighs",0.33,"lb","Meat & seafood"],["Tomato sauce",0.33,"cup","Pantry"],["Plain Greek yogurt",0.25,"cup","Dairy & eggs"],["Canned chickpeas",0.33,"cup","Pantry"],["Garam masala",1,"tsp","Spices"],["Basmati rice (dry)",0.25,"cup","Grains & bread"]],
 ["Cook rice following the package.","Cut chicken into bites and brown in a pan.","Add tomato sauce, garam masala and chickpeas. Simmer 15 minutes.","Turn off heat, stir in yogurt.","Portion with rice."]),
R("m_greek_sheetpan","Greek chicken sheet pan",["lunch","dinner"],{c:"Greek",d:"meat",a:["dairy"],k:560,p:45,cb:48,f:18,fb:10,t:45,sk:1,$:2,sp:0,fz:0,eq:["oven"]},
 [["Chicken breast",0.33,"lb","Meat & seafood"],["Baby potatoes",1,"cup","Produce"],["Canned chickpeas",0.33,"cup","Pantry"],["Zucchini",0.5,"","Produce"],["Red onion",0.25,"","Produce"],["Lemon",0.25,"","Produce"],["Tzatziki",2,"tbsp","Dairy & eggs"],["Dried oregano",0,"","Spices"]],
 ["Heat oven to 425°F (220°C).","Cut potatoes in half, chop zucchini and onion, cube chicken.","Toss everything (not tzatziki) with olive oil, lemon juice, oregano, salt.","Spread on 1–2 sheet pans and roast 30–35 minutes.","Portion and add tzatziki on the side."]),
R("m_teriyaki_salmon","Teriyaki salmon rice bowls",["lunch","dinner"],{c:"Japanese",d:"pesc",a:["fish","soy","gluten"],k:580,p:38,cb:55,f:20,fb:7,t:30,sk:1,$:3,sp:0,fz:0,eq:["oven"]},
 [["Salmon fillets",5,"oz","Meat & seafood"],["Brown rice (dry)",0.33,"cup","Grains & bread"],["Frozen edamame",0.5,"cup","Frozen"],["Broccoli",1,"cup","Produce"],["Teriyaki sauce",2,"tbsp","Pantry"]],
 ["Cook rice.","Heat oven to 400°F (200°C). Put salmon and broccoli on a pan, brush salmon with teriyaki.","Bake 12–15 minutes.","Warm edamame. Portion everything over rice. Eat within 3 days."]),
R("m_tofu_peanut","Peanut tofu stir-fry",["lunch","dinner"],{c:"Thai",d:"vegan",a:["soy","peanuts","gluten"],k:540,p:28,cb:55,f:22,fb:10,t:35,sk:2,$:1,sp:1,fz:0,eq:["stove"]},
 [["Extra-firm tofu",6,"oz","Meat & seafood"],["Frozen stir-fry vegetables",1.5,"cup","Frozen"],["Brown rice (dry)",0.33,"cup","Grains & bread"],["Peanut butter",1,"tbsp","Pantry"],["Soy sauce",1,"tbsp","Pantry"],["Frozen edamame",0.33,"cup","Frozen"]],
 ["Cook rice.","Press tofu dry, cube, and fry until golden.","Add vegetables and edamame, cook 5 minutes.","Whisk peanut butter, soy sauce and a splash of hot water; pour over and toss.","Portion over rice."]),
R("m_chicken_stirfry","Garlic ginger chicken stir-fry",["lunch","dinner"],{c:"Chinese",d:"meat",a:["soy","gluten"],k:520,p:45,cb:50,f:12,fb:8,t:30,sk:1,$:2,sp:0,fz:1,eq:["stove"]},
 [["Chicken breast",0.33,"lb","Meat & seafood"],["Frozen stir-fry vegetables",1.5,"cup","Frozen"],["Brown rice (dry)",0.33,"cup","Grains & bread"],["Soy sauce",1,"tbsp","Pantry"],["Garlic",1,"clove","Produce"],["Fresh ginger",0.5,"tsp","Produce"],["Frozen edamame",0.25,"cup","Frozen"]],
 ["Cook rice.","Slice chicken thin and cook in a hot pan 5–6 minutes.","Add garlic, ginger, vegetables and edamame; cook 5 minutes.","Add soy sauce and toss. Portion over rice."]),
R("m_korean_beef","Korean beef rice bowls",["lunch","dinner"],{c:"Korean",d:"meat",a:["beef","soy","gluten"],k:610,p:40,cb:60,f:20,fb:7,t:30,sk:1,$:2,sp:2,fz:1,eq:["stove"]},
 [["Lean ground beef",0.25,"lb","Meat & seafood"],["Brown rice (dry)",0.33,"cup","Grains & bread"],["Broccoli",1,"cup","Produce"],["Carrots",0.5,"","Produce"],["Gochujang",1,"tbsp","Pantry"],["Soy sauce",1,"tbsp","Pantry"],["Frozen edamame",0.25,"cup","Frozen"]],
 ["Cook rice. Steam or roast broccoli and carrots.","Brown beef in a pan and drain fat.","Stir in gochujang and soy sauce with a splash of water.","Portion beef, veggies and edamame over rice."]),
R("m_shawarma_bowl","Chickpea shawarma bowls",["lunch","dinner"],{c:"Middle Eastern",d:"vegan",a:[],k:560,p:20,cb:70,f:20,fb:18,t:30,sk:1,$:1,sp:1,fz:0,eq:["oven","stove"]},
 [["Canned chickpeas",0.75,"cup","Pantry"],["Quinoa (dry)",0.25,"cup","Grains & bread"],["Cucumber",0.33,"","Produce"],["Cherry tomatoes",0.5,"cup","Produce"],["Hummus",3,"tbsp","Dairy & eggs"],["Red onion",0.15,"","Produce"],["Shawarma spice",1,"tsp","Spices"]],
 ["Heat oven to 425°F (220°C). Toss drained chickpeas with oil and shawarma spice; roast 25 minutes.","Cook quinoa.","Chop cucumber, tomatoes and onion.","Build bowls: quinoa, chickpeas, veggies, hummus on the side."]),
R("m_white_bean_soup","Chicken and white bean soup",["lunch","dinner"],{c:"Italian",d:"meat",a:[],k:450,p:40,cb:38,f:12,fb:11,t:40,sk:1,$:1,sp:0,fz:1,eq:["stove"]},
 [["Chicken breast",0.25,"lb","Meat & seafood"],["Canned white beans",0.5,"cup","Pantry"],["Carrots",0.5,"","Produce"],["Celery",0.5,"stalk","Produce"],["Spinach",1,"cup","Produce"],["Chicken broth",1.5,"cup","Pantry"],["Italian seasoning",0.5,"tsp","Spices"]],
 ["Soften chopped carrot and celery in oil in a big pot.","Add broth, whole chicken breasts and seasoning. Simmer 20 minutes.","Take chicken out, shred with two forks, put it back.","Add beans and spinach, simmer 5 minutes. Freezes well."]),
R("m_turkey_meatballs","Turkey meatballs and pasta",["lunch","dinner"],{c:"Italian",d:"meat",a:["eggs","gluten"],k:600,p:45,cb:62,f:16,fb:10,t:45,sk:2,$:2,sp:0,fz:1,eq:["oven","stove"]},
 [["Ground turkey",0.3,"lb","Meat & seafood"],["Whole-wheat pasta",2,"oz","Grains & bread"],["Marinara sauce",0.5,"cup","Pantry"],["Eggs",0.25,"","Dairy & eggs"],["Breadcrumbs",2,"tbsp","Pantry"],["Spinach",1,"cup","Produce"]],
 ["Heat oven to 400°F (200°C).","Mix turkey, egg, breadcrumbs, salt and pepper. Roll into golf-ball meatballs.","Bake 18–20 minutes.","Cook pasta. Warm marinara with spinach, add meatballs.","Portion pasta and meatballs. Freezes well."]),
R("m_enchilada_bake","Black bean sweet potato enchilada bake",["lunch","dinner"],{c:"Mexican",d:"veg",a:["dairy"],k:520,p:22,cb:72,f:15,fb:17,t:50,sk:1,$:1,sp:1,fz:1,eq:["oven"]},
 [["Canned black beans",0.5,"cup","Pantry"],["Sweet potato",1,"cup","Produce"],["Corn tortillas",2,"","Grains & bread"],["Enchilada sauce",0.33,"cup","Pantry"],["Shredded cheddar",0.25,"cup","Dairy & eggs"],["Spinach",0.5,"cup","Produce"]],
 ["Heat oven to 400°F (200°C). Cube sweet potato and roast 20 minutes.","Mix sweet potato, beans and spinach.","Layer in a baking dish: sauce, tortillas, filling. Repeat.","Top with cheese and bake 20 minutes.","Cut into portions. Freezes well."]),
R("m_shrimp_fajita","Shrimp fajita bowls",["lunch","dinner"],{c:"Mexican",d:"pesc",a:["shellfish"],k:480,p:36,cb:50,f:14,fb:10,t:25,sk:1,$:3,sp:1,fz:0,eq:["stove"]},
 [["Shrimp (peeled)",5,"oz","Meat & seafood"],["Bell pepper",1,"","Produce"],["Onion",0.5,"","Produce"],["Brown rice (dry)",0.33,"cup","Grains & bread"],["Canned black beans",0.33,"cup","Pantry"],["Fajita seasoning",1,"tsp","Spices"],["Lime",0.25,"","Produce"]],
 ["Cook rice.","Slice peppers and onion; cook in a hot pan 6 minutes.","Add shrimp and seasoning; cook 3–4 minutes until pink.","Portion with rice and beans. Squeeze lime on top. Eat within 3 days."]),
R("m_pork_lentils","Dijon pork tenderloin with lentils",["lunch","dinner"],{c:"American comfort",d:"meat",a:["pork"],k:520,p:44,cb:45,f:14,fb:12,t:45,sk:2,$:2,sp:0,fz:1,eq:["oven","stove"]},
 [["Pork tenderloin",0.3,"lb","Meat & seafood"],["Green lentils (dry)",0.25,"cup","Pantry"],["Carrots",0.5,"","Produce"],["Brussels sprouts",1,"cup","Produce"],["Dijon mustard",1,"tsp","Pantry"]],
 ["Heat oven to 425°F (220°C).","Rub pork with Dijon, salt and pepper. Put on a pan with halved sprouts and chopped carrots.","Roast 20–25 minutes until pork reaches 145°F (63°C). Rest 5 minutes, slice.","Meanwhile simmer lentils in water 20–25 minutes; drain.","Portion pork, veggies and lentils."]),
R("m_caesar_wrap","Chicken Caesar wraps",["lunch"],{c:"American",d:"meat",a:["dairy","gluten","eggs"],k:520,p:42,cb:40,f:20,fb:8,t:20,sk:1,$:2,sp:0,fz:0,eq:["stove"]},
 [["Large whole-wheat tortillas",1,"","Grains & bread"],["Chicken breast",0.25,"lb","Meat & seafood"],["Romaine lettuce",1.5,"cup","Produce"],["Light Caesar dressing",2,"tbsp","Pantry"],["Parmesan",1,"tbsp","Dairy & eggs"],["Canned chickpeas",0.25,"cup","Pantry"]],
 ["Cook chicken in a pan 6–7 minutes per side, slice.","Store chicken, lettuce and chickpeas in containers; keep dressing separate.","Day of: toss lettuce with dressing and parmesan, add chicken and chickpeas, wrap."]),
R("m_tuna_bean_salad","Tuna and white bean salad",["lunch"],{c:"Mediterranean",d:"pesc",a:["fish"],k:450,p:40,cb:35,f:16,fb:11,t:15,sk:1,$:1,sp:0,fz:0,eq:[]},
 [["Canned tuna",1,"can","Pantry"],["Canned white beans",0.5,"cup","Pantry"],["Cucumber",0.33,"","Produce"],["Cherry tomatoes",0.5,"cup","Produce"],["Red onion",0.15,"","Produce"],["Lemon",0.25,"","Produce"],["Mixed greens",1,"cup","Produce"]],
 ["Drain tuna and beans.","Chop cucumber, tomatoes and onion.","Mix with olive oil, lemon juice, salt and pepper.","Portion over greens. Keeps 3 days."]),
R("m_quinoa_edamame","Sesame quinoa edamame salad",["lunch"],{c:"Japanese",d:"vegan",a:["soy","gluten"],k:480,p:24,cb:55,f:18,fb:12,t:25,sk:1,$:2,sp:0,fz:0,eq:["stove"]},
 [["Quinoa (dry)",0.33,"cup","Grains & bread"],["Frozen edamame",0.75,"cup","Frozen"],["Coleslaw mix",1,"cup","Produce"],["Carrots",0.5,"","Produce"],["Sesame dressing",2,"tbsp","Pantry"]],
 ["Cook quinoa and let it cool.","Thaw edamame under warm water.","Mix quinoa, edamame, slaw and grated carrot.","Add dressing. Keeps 4 days, eat cold."]),
R("m_lentil_bolognese","Lentil mushroom bolognese",["lunch","dinner"],{c:"Italian",d:"vegan",a:["gluten"],k:520,p:26,cb:80,f:8,fb:18,t:45,sk:1,$:1,sp:0,fz:1,eq:["stove"]},
 [["Green lentils (dry)",0.33,"cup","Pantry"],["Whole-wheat pasta",2,"oz","Grains & bread"],["Marinara sauce",0.5,"cup","Pantry"],["Mushrooms",0.5,"cup","Produce"],["Carrots",0.5,"","Produce"]],
 ["Chop mushrooms and carrot small; cook in oil 8 minutes.","Add lentils, marinara and 1 cup water per serving. Simmer 25 minutes.","Cook pasta.","Portion pasta with sauce. Sauce freezes well."]),
R("m_jerk_chicken","Jerk chicken with rice and peas",["lunch","dinner"],{c:"Caribbean",d:"meat",a:[],k:600,p:46,cb:62,f:16,fb:10,t:40,sk:1,$:2,sp:2,fz:1,eq:["oven","stove"]},
 [["Chicken thighs",0.33,"lb","Meat & seafood"],["Brown rice (dry)",0.33,"cup","Grains & bread"],["Canned kidney beans",0.33,"cup","Pantry"],["Jerk seasoning",1,"tbsp","Spices"],["Pineapple chunks",0.33,"cup","Produce"],["Light coconut milk",2,"tbsp","Pantry"]],
 ["Rub chicken with jerk seasoning (overnight if you can).","Roast at 425°F (220°C) for 25 minutes.","Cook rice with the coconut milk added to the water; stir in beans at the end.","Portion with pineapple on the side."]),
R("m_bbq_sheetpan","BBQ chicken and sweet potato sheet pan",["lunch","dinner"],{c:"BBQ",d:"meat",a:[],k:560,p:44,cb:58,f:12,fb:11,t:40,sk:1,$:2,sp:0,fz:1,eq:["oven"]},
 [["Chicken breast",0.33,"lb","Meat & seafood"],["Sweet potato",1,"cup","Produce"],["BBQ sauce",2,"tbsp","Pantry"],["Broccoli",1,"cup","Produce"],["Canned black beans",0.25,"cup","Pantry"]],
 ["Heat oven to 425°F (220°C).","Cube sweet potato, toss with oil and roast 15 minutes.","Add chicken brushed with BBQ sauce and broccoli to the pan. Roast 20 more minutes.","Slice chicken, portion with beans warmed on the side."]),
R("m_fish_tacos","Crispy cod tacos with slaw",["lunch","dinner"],{c:"Mexican",d:"pesc",a:["fish","dairy"],k:470,p:36,cb:48,f:14,fb:9,t:25,sk:2,$:2,sp:1,fz:0,eq:["oven"]},
 [["Cod fillets",5,"oz","Meat & seafood"],["Corn tortillas",3,"","Grains & bread"],["Coleslaw mix",1,"cup","Produce"],["Plain Greek yogurt",2,"tbsp","Dairy & eggs"],["Canned black beans",0.33,"cup","Pantry"],["Lime",0.25,"","Produce"],["Chili powder",0.5,"tsp","Spices"]],
 ["Heat oven to 425°F (220°C). Season cod with chili powder and salt; bake 12 minutes.","Mix slaw with yogurt, lime juice and salt.","Store fish, slaw and beans separately.","Warm fish and tortillas, then fill. Eat within 3 days."]),
R("m_tofu_tikka","Tofu tikka masala",["lunch","dinner"],{c:"Indian",d:"vegan",a:["soy"],k:520,p:30,cb:55,f:18,fb:12,t:40,sk:1,$:1,sp:1,fz:1,eq:["stove"]},
 [["Extra-firm tofu",6,"oz","Meat & seafood"],["Tikka masala sauce",0.33,"cup","Pantry"],["Canned chickpeas",0.33,"cup","Pantry"],["Basmati rice (dry)",0.25,"cup","Grains & bread"],["Spinach",1,"cup","Produce"]],
 ["Cook rice.","Press and cube tofu; brown in a pan 8 minutes.","Add sauce and chickpeas; simmer 10 minutes. Stir in spinach.","Portion with rice. Freezes well."]),
R("m_fried_rice","Veggie egg fried rice",["lunch","dinner"],{c:"Chinese",d:"veg",a:["eggs","soy","gluten"],k:500,p:26,cb:62,f:15,fb:9,t:25,sk:1,$:1,sp:0,fz:1,eq:["stove"]},
 [["Brown rice (dry)",0.33,"cup","Grains & bread"],["Eggs",2,"","Dairy & eggs"],["Frozen peas and carrots",0.75,"cup","Frozen"],["Frozen edamame",0.5,"cup","Frozen"],["Soy sauce",1,"tbsp","Pantry"],["Green onions",1,"","Produce"]],
 ["Cook rice the day before if you can (cold rice fries better).","Scramble eggs in a big pan, set aside.","Fry vegetables and edamame 4 minutes, add rice and soy sauce.","Stir eggs back in, top with green onion."]),
R("m_med_pasta_salad","Mediterranean chickpea pasta salad",["lunch"],{c:"Mediterranean",d:"veg",a:["dairy","gluten"],k:520,p:24,cb:66,f:18,fb:12,t:20,sk:1,$:1,sp:0,fz:0,eq:["stove"]},
 [["Whole-wheat pasta",2,"oz","Grains & bread"],["Canned chickpeas",0.5,"cup","Pantry"],["Cucumber",0.33,"","Produce"],["Cherry tomatoes",0.5,"cup","Produce"],["Feta",2,"tbsp","Dairy & eggs"],["Greek vinaigrette",2,"tbsp","Pantry"]],
 ["Cook pasta, rinse with cold water.","Chop cucumber and tomatoes.","Mix everything with the vinaigrette. Keeps 4 days, eat cold."]),

/* ---------- SNACKS ---------- */
R("s_yogurt","Greek yogurt and berries",["snack"],{c:"Any",d:"veg",a:["dairy"],k:180,p:18,cb:20,f:3,fb:3,t:2,sk:1,$:1,sp:0,fz:0,eq:[]},
 [["Plain Greek yogurt",0.75,"cup","Dairy & eggs"],["Frozen mixed berries",0.33,"cup","Frozen"]],["Portion into small containers with berries on top."]),
R("s_apple_pb","Apple and peanut butter",["snack"],{c:"Any",d:"vegan",a:["peanuts"],k:200,p:7,cb:25,f:9,fb:5,t:2,sk:1,$:1,sp:0,fz:0,eq:[]},
 [["Apples",1,"","Produce"],["Peanut butter",1,"tbsp","Pantry"]],["Slice the apple when you eat it; dip in peanut butter."]),
R("s_hummus","Hummus and veggie sticks",["snack"],{c:"Any",d:"vegan",a:[],k:170,p:6,cb:18,f:8,fb:6,t:10,sk:1,$:1,sp:0,fz:0,eq:[]},
 [["Hummus",3,"tbsp","Dairy & eggs"],["Carrots",1,"","Produce"],["Cucumber",0.33,"","Produce"]],["Cut carrots and cucumber into sticks on prep day.","Pack with a scoop of hummus."]),
R("s_chickpeas","Crunchy roasted chickpeas",["snack"],{c:"Any",d:"vegan",a:[],k:180,p:8,cb:25,f:5,fb:7,t:35,sk:1,$:1,sp:1,fz:0,eq:["oven"]},
 [["Canned chickpeas",0.5,"cup","Pantry"],["Smoked paprika",0,"","Spices"]],["Heat oven to 400°F (200°C). Drain and dry chickpeas very well.","Toss with oil, paprika and salt. Roast 30 minutes, shaking halfway.","Cool completely, store in a jar (not airtight) for 4 days."]),
R("s_cottage_pine","Cottage cheese and pineapple",["snack"],{c:"Any",d:"veg",a:["dairy"],k:170,p:20,cb:16,f:3,fb:1,t:2,sk:1,$:1,sp:0,fz:0,eq:[]},
 [["Cottage cheese",0.75,"cup","Dairy & eggs"],["Pineapple chunks",0.33,"cup","Produce"]],["Portion into containers."]),
R("s_protein_bar","High-fiber protein bar",["snack"],{c:"Any",d:"veg",a:["dairy","soy"],k:200,p:20,cb:22,f:7,fb:8,t:0,sk:1,$:2,sp:0,fz:0,eq:[]},
 [["Protein bars",1,"","Pantry"]],["Grab and go. Look for 15g+ protein and 5g+ fiber on the label."]),
R("s_eggs_fruit","Hard-boiled eggs and fruit",["snack"],{c:"Any",d:"veg",a:["eggs"],k:200,p:13,cb:15,f:10,fb:3,t:15,sk:1,$:1,sp:0,fz:0,eq:["stove"]},
 [["Eggs",2,"","Dairy & eggs"],["Oranges",1,"","Produce"]],["Boil eggs 10 minutes, then cool in cold water.","Keep peeled or unpeeled in the fridge for 5 days."]),
R("s_edamame","Salted edamame",["snack"],{c:"Any",d:"vegan",a:["soy"],k:180,p:16,cb:13,f:8,fb:8,t:5,sk:1,$:1,sp:0,fz:0,eq:[]},
 [["Frozen edamame",0.75,"cup","Frozen"]],["Microwave frozen edamame 2–3 minutes, sprinkle with salt.","Eat warm or cold."]),
R("s_trail_mix","Trail mix",["snack"],{c:"Any",d:"vegan",a:["nuts"],k:200,p:6,cb:18,f:13,fb:3,t:2,sk:1,$:2,sp:0,fz:0,eq:[]},
 [["Trail mix",0.25,"cup","Pantry"]],["Portion ¼ cup into small bags so it's easy to stop."]),
R("s_roll_ups","Turkey and cheese roll-ups",["snack"],{c:"Any",d:"meat",a:["dairy"],k:160,p:18,cb:3,f:8,fb:0,t:5,sk:1,$:2,sp:0,fz:0,eq:[]},
 [["Sliced deli turkey",2,"oz","Meat & seafood"],["Cheese slices",1,"","Dairy & eggs"]],["Roll cheese inside turkey slices. Keeps 3 days."]),
R("s_popcorn","Air-popped popcorn",["snack"],{c:"Any",d:"vegan",a:[],k:100,p:3,cb:19,f:1,fb:4,t:5,sk:1,$:1,sp:0,fz:0,eq:[]},
 [["Popcorn kernels",2,"tbsp","Pantry"]],["Pop kernels in a covered pot or microwave bag. Season lightly."]),
R("s_energy_bites","Peanut butter energy bites",["snack"],{c:"Any",d:"vegan",a:["peanuts"],k:190,p:7,cb:22,f:9,fb:5,t:15,sk:1,$:1,sp:0,fz:1,eq:[]},
 [["Rolled oats",0.25,"cup","Pantry"],["Peanut butter",1,"tbsp","Pantry"],["Chia seeds",1,"tsp","Pantry"],["Maple syrup",1,"tsp","Pantry"]],["Mix everything, chill 15 minutes.","Roll into balls (2 per serving). Fridge 1 week or freeze."])
];
(function(){
const KEY="mealprep-planner-v5";
const MEALS=["breakfast","lunch","dinner","snack"];
const ML={breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",snack:"Snacks"};
const MLs={breakfast:"breakfasts",lunch:"lunches",dinner:"dinners",snack:"snacks"};
const DAYS=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const DEFAULTS={
  reasons:[], sex:"", age:"", height:"", hunit:"in", weight:"", wunit:"lb", activity:"",
  diet:"", allergies:[], dislikes:"",
  meals:{breakfast:{on:true,n:1,days:7},lunch:{on:true,n:2,days:5},dinner:{on:true,n:2,days:5},snack:{on:false,n:2,days:7}},
  people:1, household:[], time:"", skill:"", equip:[], freezer:"any",
  cuisines:[], spice:"", budget:"", pantry:"",
  proteinAdj:"normal", trackCal:false,
  picks:{breakfast:[],lunch:[],dinner:[],snack:[]}, prevPicks:{breakfast:[],lunch:[],dinner:[],snack:[]}, prevNames:[], custom:{}, usual:{breakfast:null,lunch:null,dinner:null,snack:null}, share:null, override:{on:false,protein:"",fiber:"",cal:""},
  sort:{breakfast:"best",lunch:"best",dinner:"best",snack:"best"},
  checked:{}, completed:false, planDone:false, planDate:"", updatedAt:0
};
const clone=o=>JSON.parse(JSON.stringify(o));
function fresh(){return clone(DEFAULTS);}
function merge(v){const s=fresh();if(v&&!Array.isArray(v.household)&&v.people>1){v.household=Array.from({length:v.people-1},()=>({name:"",mode:"same",goal:"maintain",sex:"",age:"",weight:"",wunit:"lb",height:"",hunit:"in",activity:"1.375"}));}Object.assign(s,v||{});["meals","picks","prevPicks","sort","custom","usual","override"].forEach(k=>s[k]=Object.assign(clone(DEFAULTS[k]),v&&v[k]||{}));return s;}
let session=null; let S;
let view="home", step=0, reviewFrom="guided", pickIdx=0, dashTab="week";
let inputTimer;
let sampleFn=null, aiOff=true, genMsg="", askShare=false;
const jobs={};          // generation jobs per slot key: visible batch or a background "next batch"
const pool={};          // recipes created or loaded this visit, by id
const opts={};          // option ids shown for each slot, key "meal:i"

const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $=id=>document.getElementById(id);

/* ---------- connection to Supabase (sign-in, saving, AI) — no outside libraries ---------- */
const CFG=window.MEALPREP_CONFIG||{};
const SB=String(CFG.SUPABASE_URL||"").trim().replace(/\/+$/,"");
const SBKEY=String(CFG.SUPABASE_KEY||"").trim();
const HAS_BACKEND=!!(SB&&SBKEY);
const SESSION_KEY="mealprep-session";
const APP_URL=location.origin+location.pathname;
function loadSession(){try{const s=JSON.parse(localStorage.getItem(SESSION_KEY)||"null");return s&&s.access_token&&s.user?s:null;}catch(e){return null;}}
function storeSession(s){session=s;try{s?localStorage.setItem(SESSION_KEY,JSON.stringify(s)):localStorage.removeItem(SESSION_KEY);}catch(e){}}
function toSession(d){return {access_token:d.access_token,refresh_token:d.refresh_token,expires_at:Math.floor(Date.now()/1000)+(+d.expires_in||3600),user:{id:d.user.id,email:d.user.email||""}};}
const uid=()=>session&&session.user?session.user.id:"guest";
const signedIn=()=>!!session;
function baseHeaders(extra){const h={apikey:SBKEY,"Content-Type":"application/json",...(extra||{})};if(SBKEY.startsWith("eyJ")&&!h.Authorization)h.Authorization="Bearer "+SBKEY;return h;}
async function authCall(path,body,{method="POST",token}={}){
  const r=await fetch(`${SB}/auth/v1/${path}`,{method,headers:baseHeaders(token?{Authorization:"Bearer "+token}:{}),body:body?JSON.stringify(body):undefined});
  const d=await r.json().catch(()=>({}));
  if(!r.ok){const e=new Error(d.msg||d.error_description||d.message||"Something went wrong");e.code=d.error_code||d.error||r.status;throw e;}
  return d;
}
let refreshing=null;
async function token(){
  if(!session) return null;
  if(session.expires_at-Math.floor(Date.now()/1000)>60) return session.access_token;
  if(!refreshing) refreshing=authCall("token?grant_type=refresh_token",{refresh_token:session.refresh_token})
    .then(d=>{storeSession(toSession(d));return session.access_token;})
    .catch(e=>{ if(e.code!==undefined&&!String(e.message).includes("fetch")){ storeSession(null); onSignedOut(); } return null; })
    .finally(()=>{refreshing=null;});
  return refreshing;
}
async function api(path,{method="GET",body,prefer}={}){
  const t=await token(); if(!t) throw Object.assign(new Error("Not signed in"),{code:"auth"});
  const r=await fetch(`${SB}/rest/v1/${path}`,{method,headers:baseHeaders({Authorization:"Bearer "+t,...(prefer?{Prefer:prefer}:{})}),body:body?JSON.stringify(body):undefined});
  if(!r.ok) throw Object.assign(new Error(await r.text()),{code:r.status});
  const txt=await r.text(); return txt?JSON.parse(txt):null;
}
async function fn(name,body,{signal,raw}={}){
  const t=await token(); if(!t) throw Object.assign(new Error("Not signed in"),{code:"auth"});
  let r;
  try{ r=await fetch(`${SB}/functions/v1/${name}`,{method:"POST",signal,headers:baseHeaders({Authorization:"Bearer "+t}),body:JSON.stringify(body||{})}); }
  catch(e){ throw Object.assign(new Error(e.message),{code:e.name==="AbortError"?"cancelled":"network"}); }
  if(raw&&r.ok) return r;
  const d=await r.json().catch(()=>({}));
  if(!r.ok){ const code=r.status===401?"auth":r.status===402?"quota":d.error==="busy"?"busy":(d.error||"server"); throw Object.assign(new Error(d.message||code),{code,reason:d.error,status:r.status}); }
  return d;
}

/* ---------- saving: this device always, plus your account when signed in ---------- */
const keyFor=id=>`${KEY}:${id}`;
function loadLocal(){try{const v=JSON.parse(localStorage.getItem(keyFor(uid()))||"null");if(v)return merge(v);}catch(e){}return fresh();}
let pushTimer=null, pushing=false, pushAgain=false, cloudOK=false;
function save(){
  S.updatedAt=Date.now();
  try{localStorage.setItem(keyFor(uid()),JSON.stringify(S));}catch(e){}
  if(signedIn()&&HAS_BACKEND){clearTimeout(pushTimer);pushTimer=setTimeout(pushPlan,900);}
}
async function pushPlan(){
  if(!signedIn()) return; if(pushing){pushAgain=true;return;}
  pushing=true;
  try{ await api("plans?on_conflict=user_id",{method:"POST",prefer:"resolution=merge-duplicates,return=minimal",body:{user_id:uid(),state:S,updated_at:S.updatedAt}}); cloudOK=true; }
  catch(e){ cloudOK=false; }
  pushing=false; if(pushAgain){pushAgain=false;pushPlan();}
  updateSavedNote();
}
async function pullPlan(){
  if(!signedIn()) return;
  try{
    const rows=await api(`plans?user_id=eq.${uid()}&select=state,updated_at`);
    const r=rows&&rows[0]; cloudOK=true;
    if(r&&(+r.updated_at||0)>(S.updatedAt||0)){
      S=merge(r.state); try{localStorage.setItem(keyFor(uid()),JSON.stringify(S));}catch(e){}
      if(["home","account"].includes(view)) render();
    } else if(!r||(S.updatedAt||0)>(+r.updated_at||0)) { if(S.completed||S.updatedAt) pushPlan(); }
  }catch(e){ cloudOK=false; }
  updateSavedNote();
}
function updateSavedNote(){
  const n=$("savedNote"); if(!n)return;
  n.textContent=signedIn()?(cloudOK?"✓ Saved to your account. It'll be here on any device.":"✓ Saved on this device. It'll sync to your account when you're online.")
    :"Saved on this device only. Create a free account to keep it on any device.";
}

/* ---------- account + membership ---------- */
let acct=null, quotaReason="";
async function refreshAccount(){
  if(!signedIn()||!HAS_BACKEND){acct=null;return null;}
  try{ acct=await fn("account"); }catch(e){ if(e.code==="auth") return null; acct=acct||null; return null; }
  const out=acct.batches&&acct.batches.used>=acct.batches.limit;
  if(out){ quotaReason=acct.plan==="member"?"limit":"subscribe"; setAI(); }
  else if(quotaReason){ quotaReason=""; setAI(); }
  if(["account","pick","home"].includes(view)) rerender();
  return acct;
}
const roundsLeft=()=>acct&&acct.batches?Math.max(0,Math.floor((acct.batches.limit-acct.batches.used)/2)):null;
/* AI is available when signed in and not out of options for now. */
function setAI(){
  sampleFn=(HAS_BACKEND&&signedIn()&&!quotaReason)?AI:null;
  aiOff=!sampleFn;
}
const AI={
  async options(meal,variant,ctx,{signal,onText}){
    const r=await fn("ai",{kind:"options",meal,variant,ctx},{signal,raw:true});
    const used=+r.headers.get("x-used"), lim=+r.headers.get("x-limit");
    if(acct&&acct.batches&&lim){ acct.batches.used=used; acct.batches.limit=lim; }
    const reader=r.body.getReader(), dec=new TextDecoder(); let text="";
    try{ for(;;){ const {done,value}=await reader.read(); if(done) break; text+=dec.decode(value,{stream:true}); onText&&onText({text}); } }
    catch(e){ throw Object.assign(new Error(e.message),{code:e.name==="AbortError"?"cancelled":"network",text}); }
    return parseObjs(text);
  },
  async steps(r){
    const d=await fn("ai",{kind:"steps",id:r.id,name:r.name,ingredients:r.ing.map(([n,q,u])=>[n,q,u]),skill:S.skill,equip:S.equip});
    return d.steps;
  }
};
function onSignedOut(){ quotaReason=""; acct=null; S=loadLocal(); setAI(); Object.keys(opts).forEach(k=>delete opts[k]); view="home"; render(); }
async function afterSignIn(){
  const guest=(()=>{try{return JSON.parse(localStorage.getItem(keyFor("guest"))||"null");}catch(e){return null;}})();
  S=loadLocal();
  if(!S.updatedAt&&guest&&guest.updatedAt){ S=merge(guest); try{localStorage.setItem(keyFor(uid()),JSON.stringify(S));}catch(e){} }
  setAI(); Object.keys(opts).forEach(k=>delete opts[k]);
  await pullPlan();
  refreshAccount();
}

/* ---------- UI helpers ---------- */
function cards(key,opts,cls=""){
  return `<div class="cards ${cls}" role="group">`+opts.map(o=>
   `<button type="button" class="choice ${o.small?"":"compact"}" data-pick="${key}" data-val="${esc(o.v)}" aria-pressed="${S[key]===o.v}">
    ${o.i?`<span class="ic" aria-hidden="true">${o.i}</span>`:""}<span><b>${esc(o.t)}</b>${o.small?`<small>${esc(o.small)}</small>`:""}</span></button>`).join("")+`</div>`;
}
function multiCards(key,opts){
  return `<div class="cards" role="group">`+opts.map(o=>
   `<button type="button" class="choice" data-multi="${key}" data-val="${esc(o.v)}" aria-pressed="${S[key].includes(o.v)}">
    <span class="ic" aria-hidden="true">${o.i}</span><span><b>${esc(o.t)}</b><small>${esc(o.small)}</small></span></button>`).join("")+`</div>`;
}
function chips(key,opts){return `<div class="chips" role="group">`+opts.map(o=>`<button type="button" class="chip" data-multi="${key}" data-val="${esc(o)}" aria-pressed="${S[key].includes(o)}">${esc(o)}</button>`).join("")+`</div>`;}
function seg(key,opts){return `<span class="seg">`+opts.map(([v,t])=>`<button type="button" data-pick="${key}" data-val="${v}" aria-pressed="${S[key]===v}">${t}</button>`).join("")+`</span>`;}
function counter(path,val,min,max,title,hint){
  return `<div class="stepper"><div class="t"><b>${title}</b>${hint?`<small>${hint}</small>`:""}</div>
   <div class="ctl"><button type="button" data-count="${path}" data-d="-1" aria-label="Less: ${title}" ${val<=min?"disabled":""}>−</button>
   <output>${val}</output><button type="button" data-count="${path}" data-d="1" aria-label="More: ${title}" ${val>=max?"disabled":""}>+</button></div></div>`;
}
function group(label,hint,inner){return `<div class="group"><div class="gl">${label}</div>${hint?`<div class="gh">${hint}</div>`:""}${inner}</div>`;}
const getPath=p=>p.split(".").reduce((o,k)=>o[k],S);
function setPath(p,v){const ks=p.split(".");const last=ks.pop();ks.reduce((o,k)=>o[k],S)[last]=v;}
const LIM={"n":[1,4],"days":[1,7]};

/* ---------- questions ---------- */
const REASONS=[
 {v:"lose",i:"⬇️",t:"Lose weight",small:"Filling meals with fewer calories"},
 {v:"muscle",i:"💪",t:"Build muscle",small:"More protein"},
 {v:"gain",i:"⬆️",t:"Gain weight",small:"Bigger, more filling portions"},
 {v:"healthy",i:"🥗",t:"Eat healthier",small:"Balanced, real food"},
 {v:"energy",i:"⚡",t:"More energy",small:"Steady meals, fewer crashes"},
 {v:"fiber",i:"🌾",t:"Better digestion",small:"More fiber"},
 {v:"plants",i:"🌱",t:"Eat more plants",small:"More meals without meat"},
 {v:"money",i:"💵",t:"Save money",small:"Cheaper ingredients"},
 {v:"time",i:"⏱️",t:"Save time",small:"Quicker recipes"},
 {v:"family",i:"👨‍👩‍👧",t:"Feed my family",small:"Mild, crowd-pleasing food"}
];
const STEPS=[
 {id:"reasons",short:"Your reasons",title:"Why are you making a meal plan?",sub:"Pick as many as you like. These decide which meals we suggest first.",
  body:()=>multiCards("reasons",REASONS), ok:()=>S.reasons.length>0, err:"Pick at least one reason."},
 {id:"you",short:"About you (optional)",title:"A little about you",sub:"This works out your protein and calories. Skip it if you like — we'll use average amounts.",
  body:()=>`
   <div class="pair">
    <label class="f">Age<input type="number" inputmode="numeric" data-bind="age" value="${esc(S.age)}" placeholder="e.g. 30"></label>
    <div class="f"><b>Sex</b><br>${seg("sex",[["Male","Male"],["Female","Female"]])}</div>
   </div>
   <div class="pair">
    <label class="f">Weight<div class="unit"><input type="number" inputmode="decimal" data-bind="weight" value="${esc(S.weight)}" placeholder="e.g. 170">${seg("wunit",[["lb","lb"],["kg","kg"]])}</div></label>
    <label class="f">Height<div class="unit"><input type="number" inputmode="decimal" data-bind="height" value="${esc(S.height)}" placeholder="${S.hunit==="in"?"inches, e.g. 69":"cm, e.g. 175"}">${seg("hunit",[["in","in"],["cm","cm"]])}</div><small>5 ft 9 in = 69 inches</small></label>
   </div>`+group("How active are you?","",cards("activity",[
    {v:"1.2",t:"Not very",small:"Desk job, little exercise"},{v:"1.375",t:"A little",small:"Exercise 1–3 times a week"},
    {v:"1.55",t:"Active",small:"Exercise 3–5 times a week"},{v:"1.725",t:"Very active",small:"Hard training or a physical job"}],"two")),
  ok:()=>true},
 {id:"household",short:"Who's eating",title:"Who's eating?",sub:"Add anyone else who'll eat these meals. We'll size the batch to fit everyone.",
  body:()=>householdHTML(), ok:()=>S.household.every(h=>h.mode==="same"||(h.mode==="custom"&&parseFloat(h.weight)>0)),
  err:"For each person, choose \"Same as me\" or enter their weight (and other details if you know them)."},
 {id:"diet",short:"How you eat",title:"How do you eat?",sub:"Tap what fits best.",
  body:()=>cards("diet",[
    {v:"everything",i:"🍗",t:"I eat everything"},{v:"lessmeat",i:"🥦",t:"Less meat, more plants"},
    {v:"pescatarian",i:"🐟",t:"Fish, no meat"},{v:"vegetarian",i:"🥚",t:"Vegetarian"},{v:"vegan",i:"🌱",t:"Vegan"}])
   +group("Anything you can't eat?","Tap any that apply.",chips("allergies",["Nuts","Peanuts","Dairy","Gluten","Eggs","Shellfish","Fish","Soy","Pork","Beef"]))
   +`<label class="f" style="margin-top:1rem">Foods you don't like<small>Separate with commas</small><input type="text" data-bind="dislikes" value="${esc(S.dislikes)}" placeholder="e.g. mushrooms, salmon, cottage cheese"></label>`,
  ok:()=>!!S.diet, err:"Pick how you eat."},
 {id:"meals",short:"Meals to plan",title:"Which meals should we plan?",sub:"For each meal, choose how many different recipes you want and how many days you'll eat it.",
  body:()=>MEALS.map(k=>{
    const m=S.meals[k];
    return `<div class="mealcfg ${m.on?"":"off"}"><div class="mh"><h3>${ML[k]}</h3><span class="seg"><button type="button" data-mon="${k}" data-val="1" aria-pressed="${m.on}">Plan it</button><button type="button" data-mon="${k}" data-val="0" aria-pressed="${!m.on}">Skip</button></span></div>
     ${m.on?counter(`meals.${k}.n`,m.n,1,4,`Different ${MLs[k]}`,"How many recipes to rotate")+counter(`meals.${k}.days`,m.days,1,7,"Days per week",k==="lunch"?"5 for a work week":""):""}</div>`;}).join(""),
  ok:()=>MEALS.some(k=>S.meals[k].on), err:"Plan at least one meal."},
 {id:"usual",short:"What you usually eat",title:"What do you usually eat?",sub:"Tap anything that fits for each meal. We'll make options that feel familiar, plus a fun one or two.",
  body:()=>planned().map(k=>{ const u=S.usual[k]||{tags:[],text:""};
    return `<div class="mealcfg"><h3 style="margin-bottom:.6rem">${ML[k]}</h3>
     <div class="chips">${USUAL_CHIPS[k].map(c=>`<button type="button" class="chip" data-umulti="${k}" data-val="${esc(c)}" aria-pressed="${u.tags.includes(c)}">${esc(c)}</button>`).join("")}</div>
     <label class="f" style="margin-top:.9rem">Anything specific? <small>Optional</small><input type="text" data-utext="${k}" value="${esc(u.text)}" placeholder="${{breakfast:"e.g. egg and cheese bagel",lunch:"e.g. turkey club, chicken Caesar wrap",dinner:"e.g. spaghetti and meatballs",snack:"e.g. apple and peanut butter"}[k]}"></label></div>`;}).join("")
   +`<p class="hint">Skip any meal to be surprised.</p>`,
  ok:()=>true},
 {id:"cook",short:"Your kitchen",title:"Your kitchen",sub:"So recipes fit your time and skills.",
  body:()=>group("Time you can spend on prep day","",cards("time",[{v:"60",t:"About 1 hour"},{v:"120",t:"About 2 hours"},{v:"999",t:"3 hours or more"}],"two"))
   +group("Cooking skill","",cards("skill",[
     {v:"1",i:"🙂",t:"Beginner",small:"Keep it very simple"},{v:"2",i:"👍",t:"I'm okay",small:"Can follow a recipe"},{v:"3",i:"👨‍🍳",t:"Confident",small:"Happy to try new things"}]))
   +group("What do you have?","Tap all that apply.",chips("equip",["Oven","Stovetop","Microwave","Blender","Slow cooker","Instant Pot","Air fryer"]))
   +group("Meals that freeze well?","",cards("freezer",[{v:"yes",t:"Yes, please"},{v:"any",t:"Doesn't matter"}],"two")),
  ok:()=>!!S.time&&!!S.skill, err:"Pick your cooking time and skill level."},
 {id:"taste",short:"Tastes",title:"What do you like to eat?",sub:"Pick a few, or \"Anything\".",
  body:()=>chips("cuisines",["Anything","Mexican","Italian","Mediterranean","Greek","Indian","Chinese","Thai","Korean","Japanese","Middle Eastern","Caribbean","BBQ","American comfort"])
   +group("Spice level","",cards("spice",[{v:"mild",t:"🌶 Mild"},{v:"medium",t:"🌶🌶 Medium"},{v:"hot",t:"🌶🌶🌶 Hot"}],"two")),
  ok:()=>S.cuisines.length>0&&!!S.spice, err:"Pick at least one food style and a spice level."},
 {id:"budget",short:"Budget and pantry (optional)",title:"Budget and pantry",sub:"Both optional, but they make the grocery list better.",
  body:()=>group("Grocery budget","",cards("budget",[{v:"tight",t:"💵 Tight"},{v:"normal",t:"💵💵 Normal"},{v:"flexible",t:"💵💵💵 Flexible"}],"two"))
   +`<label class="f" style="margin-top:1.4rem">Already in your kitchen<small>One per line. These go on an "already have" list.</small><textarea data-bind="pantry" placeholder="rice&#10;soy sauce&#10;canned chickpeas">${esc(S.pantry)}</textarea></label>`,
  ok:()=>true}
];

/* ---------- household ---------- */
const newPerson=()=>({name:"",mode:"",goal:"maintain",sex:"",age:"",weight:"",wunit:"lb",height:"",hunit:"in",activity:"1.375"});
function calsFor(x,goalShift){
  const w=parseFloat(x.weight), wkg=w?(x.wunit==="lb"?w*0.4536:w):0;
  const h=parseFloat(x.height), hcm=h?(x.hunit==="in"?h*2.54:h):0, age=parseFloat(x.age)||35;
  if(!wkg) return null;
  const hh=hcm||(x.sex==="Female"?163:176);
  const sexAdj=x.sex==="Female"?-161:x.sex==="Male"?5:-78;
  const c=(10*wkg+6.25*hh-5*age+sexAdj)*(parseFloat(x.activity)||1.375)+goalShift;
  return Math.max(x.sex==="Female"?1200:x.sex==="Male"?1500:1300,Math.round(c/50)*50);
}
function personCals(h){ return calsFor(h,{lose:-500,maintain:0,gain:400}[h.goal]||0); }
function yourCals(){ const t=targets(); return t.cal||2000; }
function portionOf(h){
  if(h.mode!=="custom") return 1;
  const c=personCals(h); if(!c) return 1;
  return clamp(Math.round(c/yourCals()*20)/20,0.5,2);
}
function eaters(){ return [{name:"You",f:1},...S.household.map((h,i)=>({name:h.name.trim()||`Person ${i+2}`,f:portionOf(h),h}))]; }
const totalF=()=>eaters().reduce((a,e)=>a+e.f,0);
const r05=x=>Math.round(x*2)/2;
function portionsTxt(n){ const v=r05(n); return `${v} portion${v===1?"":"s"}`; }
function hhResult(h){
  if(h.mode==="same") return "Eats the same portions as you.";
  if(h.mode!=="custom") return "";
  const c=personCals(h); if(!c) return "Enter their weight to work out their portion.";
  const f=portionOf(h);
  return `About ${c.toLocaleString()} calories a day → ${f===1?"same portions as you":`${f}× your portion (${f<1?"smaller":"bigger"})`}.`;
}
function householdHTML(){
  const seg2=(i,field,opts,val)=>`<span class="seg">`+opts.map(([v,t])=>`<button type="button" data-hh="${i}" data-field="${field}" data-val="${v}" aria-pressed="${val===v}">${t}</button>`).join("")+`</span>`;
  return `<div class="person me"><div class="ph"><b>You</b><span class="hint">Your portions come from your own answers.</span></div></div>`
  +S.household.map((h,i)=>`<div class="person">
    <div class="ph"><label class="f" style="margin:0;flex:1">Name <small>(optional)</small><input type="text" data-hbind="${i}.name" value="${esc(h.name)}" placeholder="Person ${i+2}"></label>
      <button type="button" class="linkbtn" data-hh-remove="${i}">Remove</button></div>
    <div class="gl" style="margin-top:.8rem">How much do they eat?</div>
    <div class="cards two" style="margin-top:.4rem">
      <button type="button" class="choice" data-hh="${i}" data-field="mode" data-val="same" aria-pressed="${h.mode==="same"}"><span><b>Same as me</b><small>Same portion sizes</small></span></button>
      <button type="button" class="choice" data-hh="${i}" data-field="mode" data-val="custom" aria-pressed="${h.mode==="custom"}"><span><b>Their own portions</b><small>Work it out from their details</small></span></button>
    </div>
    ${h.mode==="custom"?`
     <div class="group"><div class="gl">Their goal</div>${seg2(i,"goal",[["lose","Lose weight"],["maintain","Maintain"],["gain","Gain weight"]],h.goal)}</div>
     <div class="pair" style="margin-top:1rem">
      <label class="f">Weight<div class="unit"><input type="number" inputmode="decimal" data-hbind="${i}.weight" value="${esc(h.weight)}" placeholder="e.g. 140">${seg2(i,"wunit",[["lb","lb"],["kg","kg"]],h.wunit)}</div></label>
      <label class="f">Height <small>(optional)</small><div class="unit"><input type="number" inputmode="decimal" data-hbind="${i}.height" value="${esc(h.height)}" placeholder="${h.hunit==="in"?"inches":"cm"}">${seg2(i,"hunit",[["in","in"],["cm","cm"]],h.hunit)}</div></label>
     </div>
     <div class="pair">
      <label class="f">Age <small>(optional)</small><input type="number" inputmode="numeric" data-hbind="${i}.age" value="${esc(h.age)}" placeholder="e.g. 32"></label>
      <div class="f"><b>Sex</b> <small>(optional)</small><br>${seg2(i,"sex",[["Male","Male"],["Female","Female"]],h.sex)}</div>
     </div>
     <div class="gl">How active are they?</div>${seg2(i,"activity",[["1.2","Not very"],["1.375","A little"],["1.55","Active"],["1.725","Very"]],h.activity)}`:""}
    <p class="hhres" id="hhres-${i}">${hhResult(h)}</p>
  </div>`).join("")
  +`<button type="button" class="btn" data-hh-add="1" ${S.household.length>=7?"disabled":""}>+ Add a person</button>
   ${S.household.length?`<p class="hint" style="margin-top:.8rem">Batch size: ${eaters().map(e=>`${esc(e.name)} ${e.f}×`).join(" + ")} = <b>${r05(totalF())}× a single portion</b> per meal.</p>`:""}`;
}

/* ---------- targets ---------- */
const WEIGHT={breakfast:.25,lunch:.3,dinner:.35,snack:.1};
function targets(){
  const w=parseFloat(S.weight), wkg=w?(S.wunit==="lb"?w*0.4536:w):0;
  const h=parseFloat(S.height), hcm=h?(S.hunit==="in"?h*2.54:h):0;
  const age=parseFloat(S.age), act=parseFloat(S.activity)||1.375, R=S.reasons;
  const perKg=Math.max(1.3,...R.map(r=>({muscle:2.0,lose:1.6,gain:1.7,healthy:1.4,energy:1.4}[r]||1.3)));
  const adj={less:0.85,normal:1,more:1.15}[S.proteinAdj]||1;
  let protein=wkg?wkg*perKg:(R.includes("muscle")?150:R.includes("lose")?120:110);
  if(wkg>100&&R.includes("lose")) protein=Math.min(protein,100*perKg+(wkg-100)*0.8);
  protein=Math.round(Math.min(240,Math.max(70,protein*adj))/5)*5;
  let cal=null;
  if(wkg&&hcm&&age&&S.sex){
    const bmr=10*wkg+6.25*hcm-5*age+(S.sex==="Male"?5:-161);
    let shift=0;
    if(R.includes("lose")) shift=R.includes("muscle")?-300:-500;
    else if(R.includes("gain")) shift=400;
    else if(R.includes("muscle")) shift=250;
    cal=Math.max(S.sex==="Male"?1500:1200,Math.round((bmr*act+shift)/50)*50);
  }
  let fiber=Math.round(Math.min(40,Math.max(25,(cal||2000)/1000*14+(R.includes("fiber")?4:0))));
  if(S.override&&S.override.on){
    const n=x=>{const v=parseFloat(x);return v>0?v:0;};
    protein=n(S.override.protein)?Math.round(n(S.override.protein)):protein;
    fiber=n(S.override.fiber)?Math.round(n(S.override.fiber)):fiber;
    if(n(S.override.cal)) cal=Math.round(n(S.override.cal));
  }
  const per={};
  MEALS.forEach(k=>{per[k]={p:Math.round(protein*WEIGHT[k]),f:Math.round(fiber*WEIGHT[k]),k:Math.round((cal||2000)*WEIGHT[k])};});
  return {protein,fiber,cal,per,hasStats:!!wkg,custom:!!(S.override&&S.override.on)};
}

/* ---------- the calculator: filter, scale, score, rank ---------- */
const DIETOK={everything:["meat","pesc","veg","vegan"],lessmeat:["meat","pesc","veg","vegan"],pescatarian:["pesc","veg","vegan"],vegetarian:["veg","vegan"],vegan:["vegan"]};
const q4=x=>Math.round(x*4)/4, clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
function userEquip(){ if(!S.equip.length) return ["oven","stove","blender"]; const m={Oven:"oven",Stovetop:"stove",Blender:"blender"}; return S.equip.map(e=>m[e]).filter(Boolean); }
function eligible(r,meal){
  const mealKey=meal==="snack"?"snack":meal;
  if(!r.meals.includes(mealKey)) return false;
  if(!(DIETOK[S.diet]||DIETOK.everything).includes(r.d)) return false;
  const al=S.allergies.map(a=>a.toLowerCase()); if(r.a.some(x=>al.includes(x))) return false;
  const dis=S.dislikes.toLowerCase().split(",").map(s=>s.trim().replace(/s$/,"")).filter(s=>s.length>2);
  const text=(r.name+" "+r.ing.map(i=>i[0]).join(" ")).toLowerCase();
  if(dis.some(d=>text.includes(d))) return false;
  const eq=userEquip(); if(r.eq.some(e=>!eq.includes(e))) return false;
  if(S.spice==="mild"&&r.sp>=2) return false;
  const sk=parseInt(S.skill)||2; if(r.sk>sk+1) return false;
  if(r.t>(parseInt(S.time)||999)) return false;
  return true;
}
function evaluate(r,meal,t){
  const tg=t.per[meal], R=S.reasons;
  let m=meal==="snack"?1:clamp(q4(tg.p/r.p),0.75,1.75);
  if(t.cal&&R.includes("lose")&&r.k*m>tg.k*1.3) m=Math.max(0.75,q4(tg.k*1.15/r.k));
  if(R.includes("gain")&&meal!=="snack") m=Math.max(m,1);
  const P=r.p*m,F=r.fb*m,K=r.k*m,dens=P/K*100;
  let sc=50, tags=[];
  sc-=25*Math.abs(P-tg.p)/tg.p;
  sc+=8*Math.min(F/Math.max(tg.f,1),1.3);
  if(t.cal) sc-=12*Math.abs(K-tg.k)/tg.k;
  sc-=4*Math.abs(m-1);
  if(R.includes("lose")) sc+=(dens-6)*1.5;
  if(R.includes("muscle")) sc+=(dens-6)+(P-tg.p)*0.1;
  if(R.includes("gain")) sc+=(K-tg.k)/80;
  if(R.includes("fiber")) sc+=F*0.6;
  if(R.includes("plants")) sc+={vegan:6,veg:3,pesc:1,meat:-3}[r.d];
  if(R.includes("money")) sc-=(r.$-1)*5;
  if(R.includes("time")) sc-=r.t/10;
  if(R.includes("energy")) sc+=F*0.3+(r.cb>=35?2:0);
  if(R.includes("healthy")) sc+=F*0.3+(dens-6)*0.5;
  if(R.includes("family")) sc-=r.sp*3+(r.sk-1)*2;
  if(S.diet==="lessmeat"&&r.d==="meat") sc-=5;
  const likes=S.cuisines.filter(c=>c!=="Anything");
  const cMatch=likes.includes(r.c); if(cMatch) sc+=6;
  if(S.spice==="mild"&&r.sp===1) sc-=4; if(S.spice==="medium"&&r.sp===2) sc-=2; if(S.spice==="hot"&&r.sp>=1) sc+=3;
  if(S.budget==="tight") sc-=(r.$-1)*6;
  const sk=parseInt(S.skill)||2; if(r.sk>sk) sc-=6*(r.sk-sk);
  if(S.freezer==="yes"&&meal!=="snack") sc+=r.fz?5:-4;
  const last=(S.prevPicks[meal]||[]).includes(r.id); if(last) sc-=8;
  const sh=sharedWith(r).filter(x=>x.pricey); if(S.share===true) sc+=Math.min(sh.length,2)*2;
  const other=MEALS.find(k=>k!==meal&&S.meals[k].on&&S.picks[k].includes(r.id)); if(other) sc-=10;
  if(r.fun) tags.push("✨ Something different");
  if(r.lib) tags.push("⚡ From the recipe library");
  if(P>=Math.max(20,tg.p*0.9)) tags.push("High protein");
  if(F>=(meal==="snack"?5:9)) tags.push("High fiber");
  if(r.t<=15) tags.push(r.t?`Ready in ${r.t} min`:"No cooking"); else if(r.t<=30) tags.push("Under 30 min");
  if(r.$===1) tags.push("Budget-friendly");
  if(r.fz&&meal!=="snack") tags.push("Freezes well");
  if(r.d==="vegan") tags.push("Plant-based");
  if(cMatch) tags.push("You like "+r.c);
  if(last) tags.push("On last week's plan");
  if(other) tags.push("Already your "+ML[other].toLowerCase().replace(/s$/,""));
  return {r,m,P:Math.round(P),F:Math.round(F),K:Math.round(K/10)*10,sc,tags,sh};
}
function ranked(meal){
  const t=targets();
  const list=RECIPES.filter(r=>eligible(r,meal)).map(r=>evaluate(r,meal,t));
  const mode=S.sort[meal]||"best";
  const f={best:(a,b)=>b.sc-a.sc,protein:(a,b)=>b.P-a.P||b.sc-a.sc,fast:(a,b)=>a.r.t-b.r.t||b.sc-a.sc,cheap:(a,b)=>a.r.$-b.r.$||b.sc-a.sc,fiber:(a,b)=>b.F-a.F||b.sc-a.sc}[mode];
  return list.sort(f);
}
const byId=id=>id?(RECIPES.find(r=>r.id===id)||S.custom[id]||pool[id]||null):null;
function pickEval(meal,id){ const r=byId(id); return r?evaluate(r,meal,targets()):null; }

/* ---------- day assignment + quantities ---------- */
function slotDays(meal,i){ const c=S.meals[meal]; return Math.floor(c.days/c.n)+(i<c.days%c.n?1:0); }
function slots(){ return planned().flatMap(m=>Array.from({length:S.meals[m].n},(_,i)=>({meal:m,i}))); }
function slotLabel(sl){ return S.meals[sl.meal].n>1?`${ML[sl.meal].replace(/s$/,"")} ${sl.i+1}`:ML[sl.meal]; }
function fitPicks(){ MEALS.forEach(k=>{ const n=S.meals[k].n, a=(S.picks[k]||[]).slice(0,n); while(a.length<n) a.push(null); S.picks[k]=a; }); }
function assign(meal){
  const cfg=S.meals[meal]; const days=[], counts={};
  if(cfg.on) S.picks[meal].forEach((id,i)=>{ if(!byId(id)) return; const c=slotDays(meal,i); counts[id]=(counts[id]||0)+c; for(let j=0;j<c;j++) days.push(id); });
  while(days.length<7) days.push(null);
  return {days,counts};
}
function dayRange(meal,id){
  const d=assign(meal).days; const idx=d.map((x,i)=>x===id?i:-1).filter(i=>i>=0);
  if(!idx.length) return ""; return idx.length===1?DAYS[idx[0]]:DAYS[idx[0]]+"–"+DAYS[idx[idx.length-1]];
}
const FR={0.25:"¼",0.5:"½",0.75:"¾",0.33:"⅓",0.67:"⅔"};
function fmtQ(q,u,shop){
  if(!q) return "";
  if(shop&&!u) return String(Math.ceil(q-0.05));
  let v,unit=u;
  if(u==="tsp"&&q>=3){q=q/3;unit="tbsp";}
  if(unit==="tbsp"&&q>=8){q=q/16;unit="cup";}
  if(unit==="lb"){ v=(Math.ceil(q*10)/10).toFixed(1).replace(/\.0$/,""); return v+" lb"; }
  if(unit==="oz"){ if(q>=16) return (Math.ceil(q/16*10)/10).toString()+" lb"; return Math.ceil(q)+" oz"; }
  if(unit==="cup"||unit==="tbsp"||unit==="tsp"){
    const whole=Math.floor(q), rem=q-whole;
    const opts=[0,0.25,0.33,0.5,0.67,0.75,1]; let best=opts.reduce((a,b)=>Math.abs(b-rem)<Math.abs(a-rem)?b:a);
    let w=whole; if(best===1){w++;best=0;}
    const s=(w?w:"")+(best?FR[best]:""); return (s||"¼")+" "+(unit==="cup"?(q>1?"cups":"cup"):unit);
  }
  const n=Math.ceil(q*2)/2; const s=Math.floor(n)+(n%1?"½":"");
  return (s.startsWith("0")?"½":s)+(unit?" "+unit+(n>1&&!["can","clove","stalk","slice","scoop"].includes("")?"s":""):"");
}
function groceries(){
  const items={};
  MEALS.forEach(meal=>{
    if(!S.meals[meal].on) return;
    const {counts}=assign(meal);
    Object.entries(counts).forEach(([id,c])=>{
      const e=pickEval(meal,id); if(!e) return;
      const serv=c*totalF();
      e.r.ing.forEach(([n,q,u,sec])=>{const k=n+"|"+u; items[k]=items[k]||{n,u,sec,q:0}; items[k].q+=q*e.m*serv;});
    });
  });
  const pantry=S.pantry.toLowerCase().split("\n").map(s=>s.trim()).filter(s=>s.length>2);
  const have=[],buy={};
  Object.values(items).forEach(it=>{
    const nl=it.n.toLowerCase();
    if(pantry.some(p=>nl.includes(p)||p.includes(nl))) have.push(it);
    else (buy[it.sec]=buy[it.sec]||[]).push(it);
  });
  return {have,buy};
}
function dayAverages(){
  let P=0,F=0,K=0;
  MEALS.forEach(meal=>{ if(!S.meals[meal].on) return; const {counts}=assign(meal); const tot=Object.values(counts).reduce((a,b)=>a+b,0); if(!tot) return;
    Object.entries(counts).forEach(([id,c])=>{const e=pickEval(meal,id); if(e){P+=e.P*c/tot;F+=e.F*c/tot;K+=e.K*c/tot;}}); });
  return {P:Math.round(P),F:Math.round(F),K:Math.round(K/10)*10};
}

/* ---------- screens ---------- */
const planned=()=>MEALS.filter(k=>S.meals[k].on);
function signupPitch(){
  if(!HAS_BACKEND) return "";
  if(signedIn()) return "";
  return `<div class="welcome pitch">
    <h3>Get fresh meal ideas made for you</h3>
    <p>With a free account, Claude creates options around your goals and what you like to eat, and your plan is saved on any device. ${esc(CFG.TRIAL_TEXT||"Your first plan is free")}, then ${esc(CFG.PRICE_TEXT||"$2/month")} if you want to keep going.</p>
    <div class="row"><button class="btn primary" data-go="auth" data-mode="signup">Create free account</button><button class="btn" data-go="auth" data-mode="signin">Sign in</button></div>
    ${CFG.CLAUDE_ARTIFACT_URL?`<p class="hint" style="margin-top:.8rem">Have Claude Pro? <a href="${esc(CFG.CLAUDE_ARTIFACT_URL)}" target="_blank" rel="noopener">Use the free Claude version</a> instead. It runs on your own Claude plan.</p>`:""}
  </div>`;
}
function homeHTML(){
  if(!S.completed){
    return `<h1>Plan a week of meals that fit you.</h1>
    <p class="sub">Answer a few questions. We'll work out your targets, then show you meal options to pick from: breakfast, lunch, dinner and snacks, with a grocery list and recipes at the end.</p>
    ${signupPitch()}
    <h2 class="q" style="font-size:1.35rem;margin-top:1.6rem">How do you want to start?</h2>
    <div class="mode">
     <button class="choice" data-go="guided"><span class="ic">🧭</span><span><b>Help me figure it out</b><small>One simple question at a time. About 3 minutes.</small></span></button>
     <button class="choice" data-go="quick"><span class="ic">📝</span><span><b>I know what I want</b><small>Everything on one page. Fill it in and go.</small></span></button>
    </div>`;
  }
  const tags=[...S.reasons.map(r=>(REASONS.find(x=>x.v===r)||{}).t).filter(Boolean),S.household.length?`${S.household.length+1} people`:"Just me",...planned().map(k=>`${S.meals[k].n} ${S.meals[k].n>1?MLs[k]:ML[k].toLowerCase().replace(/s$/,"")}`)];
  return `<h1>Welcome back.</h1>
   <div class="welcome" style="margin-top:1.2rem"><h3>Your saved setup</h3>
    <div class="tags">${tags.map(t=>`<span>${esc(t)}</span>`).join("")}</div><p class="saved" id="savedNote"></p></div>
   ${signupPitch()}
   <div class="mode">
    ${S.planDone?`<button class="choice" data-go="dash"><span class="ic">📋</span><span><b>Open my meal plan</b><small>${S.planDate?"Made "+esc(S.planDate):"Your current week"}</small></span></button>`:""}
    <button class="choice" data-go="newweek"><span class="ic">🔄</span><span><b>${S.planDone?"Plan a new week":"Pick my meals"}</b><small>Same answers, fresh meal options${S.planDone?" — last week's picks shown lower":""}.</small></span></button>
    <button class="choice" data-go="quick"><span class="ic">📝</span><span><b>Change a few answers</b><small>All your answers on one page.</small></span></button>
    <button class="choice" data-go="guided"><span class="ic">🧭</span><span><b>Walk me through it again</b><small>One question at a time, answers filled in.</small></span></button>
   </div>`;
}

/* ---------- sign in / create account ---------- */
let authMode="signin", authMsg="", authErr="", authBusy=false, authEmail="", authPw="";
function authHTML(){
  if(!HAS_BACKEND) return `<h2 class="q">Accounts aren't set up yet</h2><p class="sub">The app owner still needs to add the Supabase details to config.js. You can still use the planner on this device.</p><button class="btn" data-go="home">Back</button>`;
  const field=(id,label,type,ac,ph="")=>`<label class="f">${label}<input id="${id}" type="${type}" autocomplete="${ac}" placeholder="${ph}" value="${esc(id==="aEmail"?authEmail:authPw)}" ${type==="email"?'inputmode="email" autocapitalize="off" spellcheck="false"':""}></label>`;
  const msg=(authErr?`<p class="err">${esc(authErr)}</p>`:"")+(authMsg?`<div class="callout">${authMsg}</div>`:"");
  const dis=authBusy?"disabled":"";
  if(authMode==="check") return `<h2 class="q">Check your email</h2><p class="sub">${authMsg}</p><button class="btn" data-mode="signin" data-auth-switch="1">Back to sign in</button>`;
  if(authMode==="forgot") return `<h2 class="q">Reset your password</h2><p class="sub">We'll email you a link to set a new one.</p>
    <form id="authForm" data-form="forgot">${field("aEmail","Email","email","email")}${msg}<button class="btn primary big" ${dis}>Send reset link</button></form>
    <p><button class="linkbtn" data-auth-switch="1" data-mode="signin">Back to sign in</button></p>`;
  if(authMode==="newpw") return `<h2 class="q">Choose a new password</h2><p class="sub">At least 6 characters.</p>
    <form id="authForm" data-form="newpw">${field("aPw","New password","password","new-password")}${msg}<button class="btn primary big" ${dis}>Save password</button></form>`;
  const up=authMode==="signup";
  return `<h2 class="q">${up?"Create your free account":"Sign in"}</h2>
    <p class="sub">${up?`Save your plan on any device and get fresh meal options made for you. ${esc(CFG.TRIAL_TEXT||"Your first plan is free")}.`:"Welcome back."}</p>
    <form id="authForm" data-form="${up?"signup":"signin"}">
     ${field("aEmail","Email","email","email")}
     ${field("aPw",up?"Choose a password <small>At least 6 characters</small>":"Password","password",up?"new-password":"current-password")}
     ${msg}
     <button class="btn primary big" ${dis}>${authBusy?"One moment…":up?"Create account":"Sign in"}</button>
    </form>
    <p>${up?`Already have an account? <button class="linkbtn" data-auth-switch="1" data-mode="signin">Sign in</button>`
      :`New here? <button class="linkbtn" data-auth-switch="1" data-mode="signup">Create a free account</button> · <button class="linkbtn" data-auth-switch="1" data-mode="forgot">Forgot password?</button>`}</p>
    ${S.completed&&!signedIn()?`<p class="hint">Your answers on this device will be kept and added to your account.</p>`:""}`;
}
function clearAuthForm(){ authPw=""; }
function friendlyAuthError(e){
  const m=String(e&&e.message||""), c=String(e&&e.code||"");
  if(/invalid_credentials|Invalid login/i.test(c+m)) return "That email and password don't match. Check them and try again.";
  if(/email_not_confirmed|not confirmed/i.test(c+m)) return "Please confirm your email first. Check your inbox for the link we sent.";
  if(/user_already_exists|already registered/i.test(c+m)) return "There's already an account with that email. Try signing in instead.";
  if(/weak_password|at least/i.test(c+m)) return "Choose a longer password (at least 6 characters).";
  if(/rate|too many|over_email_send_rate/i.test(c+m)) return "Too many tries. Wait a minute and try again.";
  if(/fetch|network/i.test(m)) return "No connection. Check your signal and try again.";
  return m||"Something went wrong. Try again.";
}
async function submitAuth(form){
  const kind=form.dataset.form; const email=($("aEmail")||{}).value?.trim()||""; const pw=($("aPw")||{}).value||"";
  authEmail=email; authPw=pw;
  authErr=""; authMsg="";
  if(kind!=="newpw"&&!/^\S+@\S+\.\S+$/.test(email||"")){ authErr="Enter your email address."; return rerender(); }
  if((kind==="signup"||kind==="signin"||kind==="newpw")&&pw.length<(kind==="signin"?1:6)){ authErr=kind==="signin"?"Enter your password.":"Choose a password with at least 6 characters."; return rerender(); }
  authBusy=true; rerender();
  try{
    if(kind==="signup"){
      const d=await authCall(`signup?redirect_to=${encodeURIComponent(APP_URL)}`,{email,password:pw});
      if(d.access_token){ storeSession(toSession(d)); clearAuthForm(); await afterSignIn(); authBusy=false; return go("home"); }
      authMode="check"; authMsg=`We sent a confirmation link to <b>${esc(email)}</b>. Open it on this phone to finish signing up.`;
    } else if(kind==="signin"){
      const d=await authCall("token?grant_type=password",{email,password:pw});
      storeSession(toSession(d)); clearAuthForm(); await afterSignIn(); authBusy=false; return go("home");
    } else if(kind==="forgot"){
      await authCall(`recover?redirect_to=${encodeURIComponent(APP_URL)}`,{email});
      authMode="check"; authMsg=`If there's an account for <b>${esc(email)}</b>, a reset link is on its way.`;
    } else if(kind==="newpw"){
      await authCall("user",{password:pw},{method:"PUT",token:await token()});
      authBusy=false; clearAuthForm(); toast("Password updated."); return go("home");
    }
  }catch(e){ authErr=friendlyAuthError(e); }
  authBusy=false; rerender();
}
/* Links from emails (confirm sign-up, reset password) come back with the sign-in in the address. */
async function handleAuthRedirect(){
  const h=new URLSearchParams(location.hash.replace(/^#/,""));
  if(h.get("error_description")){ history.replaceState(null,"",location.pathname+location.search); toast(h.get("error_description").replace(/\+/g," ")+". Try again."); return; }
  if(!h.get("access_token")) return;
  history.replaceState(null,"",location.pathname+location.search);
  try{
    const u=await authCall("user",null,{method:"GET",token:h.get("access_token")});
    storeSession({access_token:h.get("access_token"),refresh_token:h.get("refresh_token"),expires_at:Math.floor(Date.now()/1000)+(+h.get("expires_in")||3600),user:{id:u.id,email:u.email||""}});
    await afterSignIn();
    if(h.get("type")==="recovery"){ authMode="newpw"; authErr=""; authMsg=""; go("auth"); }
    else { toast("You're signed in."); render(); }
  }catch(e){ toast("That link has expired. Sign in or ask for a new link."); }
}

/* ---------- account page ---------- */
let acctBusy="";
function accountHTML(){
  if(!signedIn()) return authHTML();
  const a=acct; const member=a&&a.plan==="member";
  const left=roundsLeft(); const lim=a&&a.batches?Math.floor(a.batches.limit/2):0;
  const end=a&&a.periodEnd?new Date(a.periodEnd).toLocaleDateString(undefined,{month:"long",day:"numeric"}):"";
  const status=!a?`<p class="hint">Loading your plan…</p>`
    :member?`<p><b>Member</b> · ${esc(CFG.PRICE_TEXT||"$2/month")}${a.status==="past_due"?" · <span class=\"err\">payment problem, update your card</span>":end?` · renews ${esc(end)}`:""}</p>`
    :`<p><b>Free plan</b>${a.status==="canceled"?" · membership ended":""}</p>`;
  const meter=a&&a.batches?`<div class="nbar"><div class="lbl"><b>${member?"New options this month":"Free options"}</b><span>${left} of ${lim} rounds left</span></div>
     <div class="track"><i class="${left===0?"under":""}" style="width:${lim?Math.max(0,100*left/lim):0}%"></i></div></div>`:"";
  return `<h2 class="q">Your account</h2>
   <div class="panel">
    <p class="hint" style="margin-top:0">Signed in as</p><p style="margin-top:0"><b>${esc(session.user.email)}</b></p>
    ${status}${meter}
    ${!a?"":member?(a.canManage?`<button class="btn" data-act="portal" ${acctBusy?"disabled":""}>${acctBusy==="portal"?"Opening…":"Manage membership or card"}</button>`:"")
      :(a.billingReady?`<p class="hint">Members get about ${Math.floor((a.batches&&a.plan==="member"?a.batches.limit:90)/2)} rounds of fresh options a month.</p><button class="btn primary big" data-act="subscribe" ${acctBusy?"disabled":""}>${acctBusy==="subscribe"?"Opening checkout…":`Become a member · ${esc(CFG.PRICE_TEXT||"$2/month")}`}</button>${a.canManage?`<p><button class="linkbtn" data-act="portal">See past payments</button></p>`:""}`:`<p class="hint">Memberships aren't available yet.</p>`)}
   </div>
   <div class="panel">
    <p class="saved" id="savedNote" style="margin-top:0"></p>
    <div class="row"><button class="btn" data-act="signout">Sign out</button><button class="btn" data-go="home">Back to planner</button></div>
   </div>
   <details class="panel"><summary><b>Privacy and your data</b></summary>
    <p>Your answers and meal plans are saved to your account so you can use them on any device. Only you can see them. Payments are handled by Stripe; this app never sees your card number. Recipes that Claude creates are added to a shared recipe library without any of your personal details.</p>
    <p><button class="linkbtn danger" data-act="delete">Delete my account and data</button></p>
   </details>`;
}
async function startCheckout(){
  acctBusy="subscribe"; rerender();
  try{ const d=await fn("checkout",{}); if(d.already){ toast("You're already a member."); await refreshAccount(); } else if(d.url){ location.href=d.url; return; } }
  catch(e){ toast(e.code==="network"?"No connection. Try again.":(e.message&&e.message!=="server"?e.message:"Couldn't open checkout. Try again.")); }
  acctBusy=""; rerender();
}
async function openPortal(){
  acctBusy="portal"; rerender();
  try{ const d=await fn("portal",{}); if(d.url){ location.href=d.url; return; } }
  catch(e){ toast("Couldn't open billing. Try again."); }
  acctBusy=""; rerender();
}
function showDeleteSheet(){
  if($("delSheet")) return;
  document.body.insertAdjacentHTML("beforeend",`<div class="sheet" id="delSheet" role="dialog" aria-modal="true" aria-labelledby="delTitle"><div class="sheetin">
    <h3 id="delTitle">Delete your account?</h3>
    <p>This cancels any membership and permanently deletes your account, answers and meal plans. It can't be undone.</p>
    <div class="row"><button class="btn primary danger-bg" id="delYes">Yes, delete everything</button><button class="btn" id="delNo">Cancel</button></div>
  </div></div>`);
  $("delNo").focus();
}
async function deleteAccount(){
  const b=$("delYes"); if(b){ b.disabled=true; b.textContent="Deleting…"; }
  try{
    await fn("delete-account",{});
    try{ localStorage.removeItem(keyFor(uid())); }catch(e){}
    storeSession(null); const sh=$("delSheet"); if(sh) sh.remove();
    toast("Your account has been deleted."); onSignedOut();
  }catch(e){ if(b){ b.disabled=false; b.textContent="Yes, delete everything"; } toast("Couldn't delete the account. Try again."); }
}
async function signOut(){
  const t=session&&session.access_token;
  clearTimeout(pushTimer); if(signedIn()) await pushPlan();
  storeSession(null);
  if(t) authCall("logout",null,{token:t}).catch(()=>{});
  toast("Signed out."); onSignedOut();
}
/* Coming back from Stripe */
async function handleCheckoutReturn(){
  const q=new URLSearchParams(location.search); const c=q.get("checkout"); if(!c) return;
  q.delete("checkout"); history.replaceState(null,"",location.pathname+(q.toString()?"?"+q:"")+location.hash);
  if(c==="cancel"){ toast("No problem. You weren't charged."); return; }
  if(!signedIn()) return;
  toast("Thanks! Turning on your membership…");
  for(let i=0;i<10;i++){ await refreshAccount(); if(acct&&acct.plan==="member"){ toast("You're a member. Enjoy!"); return; } await new Promise(r=>setTimeout(r,2000)); }
  toast("Payment received. Your membership will show up in a minute.");
}
let toastTimer;
function toast(msg){
  let t=$("toast"); if(!t){ document.body.insertAdjacentHTML("beforeend",`<div id="toast" class="toast" role="status" aria-live="polite"></div>`); t=$("toast"); }
  t.textContent=msg; t.classList.add("show"); clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove("show"),3800);
}
function topBar(){
  const b=$("acctBtn"); if(!b) return;
  b.textContent=!HAS_BACKEND?"":signedIn()?"Account":"Sign in";
  b.classList.toggle("hide",!HAS_BACKEND);
}
const quickHTML=()=>`<h2 class="q">Your setup</h2><p class="sub">${S.completed?"Your saved answers are filled in. Change what's different, then tap the button at the bottom.":"Fill in each section, then tap the button at the bottom."}</p>`
  +STEPS.map(st=>`<section class="qf" id="qf-${st.id}"><h3>${st.short}</h3>${st.body()}<p class="err hide" id="err-${st.id}"></p></section>`).join("");
const guidedHTML=()=>{const st=STEPS[step];return `<h2 class="q">${st.title}</h2><p class="sub">${st.sub}</p>${st.body()}<p class="err hide" id="err"></p>`;};

function reviewHTML(){
  const t=targets();
  return `<h2 class="q">Your daily targets</h2>
  <p class="sub">${t.custom?"Using your own numbers.":"Worked out from your answers."} Adjust if you like, then we'll go meal by meal.</p>
  <div class="targets">
   <div class="tg"><strong>${t.protein}g</strong><span>Protein</span><small>Keeps you full and protects muscle</small></div>
   <div class="tg"><strong>${t.fiber}g</strong><span>Fiber</span><small>From beans, whole grains, fruit and veg</small></div>
   ${S.trackCal&&t.cal?`<div class="tg"><strong>${t.cal.toLocaleString()}</strong><span>Calories</span><small>${t.custom&&parseFloat(S.override.cal)>0?"Your number":"A rough daily estimate"}</small></div>`:""}
  </div>
  ${group("Use these numbers or set your own?","If a coach, doctor or app gave you numbers, put them here.",`<span class="seg"><button type="button" data-ovr="0" aria-pressed="${!S.override.on}">Use these</button><button type="button" data-ovr="1" aria-pressed="${S.override.on}">Set my own</button></span>
   ${S.override.on?`<div class="pair" style="margin-top:1rem"><label class="f">Protein (g per day)<input type="number" inputmode="numeric" data-obind="protein" value="${esc(S.override.protein)}" placeholder="${t.protein}"></label><label class="f">Fiber (g per day)<input type="number" inputmode="numeric" data-obind="fiber" value="${esc(S.override.fiber)}" placeholder="${t.fiber}"></label></div>
    <label class="f">Calories per day <small>Optional. Leave blank to skip calories.</small><input type="number" inputmode="numeric" data-obind="cal" value="${esc(S.override.cal)}" placeholder="${t.cal||"e.g. 2200"}"></label><p class="hint">Blank boxes keep our number. Changes apply when you leave the box.</p>`:""}`)}
  ${!t.hasStats&&!S.override.on?`<div class="callout">These are average amounts because weight wasn't entered. <button class="linkbtn" data-go="quick" data-focus="you">Add it</button> for a better fit.</div>`:""}
  ${S.override.on?"":group("Protein amount",'Pick "More" if you\'re often hungry or lifting weights.',seg("proteinAdj",[["less","Less"],["normal","Normal"],["more","More"]]))}
  ${t.cal?group("Use calories in the calculation?","",`<span class="seg"><button type="button" data-cal="0" aria-pressed="${!S.trackCal}">No, keep it simple</button><button type="button" data-cal="1" aria-pressed="${S.trackCal}">Yes</button></span>`):""}
  ${group("Who's eating","",`<div class="meals">${eaters().map(x=>`<div><b>${esc(x.name)}</b><em>${x.name==="You"?"your targets above":x.f===1?"same portions as you":`${x.f}× your portion`}</em></div>`).join("")}</div><button class="linkbtn" data-go="quick" data-focus="household">${S.household.length?"Change who's eating":"Add people"}</button>`)}
  ${group("What each meal should give you","",`<div class="meals">${planned().map(k=>`<div><b>${ML[k]}</b><em>about ${t.per[k].p}g protein · ${t.per[k].f}g fiber${S.trackCal&&t.cal?` · ${t.per[k].k} cal`:""}</em></div>`).join("")}</div>`)}
  <p><button class="linkbtn" data-go="quick">Change other answers</button></p>`;
}

function stepsBar(){
  return `<div class="mealtabs">`+slots().map((sl,i)=>`<span class="${view==="pick"&&i===pickIdx?"on":byId(S.picks[sl.meal][sl.i])?"done":""}">${slotLabel(sl)}</span>`).join("")+`<span class="${view==="dash"?"on":""}">Your plan</span></div>`;
}
/* ---------- shared groceries ---------- */
const PRICEY=/chicken|beef|turkey|pork|steak|salmon|shrimp|cod|fish|tuna|sausage|bacon|ham|lamb|tofu|tempeh|cheese|cheddar|feta|parmesan|mozzarella|nut|almond|cashew|walnut|pecan|avocado|pesto|tahini|protein powder|smoked/i;
const BASIC=/^(salt|pepper|salt and pepper|water|oil|olive oil|cooking oil|vegetable oil|cooking spray)$/i;
const normIng=n=>n.toLowerCase().replace(/\(.*?\)/g,"").replace(/\b(canned|fresh|frozen|dried|large|small|medium|boneless|skinless|plain|light|low-sodium|whole-wheat|whole wheat)\b/g,"").replace(/\s+/g," ").trim().replace(/(es|s)$/,"");
function pickedIngs(exceptId){
  const m=new Map();
  MEALS.forEach(k=>S.picks[k].forEach(id=>{ if(!id||id===exceptId) return; const r=byId(id); if(!r) return;
    r.ing.forEach(([n,,,sec])=>{ if(sec==="Spices"||BASIC.test(n.trim())) return; m.set(normIng(n),{name:n,pricey:sec==="Meat & seafood"||PRICEY.test(n)}); }); }));
  return m;
}
function sharedWith(r){
  const P=pickedIngs(r.id); if(!P.size) return [];
  const out=[], seen=new Set();
  r.ing.forEach(([n,,,sec])=>{ if(sec==="Spices") return; const k=normIng(n); if(P.has(k)&&!seen.has(k)){ seen.add(k); out.push({name:n,pricey:P.get(k).pricey}); } });
  return out.sort((a,b)=>b.pricey-a.pricey);
}
function optCard(e,meal,slotI){
  const sel=S.picks[meal][slotI]===e.r.id, r=e.r;
  const m=e.m!==1?`<div class="portion">Portion: ${e.m}× the recipe ${e.m>1?"(a bit bigger)":"(a bit smaller)"}</div>`:"";
  const sh=S.share===false?[]:e.sh;
  const shareBox=sh.length?`<div class="sharebox">🛒 Uses something you're already buying: ${sh.map(x=>`<mark>${esc(x.name)}</mark>`).join(", ")}</div>`:"";
  return `<article class="opt ${sel?"sel":""} ${sh.length?"shares":""} ${r.fun?"fun":""}">
   <div class="nm">${esc(r.name)}</div>
   <div class="meta">${r.c==="Any"?"":esc(r.c)+" · "}${r.t?r.t+" min":"No cooking"} · ${r.ing.filter(i=>i[3]!=="Spices").length} ingredients · ${"$".repeat(r.$)}</div>
   ${r.blurb?`<p class="blurb">${esc(r.blurb)}</p>`:""}
   <div class="nums"><div><strong>${e.P}g</strong><span>protein</span></div><div><strong>${e.F}g</strong><span>fiber</span></div><div><strong>${e.K}</strong><span>calories</span></div></div>
   ${m}${shareBox}
   <div class="tagrow">${e.tags.map(t=>`<span>${esc(t)}</span>`).join("")}</div>
   <details><summary>See ingredients and steps</summary>
    <ul>${r.ing.map(([n,q,u])=>`<li>${q?esc(fmtQ(q*e.m,u))+" ":""}${esc(n)}</li>`).join("")}</ul>
    ${r.steps.length?`<ol>${r.steps.map(s=>`<li>${esc(s)}</li>`).join("")}</ol>`:`<p class="hint">${stepsBusy.has(r.id)?"Writing the steps…":"Easy step-by-step instructions are written when you choose this meal."}</p>`}<p class="hint">Amounts above are for one serving.</p></details>
   <button type="button" class="btn ${sel?"primary":""} pickbtn" data-choose="${meal}" data-slot="${slotI}" data-id="${r.id}" aria-pressed="${sel}">${sel?"✓ Chosen":"Choose this"}</button>
  </article>`;
}
const USUAL_CHIPS={
  breakfast:["Eggs","Oatmeal","Yogurt","Smoothies","Toast","Cereal","Breakfast sandwiches","Pancakes or waffles","Muffins","Just coffee"],
  lunch:["Sandwiches","Wraps","Salads","Rice bowls","Soup","Pasta","Leftovers","Burritos","Fast food"],
  dinner:["Chicken and rice","Pasta","Tacos","Stir-fry","Burgers","Casseroles","Soup or chili","Pizza","Meat and potatoes","Curry"],
  snack:["Fruit","Chips","Granola bars","Yogurt","Nuts","Cheese and crackers","Popcorn","Something sweet","Veggies and dip"]
};
function needsUsual(sl){ return !aiOff && S.usual[sl.meal]===null; }
function submitUsual(sl,val){ S.usual[sl.meal]=val; delete S.usualDraft; save(); if(aiOff){ ensureOptions(); rerender(); } else { stopHiddenJobs(); startJob(sl.meal,sl.meal+":"+sl.i,true); } window.scrollTo(0,0); }
function usualHTML(meal){
  const u=S.usualDraft||{tags:[],text:""};
  return stepsBar()+`<h2 class="q">What do you usually eat for ${meal==="snack"?"snacks":ML[meal].toLowerCase()}?</h2>
   <p class="sub">We'll make options that feel familiar, plus one or two fun ones. Tap any that fit.</p>
   <div class="chips">${USUAL_CHIPS[meal].map(c=>`<button type="button" class="chip" data-usual="${esc(c)}" aria-pressed="${u.tags.includes(c)}">${esc(c)}</button>`).join("")}</div>
   <label class="f" style="margin-top:1.2rem">Anything specific? <small>Optional — e.g. "turkey sandwich", "chicken Caesar salad"</small><input type="text" id="usualText" value="${esc(u.text)}" placeholder="Type a few meals you like"></label>
   <p><button class="linkbtn" id="usualSkip">Skip — surprise me</button></p>`;
}
function usualTxt(meal){ const u=S.usual[meal]; if(!u) return ""; return [...u.tags,u.text].filter(Boolean).join(", "); }
/* What the picker says about AI options: rounds left, or why it's showing saved recipes instead. */
function aiNotice(){
  if(!HAS_BACKEND) return "";
  if(!signedIn()) return `<div class="callout"><b>These are recipes from the built-in library.</b> Create a free account to get fresh options made just for you. ${esc(CFG.TRIAL_TEXT||"Your first plan is free")}.<div class="row"><button class="btn primary small" data-go="auth" data-mode="signup">Create account</button><button class="btn small" data-go="auth" data-mode="signin">Sign in</button></div></div>`;
  if(quotaReason==="subscribe") return `<div class="callout"><b>You've used your free plan's fresh options.</b> Showing saved recipes for now. Become a member for ${esc(CFG.PRICE_TEXT||"$2/month")} to keep getting new options made for you.<div class="row"><button class="btn primary small" data-act="subscribe">Become a member</button></div></div>`;
  if(quotaReason==="limit") return `<div class="callout"><b>You've reached this month's fresh options.</b> Showing saved recipes until your allowance resets on the 1st.</div>`;
  const left=roundsLeft();
  return left!==null?`<p class="hint">${acct.plan==="member"?"Member":"Free plan"}: ${left} round${left===1?"":"s"} of new options left${acct.plan==="member"?" this month":""}.</p>`:"";
}
function pickerHTML(){
  const sl=slots()[pickIdx], meal=sl.meal, cfg=S.meals[meal], t=targets(), key=meal+":"+sl.i;
  if(needsUsual(sl)) return usualHTML(meal);
  const ids=opts[key]||[];
  const anyPicks=pickedIngs().size>0;
  let mode=S.sort[meal]||"best"; if(mode==="share"&&!anyPicks) mode="best";
  const f={best:(a,b)=>b.sc-a.sc,protein:(a,b)=>b.P-a.P,fast:(a,b)=>a.r.t-b.r.t,cheap:(a,b)=>a.r.$-b.r.$,fiber:(a,b)=>b.F-a.F,share:(a,b)=>b.sh.length-a.sh.length||b.sc-a.sc}[mode];
  const evs=ids.map(byId).filter(Boolean).map(r=>evaluate(r,meal,t)).sort(f);
  const days=slotDays(meal,sl.i);
  const otherChosen=S.picks[meal].map((id,i)=>i!==sl.i&&byId(id)?`${slotLabel({meal,i})}: ${esc(byId(id).name)}`:null).filter(Boolean);
  let list="";
  if(evs.length) list=`<div class="opts">${evs.map(e=>optCard(e,meal,sl.i)).join("")}</div>`;
  const busy=jobBusy(key), pre=jobs[key]&&!jobs[key].visible?jobs[key]:null;
  if(!evs.length) list=`<div class="opts"></div>`;
  if(busy) list+=`<div class="genbox"><div class="thinking"><span class="dot"></span><span id="genTxt">${evs.length?`${evs.length} options ready — more coming…`:"Creating options — the first ones show up in a few seconds…"}</span></div><button class="btn small" id="stopGen">Stop</button></div>`;
  const more=busy?"":!aiOff
    ?`<button class="btn" id="moreGen">${pre&&pre.items.length?`Show ${pre.items.length} more options (ready)`:evs.length?"Create 10 more options":"Create 10 options"}</button>`
    :(libraryLeft(meal,key)?`<button class="btn" id="moreLib">Show 5 more options</button>`:`<span class="hint">That's every built-in recipe that matches your answers.</span>`);
  const sorts=[["best","Best match"],...(anyPicks?[["share","Shares groceries"]]:[]),["protein","Most protein"],["fiber","Most fiber"],["fast","Fastest"],["cheap","Cheapest"]];
  return stepsBar()+`
   <h2 class="q">${cfg.n>1?`Choose ${ML[meal].toLowerCase().replace(/s$/,"")} ${sl.i+1} of ${cfg.n}`:`Choose your ${ML[meal].toLowerCase().replace(/s$/,"")}`}</h2>
   <p class="sub">You'll eat this ${days} day${days>1?"s":""} a week. Each serving is sized to give you about <b>${t.per[meal].p}g protein</b>.</p>
   ${!aiOff&&S.usual[meal]?`<p class="hint">${usualTxt(meal)?`Based on what you usually eat: ${esc(usualTxt(meal))}.`:"You asked to be surprised."} <button class="linkbtn" data-go="quick" data-focus="usual">Change</button></p>`:""}
   ${otherChosen.length?`<p class="hint">Already chosen: ${otherChosen.join(" · ")}</p>`:""}
   ${S.share!==null&&anyPicks?`<div class="group"><div class="gl">Reuse pricier groceries from your picks?</div><span class="seg"><button type="button" data-share="1" aria-pressed="${S.share===true}">Yes, a little</button><button type="button" data-share="0" aria-pressed="${S.share===false}">No, keep it varied</button></span></div>`:""}
   <div class="pickcfg">
    ${counter(`meals.${meal}.n`,cfg.n,1,4,`Different ${MLs[meal]}`,"")}
    ${counter(`meals.${meal}.days`,cfg.days,1,7,"Days per week","")}
   </div>
   ${aiNotice()}
   ${evs.length>1?`<div class="group"><div class="gl">Sort options</div><div class="chips">${sorts.map(([v,x])=>`<button type="button" class="chip" data-sort="${meal}" data-val="${v}" aria-pressed="${mode===v}">${x}</button>`).join("")}</div></div>`:""}
   ${list}
   ${genMsg?`<p class="err">${esc(genMsg)}</p>`:""}
   <div class="morerow">${more}</div>
   <p class="err hide" id="err"></p>`
   +(askShare?`<div class="sheet" role="dialog" aria-label="Reuse groceries"><div class="sheetin">
     <h3>Make shopping easier?</h3>
     <p>Want a couple of the next options to reuse a pricier item you're already buying, like the same meat or cheese? We'll highlight them. Everything else stays varied.</p>
     <div class="row"><button class="btn primary" data-share="1">Yes, a little overlap</button><button class="btn" data-share="0">No, keep it varied</button></div>
   </div></div>`:"");
}

/* ---------- options: Claude creates them, the page checks and sizes them ---------- */
function libraryLeft(meal,key){ const shown=new Set(opts[key]||[]); return ranked(meal).some(e=>!shown.has(e.r.id)); }
function addLibrary(meal,key){
  const shown=new Set(opts[key]||[]), taken=new Set(MEALS.flatMap(k=>S.picks[k]).filter(Boolean));
  const next=ranked(meal).filter(e=>!shown.has(e.r.id)&&!taken.has(e.r.id)).slice(0,5).map(e=>e.r.id);
  opts[key]=[...(opts[key]||[]),...next];
}
function ensureOptions(){
  if(view!=="pick") return;
  const sl=slots()[pickIdx]; if(!sl) return;
  const key=sl.meal+":"+sl.i;
  stopHiddenJobs(key);
  if(jobs[key]&&!jobs[key].visible&&!(opts[key]||[]).length){ reveal(key); addLibraryMatches(sl.meal,key); return; }
  if((opts[key]||[]).length||jobs[key]){ scheduleBackground(); return; }
  const cur=S.picks[sl.meal][sl.i];
  if(cur&&byId(cur)) opts[key]=[cur];
  if(aiOff){ addLibrary(sl.meal,key); addLibraryMatches(sl.meal,key); rerender(); return; }
  if(needsUsual(sl)){ rerender(); return; }
  addLibraryMatches(sl.meal,key);
  startJob(sl.meal,key,true);
}
const ALLERGENS=["nuts","peanuts","dairy","gluten","eggs","shellfish","fish","soy","pork","beef"];
const SECTIONS=["Produce","Meat & seafood","Dairy & eggs","Grains & bread","Pantry","Frozen","Spices"];
/* What the server needs to write good options. The server builds the actual prompt. */
function genCtx(meal){
  const t=targets(), tg=t.per[meal];
  const seen=[...new Set(Object.entries(opts).filter(([k])=>k.startsWith(meal+":")).flatMap(([,v])=>v).map(id=>byId(id)?.name).filter(Boolean))];
  const chosen=MEALS.flatMap(k=>S.picks[k]).map(id=>byId(id)?.name).filter(Boolean);
  return {
    reasons:S.reasons.map(r=>(REASONS.find(x=>x.v===r)||{}).t).filter(Boolean), diet:S.diet,
    avoid:[...S.allergies,...S.dislikes.split(",")].map(x=>x.trim()).filter(Boolean),
    skill:S.skill, equip:S.equip, time:S.time, cuisines:S.cuisines, spice:S.spice, budget:S.budget, freezer:S.freezer,
    target:tg, trackCal:!!(S.trackCal&&t.cal), usual:usualTxt(meal),
    seen:seen.slice(-60), chosen, prev:S.prevNames||[],
    share:S.share===true, pricey:[...pickedIngs().values()].filter(x=>x.pricey).map(x=>x.name)
  };
}
/* Same id the server uses, so a recipe and its library copy match. */
function rid(meal,name){
  const str=meal+"|"+String(name).toLowerCase().replace(/\s+/g," ").trim();
  let h1=0x811c9dc5, h2=0x01000193^0x5bd1e995;
  for(let i=0;i<str.length;i++){ const c=str.charCodeAt(i); h1=Math.imul(h1^c,0x01000193)>>>0; h2=Math.imul(h2^c,0x5bd1e995)>>>0; }
  return "r_"+h1.toString(16).padStart(8,"0")+h2.toString(16).padStart(8,"0");
}
function toRecipe(o,meal){
  const n=x=>Math.max(0,Number(x)||0);
  if(!o||typeof o.name!=="string"||!Array.isArray(o.ingredients)||!n(o.protein)) return null;
  const name=o.name.slice(0,80).trim(); const id=rid(meal,name);
  return {id,name,meals:[meal],c:String(o.cuisine||"Any").slice(0,30),d:["vegan","veg","pesc","meat"].includes(o.diet)?o.diet:"meat",
    a:(Array.isArray(o.allergens)?o.allergens:[]).map(x=>String(x).toLowerCase()).filter(x=>ALLERGENS.includes(x)),
    k:n(o.kcal)||400,p:n(o.protein),cb:n(o.carbs)||40,f:n(o.fat)||15,fb:n(o.fiber),t:Math.round(n(o.minutes)),sk:parseInt(S.skill)||2,
    $:[1,2,3].includes(o.cost)?o.cost:2,sp:[0,1,2].includes(o.spice)?o.spice:0,fz:o.freezes?1:0,eq:[],ai:true,fun:!!o.fun,blurb:typeof o.blurb==="string"?o.blurb.slice(0,160):"",
    ing:o.ingredients.filter(x=>Array.isArray(x)&&x[0]).slice(0,20).map(x=>[String(x[0]).slice(0,60),n(x[1]),String(x[2]||"").slice(0,10),SECTIONS.includes(x[3])?x[3]:"Pantry"]),
    steps:Array.isArray(o.steps)?o.steps.slice(0,6).map(x=>String(x).slice(0,400)):[]};
}
/* ---------- steps are written only for chosen meals ---------- */
const stepsBusy=new Set(), stepsWaiters={};
function ensureSteps(id){
  const r=byId(id); if(!r||r.steps.length) return Promise.resolve();
  if(stepsWaiters[id]) return stepsWaiters[id];
  if(!HAS_BACKEND||!signedIn()){ return Promise.resolve(); }
  stepsBusy.add(id);
  stepsWaiters[id]=AI.steps(r).then(arr=>{
    if(Array.isArray(arr)&&arr.length){ r.steps=arr.slice(0,6).map(x=>String(x).slice(0,400)); if(S.custom[id]) S.custom[id].steps=r.steps; save(); }
  }).catch(e=>{ if(e&&e.code==="quota") refreshAccount(); }).finally(()=>{ stepsBusy.delete(id); delete stepsWaiters[id]; if(view==="dash"||view==="pick") rerender(); });
  return stepsWaiters[id];
}
const pickedIds=()=>MEALS.flatMap(k=>S.meals[k].on?S.picks[k]:[]).filter(id=>byId(id));
function ensureAllSteps(){ return Promise.all(pickedIds().map(ensureSteps)); }

/* ---------- shared recipe library (recipes only, nothing personal) ---------- */
const libCache={}, libAdded={};
function fromDoc(id,o,meal){
  if(!o||typeof o.name!=="string"||!Array.isArray(o.ing)) return null;
  const n=x=>Math.max(0,Number(x)||0);
  const r=toRecipe({name:o.name,blurb:o.blurb,fun:o.fun,cuisine:o.c,minutes:o.t,cost:o.cost,spice:o.sp,freezes:!!o.fz,diet:o.d,allergens:o.a,kcal:o.k,protein:o.p,carbs:o.cb,fat:o.f,fiber:o.fb,
    ingredients:o.ing.map(x=>Array.isArray(x)?x:x&&[x.n,n(x.q),x.u,x.s]),steps:o.steps},meal);
  if(!r) return null; r.id=id; r.lib=true; return r;
}
async function loadLibrary(meal){
  if(!signedIn()||!HAS_BACKEND) return [];
  if(!libCache[meal]){
    libCache[meal]=api(`recipes?meal=eq.${meal}&select=id,data&order=created_at.desc&limit=500`)
      .then(rows=>(rows||[]).map(x=>fromDoc(x.id,x.data,meal)).filter(Boolean)).catch(()=>{ delete libCache[meal]; return []; });
  }
  return libCache[meal];
}
function libFits(r,meal){
  if(!eligibleAI(r)) return false;
  if(aiOff&&!r.steps.length) return false;
  if(r.t>(parseInt(S.time)||999)) return false;
  if(S.spice==="mild"&&r.sp>=2) return false;
  return true;
}
async function addLibraryMatches(meal,key){
  if(libAdded[key]) return; libAdded[key]=true;
  const lib=await loadLibrary(meal); if(!lib.length) return;
  const t=targets(), shown=new Set((opts[key]||[]).map(id=>(byId(id)||{}).name?.toLowerCase()));
  MEALS.forEach(k=>S.picks[k].forEach(id=>{ const r=byId(id); if(r) shown.add(r.name.toLowerCase()); }));
  const words=usualTxt(meal).toLowerCase().split(/[^a-z]+/).filter(w=>w.length>3);
  const best=lib.filter(r=>libFits(r,meal)&&!shown.has(r.name.toLowerCase()))
    .map(r=>{ const e=evaluate(r,meal,t); const nm=r.name.toLowerCase(); e.sc+=words.filter(w=>nm.includes(w)).length*4; return e; })
    .sort((a,b)=>b.sc-a.sc).slice(0,4);
  if(!best.length) return;
  best.forEach(e=>pool[e.r.id]=e.r);
  opts[key]=[...best.map(e=>e.r.id),...(opts[key]||[])];
  if(view==="pick"&&curKey()===key) rerender();
}

/* Pull each finished recipe object out of a JSON array that is still streaming in. */
function parseObjs(text){
  const out=[]; let i=text.indexOf("["); if(i<0) return out;
  let depth=0,inStr=false,esc2=false,start=-1;
  for(i=i+1;i<text.length;i++){
    const ch=text[i];
    if(inStr){ if(esc2) esc2=false; else if(ch==="\\") esc2=true; else if(ch==='"') inStr=false; continue; }
    if(ch==='"') inStr=true;
    else if(ch==="{"){ if(depth===0) start=i; depth++; }
    else if(ch==="}"){ depth--; if(depth===0&&start>=0){ try{ out.push(JSON.parse(text.slice(start,i+1))); }catch(e){} start=-1; } }
    else if(ch==="]"&&depth===0) break;
  }
  return out;
}
const curKey=()=>{ const sl=slots()[pickIdx]; return sl?sl.meal+":"+sl.i:""; };
const jobBusy=key=>!!(jobs[key]&&jobs[key].running&&jobs[key].visible);
function startJob(meal,key,visible){
  if(!sampleFn||aiOff) return;
  const old=jobs[key];
  if(old&&old.running){ if(visible&&!old.visible) reveal(key); return; }
  const job={meal,key,visible,items:[],running:true,ctl:new AbortController(),errs:[],added:0};
  jobs[key]=job;
  if(visible){ genMsg=""; if(view==="pick") rerender(); }
  const names=()=>new Set([...(opts[key]||[]),...job.items].map(id=>(byId(id)||{}).name).filter(Boolean).map(n=>n.toLowerCase()));
  const take=list=>list.forEach(o=>{
    const r=toRecipe(o,meal); if(!r||!eligibleAI(r)) return;
    if(names().has(r.name.toLowerCase())) return;
    pool[r.id]=r; job.added++;
    if(job.visible){ opts[key]=[...(opts[key]||[]),r.id]; if(view==="pick"&&curKey()===key) appendCard(r,meal,key); }
    else job.items.push(r.id);
  });
  const seen=[0,0];
  const ctx=genCtx(meal);
  const call=(variant,i)=>AI.options(meal,variant,ctx,{signal:job.ctl.signal,
      onText:({text})=>{ const objs=parseObjs(text); if(objs.length>seen[i]){ take(objs.slice(seen[i])); seen[i]=objs.length; } }})
    .then(v=>{ if(Array.isArray(v)&&v.length>seen[i]){ take(v.slice(seen[i])); seen[i]=v.length; } })
    .catch(e=>{ job.errs.push(e&&e.code); if(e&&e.code==="quota") job.quota=e.reason==="limit"?"limit":"subscribe"; });
  Promise.all([call("familiar",0),call("mix",1)]).then(()=>finishJob(job));
}
function finishJob(job){
  job.running=false;
  if(jobs[job.key]!==job) return;
  const c=job.errs.find(x=>x!=="quota")||job.errs[0];
  if(job.quota){ quotaReason=job.quota; setAI(); refreshAccount(); if(job.visible&&!job.added) addLibrary(job.meal,job.key); }
  if(job.visible){
    if(!job.added&&!aiOff) genMsg=c==="cancelled"?"":c==="busy"||c==="rate_limited"?"Claude is busy right now. Wait a minute, then tap the button again.":c==="network"?"No connection. Check your signal, then tap the button again.":c==="auth"?"You've been signed out. Sign in again to get new options.":job.errs.length?"Couldn't create options just now. Tap the button to try again.":"Those options didn't fit your answers. Tap the button to try again.";
    else if(job.errs.length&&!job.errs.includes("cancelled")) genMsg="Some options couldn't be created. Tap the button for more.";
    delete jobs[job.key];
    if(view==="pick") rerender();
  } else if(view==="pick"&&curKey()===job.key){ if(!(opts[job.key]||[]).length) return reveal(job.key); updateMoreBtn(); }
  scheduleBackground();
}
/* While they look at options, quietly get the next meal's options ready, then a second batch for this one. */
function scheduleBackground(){
  if(aiOff||!sampleFn||view!=="pick") return;
  if(Object.values(jobs).some(j=>j.running)) return;
  const SL=slots(), cur=SL[pickIdx], nxt=SL[pickIdx+1]; if(!cur) return;
  if(nxt&&!needsUsual(nxt)){ const nk=nxt.meal+":"+nxt.i; if(!(opts[nk]||[]).length&&!jobs[nk]) return startJob(nxt.meal,nk,false); }
  // A second batch for this meal only for members, so free-plan options aren't spent in the background.
  const ck=cur.meal+":"+cur.i; if(acct&&acct.plan==="member"&&!jobs[ck]&&(opts[ck]||[]).length) startJob(cur.meal,ck,false);
}
function reveal(key){
  const job=jobs[key]; if(!job) return;
  job.visible=true;
  opts[key]=[...(opts[key]||[]),...job.items]; job.items=[];
  // drop anything that matches a meal they've since chosen
  const chosen=new Set(pickedIds().map(id=>byId(id).name.toLowerCase()));
  opts[key]=opts[key].filter((id,i,a)=>a.indexOf(id)===i&&(!chosen.has((byId(id)||{}).name?.toLowerCase())||pickedIds().includes(id)));
  if(!job.running){ delete jobs[key]; rerender(); scheduleBackground(); }
  else rerender();
}
function stopHiddenJobs(exceptKey){
  const SL=slots(), nxt=SL[pickIdx+1], nk=nxt?nxt.meal+":"+nxt.i:"";
  Object.values(jobs).forEach(j=>{ if(!j.visible&&j.running&&j.key!==exceptKey&&j.key!==nk) j.ctl.abort(); });
}
function appendCard(r,meal,key){
  const box=document.querySelector(".opts"), sl=slots()[pickIdx];
  if(!box){ rerender(); return; }
  box.insertAdjacentHTML("beforeend",optCard(evaluate(r,meal,targets()),meal,sl.i));
  const n=$("genTxt"); if(n) n.textContent=`${(opts[key]||[]).length} options ready — more coming…`;
}
function updateMoreBtn(){
  const b=$("moreGen"), key=curKey(), j=jobs[key]; if(!b||!j||j.visible) return;
  b.textContent=j.items.length?`Show ${j.items.length} more options (ready)`:"Create 10 more options";
}
function eligibleAI(r){
  if(!(DIETOK[S.diet]||DIETOK.everything).includes(r.d)) return false;
  const al=S.allergies.map(a=>a.toLowerCase()); if(r.a.some(x=>al.includes(x))) return false;
  const dis=S.dislikes.toLowerCase().split(",").map(s=>s.trim().replace(/s$/,"")).filter(s=>s.length>2);
  const text=(r.name+" "+r.ing.map(i=>i[0]).join(" ")).toLowerCase();
  return !dis.some(d=>text.includes(d));
}

function bar(label,val,tgt,unit,overBad){
  const pct=tgt?Math.min(130,val/tgt*100):0;
  const state=!tgt?"":pct<85?"under":(pct>115&&overBad)?"over":"ok";
  return `<div class="nbar"><div class="lbl"><b>${label}</b><span>${val.toLocaleString()}${unit} of ${tgt.toLocaleString()}${unit}</span></div>
   <div class="track"><i class="${state}" style="width:${Math.min(100,pct/1.3)}%"></i><em style="left:${100/1.3}%"></em></div></div>`;
}
function dashHTML(){
  const t=targets(), avg=dayAverages(), P=planned();
  let body="";
  if(dashTab==="week"){
    body=P.map(meal=>{
      return `<section class="dmeal"><div class="dmh"><h3>${ML[meal]}</h3></div>
       ${S.picks[meal].map((id,i)=>{const e=id&&pickEval(meal,id); const idx=slots().findIndex(x=>x.meal===meal&&x.i===i);
         if(!e) return `<div class="drow"><div><b>${slotLabel({meal,i})}: not chosen</b></div><button class="btn small" data-slot-go="${idx}">Choose</button></div>`;
         const sv=r05(slotDays(meal,i)*totalF());
         return `<div class="drow"><div><b>${esc(e.r.name)}</b><small>${S.meals[meal].n>1?slotLabel({meal,i})+" · ":""}${dayRange(meal,id)} · ${portionsTxt(sv)} · ${e.P}g protein, ${e.F}g fiber${e.m!==1?` · ${e.m}× portion`:""}</small></div>
         <button class="btn small" data-slot-go="${idx}">Change</button></div>`;}).join("")}</section>`;
    }).join("")
     +`<h3 style="margin-top:1.4rem">Day by day</h3><div class="tw"><table class="wk"><tr><th></th>${DAYS.map(d=>`<th>${d}</th>`).join("")}</tr>`
     +P.map(meal=>{const d=assign(meal).days; return `<tr><th>${ML[meal]}</th>${d.map(id=>`<td>${id?esc(byId(id).name):"<span class='hint'>—</span>"}</td>`).join("")}</tr>`;}).join("")+`</table></div>`;
  } else if(dashTab==="groceries"){
    const g=groceries(); const order=["Produce","Meat & seafood","Dairy & eggs","Grains & bread","Pantry","Frozen","Spices"];
    const item=it=>{const k=it.n+"|"+it.u; return `<label class="gi"><input type="checkbox" data-check="${esc(k)}" ${S.checked[k]?"checked":""}><span>${esc(it.n)}${it.q?` <em>${esc(fmtQ(it.q,it.u,true))}</em>`:""}</span></label>`;};
    body=`<p class="hint">For ${eaters().map(e=>esc(e.name)).join(", ")}, all meals this week. Tick items as you shop. Cooking oil, salt and pepper not listed.</p>`
     +order.filter(s=>g.buy[s]).map(s=>`<h3 class="gsec">${s}</h3>${g.buy[s].sort((a,b)=>a.n.localeCompare(b.n)).map(item).join("")}`).join("")
     +(g.have.length?`<h3 class="gsec">Already have (check you have enough)</h3>${g.have.map(item).join("")}`:"");
  } else {
    body=P.map(meal=>{const {counts}=assign(meal); return S.picks[meal].filter(byId).map(id=>{
      const e=pickEval(meal,id), serv=counts[id]*totalF();
      return `<section class="dmeal"><h3>${esc(e.r.name)}</h3><p class="hint">${ML[meal]} · makes ${portionsTxt(serv)} · ${e.r.t?e.r.t+" min":"no cooking"}${e.r.fz?" · freezes well":""}</p>
       <div class="gl">Ingredients (whole batch)</div><ul>${e.r.ing.map(([n,q,u])=>`<li>${q?esc(fmtQ(q*e.m*serv,u))+" ":""}${esc(n)}${q?"":" (to taste)"}</li>`).join("")}</ul>
       <div class="gl">Steps</div>${e.r.steps.length?`<ol>${e.r.steps.map(s=>`<li>${esc(s)}</li>`).join("")}</ol>`:`<p class="hint">${stepsBusy.has(id)?"Writing the steps…":sampleFn?"Steps are on their way.":"Steps aren't available right now."}</p>`}
       <div class="gl">Portioning</div><ul>${eaters().map(x=>`<li>${esc(x.name)}: ${counts[id]} container${counts[id]>1?"s":""}${x.f!==1?`, each ${x.f}× your size`:""} — about ${Math.round(e.P*x.f)}g protein, ${Math.round(e.K*x.f/10)*10} calories each</li>`).join("")}</ul></section>`;}).join("");}).join("");
  }
  return stepsBar()+`<h2 class="q">Your meal plan</h2>
   <div class="panel">${bar("Protein (typical day)",avg.P,t.protein,"g")}${bar("Fiber (typical day)",avg.F,t.fiber,"g")}${S.trackCal&&t.cal?bar("Calories (typical day)",avg.K,t.cal,"",true):""}
    <p class="hint">A day where you eat every meal planned here. Meals you skipped aren't counted, so add those on top.</p></div>
   <span class="seg tabs">${[["week","Week"],["groceries","Grocery list"],["recipes","Recipes"]].map(([v,x])=>`<button type="button" data-tab="${v}" aria-pressed="${dashTab===v}">${x}</button>`).join("")}</span>
   <div class="dbody">${body}</div>
   <div class="group dactions">
    <div class="panel pdfpanel"><h3>Download as PDF</h3><p class="hint">Pick what to include. Good for printing or keeping on your phone.</p>
     <label class="gi"><input type="checkbox" id="pdfWeek" checked><span>Week</span></label>
     <label class="gi"><input type="checkbox" id="pdfGroc" checked><span>Grocery list</span></label>
     <label class="gi"><input type="checkbox" id="pdfRec" checked><span>Recipes</span></label>
     <button class="btn primary big" id="dlPdf" style="margin-top:.8rem">Download PDF</button><p class="hint" id="pdfMsg" aria-live="polite"></p></div>
    <button class="btn big" data-go="newweek">Plan a new week</button>
    <button class="linkbtn" data-go="home">Back to start</button>
   </div>`;
}

/* ---------- render + navigation ---------- */
function render(){
  const nav=$("nav"), next=$("next");
  $("prog").classList.toggle("hide",view!=="guided");
  nav.classList.toggle("hide",["home","dash","auth","account"].includes(view));
  topBar();
  if(view==="home"){ $("screen").innerHTML=homeHTML(); updateSavedNote(); }
  else if(view==="auth"){ $("screen").innerHTML=authHTML(); }
  else if(view==="account"){ $("screen").innerHTML=accountHTML(); updateSavedNote(); }
  else if(view==="guided"){
    $("bar").style.width=((step+1)/STEPS.length*100)+"%";
    $("count").textContent=`Question ${step+1} of ${STEPS.length}`;
    next.textContent=step===STEPS.length-1?"See my targets":"Next";
    $("screen").innerHTML=guidedHTML();
  }
  else if(view==="quick"){ next.textContent="See my targets"; $("screen").innerHTML=quickHTML(); }
  else if(view==="review"){ next.textContent=`Start with ${ML[planned()[0]].toLowerCase()}`; $("screen").innerHTML=reviewHTML(); }
  else if(view==="pick"){ fitPicks(); const SL=slots(); if(pickIdx>=SL.length) pickIdx=SL.length-1; next.textContent=needsUsual(SL[pickIdx])?"Show me options":pickIdx<SL.length-1?`Next: ${slotLabel(SL[pickIdx+1])}`:"See my meal plan"; $("screen").innerHTML=pickerHTML(); }
  else if(view==="dash"){ $("screen").innerHTML=dashHTML(); pickedIds().forEach(id=>{ if(!byId(id).steps.length) ensureSteps(id); }); }
}
const isComplete=()=>STEPS.every(st=>!st.ok||st.ok());
function go(v,o={}){
  if(v==="newweek"){ S.prevPicks=clone(S.picks); S.prevNames=MEALS.flatMap(k=>S.picks[k]).map(id=>byId(id)?.name).filter(Boolean); S.picks={breakfast:[],lunch:[],dinner:[],snack:[]}; S.custom={}; S.checked={}; Object.keys(opts).forEach(k=>delete opts[k]); save(); v="review"; reviewFrom="quick"; }
  if(v==="review"&&(view==="guided"||view==="quick")){ reviewFrom=view; planned().forEach(k=>{ if(!S.usual[k]) S.usual[k]={tags:[],text:""}; }); S.completed=S.completed||isComplete(); save(); }
  if(v==="guided"&&view!=="review") step=0;
  if(v!=="pick") stopHiddenJobs();
  view=v; render(); if(v==="pick") ensureOptions();
  if(o.focus){const el=$("qf-"+o.focus); if(el){el.scrollIntoView(); return;}}
  window.scrollTo(0,0);
}
function showErr(id,msg){const er=$(id); if(er){er.textContent=msg; er.classList.remove("hide"); er.scrollIntoView({block:"center"});}}

$("next").onclick=()=>{
  if(view==="guided"){
    const st=STEPS[step]; if(st.ok&&!st.ok()) return showErr("err",st.err);
    if(step<STEPS.length-1){step++;render();window.scrollTo(0,0);} else go("review");
  } else if(view==="quick"){
    let first=null;
    STEPS.forEach(st=>{const er=$("err-"+st.id),bad=st.ok&&!st.ok(); er.classList.toggle("hide",!bad); if(bad){er.textContent=st.err; first=first||er;}});
    if(first) return first.scrollIntoView({block:"center"});
    go("review");
  } else if(view==="review"){ S.completed=true; save(); pickIdx=0; go("pick"); }
  else if(view==="pick"){
    const SL=slots(), sl=SL[pickIdx];
    if(needsUsual(sl)) return submitUsual(sl,S.usualDraft||{tags:[],text:""});
    if(!byId(S.picks[sl.meal][sl.i])) return showErr("err",`Choose one option for ${slotLabel(sl).toLowerCase()} to continue.`);
    if(pickIdx<SL.length-1){ pickIdx++; genMsg=""; render(); window.scrollTo(0,0); ensureOptions(); }
    else { S.planDone=true; S.planDate=new Date().toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"}); save(); dashTab="week"; go("dash"); }
  }
};
$("back").onclick=()=>{
  if(view==="guided"){ if(step>0){step--;render();window.scrollTo(0,0);} else go("home"); }
  else if(view==="quick") go("home");
  else if(view==="review"){ if(reviewFrom==="guided"){step=STEPS.length-1;view="guided";render();window.scrollTo(0,0);} else go("quick"); }
  else if(view==="pick"){ if(pickIdx>0){pickIdx--;genMsg="";render();window.scrollTo(0,0);ensureOptions();} else go("review"); }
};
/* Start over: in-page confirmation (browser pop-ups are blocked here), then wipe everything. */
function showResetSheet(){
  if($("resetSheet")) return;
  document.body.insertAdjacentHTML("beforeend",`<div class="sheet" id="resetSheet" role="dialog" aria-modal="true" aria-labelledby="resetTitle"><div class="sheetin">
    <h3 id="resetTitle">Start over?</h3>
    <p>This erases all your saved answers, the people you added, and your meal plan, on every device. It can't be undone.</p>
    <div class="row"><button class="btn primary" id="resetYes" style="background:var(--tomato);border-color:var(--tomato)">Yes, erase everything</button><button class="btn" id="resetNo">Cancel</button></div>
  </div></div>`);
  $("resetNo").focus();
}
async function resetAll(){
  Object.values(jobs).forEach(j=>{ try{ j.ctl.abort(); }catch(e){} });
  [jobs,opts,pool,libAdded].forEach(o=>Object.keys(o).forEach(k=>delete o[k]));
  clearTimeout(pushTimer); clearTimeout(inputTimer);
  S=fresh(); S.updatedAt=Date.now();
  try{ localStorage.removeItem(keyFor(uid())); }catch(e){}
  view="home"; step=0; pickIdx=0; dashTab="week"; reviewFrom="guided"; genMsg=""; askShare=false;
  const sh=$("resetSheet"); if(sh) sh.remove();
  render(); window.scrollTo(0,0);
  if(signedIn()){ try{ localStorage.setItem(keyFor(uid()),JSON.stringify(S)); }catch(e){} await pushPlan(); }
}
$("restart").onclick=showResetSheet;
document.addEventListener("click",e=>{
  const t=e.target;
  if(t.id==="resetYes"){ e.stopImmediatePropagation(); resetAll(); }
  else if(t.id==="resetNo"||t.id==="resetSheet"){ e.stopImmediatePropagation(); const sh=$("resetSheet"); if(sh) sh.remove(); }
},true);
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ const sh=$("resetSheet"); if(sh) sh.remove(); } });

function rerender(){const y=window.scrollY; render(); window.scrollTo(0,y);}
document.addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b) return;
  const d=b.dataset;
  if(d.go){ if(d.go==="auth"){ authMode=d.mode||"signin"; authErr=""; authMsg=""; } if(d.go==="account") refreshAccount(); go(d.go,{focus:d.focus}); }
  else if(d.authSwitch){ const em=$("aEmail"); if(em) authEmail=em.value.trim(); authPw=""; authMode=d.mode||"signin"; authErr=""; authMsg=""; rerender(); }
  else if(d.act==="subscribe"){ if(!signedIn()){ authMode="signup"; go("auth"); } else startCheckout(); }
  else if(d.act==="portal"){ openPortal(); }
  else if(d.act==="signout"){ signOut(); }
  else if(d.act==="delete"){ showDeleteSheet(); }
  else if(b.id==="delYes"){ deleteAccount(); }
  else if(b.id==="delNo"){ const sh=$("delSheet"); if(sh) sh.remove(); }
  else if(b.id==="acctBtn"){ if(signedIn()){ refreshAccount(); go("account"); } else { authMode="signin"; authErr=""; authMsg=""; go("auth"); } }
  else if(d.hhAdd){ S.household.push(newPerson()); save(); rerender(); const c=document.querySelectorAll(".person"); const last=c[c.length-1]; if(last) last.scrollIntoView({block:"center"}); }
  else if(d.hhRemove!==undefined){ S.household.splice(+d.hhRemove,1); save(); rerender(); }
  else if(d.hh!==undefined){ const h=S.household[+d.hh]; if(h){ h[d.field]=d.val; save(); rerender(); } }
  else if(d.pick){ S[d.pick]=d.val; save(); rerender(); }
  else if(d.multi){ const k=d.multi,v=d.val; S[k]=S[k].includes(v)?S[k].filter(x=>x!==v):[...S[k],v]; save(); b.setAttribute("aria-pressed",S[k].includes(v)); }
  else if(d.count){ const key=d.count.split(".").pop(), [mn,mx]=LIM[key]; setPath(d.count,clamp(getPath(d.count)+(+d.d),mn,mx));
    fitPicks(); save(); rerender(); if(view==="pick") ensureOptions(); }
  else if(d.mon){ S.meals[d.mon].on=d.val==="1"; save(); rerender(); }
  else if(d.cal){ S.trackCal=d.cal==="1"; save(); rerender(); }
  else if(d.sort){ S.sort[d.sort]=d.val; save(); rerender(); }
  else if(d.choose){
    const meal=d.choose, i=+d.slot, id=d.id;
    if(S.picks[meal][i]===id) S.picks[meal][i]=null;
    else {
      const dup=S.picks[meal].findIndex((x,j)=>j!==i&&x===id);
      if(dup>=0) return showErr("err",`That's already ${slotLabel({meal,i:dup}).toLowerCase()}. Choose a different one so the week has variety.`);
      S.picks[meal][i]=id;
      const r=byId(id); if(r&&r.ai) S.custom[id]=r;
      if(S.share===null&&slots().length>1) askShare=true;
      ensureSteps(id);
    }
    const used=new Set(MEALS.flatMap(k=>S.picks[k]).filter(Boolean)); Object.keys(S.custom).forEach(k=>{if(!used.has(k)) delete S.custom[k];});
    save(); rerender();
  }
  else if(d.tab){ dashTab=d.tab; rerender(); }
  else if(d.slotGo){ pickIdx=+d.slotGo; genMsg=""; go("pick"); }
  else if(b.id==="moreGen"){ const sl=slots()[pickIdx], key=sl.meal+":"+sl.i; if(jobs[key]&&!jobs[key].visible) reveal(key); else startJob(sl.meal,key,true); }
  else if(b.id==="moreLib"){ const sl=slots()[pickIdx]; addLibrary(sl.meal,sl.meal+":"+sl.i); rerender(); }
  else if(b.id==="stopGen"){ const j=jobs[curKey()]; j&&j.ctl.abort(); }
  else if(d.ovr!==undefined){ S.override.on=d.ovr==="1"; save(); rerender(); }
  else if(d.umulti){ const k=d.umulti, u=S.usual[k]=S.usual[k]||{tags:[],text:""}; u.tags=u.tags.includes(d.val)?u.tags.filter(x=>x!==d.val):[...u.tags,d.val]; save(); b.setAttribute("aria-pressed",u.tags.includes(d.val)); }
  else if(d.share!==undefined){ S.share=d.share==="1"; askShare=false; save(); rerender(); }
  else if(d.usual){ const u=S.usualDraft=S.usualDraft||{tags:[],text:""}; u.tags=u.tags.includes(d.usual)?u.tags.filter(x=>x!==d.usual):[...u.tags,d.usual]; b.setAttribute("aria-pressed",u.tags.includes(d.usual)); }
  else if(b.id==="usualSkip"){ submitUsual(slots()[pickIdx],{tags:[],text:""}); }
  else if(d.reusual){ S.usualDraft=clone(S.usual[d.reusual]||{tags:[],text:""}); S.usual[d.reusual]=null; Object.keys(opts).forEach(k=>{ if(k.startsWith(d.reusual+":")) opts[k]=(opts[k]||[]).filter(id=>MEALS.some(m=>S.picks[m].includes(id))); }); save(); rerender(); window.scrollTo(0,0); }
  else if(b.id==="dlPdf") downloadPdf();
});
document.addEventListener("change",e=>{ const ds=e.target.dataset||{};
  if(ds.check){ S.checked[ds.check]=e.target.checked; save(); }
  else if(ds.obind){ S.override[ds.obind]=e.target.value; if(ds.obind==="cal"&&parseFloat(e.target.value)>0) S.trackCal=true; save(); rerender(); } });
document.addEventListener("input",e=>{
  const ds=e.target.dataset||{};
  if(ds.utext){ const k=ds.utext; S.usual[k]=S.usual[k]||{tags:[],text:""}; S.usual[k].text=e.target.value; clearTimeout(inputTimer); inputTimer=setTimeout(save,400); return; }
  if(e.target.id==="usualText"){ S.usualDraft=S.usualDraft||{tags:[],text:""}; S.usualDraft.text=e.target.value; return; }
  if(ds.bind){ S[ds.bind]=e.target.value; clearTimeout(inputTimer); inputTimer=setTimeout(save,400); }
  else if(ds.hbind){ const [i,f]=ds.hbind.split("."); const h=S.household[+i]; if(!h) return; h[f]=e.target.value;
    const out=$("hhres-"+i); if(out) out.textContent=hhResult(h); clearTimeout(inputTimer); inputTimer=setTimeout(save,400); }
});

/* ---------- PDF export (built in the page, no outside libraries) ---------- */
const WINANSI={"€":128,"‚":130,"„":132,"…":133,"‘":145,"’":146,"“":147,"”":148,"•":149,"–":150,"—":151};
function pdfClean(s){
  return String(s??"").replace(/(\d)⅓/g,"$1 1/3").replace(/(\d)⅔/g,"$1 2/3").replace(/⅓/g,"1/3").replace(/⅔/g,"2/3").replace(/[✓✔]/g,"").replace(/→/g,"->").replace(/≈/g,"~")
    .replace(/[^\x20-\xFF€‚„…‘’“”•–—]/gu,"").replace(/\s+/g," ").trim();
}
function pdfEsc(s){
  let o=""; for(const ch of s){ let c=WINANSI[ch]||ch.charCodeAt(0);
    if(ch==="("||ch===")"||ch==="\\") o+="\\"+ch; else if(c<32||c>126) o+="\\"+c.toString(8).padStart(3,"0"); else o+=ch; }
  return o;
}
const _cv=document.createElement("canvas").getContext("2d");
function textW(s,size,bold){ _cv.font=`${bold?"bold ":""}${size}px Helvetica, Arial, sans-serif`; return _cv.measureText(s).width*1.04; }
function wrap(s,size,bold,maxW){
  const words=pdfClean(s).split(" "), lines=[]; let cur="";
  words.forEach(w=>{ const t=cur?cur+" "+w:w; if(textW(t,size,bold)<=maxW||!cur) cur=t; else { lines.push(cur); cur=w; } });
  if(cur) lines.push(cur); return lines.length?lines:[""];
}
function hex(c){ const n=parseInt(c.slice(1),16); return [(n>>16)/255,((n>>8)&255)/255,(n&255)/255].map(v=>v.toFixed(3)).join(" "); }
class PDF{
  constructor(){ this.W=612; this.H=792; this.M=50; this.pages=[]; this.newPage(); }
  newPage(){ this.cur=[]; this.pages.push(this.cur); this.y=this.M; }
  ensure(h){ if(this.y+h>this.H-this.M-14) this.newPage(); }
  text(x,y,s,size=10,bold=false,color="#18211C"){ this.cur.push(`BT /${bold?"F2":"F1"} ${size} Tf ${hex(color)} rg ${x.toFixed(2)} ${(this.H-y).toFixed(2)} Td (${pdfEsc(pdfClean(s))}) Tj ET`); }
  rect(x,y,w,h,{stroke="#18211C",fill=null,lw=0.8}={}){ this.cur.push(`${lw} w ${hex(stroke)} RG ${fill?hex(fill)+" rg ":""}${x.toFixed(2)} ${(this.H-y-h).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re ${fill?"B":"S"}`); }
  line(x1,y1,x2,y2,color="#C8D3C0",lw=0.6){ this.cur.push(`${lw} w ${hex(color)} RG ${x1} ${(this.H-y1).toFixed(2)} m ${x2} ${(this.H-y2).toFixed(2)} l S`); }
  para(s,{size=10,bold=false,color="#18211C",x=this.M,w=this.W-2*this.M,gap=2}={}){
    const lh=size*1.3; wrap(s,size,bold,w).forEach(l=>{ this.ensure(lh); this.text(x,this.y+size,l,size,bold,color); this.y+=lh; }); this.y+=gap;
  }
  h1(s){ this.ensure(40); this.text(this.M,this.y+22,s,22,true,"#2E5A43"); this.y+=34; }
  h2(s,{newPage=false}={}){ if(newPage&&this.cur.length) this.newPage(); this.ensure(34); this.text(this.M,this.y+16,s,16,true,"#2E5A43"); this.y+=22; this.line(this.M,this.y,this.W-this.M,this.y,"#2E5A43",1); this.y+=10; }
  h3(s){ this.ensure(28); this.y+=4; this.text(this.M,this.y+12,s,12,true); this.y+=18; }
  build(title){
    const N=this.pages.length, objs=[];
    objs.push("<< /Type /Catalog /Pages 2 0 R >>");
    const kids=this.pages.map((_,i)=>`${5+i*2} 0 R`).join(" ");
    objs.push(`<< /Type /Pages /Kids [${kids}] /Count ${N} >>`);
    objs.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
    objs.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
    this.pages.forEach((p,i)=>{
      const foot=`BT /F1 8 Tf ${hex("#56635A")} rg ${this.M} 28 Td (${pdfEsc(pdfClean(title))}) Tj ET BT /F1 8 Tf ${this.W-this.M-60} 28 Td (${pdfEsc(`Page ${i+1} of ${N}`)}) Tj ET`;
      const stream=p.join("\n")+"\n"+foot;
      objs.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${this.W} ${this.H}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${6+i*2} 0 R >>`);
      objs.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    });
    let out="%PDF-1.4\n", offs=[];
    objs.forEach((o,i)=>{ offs.push(out.length); out+=`${i+1} 0 obj\n${o}\nendobj\n`; });
    const x=out.length;
    out+=`xref\n0 ${objs.length+1}\n0000000000 65535 f \n`+offs.map(o=>String(o).padStart(10,"0")+" 00000 n \n").join("");
    out+=`trailer\n<< /Size ${objs.length+1} /Root 1 0 R /Info << /Title (${pdfEsc(pdfClean(title))}) >> >>\nstartxref\n${x}\n%%EOF`;
    const bytes=new Uint8Array(out.length); for(let i=0;i<out.length;i++) bytes[i]=out.charCodeAt(i)&255;
    return new Blob([bytes],{type:"application/pdf"});
  }
}
function buildPdf(parts){
  const d=new PDF(), t=targets(), avg=dayAverages(), M=d.M, CW=d.W-2*M;
  const date=S.planDate||new Date().toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"});
  d.h1("My meal plan");
  d.para(`Made ${date} · For ${eaters().map(e=>e.name+(e.f!==1?` (${e.f}x portions)`:"")).join(", ")}`,{size:10,color:"#56635A"});
  d.para(`Daily targets: ${t.protein}g protein, ${t.fiber}g fiber${S.trackCal&&t.cal?`, ${t.cal.toLocaleString()} calories`:""}. A typical day on this plan: ${avg.P}g protein, ${avg.F}g fiber${S.trackCal?`, ${avg.K} calories`:""}.`,{size:10,color:"#56635A",gap:10});

  if(parts.week){
    d.h2("Your week");
    planned().forEach(meal=>{
      const {counts}=assign(meal); d.h3(ML[meal]);
      S.picks[meal].filter(byId).forEach(id=>{ const e=pickEval(meal,id);
        d.para(e.r.name,{size:10.5,bold:true,gap:0});
        d.para(`${dayRange(meal,id)} · ${portionsTxt(counts[id]*totalF())} · ${e.P}g protein, ${e.F}g fiber, ${e.K} calories per portion (yours)`,{size:9,color:"#56635A",gap:5}); });
    });
    // day-by-day table
    d.y+=6; d.ensure(30); d.text(M,d.y+11,"Day by day",11,true); d.y+=18;
    const c0=64, cw=(CW-c0)/7, fs=7.5, lh=9.5;
    const row=(cells,head)=>{
      const lines=cells.map((c,i)=>wrap(c,fs,head||i===0,(i?cw:c0)-6));
      const h=Math.max(...lines.map(l=>l.length))*lh+8;
      if(d.y+h>d.H-d.M-14){ d.newPage(); }
      let x=M; lines.forEach((ls,i)=>{ const w=i?cw:c0; d.rect(x,d.y,w,h,{stroke:"#C8D3C0",fill:head||i===0?"#E1EBD8":null,lw:0.5}); ls.forEach((l,j)=>d.text(x+3,d.y+4+fs+j*lh,l,fs,head||i===0)); x+=w; });
      d.y+=h;
    };
    row(["",...DAYS],true);
    planned().forEach(meal=>{ const days=assign(meal).days; row([ML[meal],...days.map(id=>id?byId(id).name:"-")]); });
    d.y+=8;
  }

  if(parts.groceries){
    d.h2("Grocery list",{newPage:parts.week});
    d.para(`Everything for the week, for ${eaters().length} ${eaters().length>1?"people":"person"}. Cooking oil, salt and pepper not listed.`,{size:9,color:"#56635A",gap:6});
    const g=groceries(), order=["Produce","Meat & seafood","Dairy & eggs","Grains & bread","Pantry","Frozen","Spices"];
    const item=it=>{ const label=it.n+(it.q?"  —  "+fmtQ(it.q,it.u,true):"");
      const ls=wrap(label,10,false,CW-22); d.ensure(ls.length*13+3);
      d.rect(M,d.y+2,9,9,{stroke:"#56635A",lw:0.7});
      ls.forEach((l,j)=>d.text(M+16,d.y+10+j*13,l,10)); d.y+=ls.length*13+4; };
    order.filter(s=>g.buy[s]).forEach(sec=>{ d.h3(sec); g.buy[sec].sort((a,b)=>a.n.localeCompare(b.n)).forEach(item); });
    if(g.have.length){ d.h3("Already have (check you have enough)"); g.have.forEach(item); }
  }

  if(parts.recipes){
    d.h2("Recipes",{newPage:parts.week||parts.groceries});
    let first=true;
    planned().forEach(meal=>{ const {counts}=assign(meal);
      S.picks[meal].filter(byId).forEach(id=>{
        const e=pickEval(meal,id), serv=counts[id]*totalF();
        if(!first) d.ensure(120); first=false;
        d.ensure(60); d.y+=4; d.text(M,d.y+14,e.r.name,14,true,"#2E5A43"); d.y+=20;
        d.para(`${ML[meal]} · makes ${portionsTxt(serv)} · ${e.r.t?e.r.t+" min":"no cooking"}${e.r.fz?" · freezes well":""}`,{size:9,color:"#56635A",gap:4});
        if(e.r.blurb) d.para(e.r.blurb,{size:9.5,gap:4});
        d.para("Ingredients (whole batch)",{size:10.5,bold:true,gap:1});
        e.r.ing.forEach(([n,q,u])=>d.para(`•  ${q?fmtQ(q*e.m*serv,u)+" ":""}${n}${q?"":" (to taste)"}`,{size:10,x:M+8,w:CW-8,gap:0}));
        d.y+=5; d.para("Steps",{size:10.5,bold:true,gap:1});
        if(!e.r.steps.length) d.para("Steps weren't ready when this PDF was made.",{size:10,x:M+8,w:CW-8,color:"#56635A"});
        e.r.steps.forEach((s,i)=>d.para(`${i+1}.  ${s}`,{size:10,x:M+8,w:CW-8,gap:2}));
        d.y+=4; d.para("Portioning",{size:10.5,bold:true,gap:1});
        eaters().forEach(x=>d.para(`•  ${x.name}: ${counts[id]} container${counts[id]>1?"s":""}${x.f!==1?`, each ${x.f}x your size`:""} — about ${Math.round(e.P*x.f)}g protein, ${Math.round(e.K*x.f/10)*10} calories each`,{size:10,x:M+8,w:CW-8,gap:0}));
        d.y+=10; d.line(M,d.y,d.W-M,d.y); d.y+=12;
      });
    });
  }
  d.ensure(20); d.para("Nutrition numbers are estimates for planning, not medical advice.",{size:8,color:"#56635A"});
  return d.build("Meal plan — "+date);
}
async function downloadPdf(){
  const parts={week:$("pdfWeek").checked,groceries:$("pdfGroc").checked,recipes:$("pdfRec").checked};
  const msg=$("pdfMsg"), btn=$("dlPdf");
  if(!parts.week&&!parts.groceries&&!parts.recipes){ msg.textContent="Tick at least one page to include."; return; }
  btn.disabled=true; msg.textContent="Making your PDF…";
  try{
    if(parts.recipes&&pickedIds().some(id=>!byId(id).steps.length)){ msg.textContent="Finishing the recipe steps…"; await Promise.race([ensureAllSteps(),new Promise(r=>setTimeout(r,60000))]); }
    const blob=buildPdf(parts);
    const name="meal-plan"+(parts.week&&parts.groceries&&parts.recipes?"":"-"+Object.keys(parts).filter(k=>parts[k]).join("-"))+".pdf";
    const how=await saveFile(blob,name);
    msg.textContent=how==="shared"?"Done.":how==="cancelled"?"":"Downloaded. Check your Downloads or Files app.";
  }catch(e){
    msg.textContent="Couldn't make the PDF. Try again.";
  }
  btn.disabled=false;
}

/* Phones: open the share sheet (Save to Files, Print, send). Computers: a normal download. */
async function saveFile(blob,name){
  const file=new File([blob],name,{type:blob.type});
  const touch=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&/Mac/.test(navigator.platform));
  if(touch&&navigator.canShare&&navigator.canShare({files:[file]})){
    try{ await navigator.share({files:[file],title:"My meal plan"}); return "shared"; }
    catch(e){ if(e&&e.name==="AbortError") return "cancelled"; }
  }
  const url=URL.createObjectURL(blob); const a=document.createElement("a");
  a.href=url; a.download=name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),30000);
  return "downloaded";
}
/* iPhone: show how to add the app to the home screen (Safari can't do it automatically). */
function installHint(){
  const ios=/iPhone|iPad|iPod/i.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&/Mac/.test(navigator.platform));
  const standalone=window.navigator.standalone||window.matchMedia("(display-mode: standalone)").matches;
  let dismissed=false; try{ dismissed=!!localStorage.getItem("mealprep-install-hint"); }catch(e){}
  if(!ios||standalone||dismissed) return;
  document.body.insertAdjacentHTML("beforeend",`<div class="installhint" id="installHint" role="note"><span><b>Add this app to your home screen:</b> tap the Share button <span aria-hidden="true">⬆︎</span>, then <b>Add to Home Screen</b>.</span><button class="linkbtn" id="installClose" aria-label="Dismiss">Got it</button></div>`);
  $("installClose").onclick=()=>{ try{ localStorage.setItem("mealprep-install-hint","1"); }catch(e){} $("installHint").remove(); };
}
window.addEventListener("hashchange",()=>{ if(/access_token=|error_description=/.test(location.hash)) handleAuthRedirect(); });
document.addEventListener("submit",e=>{ if(e.target&&e.target.id==="authForm"){ e.preventDefault(); if(!authBusy) submitAuth(e.target); } });
document.addEventListener("visibilitychange",()=>{ if(document.visibilityState==="visible"&&signedIn()&&["home","dash","account"].includes(view)){ pullPlan(); refreshAccount(); } });

/* ---------- start ---------- */
session=loadSession(); S=loadLocal(); setAI();
if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost")) navigator.serviceWorker.register("./sw.js").catch(()=>{});
render(); installHint();
(async()=>{
  await handleAuthRedirect();
  if(signedIn()&&HAS_BACKEND){ pullPlan(); await refreshAccount(); }
  handleCheckoutReturn();
})();
})();
