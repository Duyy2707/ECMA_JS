import Navigation from "../components/navigation";
import data from '../../db.json' assert {type: 'json'}


const ProductDetail = function(id) {
  
    const book = data.find(function(item){
        return item.id == id
    })
    
    return /*html*/`
    
    ${Navigation()}
    <h1>Product Detail</h1>
    // ${data.map(function(book, index){
        return/*html*/`

    <div class="flex flex-row">
        <div class="basis-2/5">
        <img class="w-[600px] h-[600px]" src="${book.images[0].base_url}"/>
        </div>
        <div class="basis-3/5">
        <p>Tác Giả: Ca Tây</p>
        <h4 class="pb-2 font-medium text-xl">${book.name}</h4>
        <div class="text-xs">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star pr-2 pb-3"></i>
           <p class="text-zinc-400 pb-2" >(Xem đánh giá 1000+)</p>
            <p class="text-zinc-400 pb-2" >Đã bán 9999</p>
            </div>
            <div class="pt-2 text-red-600 text-3xl"><p class="float-left pr-9">83.000đ</p><p class="text-sm text-slate-400 pb-32">100.000đ </p></div>
            <button class="rounded w-[240px] h-[50px] bg-red-600 text-white" >Chọn Mua</button>
            </div>
    </div>

    <div class="text-bg">
    <h1 class="ml-9 text-2xl font-semibold mb-3">THÔNG TIN CHI TIẾT</h1>
    <table class="table-auto w-[980px] h-[150px] ml-9  border-separate border-spacing-2 border border-slate-400 text-center">
   
    <tbody>
      <tr>
        <td class="border border-slate-300 ...">Công Ty Phát Hành</td>
        <td class="border border-slate-300 ...">Bloom Books</td>
      
      </tr>
      <tr>
        <td>Ngày Xuất bản</td>
        <td>2020-09-01 00:00:00</td>
        
      </tr>
      <tr>
        <td>Kích Thước</td>
        <td>14.5 x 20 cm</td>
      </tr>
    </tbody>
  </table>
    </div>
        `
    }).join('')}
    
    `
}
 export default ProductDetail;