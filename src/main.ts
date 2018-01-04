/// <reference path="sorter.ts"/>

let yuyuyuList: Character[] = [
  { name: 'Yuuki Yuuna', imageName: "images/yuuki_yuuna.png", seriesTitle: "Yuuki Yuuna Wa Yuusha De Aru" },
  { name: 'Tougou Mimori', imageName: "images/tougou_mimori.png", seriesTitle: "Yuuki Yuuna Wa Yuusha De Aru" },
  { name: 'Inubouzaki Fuu', imageName: "images/inubouzaki_fuu.png", seriesTitle: "Yuuki Yuuna Wa Yuusha De Aru" },
  { name: 'Inubouzaki Itsuki', imageName: "images/inubouzaki_itsuki.png", seriesTitle: "Yuuki Yuuna Wa Yuusha De Aru" },
  { name: 'Miyoshi Karin', imageName: "images/miyoshi_karin.png", seriesTitle: "Yuuki Yuuna Wa Yuusha De Aru" }
];

let wasuyuList: Character[] = [
  { name: 'Washio Sumi', imageName: "images/washio_sumi.png", seriesTitle: "Washio Sumi Wa Yuusha De Aru" },
  { name: 'Minowa Gin', imageName: "images/minowa_gin.png", seriesTitle: "Washio Sumi Wa Yuusha De Aru" },
  { name: 'Nogi Sonoko', imageName: "images/nogi_sonoko.png", seriesTitle: "Washio Sumi Wa Yuusha De Aru" }
];

let nowayuList: Character[] = [
  { name: 'Nogi Wakaba', imageName: "images/nogi_wakaba.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Takashima Yuuna', imageName: "images/takashima_yuuna.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Koori Chikage', imageName: "images/koori_chikage.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Doi Tamako', imageName: "images/doi_tamako.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Iyojima Anzu', imageName: "images/iyojima_anzu.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" },
  { name: 'Uesato Hinata', imageName: "images/uesato_hinata.png", seriesTitle: "Nogi Wakaba Wa Yuusha De Aru" }
];

let characterList = yuyuyuList.concat(wasuyuList, nowayuList);

let sorter = new Sorter(characterList, $('#voting-container'));

