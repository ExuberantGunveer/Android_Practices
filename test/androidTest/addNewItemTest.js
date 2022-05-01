const { AppiumDriver } = require("appium/build/lib/appium");
const AddNewItem = require("../androidBase/addNewItem")

describe('Add New Item',()=>{

    it('Skip Button',async ()=>{
        await AddNewItem.clickoNSkipBtn();
    })
   it('Add New Item',async()=>{
       await AddNewItem.clickOnAddNewItem();
   }) 
    
   it('Click On Checklist Tab',async()=>{
       await AddNewItem.clickOnChecklist();
   })
   it('Check Add Items In List',async()=>{
       await AddNewItem.addItmInList();
   })
   it('Click on Amazon Option',async()=>{
       await AddNewItem.clickOnElpsisOption();
   })
   xit('Accept Chrome Browser Autherization',async()=>{ 
       await AddNewItem.chromeVerification();
   })
   it('Select Location',async()=>{
    //    await driver.pause(5000);
       
       await AddNewItem.clickOnDeliverToIndia();
   })
   xit('Add Product To the Cart',async()=>{
       await AddNewItem.addProductToCart();
   })

})