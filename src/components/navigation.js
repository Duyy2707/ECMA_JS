
import data from '../../db.json' assert {type: "json"}
const Navigation = function() {
    return /*html*/`
        <header  class="container-full mx-auto bg-sky-500 h-24">
     
        <div class="flex flex-row">
        <div class="basis-2/5 pl-32 pt-3">
        <img src="/Group 1.png " >
        </div>

        <div class="basis-5/6 pt-6">
        <input type="text" class="w-3/4 h-8">
        <input class="w-20 h-8 bg-sky-800 text-sm text-center " type="text"  required value="Tìm Kiếm">
        </div>
        <div class="basis-2/5 mr-80 mt-7">
        <i class="fa-regular fa-user text-2xl"></i> Đăng ký/Đăng Nhập
        <i class="fa-solid fa-cart-shopping"></i> Giỏ Hàng
        </div>
       
        
      </div>
        </header>
       
    `
    
}


export default Navigation;
