'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9dfc2dee034722882eb127bbcacdb034",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"version.json": "5c7abf187c8b5daba9224e9c481484b5",
"main.dart.js": "24348b54e02b21e522887b6d3715af80",
"index.html": "47361cec7424762d0d26afd66d07709c",
"/": "47361cec7424762d0d26afd66d07709c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/images/mimi15-min.gif": "bb27da4254dc46b457a1da12962b3d55",
"assets/images/emoj5-min.gif": "a226cfa635bdd948b75961b040f85d27",
"assets/images/emoj1-min.gif": "591573ca5da49ae2a3661e8c11821962",
"assets/images/emoj60-min.gif": "f9ac9f829fec0612762204c46ab935b7",
"assets/images/mimi89-min.gif": "47065cc1dfd5c5f70cf2c50f5e615eda",
"assets/images/mimi69-min.gif": "45947a56e00c950de3f843cfb54100b0",
"assets/images/mimi63-min.gif": "fe6eb3c1b83bd759872914dba9f093de",
"assets/images/emoj48-min.gif": "3057ca87338472e9fec47ae81897b699",
"assets/images/mimi59-min.gif": "6d80b3dfd1c4281cb4c6d8e29f1ee53f",
"assets/images/mimi88-min.gif": "1d7a1dbb2b24aa37f1f8815fc496b596",
"assets/images/mimi80-min.gif": "eb2f6a68ad6a96e9fe532b9407498955",
"assets/images/emoj16-min.gif": "43881ea4e3623d094ead905e9c538111",
"assets/images/emoj31-min.gif": "061d707351dde2d3b59a141f8b775f5b",
"assets/images/emoj76-min.gif": "24f0f7c8b6471aa4925d8b1e7661b43d",
"assets/images/mimi83-min.gif": "45be1dd3f0b600537f428d7d62fcdcd3",
"assets/images/mimi56-min.gif": "f6f7ab36132ed78a5148e87b5b92f759",
"assets/images/emoj70-min.gif": "6136e8ace79e8b0f521f6da2f0754eec",
"assets/images/mimi82-min.gif": "4bf20c7c9921182388df9c261126c62b",
"assets/images/mimi72-min.gif": "0711004e3c34aa2311c74a5beac3b32c",
"assets/images/mimi85-min.gif": "92e3824c4667b565d8665dff1c97a3f3",
"assets/images/mimi76-min.gif": "c059f52050a490ea1da62b431072613e",
"assets/images/emoj52-min.gif": "21f97566e04d43711d0b2721ec2141dd",
"assets/images/mimi26-min.gif": "4618d33a9a07e9c14ab9ff699a5a266b",
"assets/images/emoj69-min.gif": "2d14044cd6b81356976536462b620c4d",
"assets/images/youtube.png": "8170c0b0cddec975b7c2553c20c1ab7e",
"assets/images/mimi21-min.gif": "77a0d6225176942a4ceb6d684477baa1",
"assets/images/mimi92-min.gif": "ea3fc156bf3e511f268588d5110fb6d0",
"assets/images/emoj42-min.gif": "dc85c457f9271099e1b882d920c2fdae",
"assets/images/mimi47-min.gif": "c3af48974724a23078946e50ad3da886",
"assets/images/mimi2-min.gif": "d0cd48250b64eefa8a229954c6ed6fc3",
"assets/images/emoj35-min.gif": "d164d30bc138c18476e646330f7a98bc",
"assets/images/emoj19-min.gif": "70b32d2eb2553cade0f56544d3bd7b6c",
"assets/images/emoj22-min.gif": "910b40e3b765f392aa10e4dbd0a241b2",
"assets/images/mimi68-min.gif": "9d333ebee3df952bf7865d82a2133ac9",
"assets/images/mimi51-min.gif": "8cef2bedb5d442e9e2b97f7ae526a0ae",
"assets/images/mimi35-min.gif": "bad18cdc1684915286dabf5ac0b3dd64",
"assets/images/emoj55-min.gif": "795218ee7138f41260930962df516a70",
"assets/images/emoj28-min.gif": "f1eff516c6b95bf541dc3a4f2a261446",
"assets/images/mimi30-min.gif": "488a584f79c2f41a2d66fd1e9aae10e1",
"assets/images/emoj23-min.gif": "2f211584af5b78f3ecccbd73ab6e03c8",
"assets/images/emoj43-min.gif": "6d7e80420c017b6a3d7057090eef7044",
"assets/images/mimi10-min.gif": "75d1e0538d286e1d7ac14a4de1e6d449",
"assets/images/emoj46-min.gif": "f6afb40041251ca6d69ffef762f0cca1",
"assets/images/mimi93-min.gif": "6ccc825339472faf670f5c3f3d11ca24",
"assets/images/emoj11-min.gif": "bda8ef3dd2667bae8eca6400fc45403f",
"assets/images/mimi37-min.gif": "c31037d7fdcd2d7fd796c8ced673dbab",
"assets/images/mimi22-min.gif": "bcfec7714e2ba04c228526d0fbafaf02",
"assets/images/mimi19-min.gif": "6637cd80313890c3b8a180433593e8a3",
"assets/images/emoj8-min.gif": "377c2a6385e9e5f5b5d46a6ce63bf182",
"assets/images/mimi4-min.gif": "7eb687caf79507d3c7b9824eb5c798a8",
"assets/images/emoj57-min.gif": "d25b6d91f5abb688aa7edb36b55d6076",
"assets/images/emoj44-min.gif": "1231d6602e1d079aaa92fb6135937e2e",
"assets/images/mqueen.jpg": "3edfa3c382d10b51dc1b762f73dfa59e",
"assets/images/emoj37-min.gif": "8047ef9c56d0d863e9c40cabb2e5c4fe",
"assets/images/emoj65-min.gif": "778985043cea6e2047c1fec697620d9e",
"assets/images/mimi20-min.gif": "ab11348757c226442393e2fb5f139e97",
"assets/images/emoj14-min.gif": "4422345ac6fe966be2868df4f3b7e3ed",
"assets/images/mimi1-min.gif": "632f3ecefb232223aaeeb55e2439655c",
"assets/images/emoj20-min.gif": "35d2e3c1ee790932eaa6802949036f56",
"assets/images/emoj66-min.gif": "a1c8b41eb234f7f64f2ca11286e5ba6c",
"assets/images/mimi31-min.gif": "7cefddbbd5162e5a868d0fd11f64fdb3",
"assets/images/mimi39-min.gif": "2ccbb38baaf98ec8c254c749bb865cfb",
"assets/images/mimi75-min.gif": "0b245ff3e12dd6e6fc2de7eb554b853b",
"assets/images/mimi6-min.gif": "7eb687caf79507d3c7b9824eb5c798a8",
"assets/images/mimi55-min.gif": "4330ff0dce6e8bd406ec9b24abbca540",
"assets/images/emoj15-min.gif": "b1d3195a4e58f99047cb479076e2f247",
"assets/images/mimi43-min.gif": "ba4307b3c9db04a86e079a8e0ff65f60",
"assets/images/emoj38-min.gif": "2acfb42e5cd5923290c030dae7682f2e",
"assets/images/emoj32-min.gif": "d567033849a0cf91c9714099bc9ac4fd",
"assets/images/mimi42-min.gif": "f31e131d72d07dbcab62dc777c447139",
"assets/images/emoj34-min.gif": "c2c9e92ef8ffc875250a0d43849ad619",
"assets/images/mimi38-min.gif": "acae229480800322b81ae794a41b9136",
"assets/images/mking.jpg": "791d75f35c6c055e0a56efb58b57eee6",
"assets/images/mimi16-min.gif": "7324c5c6266c05758f64e4aa28d658fb",
"assets/images/mimi87-min.gif": "c554caa71e16f02f7b3f86209c400c7c",
"assets/images/mimi60-min.gif": "4eecddb724cc3d1ed8d15de3f869f065",
"assets/images/emoj62-min.gif": "4d2cd686730d1e43854aff6ebb8dd3b7",
"assets/images/emoj71-min.gif": "33c266ea24db0c4c3790696d3a6336e9",
"assets/images/mimi36-min.gif": "25817345bc9f14dac848776f0c88603b",
"assets/images/emoj50-min.gif": "da2921543992bbcb5a9602412ea86970",
"assets/images/mimi17-min.gif": "a358dc789c689ff5785afd694983f084",
"assets/images/mimi66-min.gif": "9b4184600e945cc35393cb43e0cd8738",
"assets/images/emoj72-min.gif": "29cf94640aa4c6b3724168336785b8b3",
"assets/images/emoj39-min.gif": "1fb6a56b6c2e34626c230b987d28d970",
"assets/images/mimi77-min.gif": "df94f6ba0690c7e2ffbaf3fa95614081",
"assets/images/mimi9-min.gif": "26bf2bed0272e058353e85c01f4e8320",
"assets/images/mimi29-min.gif": "31864c62c6aaafe6edacbd99db4fd59d",
"assets/images/mimi27-min.gif": "32a9268e3c56b017f19774a953909c2e",
"assets/images/mimi32-min.gif": "1932b360c34d8d4af03eafc2facdddf6",
"assets/images/mimi46-min.gif": "1ee72cfbdad606014893ba6d20ced39a",
"assets/images/emoj45-min.gif": "3d6721acf1bb3044917ec5a9f22ee265",
"assets/images/emoj29-min.gif": "f613dffe666b2194a87a1ee3f6e435d2",
"assets/images/mimi91-min.gif": "933cf1030c4a5c70134c5eb95c035bec",
"assets/images/mimi23-min.gif": "d6742532fed4837fd64cef9f3bf01773",
"assets/images/mimi53-min.gif": "26601595e1168f7776fa8839f3c66cf4",
"assets/images/emoj61-min.gif": "67c7da5c2b08c18d0d6a79cdd9ffd04d",
"assets/images/emoj13-min.gif": "f61caa78226de0fac885476250b4ea3e",
"assets/images/mimi73-min.gif": "3265501d41467be7e4cedd41c027ec77",
"assets/images/emoj2-min.gif": "7df2b3dd6b2804bd5ea42160f04500c8",
"assets/images/emoj10-min.gif": "b3f55f240a62c06891948c290af6d9b4",
"assets/images/emoj25-min.gif": "75014a44c2c23cc62a58382bab8b52aa",
"assets/images/emoj6-min.gif": "58050340330669caf8cee83bbda97d42",
"assets/images/mimi71-min.gif": "5a2f1fa73f44a04eb55acce59ee97748",
"assets/images/mimi33-min.gif": "b105c8725ca0c40f9ef56e1aefe99ca2",
"assets/images/mimi52-min.gif": "a4a96c46e1e9225d2207a5f66aef3a16",
"assets/images/emoj75-min.gif": "201a1aec2da6574408229ab8c8585ce3",
"assets/images/emoj21-min.gif": "090bfae68d731340155e3288a083aad7",
"assets/images/emoj17-min.gif": "891883f0fa8bc96db641e1a35f76b241",
"assets/images/emoj33-min.gif": "3a676427102ff77a3dffdbaef03bf0c2",
"assets/images/mimi8-min.gif": "a0e6e18150f74e508397db1805312f25",
"assets/images/frasha.jpg": "43a3c5e0e842c40da78712e5ebf6688d",
"assets/images/mimi94-min.gif": "6b2cc9e072e9edd91f4e6c4ceda9f744",
"assets/images/mimi41-min.gif": "c4a8c365a5493187c47a3b823b20cede",
"assets/images/emoj47-min.gif": "93a097d19169321f8e5ef24484a97225",
"assets/images/mimi79-min.gif": "e36c966d11010e112ddaea4a188e3e90",
"assets/images/princess.jpg": "2b2e703a522edfa95258364352e6039e",
"assets/images/emoj18-min.gif": "ae85d8a1fa2a24380281a0ca5295d1d4",
"assets/images/emoj4-min.gif": "c6d758904fe11d8b3bddf6a70d55c35c",
"assets/images/mimi28-min.gif": "c4ab54cd8fc4c446112e7ffa4b6bdbfd",
"assets/images/wallpaper2you_223415.jpg": "532fd8703cea62b7cbfb16f6056bbfb1",
"assets/images/emoj67-min.gif": "7dd7668e0053340cc5e1245afdc3aed3",
"assets/images/mimi70-min.gif": "112f58d8101116cd16fa2a420c354198",
"assets/images/emoj30-min.gif": "591a7fe98da2c713df3fe9cc82a96d83",
"assets/images/emoj51-min.gif": "ebb0ca872523e6c1210643fbff8dd1ef",
"assets/images/emoj59-min.gif": "8916fab81b81de07af0cf1118c271a27",
"assets/images/emoj3-min.gif": "bb1350606b139fa962c49ec20d40b77d",
"assets/images/pinkback.jpg": "532fd8703cea62b7cbfb16f6056bbfb1",
"assets/images/mimi11-min.gif": "afc10005e320f1aefa550109a5014af1",
"assets/images/emoj26-min.gif": "953a027f89f516ba9c663479194d6b31",
"assets/images/emoj49-min.gif": "40e1a966b1ccd0316599a2dea73c86d3",
"assets/images/mimi90-min.gif": "a3eaecb0188e8ca8d460b7e7952ed749",
"assets/images/prince.png": "1ddb6ec48de04e91bb91830b9d1bf8a8",
"assets/images/emoj56-min.gif": "67efca8082eb6286566baba7f3dac9d1",
"assets/images/emoj73-min.gif": "15fb1326c5fc84d04fb48b307c3238a3",
"assets/images/mimi34-min.gif": "4e01644b6cbb39f78417397aa27fcff7",
"assets/images/emoj58-min.gif": "3325ce3d2fc078c8bb2b6f4f597f559c",
"assets/images/emoj7-min.gif": "2541f30e61ace45159bab41062dab57f",
"assets/images/mimi54-min.gif": "faaf7eb77a190b0eb939d6570ef4a64a",
"assets/images/mimi49-min.gif": "6d80b3dfd1c4281cb4c6d8e29f1ee53f",
"assets/images/emoj24-min.gif": "150f4004061972e1e3fb0825d45875dc",
"assets/images/mimi57-min.gif": "13515bfb746c59c9bd775a3828566827",
"assets/images/emoj54-min.gif": "5b090721b4626309d35a55201796d208",
"assets/images/emoj63-min.gif": "c606c965d4fabb9006ae82758a358333",
"assets/images/mimi58-min.gif": "e7dc531c04d4d3de5784460cdb8f1a58",
"assets/images/mimi13-min.gif": "a651ee09aaa15e8a01ce5ef1c877f7be",
"assets/images/emoj64-min.gif": "37966f800bfccdcf2cf366e1198ef6ff",
"assets/images/mimi95-min.gif": "dda3c36e252e6d674d8202a53b959b0d",
"assets/images/emoj68-min.gif": "bfb96923bddaf712b586d01a12380a3c",
"assets/images/mimi50-min.gif": "999e71b0bd960899d037b953d4a77786",
"assets/images/mimi18-min.gif": "8003c0111d0fcaefde264527fdfe8067",
"assets/images/mimi40-min.gif": "5d24a330da3581eb11cbdcfca9280c21",
"assets/images/mimi81-min.gif": "389cb6f2454673a7424cf1688db17793",
"assets/images/emoj41-min.gif": "07f5433602307ff5f2e947cb56695696",
"assets/images/emoj27-min.gif": "5b9792134e24d6289e64d6ea4c449347",
"assets/images/emoj53-min.gif": "710b19198294c4579de1c85bbc7a2534",
"assets/images/mimi7-min.gif": "0e49db05e196c0565c8daf7552054977",
"assets/images/emoj12-min.gif": "163694e87e9c7ad99d37f30aa38e2bb2",
"assets/images/mimi62-min.gif": "9123759ade6b14e395f0ada9baf416e8",
"assets/images/mimi86-min.gif": "b2c5f474ee7c6acaf0a862a0c8078f83",
"assets/images/mimi44-min.gif": "ad018a6ce9b52926bae0a4e5f81736ff",
"assets/images/img_not_available.jpeg": "1c98fa4a13575d5854365f27b8bf66dc",
"assets/images/mimi25-min.gif": "11819975e9fce49fe179c816b43e6dcd",
"assets/images/mimi78-min.gif": "23ddc9186e7653291b83f4f856a1df52",
"assets/images/emoj36-min.gif": "25a1a0f7282c2598d5631afe9d2b2d49",
"assets/images/emoj40-min.gif": "235ee91b60472c176ce479361254e2be",
"assets/images/emoj9-min.gif": "b3bb08da2960715ef980aabdce0af3c5",
"assets/images/mimi45-min.gif": "ba4307b3c9db04a86e079a8e0ff65f60",
"assets/images/background.jpg": "1cb6c70e576859ebace6400f97c1c63f",
"assets/images/king.jpg": "d180f1361a4bd2c6eb721192d8f1236c",
"assets/images/mimi67-min.gif": "5e113c445aeb166a45408c0b386fe15b",
"assets/images/emoj74-min.gif": "4037fe90693b0bb5a54f26d71bf437d5",
"assets/images/mimi74-min.gif": "fd2744cd84920df5acf820c882c5d6a7",
"assets/images/mimi3-min.gif": "0d05e26f9ceb2ed061b6e77639a5fbda",
"assets/images/mimi65-min.gif": "4b3c9426b324e1157f6abba531c1f984",
"assets/images/mimi5-min.gif": "0d05e26f9ceb2ed061b6e77639a5fbda",
"assets/images/mimi24-min.gif": "6c5281367ae58974f2ecaeae321a6af8",
"assets/images/mimi64-min.gif": "d122881fc0c3ff2eab8eb75a68c765a7",
"assets/images/mimi84-min.gif": "0f5601e59af92f13c17f70129ba6184b",
"assets/images/mimi48-min.gif": "f3553f81115aac57db01091c4ccdbcf2",
"assets/images/mimi61-min.gif": "132be56f518b168c109fe8bc48f2affb",
"assets/images/mimi12-min.gif": "3e1c31cd313fe4b0f4c066a763622c96",
"assets/images/mimi14-min.gif": "e2ee3c92a6c25c9a06838711473bf56a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/packages/gender_picker/assets/images/male.png": "b544146a8e95908f097fe86343f9140b",
"assets/packages/gender_picker/assets/images/other.png": "4b5edfe11e630dbd98a09e04b2e35269",
"assets/packages/gender_picker/assets/images/female.png": "93c67e67ee8656ee2f13b917a815ec0a",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_chess_board/images/brown_board.png": "991f16fa89ceaf98eb79ab8084253b85",
"assets/packages/flutter_chess_board/images/dark_brown_board.png": "c8402900184332a76a0d89d30d231fd3",
"assets/packages/flutter_chess_board/images/green_board.png": "ce9ae5c533ebe93bee85092938f15d19",
"assets/packages/flutter_chess_board/images/orange_board.png": "6b7c6c161c0943a6be5d060392a48416",
"assets/packages/flutter_chess_board/images/chess_board.png": "14e7651575d4b7667b2da76091e957a3",
"assets/packages/flutter_chess_board/images/3.0x/brown_board.png": "b403298eb7e7f28475e372946699bc09",
"assets/packages/flutter_chess_board/images/3.0x/dark_brown_board.png": "b488dc862a67c699d0ed82b3d2bcfd99",
"assets/packages/flutter_chess_board/images/3.0x/green_board.png": "dab3af27f76d27dfa2a38e301f2c6683",
"assets/packages/flutter_chess_board/images/3.0x/orange_board.png": "92e5ba21006b61e945e9da086c98940d",
"assets/packages/flutter_chess_board/images/2.0x/brown_board.png": "a2e272a369e1a8b804820c79e370f266",
"assets/packages/flutter_chess_board/images/2.0x/dark_brown_board.png": "2e7a428512da68aa9fd8dfcc9924c172",
"assets/packages/flutter_chess_board/images/2.0x/green_board.png": "c13a78b15c2c047199e4c5354b38e4d0",
"assets/packages/flutter_chess_board/images/2.0x/orange_board.png": "ad1ce906dd598908c1c68a32d3eacf59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/fluttermoji/attributeicons/beard.svg": "908ac523ce1c704be65e254aa4a04e31",
"assets/packages/fluttermoji/attributeicons/haircolor.svg": "5756eb4c957d15ea7fcc37c1835488ac",
"assets/packages/fluttermoji/attributeicons/hair.svg": "0044380b1c40c321c8a65da5b8e77a0c",
"assets/packages/fluttermoji/attributeicons/outfit.svg": "f36789fda25e7b3746835daf0ec7c0dc",
"assets/packages/fluttermoji/attributeicons/accessories.svg": "0b8839e003a89232edec0e09cb12fa2b",
"assets/packages/fluttermoji/attributeicons/skin.svg": "5f58e197768b8da582fbe8219daf164d",
"assets/packages/fluttermoji/attributeicons/outfitcolor.svg": "e8f931206db9c6ab01a6b4c22c23bf4d",
"assets/packages/fluttermoji/attributeicons/mouth.svg": "af3193d2a407e09fa1156f0f3c30ea86",
"assets/packages/fluttermoji/attributeicons/eyes.svg": "cfbbbeb9cc3b40c6a561166ad07fc56c",
"assets/packages/fluttermoji/attributeicons/beardcolor.svg": "8fa1ec767cfa14371ca15a47126049ba",
"assets/packages/fluttermoji/attributeicons/eyebrow.svg": "cf66096dacdfb6af807cd745fc724e9a",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/AssetManifest.json": "bfc8f43e7ce73613d06c69f53b516f12",
"assets/NOTICES": "724469a732367a3ba25478369407c653",
"assets/avatar/portrait11.jpg": "522b829b882ffdaf95a3dffa24ee752d",
"assets/avatar/f3ree19.jpg": "a7d0bb84ed0bf8343c27e7f4885530fb",
"assets/avatar/love17.jpg": "8a4bd781c6c0979b65098372077ee50a",
"assets/avatar/girls-1.jpg": "36cf3ef6b6eaefdbe5a554a24b40f166",
"assets/avatar/love2.jpg": "3af61a51a84bdc465306aee418b7d28a",
"assets/avatar/animal19.jpg": "ca8d99e2cce99bb69b34c097307d313c",
"assets/avatar/free7.jpg": "2b7c3bc859f705b5d29fc16b27cf023c",
"assets/avatar/animal10.jpg": "9eb9eed176af337a68c29ebe6976d898",
"assets/avatar/f2ree11.jpg": "252fb45028e578f3939adeeb3a8a64dc",
"assets/avatar/girls-3.jpg": "340b462e7a9174a24f56afc2d838a213",
"assets/avatar/anime1.jpg": "74356834a3dec6867b19a3ca5af3d9f4",
"assets/avatar/f3ree3.jpg": "3eaa833cbd503f40ccb28ff72aa4105b",
"assets/avatar/portrait1.jpg": "8a1ccd5cba8c574af697773b5ab63869",
"assets/avatar/f3ree18.jpg": "1924738248fb3094b2337710753cb7f8",
"assets/avatar/f3ree14.jpg": "dcda383f68a4d250ae40343788c54aed",
"assets/avatar/scary12.jpg": "6d0a1d87f7a4983486aa53fcbfeef0dc",
"assets/avatar/free24.jpg": "4dfd7cb60a7499516027a4d1beb8458a",
"assets/avatar/free22.jpg": "ff5f2950e723019009b6193e27e205af",
"assets/avatar/girls-6.jpg": "fc7483bfff85104e57ce9fd66f957e49",
"assets/avatar/f3ree4.jpg": "f55f97e26c850e32d4c715e8e1e59a0c",
"assets/avatar/girls-20.jpg": "692352c20d53af564f3eff40c5153ef8",
"assets/avatar/f2ree17.jpg": "0c13a5732c92ff83ff6e0a025456328f",
"assets/avatar/f3ree2.jpg": "a03e4b459394fbe2d7b14382eeba35ba",
"assets/avatar/free23.jpg": "04db0b3ecfd7cfaa89945322c275ff37",
"assets/avatar/scary9.jpg": "70dde765d5fc152f9237b4b54fe6ba05",
"assets/avatar/scary3.jpg": "639f9cd325576cd66fee84523b70d34f",
"assets/avatar/portrait15.jpg": "b192eb2c7843c353606242ac2bb16fa2",
"assets/avatar/f2ree3.jpg": "1814da98e6992ce19f3b5e43b1280187",
"assets/avatar/girls-12.jpg": "65aa12ad5694281e9f1c175156aacd0c",
"assets/avatar/free6.jpg": "d2f41adaa5a5d931328af2b0d8b917a8",
"assets/avatar/f2ree6.jpg": "4b1725607be5ebc78ac0fe083dcb2e06",
"assets/avatar/scary7.jpg": "bd6d1e3aec6dfc2e959847f1364bc220",
"assets/avatar/f2ree14.jpg": "dd1b6376537c3e5562c8b33c9409659f",
"assets/avatar/free26.jpg": "b75646bdcfabea288b27209e88441725",
"assets/avatar/scary2.jpg": "56b1e910f04a3cd39333f69e18fc0cf4",
"assets/avatar/f2ree10.jpg": "860f1caf69d5929bbc63e61ae9f1bab1",
"assets/avatar/f3ree21.jpg": "0020e209c14aea3f2f3e357ad81a1475",
"assets/avatar/anime9.jpg": "19e7b041d4f61ad1d86119178ad6968d",
"assets/avatar/f2ree2.jpg": "e4361326ca86779561fa2636edb064b3",
"assets/avatar/f3ree1.jpg": "ecd7d2dfdb3e37e5c534d209695a51e1",
"assets/avatar/f2ree16.jpg": "a79c62d01fcd77ed1128a4bbc1376059",
"assets/avatar/free32.jpg": "dad6b419dc3e467ed861c96af54e3a26",
"assets/avatar/animal7.jpg": "b61e98733d31d2bb632248d6d7a9f70e",
"assets/avatar/girls-17.jpg": "700d208008b02e6e011236b04748c007",
"assets/avatar/free42.jpg": "6f94100b793bab56b20dc0eefc7c9ddd",
"assets/avatar/anime8.jpg": "6c7127927c1e2471e140da0dc82e9795",
"assets/avatar/free27.jpg": "1e398472fe1b6d79c5f1fb0fa078ad35",
"assets/avatar/portrait22.jpg": "b0bb920e1828226325adf2e699bca2ee",
"assets/avatar/scary19.jpg": "fb7c6d271518c24b12ada40f4d3a1266",
"assets/avatar/animal20.jpg": "b6c293520be563c9018aee8c8ad07506",
"assets/avatar/anime5.jpg": "fa7828fdecf2f282767f02599b597fff",
"assets/avatar/free49.jpg": "681a472cfeed400425f6136ea919977d",
"assets/avatar/animal11.jpg": "5c89ad2af332b84ef4c0e69249fe56c5",
"assets/avatar/animal9.jpg": "08ae6a2d981d051ef0a2de06726de93c",
"assets/avatar/anime14.jpg": "fbd981353b2a61675f59126db10dd1a6",
"assets/avatar/f3ree5.jpg": "6d8755420065be0d5b28bd2118344d1a",
"assets/avatar/love6.jpg": "54c0252e23926914cbd58875fcd243de",
"assets/avatar/portrait3.jpg": "74542a1e666fe36a91ab24a45a1f93d8",
"assets/avatar/girls-15.jpg": "9679fc8762d616054c9dc7d300a3d09f",
"assets/avatar/love18.jpg": "9f4c3d841cfa2acd4eb9b60e7e1a36a8",
"assets/avatar/animal4.jpg": "c0e331031d9ed11b9da1b431a297ec0a",
"assets/avatar/f2ree12.jpg": "dc86b1a973cd41a9e457101283a66539",
"assets/avatar/scary8.jpg": "807b4927ae7cf7363a088cdc9d62ba0f",
"assets/avatar/f3ree6.jpg": "ea92e2d5d413ac6395fa05c70342e3da",
"assets/avatar/girls-4.jpg": "7dafb59737b7cefaaadabd318402d1a9",
"assets/avatar/scary22.jpg": "28b05042d5ff6c5ca0be2b2b69ae9b0f",
"assets/avatar/f3ree15.jpg": "0f50af648ebd1b43d72955217b8f2231",
"assets/avatar/anime7.jpg": "ba19dafb4fddc3add4cbbf159d7c9e3a",
"assets/avatar/girls-5.jpg": "7eee494eb7ae3670357a8d209f5ebfca",
"assets/avatar/anime18.jpg": "ddd9e92223b7cc9d3ee39be911589c26",
"assets/avatar/portrait4.jpg": "4b6acc815aac952aff6bfb916c72cf11",
"assets/avatar/f2ree9.jpg": "75ccb3313a92a589d958424a2786ecd3",
"assets/avatar/animal18.jpg": "598918c5d1434035ebdded5948d2cc03",
"assets/avatar/free25.jpg": "bc21dc2dd1be782bb6dc5e9fe4672ab2",
"assets/avatar/portrait13.jpg": "273ea3ffb532359364e9282ff466a3ff",
"assets/avatar/free14.jpg": "0ea8a93a02a2f6df137a52b5e5b80436",
"assets/avatar/portrait16.jpg": "90feaee1a71b293c06aa53a4d715d64d",
"assets/avatar/f3ree13.jpg": "25fd720ef690421f150822f15a20e4b9",
"assets/avatar/free16.jpg": "eaf80c20d83b26d0ca866bce012c3797",
"assets/avatar/anime4.jpg": "5a257a022b0540ab109b5469517f2472",
"assets/avatar/free33.jpg": "86576c3ab2b102d378e145d37e901989",
"assets/avatar/f3ree12.jpg": "d5155e93244bc968d7306b27a01a10b7",
"assets/avatar/anime10.jpg": "52d31fa0a6888b884219a3a5ec38d12e",
"assets/avatar/free11.jpg": "a7c79c51efbbb44d64b77ec2aead5e5e",
"assets/avatar/scary17.jpg": "b705f35e7674ff778e5ddc2dc336fddf",
"assets/avatar/girls-7.jpg": "117299994beab7f0bc72e2b24d14b5e9",
"assets/avatar/anime6.jpg": "a187e2881594c63c6b04207cf99a9ed4",
"assets/avatar/animal13.jpg": "7f29b659e11968c3cfb799a87bffd7b2",
"assets/avatar/animal0.jpg": "57b188abf3603d45c4c49319b82bbece",
"assets/avatar/f2ree4.jpg": "515bb515afb2c2c1c1e0788ed2155685",
"assets/avatar/free19.jpg": "c9589c35e5a9720eb1ed1c369495bf6b",
"assets/avatar/anime11.jpg": "24179f8e9e2555e34739baacef5bd9a9",
"assets/avatar/anime16.jpg": "d8587da805543b4e9f14a0d5fdd4d39e",
"assets/avatar/f2ree7.jpg": "215d5bc30c16c1e3fe1459aa91b9318f",
"assets/avatar/free4.jpg": "83dd659961d8627c52e923d139590f77",
"assets/avatar/free9.jpg": "1a1b2fbfc56892244647a0198b59e407",
"assets/avatar/free15.jpg": "be2878804c47d7f67a73f97bbd25b445",
"assets/avatar/girls-18.jpg": "434e4980abf78f5d8152df76a1efb5ef",
"assets/avatar/free29.jpg": "7179735afb3807ff09da4c02331d4e18",
"assets/avatar/love15.jpg": "057ea22c63b1a1a8fbb2ec3d4986370a",
"assets/avatar/free48.jpg": "3862c91633cb942d8b91a94ca19d2e3e",
"assets/avatar/f3ree8.jpg": "1db485105fdab5e3bffbda56bcf44709",
"assets/avatar/love13.jpg": "f41b0ff5b4d1183edf8de1663de145e3",
"assets/avatar/f2ree8.jpg": "8dc49b623dc19769e689f8a11ddd0ba0",
"assets/avatar/free37.jpg": "051ffa26e64d0f5fc6fb9d45dc3dfe7b",
"assets/avatar/anime12.jpg": "427f224240bfc7e03bd1bbd107da3702",
"assets/avatar/free12.jpg": "06bb26b424361b01137587bc2dedb669",
"assets/avatar/animal5.jpg": "4eeed788261fe99ab86765ffb4ab283f",
"assets/avatar/free21.jpg": "d2e7ec0296ea41c2f7ad76d3e085e098",
"assets/avatar/scary1.jpg": "4421fecaab3812cea7bda53170410688",
"assets/avatar/girls-9.jpg": "a32ce7fc8d81314c043c18c27361e8e5",
"assets/avatar/free43.jpg": "01f187c156111d656d78f4a8bd9cfc29",
"assets/avatar/anime15.jpg": "2e93d3433660f84ad36f1664e9ee1445",
"assets/avatar/girls-0.jpg": "89f6cf59befe55b1b4ea7d49d335adce",
"assets/avatar/portrait18.jpg": "88fb2e42f8438cfe17dc1cc1496b8e64",
"assets/avatar/free47.jpg": "7edc89cedc8cccdb61f3a661723a7353",
"assets/avatar/portrait2.jpg": "b09b1a10900d8dab35a8198ced7d147f",
"assets/avatar/free28.jpg": "f6b603167e2feafd89434a1cb6eaaaf3",
"assets/avatar/free41.jpg": "e2eb630a330bb52fada60f307caa5795",
"assets/avatar/free30.jpg": "589f80e8c76ef3ba0d054e54260a4670",
"assets/avatar/portrait5.jpg": "ed98d9aeebe10ad7c845780fee24f256",
"assets/avatar/girls-8.jpg": "db25851654568297957e0c8476b40e17",
"assets/avatar/anime3.jpg": "3f99fb038d42825b2bdd05e49db32706",
"assets/avatar/girls-2.jpg": "1bf0979025a86851e1dfc2ef824d1d7e",
"assets/avatar/portrait6.jpg": "87a8d8b63642812800715413df595149",
"assets/avatar/free44.jpg": "f288dc410b6562417a58d8138e045342",
"assets/avatar/free35.jpg": "8ca5e125db46429ae9c56bd7c83b85df",
"assets/avatar/free45.jpg": "2f3554407f9fa5ff118046c8295323c6",
"assets/avatar/girls-13.jpg": "b13be55fda23d394a54aa5ea7962bc07",
"assets/avatar/girls-14.jpg": "ff3856999d21bd1c226be63a8105d245",
"assets/avatar/portrait17.jpg": "2e01703b6ee0c4829bd30f4aaeecc55f",
"assets/avatar/girls-11.jpg": "78f7bc85633114ea6a2810faf346a2c9",
"assets/avatar/love4.jpg": "a9a05af58351d3a0b4871a3ff03e514f",
"assets/avatar/anime2.jpg": "102fda6f874418f11af896d5c8c7f06c",
"assets/avatar/f3ree20.jpg": "1b77306d569523bcf51cf96597eb7c03",
"assets/avatar/free18.jpg": "b31183181b60534f2ba6e7eb39ddbc03",
"assets/avatar/love7.jpg": "90d1f4d1cd091a9c08df7c280401faa6",
"assets/avatar/free31.jpg": "8b8052adf33294671c936c437ae2df2e",
"assets/avatar/free17.jpg": "4760a564ba633c716edbbf5f368cb13c",
"assets/avatar/scary15.jpg": "a84310d1457a8df02bbf238e49545bc1",
"assets/avatar/scary14.jpg": "5f2719ad3702bf2ae72dc0938c90cc43",
"assets/avatar/love14.jpg": "9c817a14bc2f50e855fa02b1456a56cf",
"assets/avatar/free39.jpg": "2f96ce40bfdf7c9c9dc6df9065c7a1ac",
"assets/avatar/love12.jpg": "c80a02bed72d7c942429c5a8d32c4548",
"assets/avatar/scary6.jpg": "29a3837f441b52660f50646a02af08de",
"assets/avatar/animal8.jpg": "4460861d5bba28f42e4f9212876ed06a",
"assets/avatar/girls-10.jpg": "06333d67d3ddb7320c8776c60779aaef",
"assets/avatar/love11.jpg": "e728ef2d59352f5a47fa7d4f60bbbcb7",
"assets/avatar/animal2.jpg": "fad75b0e1cffacd823b7a3b4ada574a6",
"assets/avatar/scary16.jpg": "0d9a36293bd10caed9f73878d2cbbed9",
"assets/avatar/love8.jpg": "cef25afe0764e0fe53a6b7ad86bbac03",
"assets/avatar/scary23.jpg": "69d1198514dfcdadd918d4458038582f",
"assets/avatar/free5.jpg": "c8f74e5d4a338e9c6f8657be3f36eb8a",
"assets/avatar/f2ree18.jpg": "7996408eb2e15ca73ef4a469b5e9bbab",
"assets/avatar/f2ree20.jpg": "758a0840f3337920fad7f87414b68f73",
"assets/avatar/f2ree13.jpg": "72723cf76e5bdb9f3830444ead71d8fe",
"assets/avatar/free1.jpg": "06ee53826faf6d6a400b4c4b2facd957",
"assets/avatar/f2ree5.jpg": "1c9443e904f1b1e855561d6263fa7a37",
"assets/avatar/scary4.jpg": "ba2edc2bd4624317e9849199c96a3fb7",
"assets/avatar/free10.jpg": "abc6fd51e3dffa2e30b92cd97dc83f56",
"assets/avatar/anime17.jpg": "13f7ae99dece531272dfb07645aefd5b",
"assets/avatar/f2ree19.jpg": "d591d9714d3e6a54b4df6c15ea3c6881",
"assets/avatar/animal12.jpg": "b72e9007db9b695dddb86d7a707808b8",
"assets/avatar/f2ree15.jpg": "f03cd5814b33f9310d3c3df508bdb8f6",
"assets/avatar/f3ree24.jpg": "69292f04ec1a492219cfb1a5b2e1cadf",
"assets/avatar/free13.jpg": "06e4b4c2cb61231a4f60bcffa841f288",
"assets/avatar/love16.jpg": "86e31dc09ce36b244d52ec77ab25e572",
"assets/avatar/portrait7.jpg": "14a9367c513bbaf2515d8c3849a4f448",
"assets/avatar/portrait20.jpg": "a3dc81f111970a60515515d5d5f22ffe",
"assets/avatar/love10.jpg": "c36eb62edf4fb14adc7f42a108fb990e",
"assets/avatar/animal14.jpg": "3bdda9abd84867ffff91411b3893b279",
"assets/avatar/free20.jpg": "d327c777ed82ff8a04698c71e517e727",
"assets/avatar/animal1.jpg": "3dfe4399e3ecf99f9c6099836cb8629e",
"assets/avatar/animal17.jpg": "1ce9aafbf9dd72ca174d78e65d4cba3e",
"assets/avatar/girls-21.jpg": "7c89507a0dd60ce2404116ce39e5b140",
"assets/avatar/love3.jpg": "11da0da068525fb04fe90cc76ba04c6c",
"assets/avatar/scary21.jpg": "2772648ac2cd52d58a908c39df813daa",
"assets/avatar/portrait10.jpg": "22167e64877c92b19aa361c3e7f0bc2a",
"assets/avatar/scary20.jpg": "9fc1281e0bbdff6b98590c5cb39e691d",
"assets/avatar/free3.jpg": "85350dec7beff5ece0bab8ff1d395bd8",
"assets/avatar/animal21.jpg": "d60ddd0a2513ef1c81de14382ebb6514",
"assets/avatar/portrait9.jpg": "2634f38ec049b3443a36c2dfc2c54e6c",
"assets/avatar/love5.jpg": "09bd80309331b2eb2fc9ec2f4a24cf95",
"assets/avatar/scary5.jpg": "0f085b0bd3ac73294e827cb0fe0d79d0",
"assets/avatar/f3ree22.jpg": "cdd58424b5505bc19f6ce1c5ec50e9e2",
"assets/avatar/free46.jpg": "6fe92bb04789cd573b84968ace3d1990",
"assets/avatar/free38.jpg": "ee378d2216394d53d9fefc13dc87670c",
"assets/avatar/girls-19.jpg": "2aa68aa401857c2e43ed669389c9b21c",
"assets/avatar/scary18.jpg": "eadf8f13a064cae68afe33fa81d709d5",
"assets/avatar/f3ree17.jpg": "d74d2ed12410f2b657e97c5dfd4a6d5c",
"assets/avatar/portrait19.jpg": "33b7b0bf5baf2c62634f99c8dcaaf06d",
"assets/avatar/f3ree23.jpg": "a9ca55b67896ebacb8b846d0da249b8e",
"assets/avatar/animal15.jpg": "05bdca39d9bf99fad2a8abb2f5513e01",
"assets/avatar/free2.jpg": "7a6330d50cac119e32839a745deedf34",
"assets/avatar/portrait14.jpg": "a6bce1de69f98063eb1bf04ca94a4e0f",
"assets/avatar/f2ree1.jpg": "b990d2db59cfb1c7b87c5a38c0e79d16",
"assets/avatar/free36.jpg": "20136947663239a7295568a8abd2245e",
"assets/avatar/animal6.jpg": "36529d47a0acaa1ba93421863c7f5ac1",
"assets/avatar/love9.jpg": "3d80ca16e7a19f8ee006b6a285747d15",
"assets/avatar/scary13.jpg": "9b30072d5f55cdbfa6fb0f2cf8d03cad",
"assets/avatar/animal3.jpg": "50cd9f2f68eb27e517fbc2817da2677c",
"assets/avatar/f3ree9.jpg": "669a189add76088930873e1d193672a1",
"assets/avatar/portrait8.jpg": "8429b7fc92e9f6e7e832ec79b42f3815",
"assets/avatar/free40.jpg": "b126f5cd3455eb8b3d1284676188f751",
"assets/avatar/scary10.jpg": "0a96e963f8d60c464e9a56005eebf8d3",
"assets/avatar/f3ree10.jpg": "208760efd4d5307596bfa37531fc6f0f",
"assets/avatar/free34.jpg": "74ad6ffbdde9aac2fd0a3c57b7096854",
"assets/avatar/free8.jpg": "afe413524b514c767ccdc7dc3a5b9130",
"assets/avatar/f3ree11.jpg": "d5a6ec7f73c15cfeae998509bc10e0ac",
"assets/avatar/f3ree7.jpg": "b466ea074b3b74418d4763d889f9af2f",
"assets/avatar/free50.jpg": "39ea192ebe09cf56b9b27f596dca1267",
"assets/avatar/scary11.jpg": "0bfce7272952c103c79ea371b5b931f7",
"assets/avatar/portrait21.jpg": "a9eeb9332ec59e49f45359c66d6e1f37",
"assets/avatar/f3ree16.jpg": "ecf0ccf711b0227719bdb361ac39a7e6",
"assets/avatar/girls-16.jpg": "72acf47925c4ce407a85395fb0698eee",
"assets/avatar/anime13.jpg": "0ffc6bd2a71f741e0ff1f7073c6a0300",
"assets/avatar/animal16.jpg": "77107e897121c10b4c8587ed1912837b",
"assets/avatar/portrait12.jpg": "8bf1bf9ab23d58094d045767c8877fe2",
"assets/avatar/love1.jpg": "8c73ff7e2e9d414ba15ee99b78c2d838",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
