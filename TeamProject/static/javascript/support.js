$(function(){
    
    $(".search_btn").on("click",function(){
        if($("#search").val()==0){
            alert("내용을 입력하세요")
        }
    });

    $("#search").on("keyup",function(){
    
        var word = $(this).val();

        $("#board_index>tr").filter(
            function(){
                $(this).toggle($(this).text().includes(word));
            }
        );
    })
//처음 페이지 켰을때 게시판-------------------------------------------------------------
    let tableData = [
        ["Q1", "★여행계약서 확인 및 동의 방법★", "2023/12/13"],
        ["Q2", "해외 항공권 문의 & 답변 확인방법(항공 온라인 문의)", "2023/12/13"],
        ["Q3", "항공권 예약 취소 및 환불은 어떻게 하나요?", "2023/12/13"],
        ["Q4", "항공권 환불 신청 후 처리 절차가 어떻게 되나요?", "2023/12/13"],
        ["Q5", "중복(이중) 예약 건은 취소해야 하나요?", "2023/12/13"],
        ["Q6", "예약내역 조회/확인은 어떻게 하나요?", "2023/12/13"],
        ["Q7", "공동행사가 무엇인가요?", "2023/12/13"],
        ["Q8", "항공기 사전 좌석 배정이 가능한가요?", "2023/12/13"],
        ["Q9", "호텔 보증금 및 환불은 어떻게 하나요?", "2023/12/13"],
        ["Q10", "1명만 참관을 할 경우 룸메이트로 배정 받을 수 있나요?", "2023/12/13"],
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
                ["Q1", "★여행계약서 확인 및 동의 방법★", "2023/12/13"],
                ["Q2", "해외 항공권 문의 & 답변 확인방법(항공 온라인 문의)", "2024/01/17"],
                ["Q3", "항공권 예약 취소 및 환불은 어떻게 하나요?", "2024/01/17"],
                ["Q4", "항공권 환불 신청 후 처리 절차가 어떻게 되나요?", "2024/01/17"],
                ["Q5", "중복(이중) 예약 건은 취소해야 하나요?", "2024/01/17"],
                ["Q6", "예약내역 조회/확인은 어떻게 하나요?", "2024/01/17"],
                ["Q7", "공동행사가 무엇인가요?", "2024/01/17"],
                ["Q8", "항공기 사전 좌석 배정이 가능한가요?", "2024/01/17"],
                ["Q9", "호텔 보증금 및 환불은 어떻게 하나요?", "2024/01/17"],
                ["Q10", "1명만 참관을 할 경우 룸메이트로 배정 받을 수 있나요?", "2024/01/17"],
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
            $(this).css({"color":"blue","font-weight":"bold"})
            $(".bt_two").css({"color":"black","font-weight":"normal"})
            $(".bt_three").css({"color":"black","font-weight":"normal"})
        }else if($(this).text()=="2"){
            tableData = [
                ["Q11", "네이버항공에서 비회원으로 구매한 항공권은 예약조회를 어떻게 하나요?", "2024/01/17"],
                ["Q12", "탑승자 정보 입력 후 예약시도 했는데 예약에 실패했다고 뜹니다. 어떻게 하나요?", "2024/01/17"],
                ["Q13", "[기차여행] 열차 티켓은 출력해가야 하나요?", "2024/01/17"],
                ["Q14", "울릉도 단체 행사의 경우 동일 단체 구성원 내에서 출발지 항구가 서로 다를 경우 같이 행사 진행이 가능한가요?", "2024/01/17"],
                ["Q15", "[좌석 지정/사전 수하물 할인/기내식 예약]항공사 부가서비스는 어떻게 구매하나요?", "2024/01/17"],
                ["Q16", "허니문 상품을 견적 받고 싶습니다.", "2024/01/17"],
                ["Q17", "여권의 유효기간은 반드시 6개월 이상 남아있어야 하나요?", "2024/01/17"],
                ["Q18", "하나투어 대리점 개설 시 필요 서류는 무엇인가요?", "2024/01/17"],
                ["Q19", "해외패키지 상품의 여행자보험 관련 문의", "2024/01/17"],
                ["Q20", "통합회원으로 전환하는 방법", "2024/01/17"],
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
            $(this).css({"color":"blue","font-weight":"bold"})
            $(".bt_one").css({"color":"black","font-weight":"normal"})
            $(".bt_three").css({"color":"black","font-weight":"normal"})
        }else if($(this).text()=="3"){
            tableData = [
                ["Q21", "★여행계약서 확인 및 동의 방법 (PC/모바일)★", "2024/01/17"],
                ["Q22", "여행계약서를 이미 동의했는데 여행계약서 알림톡(메일)을 또 받았습니다.", "2024/01/17"],
                ["Q23", "여행계약서는 꼭 동의해야 하나요?", "2024/01/17"],
                ["Q24", "여행계약서란 무엇인가요?", "2024/01/17"],
                ["Q25", "여행계약서를 동의했습니다. 계약서 내용을 다시 확인하고 싶어요.", "2024/01/17"],
                ["Q26", "여행계약서는 어떻게 확인할 수 있나요?", "2024/01/17"],
                ["Q27", "여행계약서를 확인하고 동의하라는 메일을 받았습니다. 어디에서 확인하고 동의하는 건가요?", "2024/01/17"],
                ["Q28", "여행계약서를 미동의했다고 나옵니다. 어떻게 동의하는 건가요?", "2024/01/17"],
                ["Q29", "다른 사람의 예약을 대신 해주었습니다. 여행계약서를 동의하려고 비회원 예약확인을 했는데 아무것도 나오지 않아요.", "2024/01/17"],
                ["Q30", "저는 여행계약서가 왔는데 동행자는 문자나 이메일 등 아무것도 받지 못했습니다. 어떻게 확인할 수 있나요?", "2024/01/17"],
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
            $(this).css({"color":"blue","font-weight":"bold"})
            $(".bt_one").css({"color":"black","font-weight":"normal"})
            $(".bt_two").css({"color":"black","font-weight":"normal"})
    }});
    

});
