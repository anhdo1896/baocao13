let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
let should = chai.should()
chai.use(chaiHttp)


describe('Users',() => {
    beforeEach((done)=>{
        done()
    })
})

describe('/GET users',() => {
    it('Get all users',done=>{
        chai.request(server)
        .get('/users')
        .end((err,res)=>{
            res.should.have.status(200)
            res.body.should.be.a('array')
            done()
        })
    })
})

describe('/POST user',() => {
    let user = {"name":"doanh","password":"112"}
    it('Insert user',done=>{
        chai.request(server)
        .post('/users')
        .send(user)
        .end((err,res)=>{
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql("Insert Success");
            done()
        })
    })
})

describe('/GET user',() => {
    it('Get one user by id',done=>{
        chai.request(server)
        .get('/users/5d29c5228031e821102f13c5')
        .end((err,res)=>{
            res.should.have.status(200)
            res.body.should.be.a('object')
            done()
        })
    })
})
describe('/PUT user',() => {
    it('Update user by id',done=>{
        chai.request(server)
        .put('/users/5d164ae1c2c2158ddc4af009')
        .send({
            "name":"ngoc",
            "password":"12"
          })
        .end((err,res)=>{
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql("Update Success")
            done()
        })
    })
})
describe('/DELETE user',() => {
    it('Get one user by id',done=>{
        chai.request(server)
        .delete('/users/5d164a86c2c2158ddc4af008')
        .end((err,res)=>{
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql("Delete Success")
            done()
        })
    })
})