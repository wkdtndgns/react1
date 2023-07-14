import React, { Component } from 'react';
import Header from './Header admin';
import Footer from './Footer';
import './css/new.css'
import LoginForm from './LoginForm';
import { Routes, Route, json } from 'react-router-dom';
import axios from 'axios';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      head : '서울시 유동인구 데이터 - 19년 11월',
      thead : ['Row','일자','시간','연령대','성별','시','군구','유동인구수'],
      append_FPList: [], // '', []
    };
    this.f1();
  }

  f1 = () => {
    axios.get('http://localhost:8081/temp01').then( response=>{ 
      // let jsonString = JSON.stringify(response.data);
      // jsonString = jsonString.replace(/\(1시간단위\)/g,'');
      // jsonString = jsonString.replace(/\(10세단위\)/g,'');
      // JSON.parse(jsonString).entry.map((row,i) => result.push(row));
      this.setState({append_FPList: response.data});
    });
  }
  render() {
    return (
      <div>
        < Header/>
        {/* <button onClick={()=>this.f1()}>요청</button> */}
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/floatPopulationList' element={<FloatingPopulationList tiger={this.state}/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}
export default App;

function Tr({idx,data}) {
  return (
      <>
      <tr key={idx} className="hidden_type"> 
         <td>{idx}</td>
         <td>{data.name1}</td>
         <td>{data.name2}</td> 
         <td>{data.name3}</td>
         <td>{data.name4}</td> 
         <td>{data.name5}</td>
         <td>{data.name6}</td> 
         <td>{data.name7}</td>
       </tr>
      </>
  );
}

class FloatingPopulationList extends Component {
  render () {
    // console.log(this.props.tiger);
    let {append_FPList,head,thead} = this.props.tiger
      return (
          <section className="sub_wrap" >
              <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                  <div className="li_top">
                      <h2 className="s_tit1">{head}</h2>
                  </div>
                  <div className="list_cont list_cont_admin">
                      <table className="table_ty1 fp_tlist">
                        <thead>
                          <tr>
                          {thead.map((data, i) => ( <th>{data}</th> ))}
                              {/* <th>Row</th>
                              <th>일자</th>
                              <th>시간</th>
                              <th>연령대</th>
                              <th>성별</th>
                              <th>시</th>
                              <th>군구</th>
                              <th>유동인구수</th> */}
                          </tr>
                        </thead>
                      </table>	
                      <table className="table_ty2 fp_tlist">
                        <tbody>
                           {append_FPList.map((data, i) => ( <Tr data={data} idx={++i} key={i} /> ))}
                        </tbody>
                      </table>
                  </div>
              </article>
          </section>
      );
  }
} 