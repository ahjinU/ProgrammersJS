function solution(babbling) {
    var answer = 0;

  const defaultList = ["aya", "ye", "woo", "ma"];

  babbling.forEach((val) => {
    console.log("초기값:", val);
    defaultList.map((list, index) => {
      val = val.replaceAll(list + list, "*").replaceAll(list, " ");
    });
    console.log("리플레이스:", val);

    if (val.replaceAll(" ", "").length === 0) {
      answer++;
    }
  });
  console.log(answer);
  return answer;
}