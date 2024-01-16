// 호텔 데이터 예시 (실제 데이터로 교체해야 합니다)
const hotelData = [
    { id: 1, name: "호텔 서울", location: "서울", image: "./static/images/hotel_seoul.jpg" },
    { id: 2, name: "강릉 리조트", location: "강원", image: "./static/images/hotel_gangwon.jpg" },
    // 다른 호텔들도 추가해주세요
];

// 호텔 정보를 동적으로 생성하여 화면에 표시하는 함수
function displayHotels() {
    const categoryContainer = document.getElementById("category");
    
    // 호텔 데이터를 이용해 동적으로 요소를 생성하고 삽입합니다.
    hotelData.forEach(hotel => {
        const hotelElement = document.createElement("div");
        hotelElement.classList.add("hotel");
        hotelElement.style.backgroundImage = `url(${hotel.image})`;

        const textElement = document.createElement("div");
        textElement.classList.add("text-box");
        textElement.innerHTML = `<p class="text">${hotel.location}</p>`;

        hotelElement.appendChild(textElement);

        // 호텔 정보를 클릭하면 해당 호텔의 세부 정보를 보여주는 함수 호출
        hotelElement.addEventListener("click", () => showHotelDetails(hotel));

        categoryContainer.appendChild(hotelElement);
    });
}

// 호텔 세부 정보를 화면에 표시하는 함수 (간단한 예시)
function showHotelDetails(hotel) {
    alert(`호텔 이름: ${hotel.name}\n위치: ${hotel.location}`);
}

// 이미지 슬라이더 초기화
function initSlider() {
    // 슬라이더 초기화 로직을 추가해주세요.
}

// 이전/다음 버튼 클릭 시 슬라이더 변경
function changeSlide(direction) {
    // 슬라이더 변경 로직을 추가해주세요.
}

// 페이지 로드 시 실행되는 초기화 함수
function initializePage() {
    displayHotels();
    initSlider();
}

// 페이지 로드 시 초기화 함수 실행
window.addEventListener("load", initializePage);