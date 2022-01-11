import "./styles.css";
import React, { useState } from "react";

//セレクトボックスにセットしたい項目の配列
//これをmapで処理する
const values = [
  { id: 1, item: "HTML" },
  { id: 2, item: "CSS" },
  { id: 3, item: "JavaScript" }
];

//上のvalueを繰り返し処理を用いてノード？を配列として変数に格納
const SelectItems = values.map((value) => {
  return <option value={value.item}>{value.item}</option>;
});

const InputSelectBox = () => {
  //現在選択されているチェックボックスの状態とそれを管理する関数
  //セレクトボックスでどれが初期値になってほしいかをvaluesのプロパティで指定してる
  //Arrayにobjectが入ってるからvalues[index][prop]という形で指定
  const [selectedValue, setSelectedValue] = useState(values[0]["item"]);

  //onChangeハンドラー配下でselectedValueの値を更新する関数
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <p>
        {/* onChangeでselectedValueの値を描画する場所 */}
        現在選択されている値 :<b>{selectedValue}</b>
      </p>

      {/* onChangeでselectedValueの状態をvalueに入れる */}
      <select value={selectedValue} onChange={handleChange}>
        {SelectItems}
      </select>
    </div>
  );
};

export default function App() {
  return <InputSelectBox />;
}
