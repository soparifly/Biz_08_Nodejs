//fetch를 통해서 되돌려받은 주문리스트를 왼쪽의 주문리스테 표시하기
const add_order_list = (menu_list) => {
  const order_box = document.querySelector("table.order_list tbody");

  let order_tr_list = document.querySelectorAll("table.order_list tbody tr");
  if (order_tr_list) {
    order_list.forEach((tr) => {
      order_box.removeChild(tr);
    });
  }
  total_pay.title = "합계";
  total_pay.count = 0;
  total_pay.qty = 0;
  total_pay.b1 = "";
  total_pay.total = 0;
  total_pay.b2 = "";

  const orders = order_list.map((order, index) => {
    const order_item = [
      order.to_pcode,
      order.tbl_product.p_name,
      order.to_qty,
      order.to_price,
      order.to_qty * order.to_price,
      "X",
    ];

    total_pay.count++;
    total_pay.qty += order.to_qty;
    total_pay.total += order.to_qty * order.to_price;

    const order_tds = order_item.map((order_item) => {
      const td = document.createElement("TD");
      td.innerText = item;
      td.dataset.order_seq = order.to_seq;
      return td;
    });
    const order_tr = document.createElement("TR");
    order_tr.append(...order_tds);
    return order_tr;
  });
  order_box.append(...orders);

  const pay_tds = Object.keys(total_pay).map((key) => {
    const td = document.createElement("TD");
    td.innerText = total_pay[key];
    td.style.backgroundColor = "#ddd";
    return td;
  });

  const pay_tr = document.createElement("TR");
  pay_tr.append(...pay_tds);

  order_box.appendChild(pay_tr);
};

//fetch를 사용하여 서버에 데이터를 요청하기위해 별도의 함수를 선언하기
const order_input = (menu_id, table_id) => {
  // pathVarriable 방식으로 menu_id값을 URL에 포함하여
  // getter 요청하기
  /**
   * 만약 3번 테이블에 5번 메뉴를 추가하려고 Request 를 한다면
   * localhost:3000/order/3/input/4 와 같은 URL 을 만들어서 서버로 Request라고한다
   * 이런식의 URL 방식을 RESTfull 요청이라고한다
   */
  fetch(`/pos/order/${table_id}/input/${menu_id}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      add_order_list(result.order_list);
    });
};
const getOrders = (table_id) => {
  fetch(`/pos/order/${table_id}/getlist`)
    .then((res) => res.json())
    .then((result) => add_order_list(result));
};
document.addEventListener("DOMContentLoaded", () => {
  const order_article = document.querySelector("article.order_list");
  const table_id = order_article.dataset.table_id;

  const pay_box = document.querySelector("div.pay_box");
  const order_table = document.querySelector("table.order_list");

  const menu_article = document.querySelector("article.menu_list");

  if (menu_article) {
    menu_article.addEventListener("click", (e) => {
      const target = e.target;

      if (target.tagName === "DIV" && target.className.includes("menu")) {
        const menu_id = target.dataset.menu_id;
        // alert(menu_id + "가 선택됨");
        // document.location.href = `/pos/order/input/${menu_id}`;
        order_input(menu_id, table_id);
      }
    });
  }
  //  주문서 화면이 열릴때 서버에서 table주문내용이 있다면 가져와서 보임
  if (order_table) {
    order_article.addEventListener("click", (e) => {
      const target = e.target;
      if (target.tagName === "TD" && target.innerText === "X") {
        const order_seq = target.dataset.order_seq;
        if (confirm("주문 메뉴를 삭제합니다!!")) {
          fetch(`/pos/order/${order_seq}/delete`)
            .then((res) => {
              return res.text();
            })
            .then((result) => {
              if (result === "OK") {
                getOrders(table_id);
              }
            });
        }
      }
    });
  }

  getOrders(table_id);

  if (pay_box) {
    pay_box.addEventListener("click", (e) => {
      const button = e.target;

      let pay_text = "";

      if (button.className.includes("btn_pay_cash")) {
        alert("현금결제");
      } else if (button.className.includes("btn_table_layout")) {
        document.location.href = "/";
      }
      if (button.tagName === "BUTTON") {
        const modal = document.querySelector("div.modal");
        modal.style.display = "flex";
        document.querySelector("span.pay_qty").innerText = pay_text;
        document.querySelector("span.pay_total").innerText = total_pay.total;
      }
    });
  }

  document.querySelector("div.close span").addEventListener("click", (e) => {
    document.querySelector("div.modal").style.display = "none";
  });
  document
    .querySelector("button.btn_pay_complete")
    .addEventListener("click", () => {
      if (confirm("결제를 진행할까요?")) {
        const article_order = document.querySelector("article.order_list");
        const table_id = article_order.dataset.table_id;

        fetch(`/pos/paycomplete/${table_id}`)
          .then((res) => res.text())
          .then((result) => {
            if (result === "OK") {
              document.querySelector("div.modal").style.display = "none";
              getOrders(table_id);
            }
          });
      }
    });
});
