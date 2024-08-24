import Image from "next/image";
import Link from "next/link";
import privacyImg from "../../../../public/images/keyhole.png";
export default function Privacy() {
  return (
    <div className="bg-white">
      <div className="dark:bg-base-70 ">
        <div className="container h-[150px] flex justify-center items-center py-4">
          <div className="flex justify-center items-center flex-col">
            <h1 className="mb-3 text-primary text-2xl">حریم خصوصی</h1>
            <p>صفحه اصلی / حریم خصوصی</p>
          </div>
        </div>
      </div>
      <main className="flex flex-col lg:grid lg:grid-cols-12 mt-4 container gap-6 bg-white p-4 md:p-8 rounded-[5px]">
        <div className="col-span-2">
          <div className="h-[200px] flex flex-col justify-center gap-4 items-center w-auto bg-[#EEEEEE] rounded-sm">
            <Image
              src={privacyImg}
              alt="privacy"
              width={0}
              height={0}
              className="w-20 h-24 object-cover"
            />
            <p className="text-primary">حریم خصوصی</p>
          </div>
          <div className="mt-10">
            <div className="font-bold text-[16px] text-input-text lg:text-[12px] xl:text-[16px] text-xl mb-5 sm:text-center sm:flex sm:justify-between">
              دسته بندی ها
            </div>
            <ul className="[&>*]:text-base-content md:text-[14px] xl:text-[16px]">
              <li className="mb-2">
                <Link href={"/"}> سوالات متداول </Link>
              </li>
              <li className="mb-2">
                <Link href={"/"}> حریم خصوصی </Link>
              </li>
              <li className="mb-2">
                <Link href={"/about"} key={Math.random()}>
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href={"/"}>ثبت نام</Link>
              </li>
              <li>
                <Link href={"/"}>همکاری با ما </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-10 text-justify mb-10">
          <h2 className="font-bold  text-[#606770] text-md md:text-xl">
            سیاست حفظ اطلاعات و حریم خصوصی کاربران در آن
          </h2>
          <p className="pt-8 text-input-text">
            آن تاکید بسیاری بر اصول حفظ اطلاعات و حریم خصوصی کاربران این سایت
            دارد. این سند شامل توضیحی درباره اطلاعات خصوصی و نحوه استفاده از این
            اطلاعات است که آن از کاربران سایت جمع آوری می کند. این اطلاعات شامل
            مواردی است که مخصوص هر کاربر بوده و به کمک آن ها می توان کاربران
            تخفیفان را به صورت منحصر به فرد شناسایی نمود. برای نمونه می توان به
            نام، نشانی، نشانی الکترونیک (ایمیل)، شماره تلفن و سایر اطلاعاتی که
            به صورت عادی در دسترس عموم مردم نیست اشاره نمود.
          </p>
          <p className="pt-6 text-input-text">
            طلاعات جمع آوری شده و نحوه استفاده از آن ها شما با ثبت نام در آن
            مشخصات خود از قبیل نام و نام خانوادگی٬ ایمیل و … را در اختیار آن
            قرار می دهید. در ادامه فعالیت در آن و تقاضا برای ثبت سفارش٬ شما نیاز
            به اضافه کردن مشخصات آدرس خود و تلفن های تماس خواهید داشت. شما پس از
            ورود به آن به عنوان کاربر تخفیفان شناخته خواهید شد و کلیه اطلاعات
            مذکور و اطلاعاتی مانند تراکنش ها٬ پرداخت ها و اطلاعات فردی شما در
            اختیار تخفیفان خواهد بود. لازم به ذکر است که این موارد تنها موارد
            مورد استفاده در آن نخواهد بود. آن اطلاعاتی از قبیل IP شما٬ اطلاعات
            کوکی ها و صفحات مشاهده شده توسط شما را نیز نگهداری خواهد کرد. از
            اینگونه اطلاعات تنها در موارد تبلیغاتی و یا تحویه محتویات متناسب با
            شما استفاده خواهد شد و در اختیار سازمان ها و افراد غیر از آن قرار
            نخواهد گرفت. آن اطلاعات شما را اجاره نخواهد داد بجز در مواردی که شما
            از قوانین منعکس شده در بخش شرایط و ضوابط تخطی نموده و شاکی نسبت به
            عملکرد شما وجود داشته باشد
          </p>
          <p className="pt-6 text-input-text">
            ویرایش و تغییر اطلاعات شخصی شما می توانید کلیه اطلاعات شخصی خود را
            در بخش مربوط به حساب من تغییر داده و ویرایش کنید. این اطلاعات شامل
            کلیه اطلاعاتی است که شما در سایت آن وارد کرده اید. حساب شما توسط شما
            قابل حذف شدن از سیستم نمی باشد و تنها توسط مدیریت امکانپذیر است.
          </p>
          <p className="pt-6 text-input-text">
            محدودیت دسترسی به اطلاعات تخفیفان دسترسی کارمندان خود به اطلاعات
            کاربران را محدود نموده و تنها کارمندانی که ارتباط مستقیم با کاربران
            دارند٬ دسترسی به کلیه اطلاعات خواهند داشت. کلیه رمزهای عبور به صورت
            رمز شده در پایگاه داده های تخفیفان نگهداری شده و در فرآیند رمزگذاری
            بیشترین تلاش در استفاده از الگوریتم ها و روش های پیشرفته شده است.
            کلیه اطلاعات مربوط به سیستم آن در زیرساخت های محافظت شده و در مکان
            های امن نگهداری می شوند.
          </p>
          <p className="pt-6 text-input-text">
            امیدواریم که با رعایت بیشترین میزان در حفاظت از اطلاعات شما٬‌
            اطمینان خاطر لازم به شما مشتریان گرامی در استفاده از سیستم آن را
            داده باشیم. در صورت هرگونه سوال و یا پرسشی٬ درخواست خود را تلفنی و
            یا از طریق بخش تماس با ما به اشتراک بگذارید.
          </p>
          <p className="pt-6 text-input-text">
            لغو خبرنامه برای لغو دریافت خبرنامه کافیست یکی از خبرنامه‌های روزانه
            ما را دریافت نمایید و در انتهای ایمیل لینک مربوط به لغو اشتراک
            خبرنامه را بزنید. توجه داشته باشید که در صورت علاقه به دریافت مجدد
            بایستی به تیم پشتییبانی ما به آدرس support@takhfifan.com ایمیل زده
            شود و با پرکردن ایمیل در فیلد مربوط به عضویت این کار انجام نخواهد شد
          </p>
          <p className="pt-6 text-input-text">
            با ما با مشخصات زیر تماس بگیرید ایمیل: support@takhfifan.com آدرس:
            شهرک غرب - بلوار دادمان - انتهای خیابان سپهر غربی - خیابان گلبرگ سوم
            - کوچه گلستان دوم - پلاک ۱۰۰ تلفن تماس: ۴۲۰۲۷ ۰۲۱( ۳۰ خط)
          </p>
        </div>
      </main>
    </div>
  );
}
