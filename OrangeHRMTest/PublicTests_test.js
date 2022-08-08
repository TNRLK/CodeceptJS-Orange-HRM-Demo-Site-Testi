Feature('PublicTests');

Scenario('test something', async ({ I }) => {

    I.login();
    I.seeElement('//a[@id="welcome"]');
    I.click('//a[@id="menu_pim_viewMyDetails"]');
    I.click('//input[@id="btnSave"]');
    I.fillField('//input[@id="personal_txtEmpFirstName"]',"Tugay");
    I.fillField('//input[@id="personal_txtEmpMiddleName"]',"Junior");
    I.fillField('//input[@id="personal_txtEmpLastName"]',"NRLK");
    I.fillField('//input[@id="personal_txtEmployeeId"]',"0323");
    I.fillField('//input[@id="personal_txtOtherID"]',"3449");
    I.fillField('//input[@id="personal_txtLicenNo"]',"920920");
    I.fillField('//input[@id="personal_txtLicExpDate"]',"2021-08-15");
    I.pressKey('Enter');
    I.selectOption('#personal_cmbMarital',"Single");
    I.selectOption('#personal_cmbNation',"Turkish");
    I.click('//input[@id="personal_DOB"]/following-sibling::img[1]');
    I.selectOption('//div[@class="ui-datepicker-title"]//select[1]',"Jun");
    I.selectOption('(//div[@class="ui-datepicker-title"]//select)[2]',"1994");
    I.click('//table[@class="ui-datepicker-calendar"]/tbody[1]/tr[4]/td[3]/a[1]');
    I.fillField('//input[@id="personal_txtEmpNickName"]',"NRLK");
    I.click('//input[@id="personal_chkSmokeFlag"]');
    I.fillField('//input[@id="personal_txtMilitarySer"]',"Fireman");
    I.click('//input[@id="btnSave"]');
    I.click('//input[@id="btnEditCustom"]');
    I.selectOption('(//select[@class="editable"])[3]',"O+");
    I.click('//input[@id="btnEditCustom"]');
    I.wait(2);
    I.click('//a[@id="menu_admin_viewAdminModule"]');
    I.wait(2);
    I.click('//a[@id="menu_admin_Qualifications"]');
    I.click('//html[1]//body[1]//div[1]//div[2]//ul[1]//li[1]//ul[1]//li[4]//ul[1]//li[3]//a[1]');
    pause();



});
