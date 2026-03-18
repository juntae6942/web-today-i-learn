// TODO: TIL 폼 등록 기능을 구현하세요
// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.
const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // 1. 입력된 값 가져오기
    const dateValue = document.querySelector("#til-date").value;
    const titleValue = document.querySelector("#til-title").value;
    const contentValue = document.querySelector("#til-content").value;

    // 2. 새로운 article 요소 생성 및 클래스 추가
    const newTilItem = document.createElement("article");
    newTilItem.classList.add("til-item");

    // 3. 요소 내부에 HTML 뼈대와 데이터 넣기
    newTilItem.innerHTML = `
    <time>${dateValue}</time>
    <h3>${titleValue}</h3>
    <p>${contentValue}</p>
  `;

    // 4. 리스트의 맨 위에 새 항목 추가 (가장 최신 글이 위로 오도록 prepend 사용)
    tilList.prepend(newTilItem);

    // 5. 등록 후 폼 입력창 초기화
    tilForm.reset();
});