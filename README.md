# MongoAtlas Full Text Search

Download the zip and unzip it:
```
├── README.md
├── backend
│   ├── main.js
│   ├── package-lock.json
│   └── package.json
├── frontend
│   ├── index.html
│   ├── node_modules
└── package-lock.json
```
Directory structure.

Setting up backend:
1. cd MongoAFTS/backend
2. npm init
3. vi main.js
edit the MongoDB connectivity Atlas connection string in the MongoClient() constructor.
4. node main.js

hit localhost:3001 (search in server.listen() method if not 3001)

Setting up frontend:
1. cd ../frontend
2. npm install serve
3. npx serve

Follow the link that above command display

It will open an webpage where you can search title of the movie, you will get autocomplete option to select the desired movie 
once you select any movie name it will display details about it.



