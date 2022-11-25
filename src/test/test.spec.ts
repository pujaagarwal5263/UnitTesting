import chai, { use } from "chai";
import chaiHttp from "chai-http";
import router from "../router/routes";
import app from "../../index";

const User=require("../models/userSchema")

chai.should();

chai.use(chaiHttp);

describe("Testing all routes on API",()=>{
 //testing get route
describe("testing get route",()=>{
    it("get users array",(done)=>{
        chai.request(app)
        .get('/getuser')
        .end((err,res)=>{
          res.should.have.status(200);
          done();
        })
    })
  })

  //testing get by id
  describe("testing get route by id",()=>{
    const userID="6369003e436999ce98ed12d6";
    it("get users by id",(done)=>{
        chai.request(app)
        .get("/getbyid/"+userID)
        .end((err,res)=>{
          res.should.have.status(200);
          done();
        })
    })
  })

//testing update by id
describe("testing update route",()=>{
    const userID="6369003e436999ce98ed12d6";
    it("update by id",(done)=>{
        chai.request(app)
        .put("/updatebyid/"+userID)
        .end((err,res)=>{
          res.should.have.status(200);
          done();
        })
    })
  })

 //if a wrong URL entered
 describe("testing get route for wrong entry",()=>{
    it("get bad request",(done)=>{
        chai.request(app)
        .get('/erhreo')
        .end((err,res)=>{
          res.should.have.status(404);
          done();
        })
    })
  })

  //testing post user data
  describe("testing post route",()=>{
    let obj={
        name:"Aditya",
        email:"adi@gmail.com",
        contact:43254,
        password:"erg4343"
    }
    it("post task",(done)=>{
        chai.request(app)
        .post('/adduser')
        .send(obj)
        .end((err,res)=>{
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        })
    })
  })

  //testing without data
  describe("testing post route without data",()=>{
    it("do not post task",(done)=>{
        chai.request(app)
        .post('/adduser')
        .end((err,res)=>{
          res.should.have.status(402);
          res.text.should.be.eq("Data missing")
          done();
        })
    })
  })

  //testing with new document
  describe("testing update route with new doc",()=>{
    it("update by id",(done)=>{
    let obj={
        name:"Aditya",
        email:"adi@gmail.com",
        contact:43254,
        password:"erg4343"
    }
    let newUser= new User(obj);
    newUser.save((err: any, user: any) => {
            chai.request(app)
            .put("/updatebyid/"+user._id)
            .end((err,res)=>{
              res.should.have.status(200);
              done();
            })
        })
    })
  })

  //testing delete by id
  describe("testing delete route",()=>{
    it("delete by id",(done)=>{
    let obj={
        name:"Aditya",
        email:"adi@gmail.com",
        contact:43254,
        password:"erg4343"
    }
    let newUser= new User(obj);
    newUser.save((err: any, user: any) => {
            chai.request(app)
            .delete("/deletebyid/"+user._id)
            .end((err,res)=>{
              res.should.have.status(200);
              done();
            })
        })
    })
  }) 

})

