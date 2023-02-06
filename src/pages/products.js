import Navigation from "../components/navigation";
import data from '../../db.json' assert {type: 'json'}

    const ProductPage = function(id){
        const book = data.find(function(item){
            return item.id == id
        })
        return /*html*/`
    ${Navigation()}

    <div class="flex flex-row p-10">
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
            <div class="pb-20">
            <h1>Số Lượng</h1> <br>
            <span class="input-group-text btn btn-danger"
            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"> - </span>
          <input type="number" value="1" class="form-control text-center" min="1" max="100">
          <span class="input-group-text btn btn-success"
            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"> + </span>
          <p class="pr"></div>
            <button class="rounded w-[240px] h-[50px] bg-red-600 text-white" >Chọn Mua</button>
            </div>
    </div>
    <div>
    <h1 class="ml-10 text-2xl font-semibold mb-3 mt-10">Sản Phẩm Tưởng Tự</h1>

    <div class="grid grid-cols-5 gap-10">
    ${data.map(function (book, index) {
        return /*html*/`
            <div class="">
            <a href="/products/${book.id}">
            <img class="w-[200px] h-[200px]" src="${book.images[0].base_url}"/>
            <h4 class="pb-2 font-semibold text-[12px]">${book.name}</h4>
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
    </div>
    <div class="text-bg">
    <h1 class="ml-10 text-2xl font-semibold mb-3 mt-10">Thông Tin Chi Tiết</h1>
    <table class="border-collapse border w-[980px] ml-10">
    <thead>
      <tr>
        <th class="border border-slate-200 bg-gray-200 pb-2">Công ty phát hành</th>
        <th class="border  border-slate-50 pb-2">Bloom Books</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td class="border border-slate-200 bg-gray-200 pb-2">Ngày Xuất Bản</td>
        <td class="border  border-slate-50 bg-gray-100 pb-2">2020-09-01 00:00:00</td>
      </tr>
      <tr>
        <td class="border border-slate-200 bg-gray-200 pb-2">Kích thước</td>
        <td class="border border-slate-50 pb-2">14.5 x 20 cm</td>
      </tr>
      <tr>
        <td class="border border-slate-200 bg-gray-200 pb-2">Dịch Giả</td>
        <td class="border  border-slate-50 bg-gray-100 pb-2">Tuyết Mai</td>
      </tr>
      <tr>
        <td class="border border-slate-200 bg-gray-200 pb-2">Loại bìa</td>
        <td class="border  border-slate-50 pb-2">Bìa mềm</td>
      </tr>
      <tr>
      <td class="border border-slate-200 bg-gray-200 pb-2">Số trang</td>
      <td class="border border-slate-50 bg-gray-100 pb-2">288</td>
    </tr>
    <tr>
    <td class="border border-slate-200 bg-gray-200 pb-2">Nhà xuất bản</td>
    <td class="border border-slate-50 pb-2">Nhà Xuất Bản Thế Giới</td>
  </tr>
    </tbody>
  </table>
    </div>

    <div>
    <h1 class="mt-10 ml-9  text-2xl font-semibold">Mô Tả Sản Phẩm</h1>
    <p class="ml-9 mr-19">KỶ LUẬT vốn là ván cờ bạn phải tự đấu với chính mình. Thắng - bạn sẽ có được “bản năng của người mạnh mẽ nhất”, đó là sự tự kiểm soát bản thân. Thua - bạn mãi sống trong cảm giác tạm bợ, nuối tiếc. Càng dễ dàng dung túng cho những thói quen trì hoãn bao nhiêu, cuộc sống của bạn sẽ đi càng nhanh tới sự mất kiểm soát và thiếu quy hoạch bấy nhiêu. <br>
    Hãy kiên trì đặt ra yêu cầu cao với bản thân, từ chối sự mê hoặc của thói tùy tiện đồng thời thiết lập cho mình những thói quen tốt trong hành vi thường ngày. Sự nỗ lực sẽ luôn được đền đáp xứng đáng nếu bạn biết cách đầu tư công sức và thời gian. Bởi một ngày nào đó trong tương lai, những gì bạn làm sẽ phản chiếu đầy đủ trên chính con người và cuộc đời của bạn. <br>
    CÀNG KỶ LUẬT, CÀNG TỰ DO - Mong rằng tại thời điểm kết thúc hành trình với cuốn sách, bạn đã là một phiên bản khác kỷ luật hơn, nhưng tự do hơn. <br>
    Một vài trích dẫn: <br> <br>
    “Bạn cần phải biết rằng tình yêu là hoa thêu trên gấm. Có thì tốt, không có cũng chẳng sao, thực sự không đáng để bạn vì nó mà từ bỏ sự nghiệp, từ bỏ cơ hội thăng tiến thậm chí là từ bỏ cả cuộc đời vinh hoa sau này.” <br> <br>
    “Những người trưởng thành như chúng ta nên nhìn cuộc sống rộng hơn một chút, ghen có thể có, tức giận có thể có. Thế nhưng, có những cảm xúc chỉ nên lướt qua trong lòng, ngày hôm sau ngủ dậy hãy để nó rời đi cùng với đêm đen mới là cách lựa chọn tốt nhất.” <br> <br>
    “Mỗi người đều có kinh nghiệm sống không giống nhau, yêu cầu không giống nhau. Điều giống nhau là chúng ta đều nên tìm mọi cách trau dồi khả năng của bản thân để sống tốt cuộc đời này.” <br> <br>
    Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</p>
    </div>
        
    `
    }


export default ProductPage;

