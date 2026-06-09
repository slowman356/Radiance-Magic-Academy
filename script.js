
   
    const FIREBASE_IMAGES = {
      homeHero: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E5%9C%B0%E5%9C%96%2F%E4%B8%BB%E9%A0%81.png?alt=media&token=252626a5-b47a-465d-837c-b5bf38adba82",  
      sharedFallback: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media", 
      codexBackground: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media", 
      map: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E5%9C%B0%E5%9C%96%2F%E5%9C%B0%E5%9C%96.jpg?alt=media&token=19c15693-7cb6-4d92-a556-cb4a8536c503", 
      monsterLogo: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E6%80%AA%E7%89%A9%2F%E6%80%AA%E7%89%A9LOGO.png?alt=media&token=64fdb2fa-a66f-43b3-aebf-77cfc8985b87", 
      raceBackgrounds: {
        1: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E8%83%8C%E6%99%AF%E5%8B%95%E7%95%AB%2F%E6%B5%B7GIF.gif?alt=media&token=75d4a6a7-bf63-49ce-a153-085686457743", 
        2: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E8%83%8C%E6%99%AF%E5%8B%95%E7%95%AB%2F%E5%AD%B8%E9%99%A2GIF.gif?alt=media&token=c90f38db-e599-4af8-a40f-ad9dc2261f0e", 
        3: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E8%83%8C%E6%99%AF%E5%8B%95%E7%95%AB%2F%E6%9C%88%E5%85%89GIF.gif?alt=media&token=90c64467-ac40-4375-9c00-afd45381f326", 
        4: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E8%83%8C%E6%99%AF%E5%8B%95%E7%95%AB%2F%E5%A6%96%E7%B2%BEGIF.gif?alt=media&token=ec93f14b-b6bc-43c1-945e-c0e8cd44f676", 
        5: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E8%83%8C%E6%99%AF%E5%8B%95%E7%95%AB%2F%E5%BE%B7GIF.gif?alt=media&token=4d117f3f-5a76-4074-ab21-91e34287c754", 
        6: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E8%83%8C%E6%99%AF%E5%8B%95%E7%95%AB%2F%E5%90%B8%E8%A1%80GIF.gif?alt=media&token=14f86e7a-a17e-4813-9db0-9d9aba294fb2", 
        7: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E8%83%8C%E6%99%AF%E5%8B%95%E7%95%AB%2F%E7%94%9FGIF.gif?alt=media&token=9278cd9e-b4c0-4b77-b3e3-2d947544daea" 
      },
      raceCharacters: {
        1: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E7%A8%AE%E6%97%8F%2F%E4%BA%BA%E9%AD%9A.png?alt=media&token=f64c6a68-9729-4d96-80bb-807f4bf7b467", 
        2: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E7%A8%AE%E6%97%8F%2F%E4%BA%BA.png?alt=media&token=e77130c9-0e92-4a1d-813b-af434d2da1aa", 
        3: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E7%A8%AE%E6%97%8F%2F%E7%8B%BC%E4%BA%BA.png?alt=media&token=2a7d5803-4627-49da-8943-b48ee34510d7", 
        4: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E7%A8%AE%E6%97%8F%2F%E5%A6%96%E7%B2%BE01.png?alt=media&token=a8c30dbd-b988-4dd6-a83e-4bed915fa26e", 
        5: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E7%A8%AE%E6%97%8F%2F%E5%BE%B7%E9%AD%AF.png?alt=media&token=b4297e8d-37ed-4817-b060-9177b2f9baaf", 
        6: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E7%A8%AE%E6%97%8F%2F%E5%90%B8%E8%A1%80.png?alt=media&token=45600d16-6561-4147-860c-39ff77fb41fa", 
        7: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E7%A8%AE%E6%97%8F%2F%E7%B2%BE%E9%9D%88.png?alt=media&token=c7c0f277-db19-4d9e-b00e-d0d70c1581b7" 
      },
      academyImages: {
        1: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media",  
        2: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media",  
        3: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media",  
        4: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media"  
      },
      courseImages: {
        1: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media", 
        2: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media", 
        3: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media", 
        4: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media" /
      },
      facultyImages: {
        1: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media", 
        2: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media", 
        3: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media", 
        4: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2Fplatinum-arcane-hero.png?alt=media" 
      },
      monsters: {
        1: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E6%80%AA%E7%89%A9%2F%E6%80%AA%E7%89%A901.png?alt=media&token=0a64065b-5c0a-4f03-b190-cbda116ba80e", 
        2: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E6%80%AA%E7%89%A9%2F%E6%80%AA%E7%89%A902.png?alt=media&token=0a36b8ac-357a-4ea1-9868-25346624d1c9", 
        3: "https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%85%89%E8%BC%9D%2F%E6%80%AA%E7%89%A9%2F%E6%80%AA%E7%89%A904.png?alt=media&token=4dd6857c-49eb-4f74-bb27-7ac9d8c7789c" 
      }
    };

    const imageUrl = source => `url("${source}")`;
    const fallbackArt = FIREBASE_IMAGES.sharedFallback;

    const raceBackgrounds = {
      1: `${imageUrl(FIREBASE_IMAGES.raceBackgrounds[1])}, ${imageUrl(fallbackArt)}`,
      2: `${imageUrl(FIREBASE_IMAGES.raceBackgrounds[2])}, ${imageUrl(fallbackArt)}`,
      3: `${imageUrl(FIREBASE_IMAGES.raceBackgrounds[3])}, ${imageUrl(fallbackArt)}`,
      4: `${imageUrl(FIREBASE_IMAGES.raceBackgrounds[4])}, ${imageUrl(fallbackArt)}`,
      5: `${imageUrl(FIREBASE_IMAGES.raceBackgrounds[5])}, ${imageUrl(fallbackArt)}`,
      6: `${imageUrl(FIREBASE_IMAGES.raceBackgrounds[6])}, ${imageUrl(fallbackArt)}`,
      7: `${imageUrl(FIREBASE_IMAGES.raceBackgrounds[7])}, ${imageUrl(fallbackArt)}`
    };

    const preloadedImages = new Map();

    const codexData = {
      race: {
        1: { subtitle: "", title: "𝓜𝓮𝓻𝓯𝓸𝓵𝓴", footer: "", img: FIREBASE_IMAGES.raceCharacters[1], copy: ["人魚與海神族是人類與魚類的混血種族。", "他們是擁有催眠般美貌、性格難以捉摸的水生生物。既迷人又危險，能夠自在穿梭於陸地世界與海洋世界之間。"] },
        2: { subtitle: "", title: "𝓗𝓾𝓶𝓪𝓷", footer: "", img: FIREBASE_IMAGES.raceCharacters[2], copy: ["自古以來，人類便開始察覺到。世界上存在著超越凡人所能理解的力量。他們相信，有一股無形的能量流動於世間,，連接著萬物並塑造著現實。", "他們以知識為徑，以意志為刃，探索未知，改變世界。對魔法師而言,宇宙並非固定不變的結構, 而是由能量編織而成的不断流動的實相，他們透過感知、引導與轉化這些力量，施展魔法，創造奇蹟，甚至改寫命運。"] },
        3: { subtitle: "", title: "𝓦𝓮𝓻𝓮𝔀𝓸𝓵𝓯", footer: "", img: FIREBASE_IMAGES.raceCharacters[3], copy: ["狼族，又稱狼人，是介於人類與狼之間的混血存在。他們擁有在特定條件下化身為狼形野獸的能力，而滿月往往會喚醒潛藏於血脈深處的原始本能。", "即使在人類形態下，狼族依然保留著許多野性的特徵。他們擁有銳利的目光,遠超常人的力量，以及敏銳的感官，能夠察覺一般人無法感知的氣息與危險。狼族與自然有著深厚的聯繫，遵循古老的本能與群體法則生活。他們重視忠誠、榮譽與家族，並將守護族群視為最重要的責任。"] },
        4: { subtitle: "", title: "𝓕𝓪𝓲𝓻𝔂", footer: "", img: FIREBASE_IMAGES.raceCharacters[4], copy: ["妖精是純粹能量的生靈,由古老的魔法種族所誕生,居住於名為「仙境」的平行世界。", "她們以絕世的美貌、强大的力量與光芒聞名,卻也難以捉摸、驕傲自負,有時甚至殘酷無情。"] },
        5: { subtitle: "", title: "𝓓𝓻𝓾𝓲𝓭", footer: "", img: FIREBASE_IMAGES.raceCharacters[5], copy: ["智慧的賢者、魔法的施行者，也是大自然的守護者。他們的力量來自生命與自然元素之間的平衡，以及與靈界深厚的聯繫。被視為人類與大地、森林及遠古靈魂之間的橋樑，傾聽自然的聲音，守護世界原始而神聖的秩序。", "根據不同的修行道路,德魯伊能夠操控自然元素、治癒傷痛、召喚野獸, 與動物和自然精靈進行交流。"] },
        6: { subtitle: "", title: "𝓥𝓪𝓶𝓹𝓲𝓻𝓮", footer: "", img: FIREBASE_IMAGES.raceCharacters[6], copy: ["吸血鬼是曾經身為人類的殘影，捨棄過去的生命後重獲新生，踏入半不朽的存在，開始一段被黑夜、渴望與力量支配的永恆旅程。", "吸血鬼以俊美的外表、强大的力量以及近乎永恆的生命而聞名。他們行走於黑夜之中，在陰影與月光下建立屬於自己的秩序與傳說。"] },
        7: { subtitle: "", title: " 𝓔𝓵𝓯", footer: "", img: FIREBASE_IMAGES.raceCharacters[7], copy: ["精靈是一個古老而長壽的種族，與自然和魔法有著緊密的聯繫。他們以空靈的美貌、遠古的智慧以及強大的魔法感知能力而聞名。", "儘管他們有時看起來冷漠、疏離,甚至顯得高傲，但精靈深深珍惜生命、藝術與知識。他們通常擁有悠久的壽命，因此累積了豐富的經驗和深厚的文化傳統。"] }
      },
      academy: {
        1: { subtitle: "Gryffindor", title: "葛萊芬多", footer: "", img: FIREBASE_IMAGES.academyImages[1], copy: ["學院的核心特質包含勇氣、膽識、氣魄與騎士精神。", "院成員通常充滿熱情、行動力強、富有正義感，且願意為了捍衛信念或保護朋友挺身而出。。"] },
        2: { subtitle: "Hufflepuff", title: "赫夫帕夫", footer: "", img: FIREBASE_IMAGES.academyImages[2], copy: ["學院以忠誠、耐心、勤奮、善良和公平著稱。", "主張不分階級、有教無類，因此該學院匯集了最真誠、包容與腳踏實地的靈魂。"] },
        3: { subtitle: "Slytherin", title: "史萊哲林", footer: "", img: FIREBASE_IMAGES.academyImages[3], copy: ["學院以野心、足智多謀、領導才能與精明著稱。", "著稱。儘管常被刻板印象視為反派溫床，實際上他們重視自我改造 與純種血統驕傲，並具備高度的目標導向與強烈意志力。"] },
        4: { subtitle: "Ravenclaw", title: "雷文克勞", footer: "", img: FIREBASE_IMAGES.academyImages[4], copy: ["學院代表著智慧、創造力與包容力。", "該學院重視學生的博學、機智以及對知識的渴望，喜愛獨立思考、才華洋溢且觀點獨特的怪才。"] }
      },
      course: {
        1: { subtitle: "", title: "符文基礎", footer: "", img: FIREBASE_IMAGES.courseImages[1], copy: ["所有新生都必修的魔法語言課。", "內容包含符文書寫、魔力穩定、低階結界與施法安全。"] },
        2: { subtitle: "", title: "結界防護", footer: "", img: FIREBASE_IMAGES.courseImages[2], copy: ["學習防護陣、警戒結界、淨化屏障與城市級防禦的運作原理。", "這門課會要求學生在壓力下維持穩定施法。"] },
        3: { subtitle: "", title: "元素實作", footer: "", img: FIREBASE_IMAGES.courseImages[3], copy: ["以水、火、風、土與光晶元素為核心。", "訓練精準輸出、環境判斷與團隊配合。"] },
        4: { subtitle: "", title: "魔物研究", footer: "", img: FIREBASE_IMAGES.courseImages[4], copy: ["介紹裂隙魔物、生態弱點、非致命制伏與現場採樣流程。", "課程會將理論典籍與實地觀察結合。"] }
      },
      faculty: {
        1: { subtitle: "", title: "院長", footer: "", img: FIREBASE_IMAGES.facultyImages[1], copy: ["光輝魔法學院院長，擅長白金結界與大型治癒術。", "她負責審核重大儀式，也維持學院與議會之間的平衡。"] },
        2: { subtitle: "", title: "教授01", footer: "", img: FIREBASE_IMAGES.facultyImages[2], copy: ["符文與古代語教師，說話嚴謹但對勤奮學生極有耐心。", "他能從一筆錯誤符線看出學生的魔力習慣。"] },
        3: { subtitle: "", title: "教授02", footer: "", img: FIREBASE_IMAGES.facultyImages[3], copy: ["幻術與潛行課導師，擅長觀察學生真正的動機。", "她的課堂安靜、精準，且永遠不只考驗眼睛。"] },
        4: { subtitle: "", title: "教授03", footer: "", img: FIREBASE_IMAGES.facultyImages[4], copy: ["赤焰決鬥教官，負責戰鬥安全、實戰演練與危機撤離訓練。", "他要求學生尊重對手，也尊重每一次出手的後果。"] }
      }
    };

    const codexConfig = {
      race: { menu: ".race-menu", img: "race-img", art: "race-art", text: "race-text", subtitle: "race-subtitle", title: "race-title", copy: "race-copy", footer: "race-footer" },
      academy: { menu: ".academy-menu", img: "academy-img", art: "academy-art", text: "academy-text", subtitle: "academy-subtitle", title: "academy-title", copy: "academy-copy", footer: "academy-footer" },
      course: { menu: ".course-menu", img: "course-img", art: "course-art", text: "course-text", subtitle: "course-subtitle", title: "course-title", copy: "course-copy", footer: "course-footer" },
      faculty: { menu: ".faculty-menu", img: "faculty-img", art: "faculty-art", text: "faculty-text", subtitle: "faculty-subtitle", title: "faculty-title", copy: "faculty-copy", footer: "faculty-footer" }
    };

    const mapRegions = {
      qilia: {
        name: "齊里亞",
        img: FIREBASE_IMAGES.map,
        desc: "位於高山與森林交界的古山王國，擁有嚴寒山脈、古老礦脈與堅固城寨。此地盛產稀有晶石，也常有守山者與巡林隊出沒。"
      },
      senla: {
        name: "森拉伍德",
        img: FIREBASE_IMAGES.map,
        desc: "巨樹森林國度，自然與生命之燈的聖地。森林深處蘊含古老靈脈，精靈、德魯伊與妖精經常在此進行儀式。"
      },
      nuvilia: {
        name: "努維利亞",
        img: FIREBASE_IMAGES.map,
        desc: "火山與荒漠鍛造出的熔岩國度，地底流動著高熱魔力。這裡適合鍛造、戰鬥訓練與火元素研究，但也最容易出現裂隙異變。"
      },
      alsamar: {
        name: "阿爾薩馬爾",
        img: FIREBASE_IMAGES.map,
        desc: "海洋群島王國，貿易與魔法航路中心。浮島、港灣與燈塔彼此相連，是商會、航海者與情報交換最頻繁的地區。"
      }
    };

    const monsterData = {
      1: {
        name: "怪物01",
        img: FIREBASE_IMAGES.monsters[1],
        area: "範例",
        magic: "範例。",
        warning: "範例。"
      },
      2: {
        name: "怪物02",
        img: FIREBASE_IMAGES.monsters[2],
        area: "範例。",
        magic: "範例。",
        warning: "範例。"
      },
      3: {
        name: "怪物03",
        img: FIREBASE_IMAGES.monsters[3],
        area: "範例。",
        magic: "範例。",
        warning: "範例。"
      }
    };

    function preloadImage(source) {
      if (!source) return Promise.resolve();
      if (preloadedImages.has(source)) return preloadedImages.get(source);

      const image = new Image();
      image.decoding = "async";
      const preload = new Promise(resolve => {
        image.onload = resolve;
        image.onerror = resolve;
      });
      image.src = source;
      preloadedImages.set(source, preload);
      return preload;
    }

    function preloadRaceAssets() {
      Object.values(FIREBASE_IMAGES.raceCharacters).forEach(preloadImage);

      const preloadBackgrounds = () => {
        Object.values(FIREBASE_IMAGES.raceBackgrounds).forEach(preloadImage);
      };

      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(preloadBackgrounds, { timeout: 1400 });
      } else {
        window.setTimeout(preloadBackgrounds, 700);
      }
    }

    function setImageElementSource(image, source, waitForLoad = false) {
      if (!image || !source) return;
      if (image.getAttribute("src") === source || image.src === source) return;

      image.decoding = "async";
      if (!waitForLoad) {
        image.src = source;
        return;
      }

      preloadImage(source).finally(() => {
        image.src = source;
      });
    }

    function setImageSource(id, source, waitForLoad = false) {
      setImageElementSource(document.getElementById(id), source, waitForLoad);
    }

    function applyFirebaseImages() {
      document.documentElement.style.setProperty("--codex-full-bg", imageUrl(FIREBASE_IMAGES.codexBackground));
      document.getElementById("races-page")?.style.setProperty("--race-codex-bg", raceBackgrounds[1]);
      setImageSource("home-hero-img", FIREBASE_IMAGES.homeHero);
      setImageSource("map-main-img", FIREBASE_IMAGES.map);
      setImageSource("map-modal-img", FIREBASE_IMAGES.map);
      setImageSource("monster-modal-img", fallbackArt);
      document.querySelectorAll("[data-monster-card-img]").forEach(image => {
        image.src = FIREBASE_IMAGES.monsterLogo;
      });
    }

    function switchPage(pageId) {
      document.querySelectorAll(".page-content").forEach(page => page.classList.remove("active"));
      document.getElementById(pageId + "-page")?.classList.add("active");

      document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
      if (["story", "map", "monsters"].includes(pageId)) {
        document.getElementById("nav-worldview")?.classList.add("active");
      } else if (["academies", "courses", "faculty"].includes(pageId)) {
        document.getElementById("nav-academies")?.classList.add("active");
      } else {
        document.getElementById("nav-" + pageId)?.classList.add("active");
      }

      document.getElementById("nav-menu")?.classList.remove("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function toggleMobileMenu() {
      document.getElementById("nav-menu")?.classList.toggle("active");
    }

    function showCodex(section, id) {
      const config = codexConfig[section];
      const data = codexData[section]?.[id];
      if (!config || !data) return;

      document.querySelectorAll(config.menu).forEach(button => {
        button.classList.toggle("active", Number(button.dataset.id) === id);
      });

      const art = document.getElementById(config.art);
      const text = document.getElementById(config.text);
      const img = document.getElementById(config.img);
      const subtitle = document.getElementById(config.subtitle);
      const title = document.getElementById(config.title);
      const copy = document.getElementById(config.copy);
      const footer = document.getElementById(config.footer);

      if (section === "race") {
        preloadImage(data.img);
        preloadImage(FIREBASE_IMAGES.raceBackgrounds[id]);
        document.getElementById("races-page")?.style.setProperty("--race-codex-bg", raceBackgrounds[id] || `url("${fallbackArt}")`);
      }

      setImageElementSource(img, data.img, section === "race");
      subtitle.textContent = data.subtitle;
      title.textContent = data.title;
      copy.innerHTML = data.copy.map(paragraph => `<p>${paragraph}</p>`).join("");
      footer.textContent = data.footer;

      art.classList.remove("slide-in");
      text.classList.remove("slide-in");
      void art.offsetWidth;
      art.classList.add("slide-in");
      text.classList.add("slide-in");
    }

    function showMapRegion(regionId) {
      const data = mapRegions[regionId];
      if (!data) return;
      document.getElementById("map-modal-img").src = data.img;
      document.getElementById("map-modal-name").textContent = data.name;
      document.getElementById("map-modal-desc").textContent = data.desc;
      document.getElementById("map-modal").classList.add("active");
    }

    function closeMapModal(event) {
      if (event) event.stopPropagation();
      document.getElementById("map-modal").classList.remove("active");
    }

    function showMonsterDetails(id) {
      const data = monsterData[id];
      if (!data) return;
      document.getElementById("monster-modal-img").src = data.img;
      document.getElementById("monster-modal-name").textContent = data.name;
      document.getElementById("monster-modal-area").textContent = data.area;
      document.getElementById("monster-modal-magic").textContent = data.magic;
      document.getElementById("monster-modal-warning").textContent = data.warning;
      document.getElementById("monster-modal").classList.add("active");
    }

    function closeMonsterModal(event) {
      if (event) event.stopPropagation();
      document.getElementById("monster-modal").classList.remove("active");
    }

    function handleMonsterKey(event, id) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showMonsterDetails(id);
      }
    }

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMapModal();
        closeMonsterModal();
      }
    });

    function showNormTab(tabId) {
      document.querySelectorAll(".norms-menu-item").forEach((item, index) => {
        item.classList.toggle("active", index === tabId - 1);
      });
      document.querySelectorAll(".norm-tab-content").forEach(content => content.classList.remove("active"));
      document.getElementById("norm-tab-" + tabId)?.classList.add("active");
      if (tabId === 3) showCharacterRulePage(characterRulePage);
    }

    let characterRulePage = 1;
    const characterRuleTotal = 7;

    function showCharacterRulePage(page) {
      characterRulePage = Math.min(Math.max(page, 1), characterRuleTotal);
      document.querySelectorAll("[data-character-page]").forEach(panel => {
        panel.classList.toggle("active", Number(panel.dataset.characterPage) === characterRulePage);
      });
      const indicator = document.getElementById("character-rule-indicator");
      const prev = document.getElementById("character-rule-prev");
      const next = document.getElementById("character-rule-next");
      if (indicator) indicator.textContent = `第 ${characterRulePage} / ${characterRuleTotal} 頁`;
      if (prev) prev.disabled = characterRulePage === 1;
      if (next) next.disabled = characterRulePage === characterRuleTotal;
    }

    function changeCharacterRulePage(delta) {
      showCharacterRulePage(characterRulePage + delta);
    }

  const player = document.getElementById("bgm-player");
const disc = document.getElementById("music-disc");
const statusText = document.getElementById("music-status-text");
const vinylIcon = document.getElementById("music-vinyl-icon");

function revealEnterAcademyButton() {
  document.getElementById("academy-loader")?.classList.add("ready");
}

function setMusicPlayingState(isPlaying) {
  if (disc) disc.classList.toggle("playing", isPlaying);
  if (statusText) statusText.textContent = isPlaying ? "音樂播放中" : "音訊已靜音 / 暫停";
  if (vinylIcon) vinylIcon.className = isPlaying ? "fa-solid fa-compact-disc" : "fa-solid fa-record-vinyl";
}

function enterAcademy() {
  const loader = document.getElementById("academy-loader");
  loader?.classList.add("leaving");
  window.setTimeout(() => loader?.remove(), 700);

  if (!player) return;

  player.play().then(() => {
    setMusicPlayingState(true);
  }).catch(() => {
    if (statusText) statusText.textContent = "請再次點擊音樂播放器開啟音樂";
  });
}

function toggleMusic(event) {
  event.stopPropagation();

  if (!player) return;

  if (player.paused) {
    player.play().then(() => {
      setMusicPlayingState(true);
    }).catch(() => {
      if (statusText) statusText.textContent = "請再次點擊音樂播放器開啟音樂";
    });
  } else {
    player.pause();
    setMusicPlayingState(false);
  }
}

function changeVolume(value) {
  if (!player) return;
  player.volume = Math.min(Math.max(Number(value) / 100, 0), 1);
}

function stopPropagation(event) {
  event.stopPropagation();
}

window.addEventListener("DOMContentLoaded", () => {
  if (player) {
    player.volume = 0.15;
  }

  const volumeSlider = document.getElementById("volume-slider");
  if (volumeSlider) {
    volumeSlider.value = 15;
  }

  applyFirebaseImages();
  [FIREBASE_IMAGES.homeHero, FIREBASE_IMAGES.map, FIREBASE_IMAGES.monsterLogo, fallbackArt].forEach(preloadImage);
  preloadRaceAssets();
  showCodex("race", 1);
  showCodex("academy", 1);
  showCodex("course", 1);
  showCodex("faculty", 1);
  showCharacterRulePage(1);

  document.getElementById("loader-fill")?.addEventListener("animationend", revealEnterAcademyButton, { once: true });
  window.setTimeout(revealEnterAcademyButton, 3100);
});
