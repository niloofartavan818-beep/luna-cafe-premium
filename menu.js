export const menuItems=[
{id:1,category:'غذا',name:'پاستا آلفردو',desc:'پاستای تازه با سس آلفردو، قارچ و پارمزان',price:385000,image:'/images/menu/pasta-alfredo.jpg'},
{id:2,category:'غذا',name:'برگر لونا',desc:'برگر دست‌ساز، چدار، پیاز کاراملی و سیب‌زمینی',price:445000,image:'/images/menu/burger.jpg'},
{id:3,category:'غذا',name:'چیکن برگر ',desc:'   مرغ سوخاری و سس مخصوص  ',price:420000,image:'/images/menu/chicken-sandwich.jpg'},
{id:4,category:'نوشیدنی',name:'لاته لونا',desc:'اسپرسو دو شات با شیر بخار داده شده',price:175000,image: '/images/menu/latte.jpg'},
{id:5,category:'نوشیدنی',name:'آیس کارامل',desc:'اسپرسو، شیر سرد، یخ و کارامل خانگی',price:195000,image:'/images/menu/caramel-macchiato.jpg'},
{id:6,category:'دسر',name:'چیزکیک نیویورکی',desc:'چیزکیک کرمی با سس توت‌فرنگی',price:225000,image:'/images/menu/cheesecake.jpg'}];
export const formatPrice=n=>new Intl.NumberFormat('fa-IR').format(n)+' تومان';
