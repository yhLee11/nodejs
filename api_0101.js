const express = require('express');
const app = express(); //웹서버구축
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001,()=>{
  console.log('start server: localhost:3001');
});

const key = {
  apiKey: 'NAS0VAQ-FVNM070-H0Y27CF-X4H485B',
  uuid: 'aab20daa-7eeb-401c-883c-23b1e9224415'
};
//:type -> 콜론이 있는 패스에는 어떤 값이든 들어올 수 있다.
//콜론 패스에 들어오는 값을 파라미터로 받을 수 있다.
//req: 사용자가 요청한 , res: 그 요청에 대해서 응답해 줄 것
app.get('/api/users/:apikey/:type', async(req,res)=>{
  let {apikey,type} = req.params;

  if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey,key.uuid)){
    res.send('apikey is not valid.');
  }else{
      if (type=='seoul'){
        let data=[//database information
          {name:'yeonhee',city:'seoul'},
          {name:'jaeuk',city:'seoul'}
        ];
        res.send(data);
      }else if(type=='jeju'){
        let data=[
          {name:'abc',city:'jeju'},
          {name:'def',city:'jeju'}
        ];
      }else{
        res.send('Type is not correct.');
      }
      res.send('ok');
  }
});

app.get('/api/sales/:apikey/:year', async(req,res)=>{
  let {apikey,year} = req.params;
  console.log(year);
  if(year=='2021'){
    let data=[//database information
      {product:'냉장고'}
    ];
    res.send(data);
  }else if(year=='2022'){
    let data=[
      {product:'반도체'}
    ];
  }else{
    res.send('Year is not correct.');
  }
  res.send('ok');
});
