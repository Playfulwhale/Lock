import React from 'react';
import { Button, Row, Col, Select } from 'antd';
import './App.css';
import  { Redirect } from 'react-router-dom'

import KeyBoard from './KeyBoard'
// import { NumericInput } from 'numeric-keyboard'

import NumPad from 'react-numpad';


const {Option} = Select

const content = {
  marginTop: '100px',
  marginLeft: '100px',
}

const locks = [{
  id: 1,
  imgUrl: './image/1.jpg'
},
{
  id: 2,
  imgUrl: './image/2.jpg'
}
]


const letterScrect = [
  {
    id: 1, 
    name: "Thư bí mật 1",
    lockID: 1,
    passWord: "1234",
    link: "https://ant.design/docs/react/getting-started"
  },
  {
    id: 2, 
    name: "Thư bí mật 2",
    lockID: 2,
    passWord: "123",
    link: "https://ant.design/docs/react/getting-started"
  },
  {
    id: 3, 
    name: "Thư bí mật 3",
    lockID: 1,
    passWord: "1234",
    link: "https://ant.design/docs/react/getting-started"
  }
]




class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: './image/1.jpg',
      open: false,
      value: '',
      letterID: 1
    }
  }

  handleChange = (value) => {
    var letter = letterScrect.filter(x => x.id == value)[0]
    var lock = locks.filter(x => x.id == letter.lockID)[0]
  
    console.log("lock", lock)
    this.setState({
      imgUrl: lock.imgUrl,
      //imgInputUrl: null,
      value: '',
      pw: '',
      letterID: value
    })
  }

  showInputImage = () => {
    console.log("click na")
  }

  changePass = (val) => {
    this.setState({
      pw: val
    })
  }

  onConfirm = () => {
    const {pw, letterID} = this.state
    var letter = letterScrect.filter(x => x.id == letterID)[0]

    if(letter?.passWord == pw)
    {
      window.location.href = letter.link
    }
    else{
      alert("Sai mật khẩu. Vui lòng kiểm tra lại!")
    }

  }


 render(){
   const {imgUrl, pw} = this.state
   //const imgUrl = './image/abc.jpg'
   console.log("imgUrl", imgUrl)

  return (
    <div style={content}>
      <div>
        <Row>
         
          <Col span={6}>
          <label>Chọn thư: </label>
          <Select
              onChange={(value) => this.handleChange(value)}
              defaultValue="Thư bí mật 1"
              style={{ width: 192 }}
              name="select"
            >
              ({letterScrect && letterScrect?.map((item, index) => (
                <Option key={index} value={item.id}>{item.name}</Option>
              ))})
            </Select>
          </Col>
          <Col span={18}>
            <img onClick={() => this.showInputImage()} className="img" src={require(''+ imgUrl)}></img>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col span={6}>
          </Col>
          <Col span={18}>
            <Row>
            <Col>
              <NumPad.Number
                onChange={(value) => this.changePass(value)}
                label={'Mật khẩu: '}
                placeholder={'Mật khẩu'}
                value={pw}
                decimal={0}
              />
            </Col>
              <Col>
                <Button type="primary" onClick={() => this.onConfirm()} style={{ marginLeft: 8 }}>
                  OK
                </Button>
              </Col>
            </Row>
            
           
           
          </Col>
      
        </Row>
      </div>
    </div>
  )
}
 }
  

export default Home
