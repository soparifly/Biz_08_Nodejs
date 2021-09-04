<script>

for (let i = 0; i 12; i++) {
    div.table(data-table_id= i+1)!{i+1};
};
    document.addEventListener("DOMContentLoaded",()={
        const main_section = document.querySelector("section.main");
        if(main_section){
            main_section.addEventListener("click",(e)={
                const target = e.target;
                
                index.pug의 table layout click 설정
                if(target.tagName =="DIV" && target.className.include("table")){
                    const table_id = target.dataset.table_id;
                    alert(table_id +"가 선택됨");
                    
                }
            });
        }
    });

    
        </script>