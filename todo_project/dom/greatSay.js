const collection = [
    {   
        write:"사람을 강하게 만드는 것은 사람이 하는 일이 아니라, 하고자 노력하는 것이다.",
        author:"어니스트 헤밍웨이"
    },
    {
        write:"물이 바위를 뚫는 것은 힘 때문이 아니라 지속적인 떨어짐 때문이다.",
        author:"오비디우스스"
    },
    {
        write:"게으름뱅이의 손에 누가 권력이나 명예를 안겨줄까.",
        author:"힐티"
    },
    {
        write:"인간의 본성은 착한 것이다.",
        author:"맹자"
    },
    {
        write:"두려움 때문에 갖는 존경심만큼 비열한 것은 없다.",
        author:"카뮈"
    },
    {
        write:"프로그래밍은 책이 아닌 실습과 예제(例題)로 가장 잘 습득되는 기술이다.",
        author:"앨런 튜링"
    },
    {
        write:"우리는 눈앞의 아주 가까운 곳까지 밖에 보지 못한다. 그러나 그 안에서도 우리는 해야 할 일을 잔뜩 찾을 수 있다.",
        author:"앨런 튜링"
    },
]


const getSayContainer = document.querySelector('.say-container');
const randomNum = Math.floor(Math.random()*collection.length);

getSayContainer.innerHTML = `${collection[randomNum].write} <br> ${collection[randomNum].author}`;