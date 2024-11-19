$(function () {
  let selectAll = $('#selectAll');
  let checkBoxs = $('tbody input[type="checkbox"]');

  selectAll.on('change', function () {
    checkBoxs.prop('checked', $(this).prop('checked'));
    // 첫 번째 prop, 두 번째 prop 체크박스의 속성 설정을 의미하며
    // 선택된 상태를 selectAll과 동기화하는 역할을 수행
  });
  
  // 체크박스 중 하나라도 해제가 되면 전체 박스도 해제
  checkBoxs.on('change', function () {
    if (!$(this).prop('checked')) {
      selectAll.prop('checked', false);
      // false: 체크 해제 상태
    }
  });
  
  // 삭제
  $('.delete').on('click', function () {
    checkBoxs.each(function () {
      if ($(this).prop('checked')) {
        $(this).closest('tr').remove();
      }
    });

    let totalRows = $('tbody tr').length;
    $('tbody tr').each(function (index) {
      $(this).find('td').eq(1).text(totalRows - index);
    });

    // 전체 선택된 체크박스들 선택 해제
    selectAll.prop('checked', false);

    // 체크박스 리스트 다시 선택
    checkBoxs = $('tbody input[type="checkbox"]');
  });
});