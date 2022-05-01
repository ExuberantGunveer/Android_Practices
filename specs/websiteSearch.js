const { default: $ } = require("webdriverio/build/commands/browser/$");

class AddWebsiteSearch {
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

get elipsisOption(){
    return $("(//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/image'])[1]");
}

get webSearchTab(){
    return $("//android.widget.TextView[@text='Web Search']");
}

get amazonLink(){
    return $("//android.view.View[@text='www.amazon.in']");
}

get amazonlogo(){
    return $("//android.view.View[@text='Amazon']");
}

get primeEligible(){
    return $("//android.view.View[@text='Prime Eligible']");
}
}
module.exports = new AddWebsiteSearch();