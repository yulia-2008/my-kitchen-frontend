
<h1 align="center">My Kitchen</h1>
<h3 align="center">Collaboration with Roman Opalacz. </h3>
<div align="center">
<img src="./app-demo.gif"></img>
</div>
<h2>About The Project</h2>
<p>Recipes app.</p>
<p>Find a recipe with the selected ingredients, add a recipe to your favorites.</p> 
<p><b>Backend:</b> https://github.com/yulia-2008/MyKitchen-backend</p>


<h2>Features</h2>
<p>- Creating an account. </p>
<p>- Logging in/Logging out.</p>
<p>- Searching ingredients.</p>
<p>- Searching recipes.</p>
<p>- Eding recipe to your profile as favorites.</p>
<p>- Deleting recipe from your collection of favorites. </p>
<p>- Changing Users Avatar. </p>

<h2>Frontend Built With</h2>
<ul>
 <li> <b>React.js</b> </li>
 <li> Utilized <b>React Router</b> to establish a dynamic routing system through the web app </li>
 <li> Spoonacular open data source API for recipe content (www.spoonacular.com) 
</ul>

<h2>Getting Started</h2>
<p><b>Instructions on setting up the project locally.</b> </p>
<p> 1. Make sure you have following tools installed on the system.</p>
<p>- Ruby 2.6.1 </p>
<p>- Rails 6.0.3.3 </p>
<p>- Postgresql </p>
<p> 2. In your terminal go to the directory where you want to clone this project.</p>

```sh
cd <FOLDER_NAME>
```

<p> 3.  Clone frontend and backend repos to the same folder.</p>

```sh
git clone  git@github.com:yulia-2008/spread_the_good_frontend.git
```

```sh
git clone  git@github.com:yulia-2008/spread_the_good_backend.git
``` 
<p> <b>Backend installation: </b> </p>

<p> 1. In <b>spread_the_good_backend/config/database.yml</b> file enter your postgres user for the project and password as shown below:</p>
 <div align="center">
 <img src="./database_yml_example.jpg"></img>
 </div>
 
 <p> 2. Make sure you are in the project backend directory. </p>
      
```sh
cd spread_the_good_backend
```
 
 <p> 3. Run the following commands to create and setup the database. </p>
     
```sh
rails db:create
```
     
```sh
rails db:migrate
``` 
 <p> 4. Start rails server on port 4000.</p>
     
```sh
cd spread_the_good_backend
```

```sh
rails s -p4000
```

<p> <b>Frontend installation: </b></p>
 <p> 1. In your terminal go to frontend directory.</p>
 
```sh
cd spread_the_good_frontend
```

 <p> 2. Install NPM packages:</p>
 
```sh
npm install
```
 <p> 3. Install React Router:</p>

```sh
npm install react-router-dom
```
 <p> 4. Run the app:</p>

```sh
npm start
```
<p>5. Now you can visit the app on the URL http://localhost:3000 </p>




