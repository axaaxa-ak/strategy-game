/* Eucronia 1453 era data — generated v3.5 */
window.__ERAS__=window.__ERAS__||{};
window.__ERAS__["1453"]={
scenario:{id:'1453',yr:1453,mo:5,color:'#854d0e',name:'\u6771\u30ed\u30fc\u30de\u5e1d\u56fd\u306e\u7d42\u710e',nameEn:'FALL OF BYZANTIUM 1453',desc:'1453\u5e745\u6708\u3002\u30b3\u30f3\u30b9\u30bf\u30f3\u30c6\u30a3\u30ce\u30fc\u30d7\u30eb\u964d\u843d\u3002',overrides:{Istanbul:'tr',Ankara:'tr',Edirne:'tr',Serbia:'tr',Sofia:'tr',Attica:'tr',Syria:'tr'},relations:[['tr','gr','war']]},
events:[{yr:1453,mo:5,id:'constantinople_falls',sc:'1453',
   title:'\u30b3\u30f3\u30b9\u30bf\u30f3\u30c6\u30a3\u30ce\u30fc\u30d7\u30eb\u999d\u843d',date:'1453\u5e745\u6708',
   body:'\u30e1\u30d5\u30e1\u30c8\u4e8c\u4e16\u7387\u3044\u308b\u30aa\u30b9\u30de\u30f3\u8ecd\u304c\u30b3\u30f3\u30b9\u30bf\u30f3\u30c6\u30a3\u30ce\u30fc\u30d7\u30eb\u3092\u9099\u843d\u3002\u6771\u30ed\u30fc\u30de\u5e1d\u56fd\u6ec5\u4ea1\u3002',
   effects:['\u30aa\u30b9\u30de\u30f3\uff1a+500\u8cc7\u91d1+3\u5730\u57df'],
   apply:function(){if(player==='tr')money+=500;for(var id in S)if(S[id].own==='tr')S[id].u.i+=3;}},
{yr:1453,mo:7,id:'ottoman_advance',sc:'1453',
   title:'\u30aa\u30b9\u30de\u30f3\u6b27\u5dde\u9032\u51fa',date:'1453\u5e747\u6708',
   body:'\u30b3\u30f3\u30b9\u30bf\u30f3\u30c6\u30a3\u30ce\u30fc\u30d7\u30eb\u5fa1\u5931\u5f8c\u3001\u30aa\u30b9\u30de\u30f3\u8ecd\u306f\u30d0\u30eb\u30ab\u30f3\u5e84\u6df1\u3092\u76ee\u6307\u3059\u3002',
   effects:['\u30aa\u30b9\u30de\u30f3\uff1a\u5168\u5730\u57df+2\u6b69\u5175'],
   apply:function(){for(var id in S)if(S[id].own==='tr')S[id].u.i+=2;}},
{yr:1453,mo:10,id:'trebizond',sc:'1453',
   title:'\u30c8\u30ec\u30d3\u30be\u30f3\u5e1d\u56fd\u6ec5\u4ea1',date:'1453\u5e7410\u6708',
   body:'\u30aa\u30b9\u30de\u30f3\u304c\u30b3\u30f3\u30b9\u30bf\u30f3\u30c6\u30a3\u30ce\u30fc\u30d7\u30eb\u999d\u843d\u5f8c\u6700\u5f8c\u306e\u30ed\u30fc\u30de\u5e1d\u56fd\u306e\u6b8b\u5b58\u56fd\u3092\u6ed1\u6ec5\u3002',
   effects:['\u30aa\u30b9\u30de\u30f3\uff1a\u9ed2\u6d77\u5236\u5fa1+200\u8cc7\u91d1'],
   apply:function(){if(player==='tr')money+=200;for(var id in S)if(S[id].own==='tr')S[id].u.i++;}},
{yr:1456,mo:7,id:'belgrade_siege',sc:'1453',
   title:'\u30d9\u30aa\u30b0\u30e9\u30fc\u30c9\u5305\u56f2\u6218',date:'1456\u5e747\u6708',
   body:'\u30e1\u30d5\u30e1\u30c8\u4e8c\u4e16\u304c\u30d9\u30aa\u30b0\u30e9\u30fc\u30c9\u3092\u5305\u56f2\u3002\u30cf\u30f3\u30ac\u30ea\u30fc\u8ecd\u304c\u9632\u885b\u306b\u6210\u529f\u3002',
   effects:['\u30cf\u30f3\u30ac\u30ea\u30fc\u30fb\u30bb\u30eb\u30d3\u30a2\uff1a\u9632\u885b\u52dd\u5229+300\u8cc7\u91d1'],
   apply:function(){if(player==='hu')money+=300;for(var id in S)if(S[id].own==='hu')S[id].u.i+=2;}}],
condEvents:[]
,map:{
  // ── 日本 (足利幕府) ──
  Hokkaido: 'jp', 'Kita-Tohoku': 'jp', 'Minami-Tohoku': 'jp', Kanto: 'jp',
  Koshinetsu: 'jp', Hokuriku: 'jp', Tokai: 'jp', Kansai: 'jp', Shikoku: 'jp', Okinawa: 'jp',
  "San'in": 'jp', "San'yo": 'jp', "Kitakyūshū": 'jp', "Minami_Kyūshū": 'jp',
  // ── 朝鮮 (李氏朝鮮) ──
  Hamgyong: 'jk', Gangwon: 'jk', Gyeonggi: 'jk', Gyeongsang: 'jk',
  'Pyongan-Hwanghae': 'jk', 'Chungcheong-Jeolla': 'jk',
  // ── 中国 (明) ──
  Shanxi: 'cn', Shandong: 'cn', Henan: 'cn', Hubei: 'cn', Hunan: 'cn',
  Jiangsu: 'cn', Jiangxi: 'cn', Zhejiang: 'cn', Anhui: 'cn', Fujian: 'cn',
  Guangdong: 'cn', Guangxi: 'cn', Yunnan: 'cn', Guizhou: 'cn',
  Gansu: 'cn', Qinghai: 'cn', Ningxia: 'cn', Hainan: 'cn',
  Beiping: 'cn', Nanjing: 'cn', Shanghai: 'cn', Wuhan: 'cn', Chongqing: 'cn',
  Chengdu: 'cn', Guangzhou: 'cn', Nanning: 'cn', Jinan: 'cn', Qingdao: 'cn',
  Suzhou: 'cn', Xian: 'cn', Sichuan: 'cn', Huangshan: 'cn', Hebei: 'cn',
  // ── モンゴル/満洲 ──
  Heilungkiang: 'mng', Kirin: 'mng', Liaoning: 'mng', Liaobei: 'mng',
  Jehol: 'mng', 'East_Hebei': 'mng', Sungkiang: 'mng', 'Hebei-Chahar': 'mng',
  Ulaanbaatar: 'mng', Khovd: 'mng', Dornod: 'mng', 'Khövsgöl': 'mng',
  Chahar: 'mng', Suiyuan: 'mng', Xilingol: 'mng', Ordos: 'mng', Alxa: 'mng',
  Pailingmiao: 'mng', Hulunbuir: 'mng', Gobi: 'mng',
  // ── 新疆/チベット ──
  Dzungaria: 'mng', Taklamakan: 'mng', Yarkand: 'mng', Khotan: 'mng', Urumqi: 'mng', Dabancheng: 'mng',
  Chamdo: 'ti', Ngari: 'ti', Shigatse: 'ti', Nagqu: 'ti', Golog: 'ti',
  // ── ロシア (モスクワ大公国) ──
  Moscow: 'su', Yaroslavl: 'su', Ivanovo: 'su', Gorky: 'su', Rzhev: 'su',
  Smolensk: 'su', Bryansk: 'su', Orel: 'su', Kursk: 'su', Voronezh: 'su',
  Saratov: 'su', Penza: 'su', Ryazan: 'su', Tula: 'su', Lipetsk: 'su',
  Tambov: 'su', Millerovo: 'su', Kirov: 'su', Ufa: 'su', Orenburg: 'su',
  Chelyabinsk: 'su', Sverdlovsk: 'su', Perm: 'su', Zlatoust: 'su', Magnitogorsk: 'su',
  Kalinin: 'su', Kaluga: 'su', Engels_Marxstadt: 'su', Belgorod: 'su',
  // ── カザン・ハン国 ──
  Kazan: 'kz',
  // ── ノヴゴロド ──
  Novgorod: 'nv', Leningrad: 'nv', Pskov: 'nv', Nevel: 'nv', Tikhvin: 'nv', Volkhov: 'nv', Olonets: 'nv',
  // ── クリミア・ハン国 / 黄金オルダ残党 ──
  Crimea: 'cr', Astrakhan: 'cr',
  // ── 北ロシア(未開拓) ──
  Murmansk: 'unc', Arkhangelsk: 'unc', Vologda: 'unc', Onega: 'unc', Kargopol: 'unc',
  Kotlas: 'unc', Syktyvkar: 'unc', Pechora: 'unc', Nenets: 'unc',
  // ── シベリア(未開拓) ──
  Tobolsk: 'unc', Tyumen: 'unc', Surgut: 'unc', Omsk: 'unc', Novosibirsk: 'unc',
  Tomsk: 'unc', Krasnoyarsk: 'unc', Yeniseisk: 'unc', Irkutsk: 'unc', Chita: 'unc',
  Yakutsk: 'unc', Kolyma: 'unc', Chukotka: 'unc', Kamchatka: 'unc', Magadan: 'unc',
  // ── ポーランド ──
  Warszawa: 'pl', Lodz: 'pl', Lublin: 'pl', Kielce: 'pl', Gdynia: 'pl', Katowice: 'pl',
  Kraków: 'pl', Lwów: 'pl', Białystok: 'pl', Stanisławów: 'pl', Nowogródek: 'pl',
  Wilejka: 'pl', Polesie: 'pl', Wołyn: 'pl', Płock: 'pl', Poznań: 'pl',
  // ── リトアニア大公国 ──
  Minsk: 'lt', Bobruysk: 'lt', Gomel: 'lt', Vitebsk: 'lt', Mozyr: 'lt',
  Kaunas: 'lt', Klaipeda: 'lt', "Aukštaitija": 'lt', "Žemaitija": 'lt', "Sūduva": 'lt',
  Vilnius: 'lt', Wilno: 'lt',
  Vidzeme: 'lt', Latgale: 'lt', Kurzeme: 'lt', Zemgale: 'lt', "Rīga": 'lt',
  Harju: 'lt', Virumaa: 'lt', Tartu: 'lt', Saaremaa: 'lt', "Pärnu": 'lt',
  Terra_Mariana: 'lt',
  // ── ウクライナ(リトアニア/未開拓) ──
  Kyiv: 'lt', Zhytomyr: 'lt', Vinnytsia: 'lt', Poltava: 'lt', Kharkov: 'unc',
  Stalino: 'unc', Dnipropetrovsk: 'unc', Zaporozhe: 'unc', Kherson: 'unc',
  Mykolaiv: 'unc', Odessa: 'unc', Sumy: 'unc', Cherkasy: 'unc', Chernigov: 'unc',
  Crimea_S: 'cr',
  // ── バルカン(オスマン) ──
  Serbia: 'tr', Croatia: 'hu', Bosnia: 'tr', Herzegovina: 'tr',
  Montenegro: 'tr', Macedonia: 'tr', 'Southern_Serbia': 'tr', Dalmatia: 'hu',
  Kosovo: 'tr', Backa: 'tr', Morava: 'tr', Ljubljana: 'unc',
  'North_Slovenia': 'unc',
  Sofia: 'tr', Plovdiv: 'tr', Burgas: 'tr', Moesia: 'tr', Varna: 'tr',
  // ── ギリシャ(オスマン/ヴェネツィア) ──
  Attica: 'tr', 'Central_Macedonia': 'tr', Epirus: 'tr', Thessaly: 'tr', Crete: 'it',
  Peloponnese: 'tr', 'Aegean_Islands': 'tr', 'Western_Macedonia': 'tr',
  // ── ハンガリー ──
  'North_Transdanubia': 'hu', 'South_Transdanubia': 'hu', 'Northern_Hungary': 'hu',
  'Bács_Kiskun': 'hu', 'Tiszántúl': 'hu',
  // ── トランシルヴァニア/ワラキア ──
  Transylvania: 'hu', 'North_Transylvania': 'hu', Muntenia: 'unc', Oltenia: 'unc',
  Moldova: 'unc', Bessarabia: 'unc', Dobrudja: 'tr', 'Northern_Dobruja': 'tr',
  Bucovina: 'lt', Crisana: 'hu', Banat: 'hu', 'West_Banat': 'hu',
  // ── オスマン帝国 ──
  Istanbul: 'tr', Ankara: 'tr', Bursa: 'tr', Izmir: 'tr', Kastamonu: 'tr',
  Amasya: 'tr', Samsun: 'tr', Trabzon: 'tr', Erzurum: 'tr', Van: 'tr',
  Hakkari: 'aq', Mersin: 'tr', Antalya: 'tr', Afyon: 'tr', Kayseri: 'tr',
  Konya: 'tr', Sivas: 'tr', Malatya: 'tr', Edirne: 'tr', Izmit: 'tr', Thrace: 'tr', Tunceli: 'aq',
  // ── アクコユンル(東アナトリア/メソポタミア) ──
  Diyarbakır: 'aq',
  // ── マムルーク朝(エジプト/シリア) ──
  Cairo: 'eg', Alexandria: 'eg', Sinai: 'eg', 'Eastern_Desert': 'eg', 'Western_Desert': 'eg',
  Suez: 'eg', Aswan: 'eg', Matrouh: 'eg',
  Syria: 'eg', Lebanon: 'eg', Hatay: 'eg', Damascus: 'eg', Aleppo: 'eg',
  // ── アラビア ──
  'Al_Qassim': 'sa', Dammam: 'sa', 'Asir_Makkah': 'sa', Tabuk: 'sa',
  'Rub_al_Khali': 'unc', Madinah: 'eg', Nejd: 'sa', Jawf: 'sa', Najiran: 'sa',
  // ── イラン(ティムール朝/アクコユンル) ──
  Tehran: 'ir', 'East_Azerbaijan': 'aq', 'West_Azerbaijan': 'aq', Gilan: 'ir',
  Khorasan: 'ir', 'North_Khorasan': 'ir', 'South_Khorasan': 'ir', Isfahan: 'ir',
  Fars: 'ir', Kerman: 'ir', Khuzestan: 'ir', Kurdistan: 'aq', Lorestan: 'ir',
  Hamadan: 'ir', Zanjan: 'ir', Semnan: 'ir', Yazd: 'ir', Bushehr: 'ir', Sistan: 'ir', Ilam: 'ir',
  // ── イラク(アクコユンル/マムルーク) ──
  Baghdad: 'aq', Mosul: 'aq', 'Al_Basrah': 'aq', 'Al_Anbar': 'aq', 'Al_Hajara': 'aq',
  // ── アフガニスタン ──
  Kabul: 'af', Qandahar: 'af', Herat: 'ir', Maymanah: 'af', Farah: 'af', Qataghan: 'af',
  // ── 中央アジア(ティムール朝) ──
  Tashkent: 'ir', Ashkhabad: 'ir', Bukhara: 'ir', Khiva: 'ir', Tashauz: 'ir',
  Navoi: 'ir', Stalinabad: 'ir', Alma_Ata: 'mng', Kyzyl_Orda: 'ir', Ayaguz: 'mng',
  Pavlodar: 'mng', Semipalatinsk: 'mng', Karagandy: 'unc', Guryev: 'unc',
  Karakalpakstan: 'unc', Akmolinsk: 'unc', Kostanay: 'unc',
  // ── インド(デリー/ヴィジャヤナガル/バフマニ) ──
  Delhi: 'bi', 'East_Bengal': 'bi', 'West_Bengal': 'bi', Bihar: 'bi', 'United_Provinces': 'bi',
  'Central_Provinces': 'bi', Bombay: 'vg', 'Madras_States': 'vg', 'Northern_Madras': 'vg',
  'Southern_Madras': 'vg', Orissa: 'bi', 'East_Punjab': 'bi', 'West_Punjab': 'bi',
  Sind: 'bi', Rajahsthan: 'bi', Gujarat: 'bi', Hyderabad: 'vg', Mysore: 'vg',
  Gwalior: 'bi', 'Central_India': 'bi', 'Kolhapur_and_Deccan': 'vg', Assam: 'bi',
  Manipur: 'unc', Kashmir: 'bi', 'Northern_Kashmir': 'unc', Delhi_C: 'bi',
  // ── 東南アジア ──
  Siam: 'th', Lanna: 'th', Isan: 'th',
  Sagaing: 'unc', Irrawaddy: 'unc', Mandalay: 'unc', Pegu: 'unc', Arakan: 'unc',
  Magwe: 'unc', Tenasserim: 'unc', 'Federated_Shan_States': 'unc',
  Malaya: 'mj', 'Northern_Malay': 'mj', Singapore: 'mj', Sabah: 'mj',
  Sarawak: 'mj', Brunei: 'mj',
  // ── インドネシア(マジャパヒト) ──
  Java: 'mj', Sumatra: 'mj', Kalimantan: 'mj', 'Interior_Borneo': 'unc', Sulawesi: 'mj',
  'West_Papua': 'unc', 'The_Moluccas': 'mj', 'Aru_Islands': 'unc', 'Lesser_Sunda_Islands': 'mj',
  // ── フィリピン(未開拓) ──
  Manila: 'unc', 'Eastern_Visayas': 'unc', 'Northern_Mindanao': 'unc', 'Western_Visayas': 'unc',
  Davao: 'unc', Bataan: 'unc', Palawan: 'unc', Zamboanga: 'unc', Luzon: 'unc',
  // ── 西・中央アジアの残り ──
  Shaanbei: 'cn', "Yan'an": 'cn',
  // ── 西ヨーロッパ ──
  // イングランド
  'Greater_London_Area': 'uk', Yorkshire: 'uk', 'East_Anglia': 'uk', 'East_Midlands': 'uk',
  'West_Midlands': 'uk', 'South_West_England': 'uk', Wales: 'uk', 'Northern_Ireland': 'unc',
  'Scottish_Highlands': 'unc', Aberdeenshire: 'unc', Lanark: 'unc', Lothian: 'unc',
  Cumbria: 'uk', Lancashire: 'uk', Sussex: 'uk', Gloucestershire: 'uk', Northumberland: 'uk',
  Connaught: 'ie', Leinster: 'ie', Munster: 'ie', Iceland: 'dk',
  // フランス
  'Ile_de_France': 'fr', Normandy: 'fr', Brittany: 'fr', Poitou: 'fr', Auvergne: 'fr',
  Languedoc: 'fr', 'Midi_Pyrenees': 'fr', Limousin: 'fr', Aquitaine: 'fr', Loire: 'fr',
  Bourgogne: 'fr', Champagne: 'fr', 'Franche_Comte': 'fr', 'Alsace_Lorraine': 'de',
  Picardy: 'fr', 'Nord_Pas_de_Calais': 'fr', Rhone: 'fr', Var: 'fr',
  'Bouches_du_Rhone': 'fr', Savoy: 'de', Centre: 'fr', Corsica: 'it', Alpes: 'fr',
  // 神聖ローマ帝国(ドイツ)
  Brandenburg: 'de', Sachsen: 'de', Hannover: 'de', Westfalen: 'de',
  Rhineland: 'de', Moselland: 'de', Hessen: 'de', 'Weser_Ems': 'de', Holstein: 'de',
  Schleswig: 'de', Mecklenburg: 'de', Vorpommern: 'de', Hinterpommern: 'de',
  Oberbayern: 'de', Niederbayern: 'de', Franken: 'de', Baden: 'de',
  Oberschlesien: 'de', Niederschlesien: 'de', 'Ermland_Masuren': 'de', Danzig: 'de',
  Thüringen: 'de', Württemberg: 'de', Königsberg: 'de',
  // オーストリア(ハプスブルク)
  Ostmark: 'de', Tyrol: 'de', Vorarlberg: 'de', Burgenland: 'hu',
  'Steiermark_Kärnten': 'de', 'Oberösterreich': 'de', 'Niederösterreich': 'de',
  // ボヘミア(神聖ローマ)
  Bohemia: 'de', Moravia: 'de', 'North_Sudetenland': 'de', 'South_Sudetenland': 'de',
  'Eastern_Slovakia': 'hu', 'Western_Slovakia': 'hu', 'Southern_Slovakia': 'hu',
  'Podkarpatská_Rus': 'hu', 'Tešínsko': 'de', 'České_Slezsko': 'de',
  // イタリア(教皇庁/ヴェネツィア/ナポリ)
  Piemonte: 'it', Lombardia: 'it', Veneto: 'it', 'Emilia_Romagna': 'it', Toscana: 'it',
  Lazio: 'it', Campania: 'it', Calabria: 'it', Puglia: 'it', Abruzzo: 'it',
  Sardegna: 'it', Sicilia: 'it', Trentino: 'it', 'Alto_Adige': 'it', Litorale: 'it',
  Istria: 'it', Zara: 'it', Dodecanese: 'it',
  // スペイン(カスティーリャ/アラゴン)
  Asturias: 'es', Galicia: 'es', Burgos: 'es', Salamanca: 'es', Valladolid: 'es',
  'Ciudad_Real': 'es', Murcia: 'es', Sevilla: 'es', Valencia: 'es', Navarra: 'es',
  Madrid: 'es', Granada: 'es', Extremadura: 'es', 'Islas_Baleares': 'es', 'Islas_Canarias': 'es',
  León: 'es', 'Western_Aragón': 'es', 'Eastern_Aragón': 'es',
  'País_Vasco': 'es', Cataluña: 'es', Aragón: 'es', Guadalajara: 'es',
  // ポルトガル
  Lisbon: 'pt', Porto: 'pt', Azores: 'pt', Madeira: 'pt', Guarda: 'pt', Santarém: 'pt', Beja: 'pt',
  // スイス
  'Swiss_Plateau': 'ch', 'Eastern_Swiss_Alps': 'ch', 'Western_Swiss_Alps': 'ch', 'Jura_Mountains': 'ch', Ticino: 'ch',
  // スカンディナヴィア(カルマル同盟)
  Dalarna: 'dk', Norrbotten: 'dk', Gotland: 'dk', Ostergotland: 'dk', Jamtland: 'dk', Smaland: 'dk',
  Finnmark: 'dk', Nordland: 'dk', Troms: 'dk', Vestlandet: 'dk',
  Opplandene: 'dk', Oslofjord: 'dk', Telemark: 'dk', Agder: 'dk', Helgeland: 'dk',
  Trøndelag: 'dk', Gävleborg: 'dk', Värmland: 'dk', Östergötland: 'dk',
  Södermanland: 'dk', Västerbotten: 'dk', Skåne: 'dk', Bohuslän: 'dk',
  Jämtland: 'dk', Småland: 'dk', Västergötland: 'dk',
  Jylland: 'dk', Fyn: 'dk', Sjaelland: 'dk', Bornholm: 'dk', 'Faroe_Islands': 'dk', Greenland: 'dk',
  'Sønderjylland': 'dk',
  // フィンランド(スウェーデン=カルマル)
  Lappi: 'dk', Oulu: 'dk', Kuopio: 'dk', Mikkeli: 'dk', Uusimaa: 'dk',
  Kymi: 'dk', Vaasa: 'dk', Turku: 'dk', Karjala: 'dk', Petsamo: 'dk', Salla: 'dk', 'Aland_Islands': 'dk',
  Häme: 'dk', 'Åland_Islands': 'dk',
  // オランダ(ブルゴーニュ公領→ハプスブルク)
  Holland: 'de', Friesland: 'de', Brabant: 'de',
  // ベルギー(ブルゴーニュ)
  Antwerpen: 'de', Wallonie: 'de', Vlaanderen: 'de', Ardennes: 'de',
  // ルクセンブルク
  Luxembourg: 'de',
  // ── 北アフリカ(マリーン朝/ハフス朝/マムルーク) ──
  Casablanca: 'unc', Marrakech: 'unc', Tlemcen: 'unc',
  Tunisia: 'unc', Constantine: 'unc', Algiers: 'unc',
  Tripolitania: 'eg', Cyrenaica: 'eg', Sirte: 'eg', 'Libyan_Desert': 'unc',
  Benghasi: 'unc', Derna: 'unc', 'El_Agheila': 'unc',
  // ── 西アフリカ(マリ帝国) ──
  Mali: 'ml', Senegal: 'ml', Mauritania: 'unc', 'Mauritanian_Desert': 'unc',
  Guinea: 'unc', 'Ivory_Coast': 'unc', Dahomey: 'unc', Togo: 'unc',
  // ── 中央アフリカ(コンゴ) ──
  Kongo: 'kg',
  // ── 東アフリカ(ムタパ/未開拓) ──
  Mutapa: 'mt',
  // ── エチオピア ──
  Shewa: 'et', Hararghe: 'et', Sidamo: 'et', 'Illubabor_Kaffa': 'et',
  Welega: 'et', Begemder: 'et', Gojjam: 'et', Wello: 'et', Afar: 'et', Bale: 'et',
  // ── アフリカ其余(未開拓/植民地前) ──
  Liberia: 'unc',
  // ── 北アメリカ(未開拓/アステカ) ──
  // アステカ(メキシコ)
  Mexico_City: 'az', Sonora: 'unc', Chihuahua: 'unc', Jalisco: 'az', Veracruz: 'az',
  'Baja_California': 'unc', Tamaulipas: 'az', Yucatan: 'unc', Oaxaca: 'az', Chiapas: 'unc',
  Guerrero: 'az', Coahuila: 'unc', Durango: 'unc',
  // 中央アメリカ(マヤ)
  Guatemala: 'unc', Honduras: 'unc', 'El_Salvador': 'unc', Nicaragua: 'unc', 'Costa_Rica': 'unc',
  // カリブ海(未開拓)
  Cuba: 'unc', Haiti: 'unc', 'Dominican_Republic': 'unc',
  // 北米(未開拓)
  'New_England': 'unc', 'New_York': 'unc', 'New_Jersey': 'unc', Pennsylvania: 'unc',
  Maryland: 'unc', Virginia: 'unc', 'West_Virginia': 'unc', 'North_Carolina': 'unc',
  'South_Carolina': 'unc', 'Georgia_US': 'unc', Florida: 'unc', Alabama: 'unc',
  Mississippi: 'unc', Tennessee: 'unc', Kentucky: 'unc', Ohio: 'unc', Indiana: 'unc',
  Michigan: 'unc', Wisconsin: 'unc', Illinois: 'unc', Minnesota: 'unc', Iowa: 'unc',
  Missouri: 'unc', Arkansas: 'unc', Louisiana: 'unc', Texas: 'unc', Oklahoma: 'unc',
  Kansas: 'unc', Nebraska: 'unc', 'South_Dakota': 'unc', 'North_Dakota': 'unc', Montana: 'unc',
  Wyoming: 'unc', Colorado: 'unc', 'New_Mexico': 'unc', Arizona: 'unc', Utah: 'unc',
  Idaho: 'unc', Washington: 'unc', Oregon: 'unc', California: 'unc', Nevada: 'unc',
  Hawaii: 'unc', Alaska: 'unc',
  // カナダ(未開拓)
  'British_Columbia': 'unc', 'Upper_British_Columbia': 'unc', Alberta: 'unc', Saskatchewan: 'unc',
  Manitoba: 'unc', 'Southern_Ontario': 'unc', 'Districts_of_Ontario': 'unc', 'Northern_Ontario': 'unc',
  'Ouest_du_Quebec': 'unc', Saguenay: 'unc', 'Nord_du_Quebec': 'unc', 'Saint_Lawrence': 'unc',
  'Cote_Nord': 'unc', 'Nova_Scotia': 'unc', 'New_Brunswick': 'unc', Newfoundland: 'unc',
  'Yukon_Territory': 'unc', 'Northwest_Territories': 'unc', Nunavut: 'unc', Labrador: 'unc',
  'Vancouver_Island': 'unc', 'Haida_Gwaii': 'unc',
  // ── 南アメリカ(インカ/未開拓) ──
  // インカ(ペルー)
  Lima: 'inc', Loreto: 'unc', Ucayali: 'unc', Arequipa: 'inc',
  La_Paz: 'inc', Paraguay: 'unc', 'Chaco_Boreal': 'unc', Montevideo: 'unc',
  Ecuador: 'inc', Pastaza: 'unc',
  // その他(未開拓)
  'Buenos_Aires': 'unc', Mendoza: 'unc', 'Santa_Fe': 'unc', 'Chaco_Austral': 'unc',
  'Rio_Negro': 'unc', 'Santa_Cruz_AR': 'unc', Formosa: 'unc',
  Antofagasta: 'unc', Atacama: 'unc', Santiago: 'unc',
  Cundinamarca: 'unc', Meta: 'unc', Zulia: 'unc', Miranda: 'unc',
  'La_Paz_B': 'inc', 'Santa_Cruz': 'unc', 'Tacna_Moquegua': 'inc',
  Córdoba: 'unc', Tucumán: 'unc', 'Entre_Ríos': 'unc',
  'Tierra_del_Fuego': 'unc', Bolívar: 'unc',
  Araucanía: 'unc', Aysén: 'unc', 'Arica_y_Tarapacá': 'unc',
  // ブラジル(未開拓)
  'São_Paulo': 'unc', Paraná: 'unc', 'Espírito_Santo': 'unc',
  Goiás: 'unc', Pará: 'unc', Ceará: 'unc',
  Maranhão: 'unc', Amapá: 'unc', Piauí: 'unc',
  Bahia: 'unc', 'Minas_Gerais': 'unc', 'Rio_de_Janeiro': 'unc',
  'Santa_Catarina': 'unc', 'Rio_Grande_do_Sul': 'unc',
  // ── オセアニア(未開拓) ──
  'New_South_Wales': 'unc', Victoria: 'unc', Queensland: 'unc', 'South_Australia': 'unc',
  'Western_Australia': 'unc', 'Northern_Territory': 'unc', Tasmania: 'unc',
  'North_Queensland': 'unc', 'Central_Australia': 'unc', 'Southwest_Queensland': 'unc',
  'North_West_Australia': 'unc', 'South_West_Australia': 'unc',
  Papua: 'unc', 'Kaiser_Wilhelmsland': 'unc', Bismarck: 'unc', Nauru: 'unc', 'Solomon_Islands': 'unc',
  'North_Island': 'unc', 'South_Island': 'unc', Fiji: 'unc',
  // ── 植民地(一部ヴェネツィア/ジェノヴァ/ポルトガル) ──
  Cyprus: 'eg', 'French_Somaliland': 'unc', Malta: 'it', Gibraltar: 'unc',
}
,factions:{
  jk: { n: '朝鮮', en: 'Joseon', sn: 'KOR', c: '#1e6091', r: 'ASIA', d: '李氏朝鮮。世宗大王の治世。', cap: [1130, 175], m: 800, incBonus: 0.8 },
  kz: { n: 'カザン・ハン国', en: 'Kazan', sn: 'KZN', c: '#6ba48f', r: 'EUROPE', d: '金帐汗国から分裂したトルコ系ハン国。', cap: [860, 110], m: 600, incBonus: 0.7 },
  vg: { n: 'ヴィジャヤナガル', en: 'Vijayanagara', sn: 'VJN', c: '#d97706', r: 'ASIA', d: '南インドのヒンドゥー帝国。', cap: [980, 250], m: 1000, incBonus: 1.0 },
  mj: { n: 'マジャパヒト', en: 'Majapahit', sn: 'MJP', c: '#7c3aed', r: 'ASIA', d: 'ジャワ島を中心とする東南アジアの海洋帝国。', cap: [1140, 290], m: 700, incBonus: 0.9 },
  ml: { n: 'マリ帝国', en: 'Mali', sn: 'MLI', c: '#a16207', r: 'AFRICA', d: '西アフリカの黄金帝国。マンサ・ムーサの遺産。', cap: [620, 290], m: 900, incBonus: 1.0 },
  az: { n: 'アステカ', en: 'Aztec', sn: 'AZT', c: '#b45309', r: 'AMERICAS', d: 'メキシコ高原の三國同盟。', cap: [340, 270], m: 800, incBonus: 0.8 },
  inc: { n: 'インカ', en: 'Inca', sn: 'INK', c: '#92400e', r: 'AMERICAS', d: 'アンデスの太陽の帝国。', cap: [360, 380], m: 700, incBonus: 0.8 },
  mng: { n: 'モンゴル', en: 'Mongol', sn: 'MGL', c: '#57534e', r: 'ASIA', d: '北元・オイラト。草原の末裔。', cap: [1020, 140], m: 600, incBonus: 0.7 },
  kg: { n: 'コンゴ王国', en: 'Kongo', sn: 'KGO', c: '#78350f', r: 'AFRICA', d: '中央アフリカの王国。', cap: [720, 320], m: 500, incBonus: 0.7 },
  mt: { n: 'ムタパ', en: 'Mutapa', sn: 'MTP', c: '#92400e', r: 'AFRICA', d: 'ジンバブエの黄金交易国。', cap: [780, 370], m: 400, incBonus: 0.6 },
  cr: { n: 'クリミア・ハン国', en: 'Crimea', sn: 'CRM', c: '#6ba48f', r: 'EUROPE', d: '黒海北岸のトルコ系ハン国。', cap: [870, 130], m: 500, incBonus: 0.7 },
  aq: { n: 'アクコユンル', en: 'Aq Qoyunlu', sn: 'AQQ', c: '#854d0e', r: 'ASIA', d: '白羊トルコマン。東アナトリアの遊牧国家。', cap: [880, 175], m: 700, incBonus: 0.8 },
  nv: { n: 'ノヴゴロド', en: 'Novgorod', sn: 'NVG', c: '#475569', r: 'EUROPE', d: '北方の商業共和国。', cap: [840, 95], m: 500, incBonus: 0.9 },
}
};
