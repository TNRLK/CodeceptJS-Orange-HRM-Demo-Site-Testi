// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    login : function(){
      this.amOnPage('http://opensource-demo.orangehrmlive.com');
      this.fillField('//input[@id="txtUsername"]',"Admin");
      this.fillField('//input[@id="txtPassword"]',"admin123");
      this.click('//input[@id="btnLogin"]');
    }


  });
}
