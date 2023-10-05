

let subNo = -1; //問題文No


//問題文格納
const questTextJa = [
    "day1　応用演習 : counter という関数を宣言します。これが呼び出されたら、常に前回呼び出された時よりも 1 つ大きい数値を console.log で表示しましょう。",

    'day18 スライド : 与えられた配列から偶数のみの配列を返す関数　evenArray　を宣言してください',

    "day10　ナイトメア : 関数 getDepth を宣言してください。"
];

const questTextDoc = [
  //1問目
    `
    counter(); // => 1<br>
    counter(); // => 2<br>
    counter(); // => 3<br>`,
  //2問目
    `
    /**<br>
    * @param {<Array<any>} ???<br>
    * @returns {Array<any>} 与えられた配列から偶数のみの配列を返す<br>
    */<br>
    test(evenArray([1,2,3,4,5]),[2,4]);`,
  //3問目
    `
    /**
 * @param {object}<br>
 * @returns {number} 引数のオブジェクトの深さ（何層になっているか）を返す。入れ子になったオブジェクトが複数ある場合は、一番深い層の数を返してください。<br>
 */<br>
const nestedObject1 = { a: "A" };<br>
const nestedObject2 = { a: "A", b: { c: "C" } };<br>
const nestedObject3 = { a: "A", b: { c: "C" }, d: { e: { f: "F" } } };<br>
test(getDepth(nestedObject1), 1);<br>
test(getDepth(nestedObject2), 2);<br>
test(getDepth(nestedObject3), 3);`

];
//解答文文
const answerTextObj = [
  //1 day1 応用演習
  {
    text1:
    `let intNum = 0;<br>
    function counter() {<br>
      &emsp;intNum = intNum + 1;<br>
      &emsp;console.log(intNum)<br>
      &emsp;isOdd(intNum)<br>
    }`,
    text2:
    `const intNum = 0;<br>
    function counter() {<br>
      &emsp;intNum = intNum + 1;<br>
      &emsp;console.log(intNum)<br>
      &emsp;isOdd(intNum)<br>
    }`,
  },
  //2 day18 高階関数　のスライド
  {
    text1:
    `function evenArray(arr) {<br>
      &emsp;return arr.map(function(ele){<br>
        &emsp;&emsp;if (ele % 2 === 0) {<br>
          &emsp;&emsp;&emsp;return ele<br>
          &emsp;&emsp;} <br>
          &emsp;})<br>
    }`,
    text2:
    `function evenArray(arr) {<br>
      &emsp;return arr.filter(function(ele){<br>
        &emsp;&emsp;if (ele % 2 === 0) {<br>
          &emsp;&emsp;&emsp;return ele<br>
        &emsp;&emsp;} <br>
      &emsp;})<br>
    }`
  },
    //3 day10 ナイトメア
    {
      text1:
      `function getDepth(obj){<br>
        &emsp;let count = 1;<br>
        &emsp;const res = [];<br>
        &emsp;function disassembly(target) {<br>
          &emsp;&emsp;for(const key in target) {<br>
            &emsp;&emsp;&emsp;let keycount = 0<br>
            &emsp;&emsp;&emsp;if(typeof target[key] === "object") {<br>
              &emsp;&emsp;&emsp;&emsp;count++     <br>   
              &emsp;&emsp;&emsp;&emsp;disassembly(target[key])<br>
            &emsp;&emsp;&emsp;}<br>
          &emsp;&emsp;}<br>
        &emsp;}<br>
        &emsp;for (const Key in obj) {<br>
          &emsp;&emsp;if(typeof obj[Key]  === "object") {<br>
            &emsp;&emsp;&emsp;count++<br>
            &emsp;&emsp;&emsp;disassembly(obj[Key]); <br>  
          &emsp;&emsp;}<br>
          &emsp;&emsp;res.push(count)<br>
        &emsp;}<br>
        &emsp;const max = Math.max(...res)<br>
        &emsp;return max<br>
      }`,
      text2:
      `function getDepth(obj){<br>
        &emsp;let count = 1;<br>
        &emsp;const res = [];<br>
        &emsp;function disassembly(target) {<br>
          &emsp;&emsp;for(const key in target) {<br>
            &emsp;&emsp;&emsp;let keycount = 0<br>
            &emsp;&emsp;&emsp;if(typeof target[key] === "object") {<br>
              &emsp;&emsp;&emsp;&emsp;count++       <br> 
              &emsp;&emsp;&emsp;&emsp;disassembly(target[key])<br>
            &emsp;&emsp;&emsp;}<br>
          &emsp;&emsp;}<br>
        &emsp;}<br>
        &emsp;for (const Key in obj) {<br>
          &emsp;count = 1;<br>
          &emsp;&emsp;if(typeof obj[Key]  === "object") {<br>
            &emsp;&emsp;&emsp;count++<br>
            &emsp;&emsp;&emsp;disassembly(obj[Key]);  <br> 
          &emsp;&emsp;}<br>
          &emsp;&emsp;res.push(count)<br>
        &emsp;}<br>
        &emsp;const max = Math.max(...res)<br>
        &emsp;return max<br>
      }`,
    },
]

//&emsp;

//正解1問目１,2問目２,3問目２
const answerYes = [true, false, false]




//問題文解答文表示
function getQuest() {
    if (subNo < 2) { subNo++ } else { subNo = 0 }
    let strQuestja = "";
    let strQuestDoc = "";
    let strAnswerText1 = "";
    let strAnswerText2 = "";
    console.log("ボタン押せた！");
    //問題文取得
    strQuestja = questTextJa[subNo];
    strQuestDoc = questTextDoc[subNo];
    //問題ドキュメント取得
    let subID = document.getElementById("subid")//　問題n
    let elementJa = document.getElementById("quest-text-ja");//日本語問題文<P>
    let elementDoc = document.getElementById("quest-text-doc");//doc問題文<P>
    //問題文表示
    elementJa.innerText = strQuestja;
    elementDoc.innerHTML = strQuestDoc;
    subID.innerText = `問題${subNo + 1}`

    //解答文取得
    strAnswerText1 = answerTextObj[subNo].text1;
    strAnswerText2 = answerTextObj[subNo].text2;
    //解答ドキュメント取得
    let elementAnswer1 = document.getElementById("answer-text1");
    let elementAnswer2 = document.getElementById("answer-text2");
    //解答文表示
    elementAnswer1.innerHTML = strAnswerText1;
    elementAnswer2.innerHTML = strAnswerText2;


}



//問題文生成ボタンの取得
const getNextButton = document.getElementById("next-button");
getNextButton.addEventListener("click", getQuest);

//正解orハズレ P要素取得
const getAnswerparagraph = document.getElementById("yes");

function answerAction(buttonObj){
    if(buttonObj["target"] === document.getElementById("button1")){
        console.log("hoge");
        if (answerYes[subNo]){
          getAnswerparagraph.innerText = "正解！！"
        } else {
          getAnswerparagraph.innerText = "ハズレ！！"
        }
    } else if(buttonObj["target"] === document.getElementById("button2")) {
        console.log("hogehoge");
        if (!answerYes[subNo]){
          getAnswerparagraph.innerText = "正解！！"
        } else {
          getAnswerparagraph.innerText = "ハズレ！！"
        }
    } else {
      getAnswerparagraph.innerText = ""
    }
    
}



//解答ボタン取得
const getAnswerbutton = document.getElementsByClassName("button");

for(let i = 0; i < getAnswerbutton.length; i++){
    getAnswerbutton[i].addEventListener("click", answerAction);
}
//nextボタン押下で正解消す
getNextButton.addEventListener("click",answerAction);


