// // jsを記述する際はここに記載していく


// datepicker設置
$(function() {

$("#datepicker").datepicker({
        // 日付が選択された時、日付をテキストフィールドへセット
        dateFormat: 'yy-mm-dd',
        onSelect: function(dateText, inst) {
                    $("#date_val").val(dateText);
                    $("#savebtn").show();
                }
    });
});
    

// 文字数制限失敗　html側で対応
// $(function check(){
//     //②次にその関数内でテキストエリアの値を取得。
//     const counttext = document.getElementById("textarea").value;
//     console.log(counttext);
//     //③その後、その文字列の文字数を取得。
//     n = counttext.length;
//     console.log(n);
//     //④最後にその文字数が制限文字数以上だった場合、アラートを実行。
//     if (n > 10) alert("10文字以内で入力してください");
// });



$("#savebtn").on("click",function(){

  const key = $("#date_val").val();
  const value = $("#textarea").val();

  console.log(key);
  console.log(value);

  localStorage.setItem(key, value); //一覧表示に追加

  $("#date_val").val("")
  $("#textarea").val("")
  $("#savebtn").hide();

  const html = `
  <li>
      <span>${key}</span>
      <span>${value}</span>
  </li>`

  $("#list").prepend(html);

});


for(let i =0; i < localStorage.length; i++){

  const key= localStorage.key(i);
  console.log(key,"keyです");

  const value = localStorage.getItem(key);
  console.log(value,"valueです");

  const html = `
  
  <li>
    <span>${key}</span>
    <span>${value}</span>
  </li>`

  $("#list").append(html);

}

$("#delete-one").on("click",function(){

  var delkey = document.getElementById("deletebox").value;
  console.log(delkey);
  localStorage.removeItem(delkey);
  document.location.reload();

// リロードしないといけないのはなぜ？

});


$("#delete-all").on("click",function(){
  var confirm = window.confirm("本当に履歴を全て削除しますか？");

  if(confirm == true){
    
  localStorage.clear();
  document.location.reload();
}

// リロードしないといけないのはなぜ？

});
