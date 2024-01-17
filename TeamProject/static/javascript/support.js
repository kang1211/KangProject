$(function(){
    
    $(".search_btn").on("click",function(){
        if($("#search").val()==0){
            alert("내용을 입력하세요")
        }
    });

    $("#search").on("keyup",function(){
    
        var word = $(this).val();

        $(".board_index>tr").filter(
            function(){
                $(this).toggle($(this).text().includes(word));
            }
        );
    })
//처음 페이지 켰을때 게시판-------------------------------------------------------------
    let tableData = [
        ["Q1", "가나다라", "2023/12/13"],
        ["Q2", "가나다라", "2023/12/13"],
        ["Q3", "가나다라", "2023/12/13"],
        ["Q4", "가나다라", "2023/12/13"],
        ["Q5", "가나다라", "2023/12/13"],
        ["Q6", "가나다라", "2023/12/13"],
        ["Q7", "가나다라", "2023/12/13"],
        ["Q8", "가나다라", "2023/12/13"],
        ["Q9", "가나다라", "2023/12/13"],
        ["Q10", "가나다라", "2023/12/13"],
    ];

    // 테이블에 데이터 추가
    const tableBody = document.getElementById('board_index');

    tableData.forEach(rowData => {
    const row = document.createElement('tr');

    rowData.forEach(cellData => {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
    });
//-게시판 페이지 전환-------------------------------------------------------------
    $(".page_bt").on("click",function(){
        if($(this).text()=="1"){
            tableData = [
                ["Q1", "가나다라", "2023/12/13"],
                ["Q2", "가나다라", "2023/12/13"],
                ["Q3", "가나다라", "2023/12/13"],
                ["Q4", "가나다라", "2023/12/13"],
                ["Q5", "가나다라", "2023/12/13"],
                ["Q6", "가나다라", "2023/12/13"],
                ["Q7", "가나다라", "2023/12/13"],
                ["Q8", "가나다라", "2023/12/13"],
                ["Q9", "가나다라", "2023/12/13"],
                ["Q10", "가나다라", "2023/12/13"],
            ]; $("#board_index").empty();

            tableData.forEach(rowData => {
                const row = document.createElement('tr');
            
                rowData.forEach(cellData => {
                    const cell = document.createElement('td');
                    cell.textContent = cellData;
                    row.appendChild(cell);
                });
            
                tableBody.appendChild(row);
            });
        }else if($(this).text()=="2"){
            tableData = [
                ["Q11", "aaaa", "2023/12/13"],
                ["Q12", "bvbbb", "2023/12/13"],
                ["Q13", "가나abab", "2023/12/13"],
                ["Q14", "가나abab다라", "2023/12/13"],
                ["Q15", "가나abba다라", "2023/12/13"],
                ["Q16", "가나다abba라", "2023/12/13"],
                ["Q17", "가나bab다라", "2023/12/13"],
                ["Q18", "가나abab다라", "2023/12/13"],
                ["Q19", "가나abba다라", "2023/12/13"],
                ["Q20", "가ababab나다라", "2023/12/13"],
            ];
            $("#board_index").empty();

            tableData.forEach(rowData => {
                const row = document.createElement('tr');
            
                rowData.forEach(cellData => {
                    const cell = document.createElement('td');
                    cell.textContent = cellData;
                    row.appendChild(cell);
                });
            
                tableBody.appendChild(row);
            });
        }else if($(this).text()=="3"){
            tableData = [
                ["Q21", "가11111111나다라", "2023/12/13"],
                ["Q22", "222222가나다라", "2023/12/13"],
                ["Q23", "가나3333다라", "2023/12/13"],
                ["Q24", "가나다44444라", "2023/12/13"],
                ["Q25", "가나5555555다라", "2023/12/13"],
                ["Q26", "가나다666666라", "2023/12/13"],
                ["Q27", "가77777나다라", "2023/12/13"],
                ["Q28", "가나88888다라", "2023/12/13"],
                ["Q29", "가나99999다라", "2023/12/13"],
                ["Q30", "가나66666다라", "2023/12/13"],
            ];
            $("#board_index").empty();

            tableData.forEach(rowData => {
                const row = document.createElement('tr');
            
                rowData.forEach(cellData => {
                    const cell = document.createElement('td');
                    cell.textContent = cellData;
                    row.appendChild(cell);
                });
            
                tableBody.appendChild(row);
            });
    }});
    

});
