// import { data } from "autoprefixer"
import Navigation from "../components/navigation"
import data from '../../db.json' assert {type: "json"}

var HomePage = function () {
    console.log(data);
    return /*html*/`
    ${Navigation()}
<div class="flex flex-row">
    <div class="basis-1/5">
    <div class="text-left pl-16">
        <p class="pb-5 font-bold pt-6">Danh Mục Sản Phẩm</p>
        <p class="pb-2">English Books</p>
        <p class="pb-2">Sách Tiếng Việt</p>
        <p class="pb-2">Văn Phòng Phẩm</p>
        <p class="pb-2">Quà Lưu Niệm</p>
    </div>
    </div>



        <div class="basis-4/5">
        <h1 class="pt-6 pb-6 text-2xl font-semibold">Nhà Sách Tiki</h1>
        <div>
            <img class="bg-auto bg-center w-[1000px] pb-8" src="/Rectangle.png">
        </div>
        <div class="flex flex-row pb-8">
            <p class="pr-8">Phổ Biến</p>
            <p class="pr-8">Bán chạy</p>
            <p class="pr-8">Hàng Mới</p>
            <p class="pr-8">Giá Thấp</p>
            <p class="pr-8">Giá Cao</p>
          
        </div>
        <hr class="pb-2">
        <div class="grid grid-cols-4 gap-2">
        ${data.map(function (book, index) {
        return /*html*/`
            <div >
            <a href="/products/${book.id}">
            <img class="w-[200px] h-[200px]" src="${book.images[0].base_url}"/>
            <h4 class="pb-2 font-semibold">${book.name}</h4>
            </a>
            <img class="pb-2" src="/tikinow.png">
            <p class="text-emerald-400 text-xs">Giao hàng siêu tốc 2H</p>
            <div class="text-xs">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star pr-2"></i>|
            <p class="text-zinc-400 float-right mr-32 pb-2" >Đã bán 9999</p>
            <div class="pt-2 text-red-600 text-base">83.300đ</div>
            </div>
            
            </div>
            
            `;
    }).join('')}
        
        </div>
          
        <div class="flex flex-row pr-32 pt-10 text-left ">
        <div class="basis-2/5">
        <p class="font-bold text-lg mb-5">Hỗ trợ khách hàng</p>
        <p class="font-light ">Hotline: 1900-6035 <br>
        (1000 đ/phút, 8-21h kể cả T7, CN) <br>
        Các câu hỏi thường gặp <br>
        Gửi yêu cầu hỗ trợ <br>
        Hướng dẫn đặt hàng <br>
        Phương thức vận chuyển <br>
        Chính sách đổi trả <br>
        Hướng dẫn trả góp <br>
        Chính sách hàng nhập khẩu <br>
        Hỗ trợ khách hàng: <br>
        hotro@tiki.vn <br>
        Báo lỗi bảo mật: <br>
        security@tiki.vn</p>    
        </div>
        <div class="basis-1/5">
        <p  class="font-bold text-lg mb-5">Về TIKI</p>
        <p class="font-light">Giới thiệu Tiki <br>
        Tuyển dụng<br>
        Chính sách bảo mật thanh toán<br>
        Chính sách bảo mật thông tin cá nhân<br>
        Chính sách giải quyết khiếu nại<br>
        Điều khoản sử dụng<br>
        Giới thiệu Tiki Xu<br>
        Tiếp thị liên kết cùng Tiki<br>
        Bán hàng doanh nghiệp<br>
        Điều kiện vận chuyển</p>
        </div>
        <div class="basis-2/5">
        <p  class="font-bold text-lg">Hợp tác và liên kết</p>
        <p class="font-light">Quy chế hoạt động Sàn GDTMĐT <br>
        Bán hàng cùng Tiki</p>
        <p  class="font-bold text-lg pt-10 pb-5">Chứng Nhận Bởi</p>
        <img class="h-[40px] float-left pr-6" src="/hi.png">
        <img class="h-[40px] float-left" src="/Shape.png">
        <img class="h-[40px] " src="/Shape-1.png">
        </div>
        <div class="basis-1/5"><p  class="font-bold text-lg ">Phương THức Thanh toán</p>
        <img class="w-[40px] float-left pr-4" src="/b1.png">
        <img  class="w-[40px] float-left pr-4"src="/b2.png">
        <img class="w-[40px] float-left pr-4" src="/b3.png">
        <img class="w-[40px] float-left pr-4" src="/b4.png">
        <img class="w-[40px] float-left pr-4" src="/b5.png">
        <img  class="w-[40px] pr-4" src="/b6.png"> 
        <div  class="font-bold text-lg pt-6">Vận chuyển</div>
        <img src="/Frame.png">
        </div>
        
        </div>
    </div>`
}

export default HomePage;