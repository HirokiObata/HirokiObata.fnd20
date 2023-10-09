

let subNo = -1; //問題文No


//問題文格納
const questTextId = [
  "day1　応用演習",

  'day18 スライド',

  "day10　ナイトメア"
];


const questTextJa = [
    "counter という関数を宣言します。これが呼び出されたら、常に前回呼び出された時よりも 1 つ大きい数値を console.log で表示しましょう。",

    '与えられた配列から偶数のみの配列を返す関数　evenArray　を宣言してください',

    "関数 getDepth を宣言してください。"
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
    * @param {<Array<any>} arr<br>
    * @returns {Array<any>} 与えられた配列から偶数のみの配列を返す<br>
    */`,
  //3問目
    `
    /**
 * @param {object} obj<br>
 * @returns {number} 引数のオブジェクトの深さ（何層になっているか）を返す。入れ子になったオブジェクトが複数ある場合は、一番深い層の数を返してください。<br>
 */<br>
const nestedObject1 = { a: "A" };  // => 1<br>
const nestedObject2 = { a: "A", b: { c: "C" } };  // => 2<br>
const nestedObject3 = { a: "A", b: { c: "C" }, d: { e: { f: "F" } } };  // => 3<br>`

];
//解答文文
const answerTextObj = [
  //1 day1 応用演習
  {
    text1:
    `<span class = "difference">let</span> num = 0;<br>
    function counter() {<br>
      &emsp;num = num + 1;<br>
      &emsp;console.log(num)<br>
      &emsp;isOdd(num)<br>
    }`,
    text2:
    `<span class = "difference">const</span> num = 0;<br>
    function counter() {<br>
      &emsp;num = num + 1;<br>
      &emsp;console.log(num)<br>
      &emsp;isOdd(num)<br>
    }`,
  },
  //2 day18 高階関数　のスライド
  {
    text1:
    `function evenArray(arr) {<br>
      &emsp;return arr<span class = "difference">.map</span>(function(ele){<br>
        &emsp;&emsp;if (ele % 2 === 0) {<br>
          &emsp;&emsp;&emsp;return ele<br>
          &emsp;&emsp;} <br>
          &emsp;})<br>
    }`,
    text2:
    `function evenArray(arr) {<br>
      &emsp;return arr<span class = "difference">.filter</span>(function(ele){<br>
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
        &emsp;<span class = "difference">let count = 1;</span><br>
        &emsp;const res = [];<br>
        &emsp;##################(target) {<br>
          &emsp;&emsp;for(const key in target) {<br>
            &emsp;&emsp;&emsp;let keycount = 0<br>
            &emsp;&emsp;&emsp;if(######################) {<br>
              &emsp;&emsp;&emsp;&emsp;count++     <br>   
              &emsp;&emsp;&emsp;&emsp;disassembly(target[key])<br>
            &emsp;&emsp;&emsp;}<br>
          &emsp;&emsp;}<br>
        &emsp;}<br>
        &emsp;for (const Key in obj) {<br>
          &emsp;&emsp;if(######################) {<br>
            &emsp;&emsp;&emsp;count++<br>
            &emsp;&emsp;&emsp;#############; <br>  
          &emsp;&emsp;}<br>
          &emsp;&emsp;############<br>
        &emsp;}<br>
        &emsp;const max = #########<br>
        &emsp;return max<br>
      }`,
      text2:
      `function getDepth(obj){<br>
        &emsp;let count = 1;<br>
        &emsp;const res = [];<br>
        &emsp;##################(target) {<br>
          &emsp;&emsp;for(const key in target) {<br>
            &emsp;&emsp;&emsp;let keycount = 0<br>
            &emsp;&emsp;&emsp;if(######################) {<br>
              &emsp;&emsp;&emsp;&emsp;count++       <br> 
              &emsp;&emsp;&emsp;&emsp;disassembly(target[key])<br>
            &emsp;&emsp;&emsp;}<br>
          &emsp;&emsp;}<br>
        &emsp;}<br>
        &emsp;for (const Key in obj) {<br>
          &emsp;<span class = "difference">count = 1;</span><br>
          &emsp;&emsp;if(######################) {<br>
            &emsp;&emsp;&emsp;count++<br>
            &emsp;&emsp;&emsp;#############;  <br> 
          &emsp;&emsp;}<br>
          &emsp;&emsp;############<br>
        &emsp;}<br>
        &emsp;const max = #########<br>
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
    strQuestId = questTextId[subNo]
    strQuestja = questTextJa[subNo];
    strQuestDoc = questTextDoc[subNo];

    //問題文表示
    elementId.innerText = strQuestId;
    elementJa.innerText = strQuestja;
    elementDoc.innerHTML = strQuestDoc;
    subID.innerText = `問題${subNo + 1}`

    //解答文取得
    strAnswerText1 = answerTextObj[subNo].text1;
    strAnswerText2 = answerTextObj[subNo].text2;

    //解答文表示
    elementAnswer1.innerHTML = strAnswerText1;
    elementAnswer2.innerHTML = strAnswerText2;


}

//問題ドキュメント取得
const subID = document.getElementById("subid")//　問題n
const elementId = document.getElementById("quest-text-id");
const elementJa = document.getElementById("quest-text-ja");//日本語問題文<P>
const elementDoc = document.getElementById("quest-text-doc");//doc問題文<P>

//問題文生成ボタンの取得
const getNextButton = document.getElementById("next-button");
getNextButton.addEventListener("click", getQuest);

//正解orハズレ P要素取得
const getAnswerparagraph = document.getElementById("yes");

//解答ドキュメント取得
const elementAnswer1 = document.getElementById("answer-text1");
const elementAnswer2 = document.getElementById("answer-text2");

function answerAction(buttonObj){
  if(buttonObj["target"] === document.getElementById("button1")){
    if (answerYes[subNo]){
      getAnswerparagraph.innerText = "正解！！";
      elementAnswer1.classList.add("correct-answer");
    } else {
      getAnswerparagraph.innerText = "ハズレ！！";
      elementAnswer2.classList.add("correct-answer");
    }
  } else if(buttonObj["target"] === document.getElementById("button2")) {
    if (!answerYes[subNo]){
      getAnswerparagraph.innerText = "正解！！";
      elementAnswer2.classList.add("correct-answer");
    } else {
      getAnswerparagraph.innerText = "ハズレ！！";
      elementAnswer1.classList.add("correct-answer");
    }
  } else {
    getAnswerparagraph.innerText = "";
    elementAnswer1.classList.remove("correct-answer");
    elementAnswer2.classList.remove("correct-answer");
  }  
}


//解答ボタン取得
const getAnswerbutton = document.getElementsByClassName("button");

for(let i = 0; i < getAnswerbutton.length; i++){
  getAnswerbutton[i].addEventListener("click", answerAction);
}
//nextボタン押下で正解消す
getNextButton.addEventListener("click",answerAction);


