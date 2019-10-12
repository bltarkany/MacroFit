DROP DATABASE IF EXISTS rbyjr5ekm7k1f3kc;

CREATE DATABASE rbyjr5ekm7k1f3kc;
USE rbyjr5ekm7k1f3kc;

-- Table containing the trainee's personal information. 1 record per trainee
CREATE TABLE trainee_info (
ID INT auto_increment 
,FirstName VARCHAR(20)
,LastName VARCHAR(20)
,Age INT 
,Gender VARCHAR(7) 
,Weight INT
,Height_FT TINYINT
,Height_IN TINYINT 
,Activity_Level VARCHAR(30)
,Deficit INT
,Email VARCHAR(60) NULL
,PhoneNumber VARCHAR(15)
,Address VARCHAR(50) NULL
,City VARCHAR(50) NULL
,State VARCHAR(50) NULL
,Zip5 VARCHAR(50) NULL
,EnrollDate date
,PRIMARY KEY (ID)
)
auto_increment = 10000;

-- Table containing a users login information
CREATE TABLE trainee_login(
ID int
,Login VARCHAR(30) UNIQUE
,Password VARCHAR(10)
,FOREIGN KEY(ID) REFERENCES trainee_info(ID) ON DELETE CASCADE
);

-- Table containing a number of exercises (Place holder, will add actual exercises when I search them up)
CREATE TABLE exercises(
ID INT auto_increment
,primary key(ID)
);

-- Table containing the trainee's workout sessions. Expected Multiple records per day. Will be used in a daily rollup VIEW
CREATE TABLE trainee_workOut_session (
ID int PRIMARY KEY
,ExerciseID int
,WorkOutTime datetime
,WorkOutDate Date 
,Duration time
,CalBurned int NULL
,HitGoals boolean 
,FOREIGN KEY(ID) REFERENCES trainee_info(ID) ON DELETE CASCADE
,FOREIGN KEY(ExerciseID) REFERENCES exercises(ID)
);


-- Table containing the trainee's Meal intake. Expected Multiple records per day. Will be used in a daily rollup VIEW
CREATE TABLE trainee_meal_session(
ID INT PRIMARY KEY
,MealTime datetime
,MealDate Date 
,Calories int NULL
,Protein int NULL
,Carbs int NULL
,Fats int NULL
,FOREIGN KEY(ID) REFERENCES trainee_info(ID) ON DELETE CASCADE
);

-- Table containing the trainee's workout Schedule. Trainee Per WeekDay granularity
CREATE TABLE trainee_workOut_schedule(
ID INT PRIMARY KEY
,ExerciseID INT
,DayofWeek varchar(9)
,Cardio boolean
,legs boolean
,arms boolean
,back boolean
,FOREIGN KEY(ID) REFERENCES trainee_info(ID) ON DELETE CASCADE
,FOREIGN KEY(ExerciseID) REFERENCES exercises(ID)
);