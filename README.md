# mordern-JS-practice

Reactでのフロントエンド開発学習の一環でUdemyの講座を購入し、学習

[モダンJavaScriptの基礎から始める挫折しないためのReact入門](https://www.udemy.com/share/103Myn3@XjUMjw8hiqtEgvTUDswu58o6oG2Yq3jI27vIdWpdW__IkKuMAJB-SLRju3kJv0jc7g==/)

### 学習記録
--- 

### 開発環境

- [codesandbox](https://codesandbox.io/s/angry-lake-vtktc9)
    - hotReloadが効いてるのでリアルタイムでファイルの変種ができる
    - 保存時に自動整形([prettier](https://prettier.io/))
    - githubとの連携はsign in できる

### React,Vueを使うために知っておきたいJavaScriptの基本

---

- まずは概念のお話…
    1. **JavaScriptって何？**
        - 最初はWebブラウザ上で複雑な動きを実装するためのものだった
        - 今は、サーバーサイドや音声認識にも利用できるようになった。
        
        **!!圧倒的にコスパがいい**
        
        - 技術の移り変わりが速いので、モダンなものは習得車が少ないので以外と貴重な人材(その代わり常に勉強しなくてはならない)
        - JavaScriptを使わないWebシステムはない
        
        **??モダンJavaScriptとは？**
        
        - 明確な定義はないが以下あたりを指すことが常
        - React,Vue等の**仮想DOM**を用いるライブラリ/フレームワークを使用
        - **npm/yarn**等のパッケージマネージャーを使用
        - 主に**ES2015(ES6**)以降の記法を使用


        - webpack等の**モジュールバンドラー**を使用
        - Babel等の**トランスパイラ**を使用
- モダンJavaScriptとは
    
    **明確な定義は存在しないが概ね下記の事柄を扱っているものを指す**
    
    - 仮想DOM
        
        ### 仮想DOM
        
        ---
        
        →JavaScriptのオブジェクトで仮想的に作られたDOM 
        
        そもそもDOMって？
        
        →Document Object Model
        
        →HTMLなどを解釈して木構造で表現したもの
        
        [DOMとは](https://www.javadrive.jp/javascript/dom/index1.html#:~:text=DOM%20%E3%81%A8%E3%81%AF%20Document%20Object,%E3%81%8C%E8%A1%8C%E3%82%8F%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82)
        
        従来の方法では表示を変えたい時にDOMを直接編集する必要があった。これによる問題はレンダリングコストといわれる画面を表示する速度が遅くなってしまったり、コードが複雑にいなってしまうなどである。
        
        仮想DOMを導入することで、いきなりDOMを操作せず、JS上で仮想DOMを操作し差分を出してからDOMに反映
        
        <img width="564" alt="%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-26_20 55 11" src="https://user-images.githubusercontent.com/63275973/181145097-36c346b0-dbc5-4152-9699-af821f313406.png">"サンプル")
        
        ReactやVueを利用するときはこれらの動作を意識しないでもいいようになている。(裏でこんなことが起こってるんだなぁ程度の感覚でよし)
        
    - パッケージマネージャー
        
        ### パッケージマネージャー
        
        ---
        
        [npmとは？【フロントエンドパッケージ管理】 - Qiita](https://qiita.com/minato-naka/items/fc74f6c9439ab59cec63)
        
        [yarnとは - Qiita](https://qiita.com/akitaaa/items/c97ff951ca31298f3f24)
        
        <変遷>
        
        JavaScript開発は1つのJSファイルに全ての処理を記述していた。
        
        [課題]
        
        - 処理が複雑になるにつれてコードがカオスに…
        - コードの再利用ができない
            
            **↓**
            
        
        JSファイルをおおきな処理のまとまりごとに分割し、それを読み込んで使うことで、コードの再利用、共通化はできるようににななった。
        
        [課題]
        
        - 読み込み順を意識しないとエラーになる
        - 何がどこから読み込まれたのなのかわからない
            
            <img width="380" alt="%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-26_21 03 55" src="https://user-images.githubusercontent.com/63275973/181145240-88c87003-b202-4482-b50e-aa19a4b147bf.png">

            
            **↓**
            
        
        npm/yarn等のパッケージマネージャーを使用
        
        →内部ではNode.js(サーバサイドで実行されるJavaScript)が動いている
        
        ■ 依存関係を勝手に解決してくれる
        
        ■ import先が明示されている
        
        ■ 世界中で公開されているパッケージをコマンド1つで利用可能
        
        ■ チーム内での共有も簡単に
        
        <img width="437" alt="%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-26_21 07 02" src="https://user-images.githubusercontent.com/63275973/181145276-f7f7ca9f-230a-4ae9-aebb-831ae78a44af.png">

        <img width="552" alt="%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-26_21 08 42" src="https://user-images.githubusercontent.com/63275973/181145286-438da2fe-ac35-4988-90d8-b393412d6c0a.png">

        
        
        <大まかな流れ>
        
        1. NPMから自分の環境にモジュールをインストールしてくる。
        2. package.jsonというファイルに何をインストールしたのかが記録される
        3. package-lock.jsonやyarn.lockが2と同時に作成される。ここにはインストールしたモジュールが裏で利用するモジュールの情報やバージョンの情報が記録される。
        4. node_modulesの中にはモジュールの実体が入っている。
        
        **※node_modulesは非常にサイズが大きいのでgitにはあげない！**
        
    - ES(ECMAScript)
        
        ### ES(ECMAScript)
        
        ---
        
        JavaScriptの標準規格(毎年一回発表)
        
        ES2015で機能追加が多くあり、近代JSの転換期といえる
        
        - let,constを用いた変数宣言
        - アローファンクション
        - クラス構文
        - 分割代入
        - テンプレート文字列
        - スプレッド構文
        - Proimise
        - etc…
    - モジュールバンドラー
        
        ### モジュールバンドラー
        
        ---
        
        開発時に細かく分けていた複数のjs(html/css)ファイルを１つにまとめるためのもの
        
       <img width="550" alt="%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-26_21 23 54" src="https://user-images.githubusercontent.com/63275973/181145299-d091161a-c323-46cd-8f10-7b7d5cb07ffa.png">

        
    - トランスパイラ
        
        ### トランスパイラ
        
        ---
        
        新しいJavaScriptの記法を古い記法に変換してくれる
        
       <img width="540" alt="%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-26_21 25 17" src="https://user-images.githubusercontent.com/63275973/181145320-0dcad03f-7d5b-47ad-894c-4193829c9c61.png">

        
    - SPA
        
        ### SPA(Single Page Application)
        
        ---
        
        モダンJavaScriptはSPAが基本
        
        HTMLは1つのみでJavaScriptで画面を書き換える。
        
        SPAによって
        
        - ページ遷移時の画面が白くなる現象(チラつき)がなくなる
        - 表示速度のアップによるユーザー体験向上
        - コンポーネント分割が容易になることでの開発効率アップ
        
        
        <img width="545" alt="%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-26_21 29 37" src="https://user-images.githubusercontent.com/63275973/181145348-059a2b6a-5731-4fe4-aa95-cc59ee4dd53b.png">

        
        <img width="550" alt="%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-26_21 30 39" src="https://user-images.githubusercontent.com/63275973/181145361-786e29ac-2251-4954-96d4-e59c8ffbd0fa.png">


### モダンJavaScriptの機能に触れる(ES2015~)

---

- 変数宣言(const,let)
    
    ### 変数宣言(const,let)
    
    **<従来>**
    
    - 従来の変数宣言は`var`のみ←上書き,再宣言が可能(制限緩い)
    - プロジェクトが大きくなってくると意図せず変数を書き換えてしまったり、再宣言したりしてしまう可能性がある
    
    ```jsx
    var val1 = "var変数";
    console.log(val1);
    
    val1 = "var変数上書き";
    console.log(val1);
    
    var val1 = "var変数再宣言";
    console.log(val1);
    ```
    ![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-27_8 50 35](https://user-images.githubusercontent.com/63275973/181145372-001bde22-7ce4-423a-9dad-fd7a6a411132.png)

    
    
    **<ES2015~>** 
    
    - let(上書きが可能、再宣言はできない)
    
    ```jsx
    let val2 = "let変数";
    console.log(val2);
    
    val2 = "let変数を上書き";
    console.log(val3);
    //できる
    
    let val2 = "let変数を再宣言";
    console.log(val2);
    //できない
    ```
    ![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-27_8 54 47](https://user-images.githubusercontent.com/63275973/181145389-f8b8a24b-bcba-4ea8-8c15-1ddbdf57f8c8.png)

   
    
    - const(上書きも再宣言もできない)
    
    ```jsx
    const val3 = "const変数";
    console.log(val3);
    
    val3 = "const変数を上書き";
    console.log(val3);
    //できない
    
    const val3 = "const変数を再宣言";
    console.log(val3);
    //できない
    ```
    
    ただし、オブジェクト、配列は変更、追加できる
    
    ```jsx
    const person = {
      name: "Tom",
      age: 20
    };
    
    person.name = "Andy";
    console.log(person);
    //person の name　が"Andy" になる
    
    person.sex = "male";
    console.log(person);
    //person に プロパティにsexが追加
    
    //最終結果
    //{name: "Andy", age: 20, sex: "male"}
    ```
    
- テンプレート文字列
    
    ### テンプレート文字列
    
    ---
    
    [テンプレートリテラル (テンプレート文字列) - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals)
    
- アロー関数
    
    ### アロー関数
    
    ---
    
    ```jsx
    //従来の関数宣言
    function func1(str) {
      return str;
    }
    //もしくは
    const func2 = function func2(str) {
      return str;
    };
    
    //ES2015~
    const func3 = (str) => {
      return str;
    };
    
    const func4 = (num1, num2) => {
      return num1 + num2;
    };
    
    console.log(func1("func1です")); //func1です
    console.log(func2("func2です")); //func2です
    console.log(func3("func3です")); //func3です
    console.log(func4(1, 1)); //2
    ```
    
    **※アロー関数の注意点**
    
    引数１つの場合、括弧を省略することでもできる。
    
    中の処理が1行で終わる(単一式)場合、{}、return を省略できる。
    
    ```jsx
    const func3 = (str) => str
    ```
    
- 分割代入
    
    ### 分割代入
    
    ---
    
    配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入することを可能にする
    
    [分割代入 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    
    ```jsx
    const myProfile = {
      name: "Tom",
      age: 20
    };
    
    const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
    console.log(message1); //名前はTomです。年齢は20です。
    
    /**分割代入 **/
    const { name, age } = myProfile;
    const message2 = `名前は${name}です。年齢は${age}です。`;
    console.log(message2); //名前はTomです。年齢は20です。
    ```
    
- デフォルト値
    
    ### デフォルト値
    
    ---
    
    [デフォルト引数 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)
    
    ```jsx
    /**デフォルト値、引数など */
    const sayHello = (name) => console.log(`こんにちは! ${name}さん`);
    sayHello("Tom");
    sayHello();
    // このsayHello関数は引数を与えないと"undifined"として出力される　→ エラーの原因
    
    //デフォルト値を設定することで解決
    const sayHello2 = (name = "ゲスト") => console.log(`こんにちは! ${name}さん`);
    sayHello2();
    
    /**
    *実行結果：
    こんにちは! Tomさん 
    こんにちは! undefinedさん 
    こんにちは! ゲストさん
    */
    ```
    
- スプレッド構文
    
    ### スプレッド構文
    
    ---
    
    [スプレッド構文 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    
    1. **配列の展開**
    
    ```jsx
    /**スプレッド構文 */
    //配列の展開
    const arr1 = [1,2];
    console.log(arr1);
    console.log(...arr1);
    /**
     * 実行結果
    > (2) [1, 2]
    1 2
     */
    
    const sumFnc = (num1,num2) => console.log(num1+num2);
    sumFnc(arr1[0],arr1[1]);
    sumFnc(...arr1);
    /**
    * 実行結果
     3
    */
    ```
    
    1. **まとめる**
    
    ```jsx
    //まとめる
    const arr2 = [1,2,3,4,5];
    const [num1, num2 , ...arr3] = arr2;
    console.log(num1);
    console.log(num2);
    console.log(arr3);
    
    /**
     * 実行結果
     * 
    1
    2
    (3) [3, 4, 5]
     */
    ```
    
    1. **配列のコピーや結合**
    
    ```jsx
    /配列のコピーや結合
    const arr4 = [10,20]; 
    const arr5 = [30,40];
    //aarr4の値をコピーした配列を用意
    const arr6 = [...arr4]; 
    //arr4とarr5を結合した配列を用意
    const arr7 = [...arr4,...arr5];
    console.log(arr6);
    console.log(arr7);
    /**
    * 実行結果
    (2) [10, 20]
    (4) [10, 20, 30, 40]
    */
    ```
    
    !! コピーする際にスプレッド構文を使うことの意義
    
    コピーする際に
    
    ```bash
    arr8 = arr4
    ```
    
    としてしまうを、参照が引き継がれてしまうので、arr8を書き換えるとarr4も書き変わってしまう。
    
    [【Java】参照渡しとは？参照型の変数を代入した時の挙動を押さえよう！《講義2日目》](https://freelance-jak.com/technology/java/1177/)
    
- mapやfilterを使った配列の処理
    
    ### mapやfilterを使った配列の処理
    
    ---
    
    1. **map** 
        
        ---
        
    
    与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる**新しい配列を生成**
    
    [Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    
    ```jsx
    const nameArr = ["塩澤", "明比", "清水"];
    for (let i = 0; i < nameArr.length; i++) {
      console.log(nameArr[i]);
    }
    /**
    * 実行結果
    塩澤 
    明比 
    清水 
     */
    
    //mapの中には配列の中身が順番に入ってくる
    const nameArr2 = nameArr.map((name) => name)
    console.log(nameArr2);
    /**
     * 実行結果
     * 
    (3) ["塩澤", "明比", "清水"]
     */
    
    nameArr.map((name) => console.log(name));
    /**
    * 実行結果
    塩澤 
    明比 
    清水 
     */
    
    //引数の2番目にはindexがくるので以下のような書き方もできる
    nameArr.map((name,index) => console.log(`${index+1}番目は${name}です`));
    // /**
    // * 実行結果
    // 1番目は塩澤です 
    // 2番目は明比です 
    // 3番目は清水です 
    //  */
    ```
    
    1. **filter**
    
    ---
    
    与えられた関数によって実装されたテストに合格したすべての配列からなる**新しい配列を生成**
    
    [Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    
    ```jsx
    const numArr = [1, 2, 3, 4, 5];
    const newNumArr = numArr.filter((num) => {
      return num % 2 === 1; //return に条件式を書く
    });
    console.log(newNumArr);
    
    /**
     * 実行結果
    (3) [1, 3, 5]
     */
    ```
    
- 三項演算子(ES2015からというわけではないがReactで重宝されるので)
    
    ### 三項演算子
    
    ---
    
    **条件 (三項) 演算子**は JavaScript では唯一の、3 つのオペランドをとる演算子です。条件に続いて疑問符 (`?`)、そして条件が[真値](https://developer.mozilla.org/ja/docs/Glossary/Truthy)であった場合に実行する式、コロン (`:`) が続き、条件が[偽値](https://developer.mozilla.org/ja/docs/Glossary/Falsy)であった場合に実行する式が最後に来ます。この演算子は、 `[if](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/if...else)` 文の代替としてよく用いられます。
    
    [条件 (三項) 演算子 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
    
    ```jsx
    function getFee(flag) {
      return (flag ? 'true' : 'false');
    }
    
    console.log(getFee(true));
    // output: "true"
    
    console.log(getFee(false));
    // output: "false"
    
    console.log(getFee(null));
    // output: "false"
    ```
    
- 論理演算子の本当の意味を知ろう(reactのJSXで使う)
    
    ### 論理演算子の本当の意味を知ろう
    
    ---
    
    厳密には`&&`や`||`は「かつ」や「または」という意味ではない。
    
    `&&`
    
    **左側がtrueなら右側が返される。**
    
    **右側がfalseなら左側が返される。**
    
    ```jsx
    const num = 1200;
    const fee = num && "何か設定されました"
    console.log(fee)
    /**
     * 実行結果
     * 何か設定されました
     */
    
    const num = null;
    const fee = num && "何か設定されました"
    console.log(fee)
    /**
     * 実行結果
     * null
     */
    ```
    
    `||`
    
    **左側がtrueだったら左側が返される。**
    
    **左側がfalseだったら右側を返す。**
    
    ```jsx
    const num = null;
    const fee = num || "金額未設定"
    console.log(fee)
    /**
     * 実行結果
     * 金額未設定　(num が false判定されたので)
     */
    ```
    
    加えて前々から気にななっていた比較演算子を調べた(付録)
    
    ![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2022-07-27_10 41 40](https://user-images.githubusercontent.com/63275973/181145408-b234a426-8047-4432-8677-81f1751f14b0.png)


    
