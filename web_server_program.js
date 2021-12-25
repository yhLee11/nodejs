const express = require('express');
const app = express();
const server = app.listen(3000,()=>{
  console.log('Start Server:localhost:3000');
});
//어떤 버튼을 누르면 리퀘스트가 가는데,
//그 리퀘스트를 서버의 어떤 기능과 맵핑할지
//결정하는 것을 라우팅이라 함
//라우터 생성 필요:app.get('/라우터이름')
app.get('/',function (req,res){
  res.send('hello world')
})
app.get('/about',function (req,res){
  res.send('about page')
})

//디비 사용
var mysql = require('mysql')
var pool = mysql.createPool({
  connectionLimit:10,
  host:'example.org',
  user:'bob',
  password:'secret',
  database:'my_db'
});

app.get('/db',function(req,res){
  pool.getConnection(function(err,connection){
    if (err) throw err;//not connected
    //user the connection
    connection.query('SELECT * FROM Test',function (error,results,fields){
      res.send(JSON.stringify(results));
      console.log('results',results);
      connection.release();

      if (error) throw error;
    });
  });
})
