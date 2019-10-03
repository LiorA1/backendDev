# backendDev

**DRY:** *Don't repeat yourself*

## basic commands -
* **cd** : open a  directory.
* **ls** : lists all files and directories in the working directory.
* **mkdir** : create a folder.
* **touch** : create a simple file.
* **rm** : remove a file.
* **rm -rf** : remove a directory.


## node.js commands -
* **node index.js** : run the index.js file.
* **Ctrl + C** : exit the node command line.

#### NPM (Node Package Manager)
* **npm init:** create a new 'packeage.json' file 
* **npm install 'packageName' --save:** install package  *[ use require() to include a package ]*
* 

## route examples -

*//for get "/" ==> 'Hi' -*  <br />

app.get("/", function(req, res){ <br />
	res.send("Hi there !"); <br />
}); 


*//Default get route -* <br />

app.get("*", function(req, res){ <br />
	res.send("Default"); <br />
}); <br />

*note: have to be the last route, because order of routes matters*


*//A route with route parameters -* <br />

app.get("/r/:subredditName/comments/:id/:title", function(req, res){ <br />
	console.log(req.params); // return all the values with the matching key. <br />
	console.log(req.params.subredditName); // return what is 'subredditName.. <br />
	res.send("welcome to " + req.params.subredditName); // print the message with the 'subredditName' parameter. <br />
});


*//Using req.params as variables exists in '.ejs' file -* <br />

app.get("/r/:subredditName/comments/:id/:title", function(req, res){ <br />
	var subredditName = req.params.subredditName; <br />
	res.render("home.ejs", {subredditNameVar: subredditName} ); <br />
});


## route parameters -
* ':' : specify route variable.


## EJS -
* <%  ... %>  : logic (will not apper in the HTML)
* <%= ... %>  : will be rendered & added to the HTML.

## Reference:
https://github.com/nax3t/webdevbootcamp
