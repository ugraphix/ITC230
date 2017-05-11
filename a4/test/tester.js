var expect = require("chai").expect;
var school = require("../lib/school");

describe("School module", () => {
 it("returns requested course", function() {
   var result = school.get("art");
   expect(result).to.deep.equal({course: "art", teacher: "Watson", code:"ART101"});
 });
 
 it("fails w/ invalid course", () => {
   var result = school.get("fake");
   expect(result).to.be.undefined;
 });
    
    
    
    
it("adds the requested course", function() {
   var result = school.add({course: "english", teacher: "white", code:"engl105"});
   expect(result.added).to.be.true;
 });
 
 it("add failed with invalid course", () => {
   var result = school.add({course: "music", teacher: "Jefferson", code:"MUS210"});
   expect(result.added).to.be.false;
 });

    
    

 it("deletes the requested course", function() {
   var result = school.delete("math");
   expect(result.deleted).to.be.true;
 });
 
 it("delete failed with invalid course", () => {
   var result = school.delete("fake");
   expect(result.deleted).to.be.false;
 });
});