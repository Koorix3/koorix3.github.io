/// <reference path="sorter.ts"/>

let yuyuyuList: Character[] = [
  { name: 'Yuuki Yuuna', imageName: "images/characters/yuuki_yuuna.png", seriesTitle: "Yuuki Yuuna Wa Yuusha De Aru" },
  { name: 'Tougou Mimori', imageName: "images/characters/tougou_mimori.png", seriesTitle: "Yuuki Yuuna Wa Yuusha De Aru" },
  { name: 'Inubouzaki Fuu', imageName: "images/characters/inubouzaki_fuu.png", seriesTitle: "Yuuki Yuuna Wa Yuusha De Aru" },
  { name: 'Inubouzaki Itsuki', imageName: "images/characters/inubouzaki_itsuki.png", seriesTitle: "Yuuki Yuuna Wa Yuusha De Aru" },
  { name: 'Miyoshi Karin', imageName: "images/characters/miyoshi_karin.png", seriesTitle: "Yuuki Yuuna Wa Yuusha De Aru" }
];

let wasuyuList: Character[] = [
  { name: 'Washio Sumi', imageName: "images/characters/washio_sumi.png", seriesTitle: "Washio Sumi Wa Yuusha De Aru" },
  { name: 'Minowa Gin', imageName: "images/characters/minowa_gin.png", seriesTitle: "Washio Sumi Wa Yuusha De Aru" },
  { name: 'Nogi Sonoko', imageName: "images/characters/nogi_sonoko.png", seriesTitle: "Washio Sumi Wa Yuusha De Aru" },
  { name: 'Aki-sensei', imageName: "images/characters/aki_sensei.png", seriesTitle: "Washio Sumi Wa Yuusha De Aru" }
];

let nowayuList: Character[] = [
  { name: 'Nogi Wakaba', imageName: "images/characters/nogi_wakaba.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Takashima Yuuna', imageName: "images/characters/takashima_yuuna.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Koori Chikage', imageName: "images/characters/koori_chikage.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Doi Tamako', imageName: "images/characters/doi_tamako.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Iyojima Anzu', imageName: "images/characters/iyojima_anzu.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Uesato Hinata', imageName: "images/characters/uesato_hinata.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Shiratori Utano', imageName: "images/characters/shiratori_utano.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Fujimori Mito', imageName: "images/characters/fujimori_mito.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
];

let kumeyuList: Character[] = [
  { name: 'Kusunoki Mebuki', imageName: "images/characters/kusunoki_mebuki.png", seriesTitle: "Kusunoki Mebuki Wa Yuusha De Aru" },
  { name: 'Kagajou Suzume', imageName: "images/characters/kagajou_suzume.png", seriesTitle: "Kusunoki Mebuki Wa Yuusha De Aru" },
  { name: 'Miroku Yumiko', imageName: "images/characters/miroku_yumiko.png", seriesTitle: "Kusunoki Mebuki Wa Yuusha De Aru" },
  { name: 'Yamabushi Shizuku', imageName: "images/characters/yamabushi_shizuku.png", seriesTitle: "Kusunoki Mebuki Wa Yuusha De Aru" },
  { name: 'Kokodo Aya', imageName: "images/characters/kokodo_aya.png", seriesTitle: "Kusunoki Mebuki Wa Yuusha De Aru" }
];

let yuyuyuiList: Character[] = [
  { name: 'Akihara Sekka', imageName: "images/characters/akihara_sekka.png", seriesTitle: "YuYuYu: Hanayui No Kirameki" },
  { name: 'Kohagura Natsume', imageName: "images/characters/kohagura_natsume.png", seriesTitle: "YuYuYu: Hanayui No Kirameki" },
]

let characterList = yuyuyuList.concat([]/*wasuyuList, nowayuList, kumeyuList, yuyuyuiList*/);

let sorter = new Sorter(characterList, $('#voting-container'));

