const express = require('express');
const app = express();

// 미들웨어가 왜 필요할까요?
// front에서 요구하는 정보를 back에서 바로 주는 게 아니라~~
// 권한 확인 후 정보를 줘야 하잖아여? 그래서 미들웨어가 필요한 거임
// next라는 함수가 중요함!! 성공하면 다음 ~ 하면서 정보 보냄

const token = null;
const checkAuth = (req, res, next) => {
  console.log('she has admin permission');
  next();
};

// 종료되는 애라면 상관없지만 미들웨어로 쓰일 아이라면 반드시 next 있어야 함!
// const checkToken = (req, res, next) => {
//   // if (token) {
//   //   next()
//   // }
//   // res.send('you dont have token')
//   // 위의 방법과 같은 식으로 해도 됨!

//   console.log('you have token');
//   next();
//   // next를 안 부르면 다음 단계로 못 넘어감!!
//   // 그럼 당연히 response를 받을 수 없음 ㅠ (응답값 x)
// };

const checkToken = (req, res, next) => {
  if (token) {
    next();
  } else {
    res.send("you don't have token");
  }
};
// res(response)는 한 번 보내면 끝나는 것!! 여기서는 리턴과 같은 존재
// token 값이 null이니까 you don't have token이 뜸!
// 만약 !! token 값이 있다면 getUser로 넘어가겠죵??

const getUser = (req, res) => {
  console.log('here is user info');
  res.send('here is user info');
};

// 만약에 /users라는 엔드포인트로 요청하면
// checkAuth를 확인하고 getUser를 주겠다 ~~
// checkAuth 체크하고 getUser 주는 순서!!!
app.get('/users', checkAuth, checkToken, getUser);

// argument 2개 받아야 함 request / response
// 일반 url (/)로 설정
// app.get('/', (req, res) => {
//   res.send('hello haneul world');
// });

// app.get('/about', (req, res) => {
//   res.send('this is all about express');
// });

// 요렇게도 가능 ~~
// app.post('about', ()=> {
//   res.send('we save data')
// })

// port number 열어주기
app.listen(5000, () => {
  console.log('server is on 5000');
});
