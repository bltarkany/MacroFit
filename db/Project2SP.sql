/* ========== Stored Procedure insertTraineeInfo =========== */
DELIMITER $$
/* This is a complete statement, not part of the procedure, so use the custom delimiter $$ */
DROP PROCEDURE IF EXISTS insertTraineeInfo$$

CREATE PROCEDURE insertTraineeInfo (
IN firstName VARCHAR(255)
	,lastName VARCHAR(255)
    ,age int
    ,gender VARCHAR(7)
    ,weight int
    ,height_ft tinyint
	,height_in tinyint
    ,activity_Level VARCHAR(30)
	,deficit int
    ,login varchar(30)
    ,password varchar(15)
    ,caloriesVar int
    ,proteinVar int
    ,carbsVar int
    ,fatsVar int
)
BEGIN    

	-- Loads trainee information into trainee_infos table
    INSERT INTO trainee_infos(FirstName,LastName,Age,Gender,Weight,Height_FT,Height_IN,Activity_Level,Deficit,EnrollDate) 
    VALUES(firstName,lastName,age,gender,weight,height_ft,height_in,activity_Level,deficit,CAST(now() AS DATE));
    
    -- Grabs most recent traineeID and stores that into the @id variable to be used in trainee_login insertion
	SELECT ID from trainee_infos ORDER BY ID DESC LIMIT 1 INTO @id;
    
    -- Loads login information the trainee
    INSERT INTO trainee_logins(id,Login,Password,Route)
    -- probably overkill for security but uh yeah
	VALUES(@id,login,LEFT(SHA2(MD5(password),224),15),RIGHT(SHA2(MD5(password),224),15));
    
    INSERT INTO trainee_macros(id,calories,proteins,carbs,fats)
    VALUES(@id,caloriesVar,proteinVar,carbsVar,fatsVar);
    
    -- INSERT INTO trainee_meal_dailies(id,MealDate,Calories,Protein,Carbs,Fats)
    -- VALUES(@id,cast(now() AS DATE),0,0,0,0);
    
    -- Select statement to be returned letting user know what information was loaded into the two tables
    SELECT * FROM trainee_infos LEFT JOIN trainee_logins ON trainee_infos.ID = trainee_logins.id LEFT JOIN trainee_macros ON trainee_logins.ID = trainee_macros.id ORDER BY trainee_infos.ID DESC LIMIT 1; 
    END$$
DELIMITER ;


-- ========================================================================================================================================================================


/* ========== Stored Procedure insertMealInformation =========== */
DELIMITER $$
/* This is a complete statement, not part of the procedure, so use the custom delimiter $$ */
DROP PROCEDURE IF EXISTS insertMealInformation$$

CREATE PROCEDURE insertMealInformation (
IN 
	idVar int
	,caloriesVar int
	,proteinsVar int
    ,carbsVar int
    ,fatsVar int
)
BEGIN    
    INSERT INTO trainee_meal_sessions(id,MealTime,MealDate,Calories,Protein,Carbs,Fats)
	VALUES(idVar,now(),CAST(now() AS Date),caloriesVar,proteinsVar,carbsVar,fatsVar);

	DELETE FROM trainee_meal_dailies WHERE id = idVar and MealDate = CAST(now() AS Date);
	INSERT INTO trainee_meal_dailies(id,MealDate,Calories,Protein,Carbs,Fats,traineeMacroId)
    SELECT id 
		,MealDate 
		,SUM(Calories) AS Calories 
        ,SUM(Protein) AS Protein
        ,SUM(Carbs) AS Carbs
        ,SUM(Fats) AS Fats
        ,id AS traineeMacroId
	FROM trainee_meal_sessions
    WHERE id = idVar 
		AND MealDate = CAST(now() AS Date)
	GROUP BY id 
		,MealDate;
        
	SELECT * FROM trainee_meal_dailies WHERE id = idVar and MealDate = CAST(now() AS Date); 
	END$$
DELIMITER ;


-- ========================================================================================================================================================================

/* ========== Stored Procedure validateLogin =========== */
DELIMITER $$
/* This is a complete statement, not part of the procedure, so use the custom delimiter $$ */
DROP PROCEDURE IF EXISTS validateLogin$$

CREATE PROCEDURE validateLogin (
IN 
	loginVar varchar(30)
    ,passwordVar varchar(20)
)
BEGIN    
	-- For Testing Purposes
	INSERT INTO login_attempts(Login,AttemptTime) VALUES(loginVar,now());
    -- For Testing Purposes
    
    
   SELECT IFNULL((SELECT 1 FROM trainee_logins WHERE Login = loginVar AND Password = LEFT(SHA2(MD5(passwordVar),224),15)), -1) INTO @validated;
   -- returns validated flag to be used to grab rest of information
   -- SELECT @validated;
   -- returns users Route to be used in redirect
   SELECT id, Route FROM trainee_logins WHERE Login = loginVar AND Password = LEFT(SHA2(MD5(passwordVar),224),15);
    
END$$
DELIMITER ;
