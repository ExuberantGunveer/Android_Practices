const { default: $ } = require("webdriverio/build/commands/browser/$");

class LockItems {

get skipTab(){
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
    return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/menu_btn']");
}

get lockoption(){
    return $("//android.widget.TextView[@text='Lock']");
}

get gmailSignIn(){
    return $("//android.widget.Button[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/google_signin']");
}

get defaultBrowser(){
    return $("//android.widget.TextView[@text='Default browser']");
}

get sigInTab(){
    return $("//android.widget.Button[@text='SIGN IN']");
}
get continueOption(){
    // return $("//*[contains(text(),'ACCEPT')]");
    return $("//android.widget.Button[@resource-id='com.android.chrome:id/terms_accept']");
}

get noThanksOption(){
    return $("//android.widget.Button[@resource-id='com.android.chrome:id/negative_button']");
}
get gmailEmail(){
    return $("//android.view.View[@text='Email or phone']");
} 

get nextButton(){
    return $("//android.widget.Button[@text='Next']");
}

get gmailPassword(){
    return $("//android.view.View[@text='Enter your password']");
}

get newMasterPassword(){
    return $("//android.widget.EditText[@text='New master password']");
}

get reEnterMasterPassword(){
    return $("//android.widget.EditText[@text='Re-enter master password']");
}

get saveTab(){
    return $("//android.widget.Button[@text='SAVE']");
}

get enterMasterPassword(){
    return $("//android.widget.EditText[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/password']");
}

get okTab(){
    return $("//android.widget.EditText[@text='OK']");
}





async clickOnSkipTab(){
    await (await this.skipTab).click();
}

}
module.exports = new LockItems();