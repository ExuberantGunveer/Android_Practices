const { default: $ } = require("webdriverio/build/commands/element/$");

class AddNewItem {

 get skipBtn(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']");
        }
 get addNoteTab() {
            return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
        }
get checkListsTab(){
            return $("//*[@text='Checklist']");
        }
get addItmTab(){
            return $("(//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/icon'])[1]"); 
}

get addItmText(){
    return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit']");
}

get oKButton(){
    return $("//*[@text ='OK']");
}

get elipsisOptionOne(){
    return $("(//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/image'])[1]");
}

get elipsisOptioTwo(){
    return $("(//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/image'])[2]");
}
get amazonSearchOption(){
    return $("//android.view.View[@text='Clear search keywords']");
}

get goTab(){
    return $("//android.widget.Button[@text='GO']");
}



get continueOption(){
    // return $("//*[contains(text(),'ACCEPT')]");
    return $("//android.widget.Button[@resource-id='com.android.chrome:id/terms_accept']");
}

get noThanksOption(){
    return $("//android.widget.Button[@resource-id='com.android.chrome:id/negative_button']");
}

get deliverToIndia(){
    return $("//android.view.View[@resource-id='glow-ingress-single-line']");
}

get productLink(){
    return $("//android.view.View[@text='Tata Salt Lite, 15% Low Sodium Iodised Salt, 1kg Low Sodium Iodised Salt · 1 kg (Pack of 1) 4.6 out of 5 stars 9,856 product-detail']");
}

get addToCartTab(){
    return $("//android.widget.Button[@text='Add to Cart']");
}

get productQuantity(){
    return $("//android.view.View[@resource-id='quantity-label-C680db4ca-df98-4205-bd7e-89b83f8f3627']");
   }

   get productCartQuantity(){
    return $("//android.view.View[@text='Cart']");
   }

        async clickoNSkipBtn(){
            await (await this.skipBtn).click();
        }
        
        async clickOnAddNewItem(){
            await (await this.addNoteTab).click();
        }

        async  clickOnChecklist(){
            await (await this.checkListsTab).click();
        }

        async addItmInList(){
            await (await this.addItmTab).click();
            await (await this.addItmText).addValue("www.amazon.in");
            await (await this.oKButton).click();
            await (await driver).back();

            //giftshop.redcross.org.uk/

            await (await this.addItmTab).click();
            await (await this.addItmText).addValue("giftshop.redcross.org.uk/");
            await (await this.oKButton).click();
            await (await driver).back();
        }
        
        async clickOnElpsisOption(){
            await (await this.elipsisOption).click();
            await (await this.amazonOption).click();
        }

        async chromeVerification(){
           
            await (await this.continueOption).click();
            await (await this.noThanksOption).click();
            
       

        }

        async clickOnDeliverToIndia(){
            // await (await this.deliverToIndia).waitForClickable();
            await (await this.deliverToIndia).click();
        }

        async addProductToCart(){
            await (await this.productLink).click();
        }

    



}
module.exports = new AddNewItem();