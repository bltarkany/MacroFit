DROP DATABASE IF EXISTS Project2;

CREATE DATABASE Project2;
USE Project2;

-- Table containing the trainee's personal information. 1 record per trainee
CREATE TABLE Trainee_Info (
ID INT auto_increment
,FirstName VARCHAR(20)
,LastName VARCHAR(20)
,DOB date
,Gender VARCHAR(7)
,Email VARCHAR(60)
,PhoneNumber VARCHAR(15)
,Address VARCHAR(50) NULL
,City VARCHAR(50) NULL
,State VARCHAR(50) NULL
,Zip5 VARCHAR(50) NULL
,EnrollDate date
,primary key(ID)
);

-- Table containing the trainee's workout sessions. Expected Multiple records per day. Will be used in a daily rollup VIEW
CREATE TABLE Trainee_WorkOut_Session (
ID INT auto_increment
,WorkOutTime datetime
,WorkOutDate Date 
,duration time
,CalBurned int NULL
,HitGoals boolean 
,primary key(ID)
);


-- Table containing the trainee's Meal intake. Expected Multiple records per day. Will be used in a daily rollup VIEW
CREATE TABLE Trainee_Meal_Session(
ID INT auto_increment
,MealTime datetime
,MealDate Date 
,Calories int NULL
,Protein int NULL
,Carbs int NULL
,primary key(ID)
);

-- Table containing the trainee's workout Schedule. Trainee Per WeekDay granularity. (Placeholder workout types).
CREATE TABLE Trainee_WorkOut_Schedule(
ID INT auto_increment
,DayofWeek varchar(9)
,Cardio boolean
,legs boolean
,arms boolean
,back boolean
,primary key(ID)
);

-- Table containing a number of exercises (Placeholder, will add actual exercises when I search them up)
CREATE TABLE Exercises(
ID INT auto_increment
,TraineeID int
,primary key(ID)
)
