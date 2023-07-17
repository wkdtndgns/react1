var express = require('express');

var app = express();

// 
http://localhost:5000/users
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// app.use('/', function(req,res,next){
//     console.log('ex01');
//     res.send('ex01')
// });

// app.use('/', function(req,res,next){
//     console.log('ex02');
//     res.send('ex02')
// });

let router = express.Router();
app.use('/tiger/:monkey',(req,res,next)=>{
    console.log(req.params.monkey);
    res.send('ex12');
});

app.use('/tiger',(req,res,next)=>{
    console.log(req.query.monkey);
    res.send('ex11');
});
// app.use('/cat',()=>{});
app.use('/cat',require('./routes/cat'))

// app.use('/cat',
//     router.get('/', 
//         (req,res,next)=>{
//             console.log(req.query.value);
//             if(req.query.value === '1'){
//                 next('route');
//             } else{
//                 next();
//             }
//         }, 
//         (req,res,next)=>{
//             res.send('ex09-2');
//         }
//     ),
//     router.get('/',
//      (req,res,next)=>{
//         res.send('ex09-3');
//      }
//     )
// );
app.use('/tiger',
    router.get('/',(req,res,next)=>{ 
        res.send('ex07-1')
    }),
    router.get('/lion',(req,res,next)=>{ 
        res.send('ex07-2')
    })
 );

app.use(
    '/user',
    function(req,res,next){
        console.log(req.query.value);
        if(req.query.value === '2'){
            next();
        }else{
            res.send('ex05-1');
        }

        // console.log('ex05-1');
        // // res.send('ex05-1')
        // next();
    },
    function(req,res,next){
        console.log('ex05-2');
        res.send('ex05-2')
    },
);

// 1. 라이팅 주는 순차적으로 저장
// 2. 기본주소 get index.html 
// 3. 기본주소 post 모든 주소를
app.get('/tiger', function(req,res,next){
    console.log('get');
    res.send('get')
});

app.post('/tiger', function(req,res,next){
    console.log('post');
    res.send('post')
});

// let swtoolRouter = require('./routes/SwtoolRout')
// app.use('/api/Swtool', swtoolRouter)

var port = process.env.PORT || '5001';
app.listen(port, ()=>{console.log('listen');} );

module.exports = app; 