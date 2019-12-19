'use strict'

module.exports = {
  'users' : {
              'get'      : "select * from msgs.users;",
              'specific' : "select * from msgs.users where name = $1;",
              'create'   : "insert into msgs.users (name) values ($1);",
              'update'   : "update msgs.users set name = $2 where id = $1;",
              'delete'   : "delete from msgs.users where id = $1;"
            },
  'posts' : {
              'get'      : "select * from msgs.posts;",
              'specific' : "select * from msgs.posts where id = $1;",
              'create'   : "insert into msgs.posts (id_usr, post) values ($1, $2);",
              'update'   : "update msgs.posts set post = $3 where id = $1 and id_usr = $2;",
              'delete'   : "delete from msgs.posts where id = $1;"
             }
}
