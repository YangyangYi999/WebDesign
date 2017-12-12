Gifted Shopping Website

Angular App is in Final-project folder.       --------- Folder 1
Express server is in gifted-server folder.    --------- Folder 2
Mongo Database is in data/db folder.          --------- Folder 3

NodeJs, npm Angular CLI and mongodb shell client is required. If you don't have it please install that first.


First clone the repo, then follow the stpes:

Run -

"npm install" inside Folder 1 and Folder 2.

After wards we need to run the servers.(Please maintain the sequence to avoid any errors)

1) Traverse to Folder 3 and run the following command
  mongod
2) Traverse to Folder 2 and run:
  DEBUG=gifted-server:* npm start
3) Traverse to Folder 1 and run:
  ng serve.

Thats IT!!
