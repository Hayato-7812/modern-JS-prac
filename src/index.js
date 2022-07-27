// // const,let などの変数宣言

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数上書き";
// console.log(val1);

// var val1 = "var変数再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// let val2 = "let変数を再宣言";
// console.log(val2);
// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数を上書き";
// console.log(val3);

// const val3 = "const変数を再宣言";
// console.log(val3);

// const person = {
//   name: "Tom",
//   age: 20
// };

// person.name = "Andy";
// console.log(person);
// //person の name　が"Andy" になる

// person.sex = "male";
// console.log(person);
// //person に プロパティに性別が追加

/**
 * アロー関数
 */
//従来

// function func1(str) {
//   return str;
// }
// //もしくは
// const func2 = function func2(str) {
//   return str;
// };
// //func1です

// const func3 = (str) => str

// console.log(func1("func1です"));
// console.log(func2("func2です"));
// console.log(func3("func3です"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(1, 1));

/**分割代入 */
// const myProfile = {
//   name: "Tom",
//   age: 20
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1); //名前はTomです。年齢は20です。

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2); //名前はTomです。年齢は20です。

/**デフォルト値、引数など */
// const sayHello = (name) => console.log(`こんにちは! ${name}さん`);
// sayHello("Tom");
// sayHello();
// // このsayHello関数は引数を与えないと"undifined"として出力される　→ エラーの原因

// //デフォルト値を設定することで解決
// const sayHello2 = (name = "ゲスト") => console.log(`こんにちは! ${name}さん`);
// sayHello2();

/**スプレッド構文 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);
// /**
//  * 実行結果
// > (2) [1, 2]
// 1 2
//  */

// const sumFnc = (num1,num2) => console.log(num1+num2);
// sumFnc(arr1[0],arr1[1]);
// sumFnc(...arr1);
// /**
// * 実行結果
//  3
// */

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2 , ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// /**
//  * 実行結果
//  *
// 1
// 2
// (3) [3, 4, 5]
//  */

// //配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];
// //aarr4の値をコピーした配列を用意
// const arr6 = [...arr4];
// const arr7 = [...arr4,...arr5];
// console.log(arr6);
// console.log(arr7);
// /**
// * 実行結果
// (2) [10, 20]
// (4) [10, 20, 30, 40]
// */

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["塩澤", "明比", "清水"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }
// /**
// * 実行結果
// 塩澤
// 明比
// 清水
//  */

// //mapの中には配列の中身が順番に入ってくる
// const nameArr2 = nameArr.map((name) => name)
// console.log(nameArr2);
// /**
//  * 実行結果
//  *
// (3) ["塩澤", "明比", "清水"]
//  */
// nameArr.map((name,index) => console.log(`${index+1}番目は${name}です`));
// // /**
// // * 実行結果
// // 1番目は塩澤です
// // 2番目は明比です
// // 3番目は清水です
// //  */

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //return に条件式を書く
// });
// console.log(newNumArr);

/**
 * 実行結果
(3) [1, 3, 5]
 */

//  const newNameArr = nameArr.map((name)=>{
//    if(name==="清水"){
//      return name;
//    }else{
//      return  `${name}さん`
//    }
//  })

//  console.log(newNameArr);

/**
 * 三項演算子
 */

//  const num = 1300;
//  console.log(num.toLocaleString())

// const formattedNum =typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const num = 1200;
// const fee = num && "何か設定されました"
// console.log(fee)
/**
 * 実行結果
 * 何か設定されました
 */
