var request = require("request");

describe("troubleshoot356", ()=>{
  
  it("should run", (done) => {
    var message = new Parse.Object("TESTMessage");
      message.set("content", "hello world");
      message.set("to", "userID");
      message.set("fromId", "anotherID");
      message.set("uniqueCode", "UNIQUE CODE!");
      message.save().then(function(res){
        ok(res.id);
        done();
      }).fail(function(err){
        fail("this should have failed");
        done();
      });
  });
  
  it('should run from Client', (done) => {
    var headers = {
      'X-Parse-Application-Id': 'test',
      'X-Parse-Client-Key': 'client'
    };
    request.post({
      headers: headers,
      url: 'http://localhost:8378/1/classes/TESTMessage',
      json: {
        content: "hello",
        to: "userID",
        fromId: "anotherID",
        uniqueCode: "UNIIIQUE"
      }
    }, (error, response, body) => {
      expect(error).toBe(null);
      ok(body.objectId);
      done();
    });
  })
  
  it('should run from REST', (done) => {
    var headers = {
      'X-Parse-Application-Id': 'test',
      'X-Parse-REST-API-Key': 'rest'
    };
    request.post({
      headers: headers,
      url: 'http://localhost:8378/1/classes/TESTMessage',
      json: {
        content: "hello",
        to: "userID",
        fromId: "anotherID",
        uniqueCode: "UNIIIQUE"
      }
    }, (error, response, body) => {
      expect(error).toBe(null);
      ok(body.objectId);
      done();
    });
  })
})