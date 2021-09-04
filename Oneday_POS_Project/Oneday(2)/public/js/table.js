//DOMContentLoaded event를 설정하면
// JS코드가 HTML의 어떤 부분에 위치하고있어도 상관없이 작동된다.
document.addEventListener("DOMContentLoaded", () => {
  const main_section = document.querySelector("section.main");

  //   section.main이 없는 page에서 script오류가 나는것을 방지하기위하여
  if (main_section) {
    main_section.addEventListener("click", (e) => {
      const target = e.target;
      // index.pug의 table layout click 설정
      if (target.tagName === "DIV" && target.className.includes("table")) {
        const table_id = target.dataset.table_id;
        // alert(table_id + "가 선택됨");
        document.location.href = `/pos/order/${table_id}`;
      }
    });
  }
});
