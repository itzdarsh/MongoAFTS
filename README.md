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

Create Atlas Cluster in cloud.mongodb.com atleast M0.

[Load Sample Data](https://docs.atlas.mongodb.com/sample-data/#load-sample-data)

[Create Atlas Search Index](https://docs.atlas.mongodb.com/reference/atlas-search/create-index/) with below definition:
```
{
  "mappings": {
    "dynamic": false,
    "fields": {
      "fullplot": [
        {
          "type": "string"
        }
      ],
      "title": [
        {
          "type": "autocomplete"
        }
      ]
    }
  }
}
```

Setting up backend:
1. cd MongoAFTS/backend
2. npm init
3. vi main.js
edit the MongoDB connectivity Atlas connection string in the MongoClient() constructor.
4. node main.js

hit localhost:3001 (search in server.listen() method if not 3001)

Setting up frontend:
Simple and Easy step is [host the index.html in realm](https://docs.mongodb.com/realm/hosting/host-a-single-page-application/)

If not you can host in your system:
1. cd ../frontend
2. npm install serve
3. npx serve

Follow the link that above command display

It will open an webpage where you can search title of the movie, you will get autocomplete option to select the desired movie 
once you select any movie name it will display details about it.



