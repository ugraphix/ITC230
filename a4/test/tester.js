var expect = require("chai").expect;
var school = require("../lib/school");

describe("School module", (school) => {
 it("returns requested course", function() {
   var result = school.get("art");
   expect(result).to.deep.equal({course: "art", teacher: "Watson", code:"ART101"});
 });
 
 it("fails w/ invalid course", () => {
   var result = school.get("fake");
   expect(result).to.be.undefined;
 });
});

