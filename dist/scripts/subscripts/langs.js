const lang = localStorage.getItem("bit-lang") != null ? localStorage.getItem("bit-lang") : "fa";
const rtls = ["fa"];

const fa = [
	["navtitle" , "توسعه‌دهندگان بیت"],
	["navbutton" , "ورود / ثبت‌نام"],
	["theme" , "پوسته"],
	["lang" , "زبان"],
	
	["intro_title" , "بیت چیست ؟"],
	["intro_text" , "لورم ".repeat(60)],
	["order" , "سفارش پروژه <i class='bi bi-bag-fill'></i>"],
	["contact" , "ارتباط با ما <i class='bi bi-chat-square-dots'></i>"],
	
	["projects" , "نمونه‌کار ها"],
	
	["members" , "اعضای تیم"],

	["bahman_name" , "بهمن احمدی"],
	["mammad_name" , "محمدابراهیم ابراهیمی‌بقا"],
	["bonyadi_name" , "محمدمهدی بنیادی"],
	["hossein_name" , "حسین عسکری"],
	["boyka_name" , "محمدمهدی عبدیان"],
	["ario_name" , "علیرضا مخدومی"],
	["amir_name" , "امیرمحمد ملکی"],

	["bahman_bio" , "توسعه‌دهنده وب"],
	["mammad_bio" , "توسعه‌دهنده FullStack"],
	["bonyadi_bio" , "توسعه‌دهنده اندروید"],
	["hossein_bio" , "گرافیست"],
	["boyka_bio" , "روابط عمومی"],
	["ario_bio" , "هوش مصنوعی"],
	["amir_bio" , "طراحی وب"],
	
	["history" , "آمار و سوابق"],
	["successProjects" , "پروژه های موفق"],
	["happyCustomers" , "کارفرمایان راضی"],
	["workingDays" , "روز کاری"],
	
	["contact_section" , "ارتباط با ما"],
	["enter_username" , "نام و نام‌خانوادگی شما چیست؟"],
	["enter_email" , "ایمیل خود را وارد کنید"],
	["enter_text" , "چه چیزی را باید با ما مطرح کنید؟"],
	["submit_contact" , "ارسال کن"],
	
	["blog", "وبلاگ"],
];
const en = [
	["navtitle" , "Bit Developers"],
	["navbutton" , "register"],
	["theme" , "theme"],
	["lang" , "language"],
	
	["intro_title" , "what's BIT ?"],
	["intro_text" , "lorem ipsum ".repeat(20)],
	["order" , "<i class='bi bi bi-bag-fill'></i> Order Project"],
	["contact" , "<i class='bi bi-chat-square-dots'></i> Contact Us"],
	
	["projects" , "sample projects"],
	
	["members" , "The Team's Members"],

	["bahman_name" , "Bahman Ahmadi"],
	["mammad_name" , "Muhammad. E. Ebrahimi"],
	["bonyadi_name" , "Muhammad. M. Bonyadi"],
	["hossein_name" , "Hussein Askari"],
	["boyka_name" , "Muhammad. M. Abdian"],
	["ario_name" , "Alireza Makhdoomi"],
	["amir_name" , "Amir M. Maleki"],
	
	["bahman_bio" , "Web Developer"],
	["mammad_bio" , "FullStack Developer"],
	["bonyadi_bio" , "Android Developer"],
	["hossein_bio" , "Designer"],
	["boyka_bio" , "Public Relations"],
	["ario_bio" , "Artificial Intelligence"],
	["amir_bio" , "Web Designer"],
	
	["history" , "Statistics & History"],
	["successProjects" , "Success Projects"],
	["happyCustomers" , "Happy Customers"],
	["workingDays" , "Working Days"],
	
	["contact_section" , "Contact us"],
	["enter_username" , "what's your fullname?"],
	["enter_email" , "enter your email"],
	["enter_text" , "what's to telling us?"],
	["submit_contact" , "Send it"],
	
	["blog", "Blog"]
];

// choosing FONT for current language
document.body.style = `font-family: var(--${lang}-font);`;

// choosing DATETIME for current timezone
document.querySelectorAll(".autotz").forEach(el => {
	el.innerHTML = lang != "en" ? new Date(el.innerHTML).toLocaleString() : el.innerHTML;
});

// choosing DIRECTION for current language
document.querySelectorAll(".direction").forEach(el => {
	el.dir = rtls.indexOf(lang) != -1 ? "rtl" : "ltr";
});

// reverting DIRECTION for current language
document.querySelectorAll(".r-direction").forEach(el => {
	el.dir = rtls.indexOf(lang) != -1 ? "rtl" : "ltr";
});

// choosing FLOAT for current language
document.querySelectorAll(".floating").forEach(el => {
	el.style = rtls.indexOf(lang) == -1 ? `float: right; margin-right: 0; margin-left: auto;` : `float: left; margin-right: auto; margin-left: 0;`;
});

// reverting FLOATING for current language
document.querySelectorAll(".r-floating").forEach(el => {
	el.style = rtls.indexOf(lang) != -1 ? `float: right; margin-right: 0; margin-left: auto;` : `float: left; margin-right: auto; margin-left: 0;`;
});

// choosing ICON for current language
document.querySelectorAll(".bi").forEach(el => {
	el.className = el.className.split(rtls.indexOf(lang) == -1 ? "left" : "right").join(rtls.indexOf(lang) != -1 ? "left" : "right");
});
document.querySelectorAll(".member-link").forEach(el => {
	el.innerHTML = lang == "fa" ? "اطلاعات بیشتر" : "More Info";
});

// choosing ELEMENTS's TEXT for current language
eval(`var langWords = ${lang};`);
for (var i in langWords) {
	document.getElementById(langWords[i][0]).innerHTML = langWords[i][1];
}
document.querySelectorAll(".project-btn").forEach(el => {
	el.innerHTML = rtls.indexOf(lang) == -1 ? "<i class='bi bi-eye-fill'></i> see" : "<i class='bi bi-eye-fill'></i> مشاهده";
});

// choosing ACTION BUTTON for current language
document.getElementById("lang").onclick = (e) => {
	localStorage.setItem("bit-lang", lang == "fa" ? "en" : "fa");
	location.reload();
};
