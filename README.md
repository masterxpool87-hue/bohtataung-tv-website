# ဗိုလ်တထောင် TV Website

GitHub Pages ပေါ်တွင် တင်နိုင်သော responsive static website ဖြစ်သည်။ Build tool သို့မဟုတ် server မလိုပါ။

## 1. Logo နှင့် Download Link

- `assets/bohtataung-tv-logo.png` တွင် ပေးထားသော ဗိုလ်တထောင် TV logo ကို ထည့်ထားပြီး Website header၊ hero နှင့် footer တွင် အသုံးပြုထားပါသည်။
- `app-config.js` တွင် APK download link ကို ထည့်ပြီးသားဖြစ်သည်။

## 2. အရင်ဆုံး ပြင်ဆင်ရန်

- `app-config.js` ကို ဖွင့်ပြီး `apkUrl`၊ `version` တို့ကို မိမိ app နှင့်ကိုက်ညီအောင် ပြင်ပါ။
- APK ကို `downloads/bohtataung-tv.apk` ထဲသို့ ကူးထည့်ပြီး အောက်ပါအတိုင်း သတ်မှတ်နိုင်သည်။

```js
window.APP_CONFIG = {
  apkUrl: "./downloads/bohtataung-tv.apk",
  version: "1.0.0",
  updatedLabel: "2026-10-22",
  supportUrl: ""
};
```

- မိမိမှာ APK download link အပြင်ဘက်တစ်ခုရှိပါက `apkUrl` ထဲတွင် အဲဒီ URL ကို ထည့်နိုင်သည်။
- `supportUrl` ကို လက်ရှိအသုံးပြုနေသော တရားဝင် support/Facebook page link ဖြင့် ဖြည့်နိုင်သည်။ (Website ၏ contact button နှင့် မချိတ်ဆက်ရသေးပါ။)
- App ၏ အမှန်တကယ်လုပ်ဆောင်ချက်များ၊ အနည်းဆုံး Android version၊ logo နှင့် support အချက်အလက်များကို မိမိ app ၏အခြေအနေနှင့် ကိုက်ညီအောင် စစ်ဆေးပြင်ဆင်ပါ။

## 3. GitHub Pages ပေါ် တင်ရန်

1. GitHub.com သို့ ဝင်ပါ။
2. **New repository** ကိုနှိပ်ပါ။ Repository name ကို `bohtataung-tv-website` လို့ပေးပါ။
3. ZIP ဖိုင်ကို ကွန်ပျူတာမှာ Extract လုပ်ပါ။ Extract လုပ်ထားသော folder ထဲက ဖိုင်များကို repository ထဲသို့ တိုက်ရိုက် upload လုပ်ပါ။ `index.html` သည် repository ၏ root ထဲတွင်ရှိရပါမည်။
4. **Commit changes** ကိုနှိပ်ပါ။
5. Repository ရှိ **Settings → Pages** သို့သွားပါ။
6. **Build and deployment → Source** တွင် **Deploy from a branch** ကိုရွေးပါ။
7. Branch ကို `main`၊ folder ကို `/(root)` ရွေးပြီး **Save** နှိပ်ပါ။
8. Pages setting ထဲတွင် ပြသသော website URL ကိုဖွင့်စစ်ပါ။ Publish ဖြစ်ဖို့ အချိန်အနည်းငယ်ယူနိုင်ပါသည်။

ပုံမှန် project site URL ပုံစံက `https://YOUR-USERNAME.github.io/bohtataung-tv-website/` ဖြစ်သည်။ `YOUR-USERNAME` နေရာတွင် သင့် GitHub username ကို အစားထိုးပါ။

## 4. သတိပြုရန်

- GitHub Pages သည် static website hosting ဖြစ်သည်။ Login၊ database သို့မဟုတ် private API key များကို ဒီ site ထဲတွင် ထည့်မထားပါနှင့်။
- Public repository နှင့် website ပေါ်ရှိဖိုင်များကို အများမြင်နိုင်သည်။ APK ဖြန့်ဝေရာတွင် app ၏ပိုင်ဆိုင်မှုနှင့် ဖြန့်ဝေခွင့်ကို စစ်ဆေးပါ။
- တီဗီ channel၊ ရုပ်ရှင်၊ logo၊ image စသည့် content များကို အသုံးပြုရန် လိုအပ်သည့် ခွင့်ပြုချက်များရှိကြောင်း သေချာစေပါ။
- Website သည် HTML/CSS/JavaScript သာ အသုံးပြုထားသဖြင့် ပြင်ဆင်ပြီးဖိုင်များကို GitHub သို့ ပြန်တင်ရုံဖြင့် update လုပ်နိုင်သည်။
