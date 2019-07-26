let supertest = require('supertest')
const server= supertest.agent('http://localhost:3000')

describe("/GET users supertest",()=>{
    it('Get all users',done=>{
      server
        .get("/users")
        .expect("Content-type",/json/)
        .expect(200)
        .end((err,res)=>{
            if (err) return done(err);
            done();
        })
    })
  })