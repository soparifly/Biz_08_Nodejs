let 배열1 = ["aaa", "bbb", "ccc"];

배열1.forEach((요소) => {
  console.log(요소.search(/[ab]+/));
});
/**
 * 문자열.search(찾는문자열)
 * 문자열 내에 찾는 문자열이 있으면
 * 위치값을 return(-1보다 큰값)
 * 없으면 -1을 return 
 */
배열1.fillter(요소 => {
    return 요소.search(/[ab]+/)
})