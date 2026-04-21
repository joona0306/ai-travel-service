(function () {
 "use strict";

 var STORAGE_KEY = "roamai_mvp_v1";

 var TRIPS = [
  {
   id: "tokyo-1",
   title: "네온사인 불빛과 고대 사원",
   location: "일본, 도쿄",
   image: "assets/images/japan.png",
   days: 7,
   budget: "200,000원",
   summary: "도시와 전통을 함께 즐기는 균형형 코스",
   reason: 'AI 추천: 빠른 템포의 도시 탐험과 깊이 있는 역사적 배경이 어우러져 "도시 & 문화" 취향에 딱 맞습니다.',
   intro:
    "초현대적인 도시 경관과 고요한 전통 정원의 완벽한 조화를 경험해보세요. 시부야 같은 번화가의 역동적인 에너지와 신사와 정원의 차분한 공간을 함께 즐길 수 있는 여행입니다.",
   itinerary: {
    1: {
     title: "도착 & 도시 탐험",
     items: [
      { time: "10:00 AM", icon: "assets/icons/coffee-sm.png", title: "호텔 체크인", desc: "짐을 풀고 휴식을 취하세요." },
      { time: "12:30 PM", icon: "assets/icons/food.png", title: "현지 길거리 음식 투어", desc: "현지 전문가의 가이드를 받으며 현지 별미를 맛보세요." },
      { time: "04:00 PM", icon: "assets/icons/city.png", title: "역사적인 도심 산책", desc: "구시가지와 주요 랜드마크를 둘러보세요." }
     ]
    },
    2: {
     title: "전통과 예술 감상",
     items: [
      { time: "09:30 AM", icon: "assets/icons/history-art.png", title: "전통 사원 방문", desc: "고즈넉한 분위기의 사원과 정원을 둘러봅니다." },
      { time: "01:00 PM", icon: "assets/icons/food.png", title: "현지 점심 코스", desc: "도쿄 대표 음식으로 점심을 즐깁니다." },
      { time: "03:30 PM", icon: "assets/icons/camera-sm.png", title: "아트 거리 산책", desc: "갤러리와 감성 상점을 천천히 탐방합니다." }
     ]
    },
    3: {
     title: "자유 일정 & 쇼핑",
     items: [
      { time: "10:30 AM", icon: "assets/icons/city.png", title: "감성 동네 탐방", desc: "취향에 맞는 거리와 카페를 자유롭게 둘러봅니다." },
      { time: "01:30 PM", icon: "assets/icons/food.png", title: "미식 투어", desc: "SNS 인기 맛집을 중심으로 식도락을 즐깁니다." },
      { time: "05:00 PM", icon: "assets/icons/doc.png", title: "귀국 준비", desc: "쇼핑 마무리 후 숙소에서 귀국 준비를 합니다." }
     ]
    }
   }
  },
  {
   id: "ubud-1",
   title: "고요하고 영적인 휴식",
   location: "인도네시아, 우붓",
   image: "assets/images/indonesia.png",
   days: 5,
   budget: "1,300,000원",
   summary: "웰니스와 여유에 집중한 힐링 일정",
   reason: "AI 추천: 원하시는 여유로운 분위기에 완벽합니다. 웰니스 휴양지와 평화로운 환경이 풍부합니다.",
   intro: "자연과 전통문화가 어우러진 우붓에서 몸과 마음을 회복하는 여행입니다. 요가, 스파, 로컬 푸드와 함께 느린 리듬으로 하루를 채워보세요.",
   itinerary: {
    1: {
     title: "체크인 & 웰컴 휴식",
     items: [
      { time: "11:00 AM", icon: "assets/icons/coffee-sm.png", title: "리조트 체크인", desc: "정글 뷰 숙소에서 여유롭게 짐을 풉니다." },
      { time: "02:00 PM", icon: "assets/icons/sun.png", title: "웰컴 스파", desc: "비행 피로를 풀어주는 마사지 프로그램." },
      { time: "06:00 PM", icon: "assets/icons/food.png", title: "발리 디너", desc: "현지 재료 중심의 건강식 코스를 즐깁니다." }
     ]
    },
    2: {
     title: "자연 속 명상",
     items: [
      { time: "08:00 AM", icon: "assets/icons/sun.png", title: "모닝 요가", desc: "숲과 함께하는 가벼운 요가 세션." },
      { time: "12:00 PM", icon: "assets/icons/food.png", title: "로컬 점심", desc: "우붓 전통 요리를 맛봅니다." },
      { time: "04:00 PM", icon: "assets/icons/mountain.png", title: "라이스테라스 산책", desc: "초록 계단식 논을 따라 걷는 힐링 코스." }
     ]
    },
    3: {
     title: "문화 체험",
     items: [
      { time: "10:00 AM", icon: "assets/icons/history-art.png", title: "전통 공예 클래스", desc: "발리 공예를 직접 체험해봅니다." },
      { time: "01:30 PM", icon: "assets/icons/camera-sm.png", title: "감성 포토 스팟", desc: "자연과 사원이 어우러진 명소 촬영." },
      { time: "05:30 PM", icon: "assets/icons/doc.png", title: "자유 휴식", desc: "숙소에서 수영 또는 독서로 마무리." }
     ]
    }
   }
  },
  {
   id: "alps-1",
   title: "알파인 어드벤처 패스",
   location: "스위스, 알프스",
   image: "assets/images/swiss.png",
   days: 7,
   budget: "3,000,000원",
   summary: "절경 중심의 아웃도어 액티비티 코스",
   reason: 'AI 추천: "산 & 자연" 취향에 부합하며, 세계 최고 수준의 전망과 야외 활동을 제공합니다.',
   intro: "알프스의 압도적인 풍경 속에서 하이킹과 전망열차를 즐기는 어드벤처 일정입니다. 여유와 활동을 균형 있게 배치해 체력 부담을 줄였습니다.",
   itinerary: {
    1: {
     title: "도착 & 고산 적응",
     items: [
      { time: "10:00 AM", icon: "assets/icons/coffee-sm.png", title: "체크인", desc: "산악 마을 숙소 체크인 후 휴식합니다." },
      { time: "01:00 PM", icon: "assets/icons/mountain.png", title: "가벼운 트레킹", desc: "고도 적응을 위한 짧은 산책 코스." },
      { time: "05:00 PM", icon: "assets/icons/food.png", title: "치즈 디너", desc: "현지 대표 치즈 요리를 경험합니다." }
     ]
    },
    2: {
     title: "전망열차 데이",
     items: [
      { time: "09:00 AM", icon: "assets/icons/doc.png", title: "열차 탑승", desc: "알프스 파노라마 전망열차를 탑니다." },
      { time: "12:30 PM", icon: "assets/icons/camera-sm.png", title: "뷰 포인트 촬영", desc: "핵심 전망 포인트에서 포토타임." },
      { time: "04:30 PM", icon: "assets/icons/coffee-sm.png", title: "마을 카페 휴식", desc: "산악 마을 카페에서 여유롭게 휴식." }
     ]
    },
    3: {
     title: "하이킹 집중 일정",
     items: [
      { time: "08:30 AM", icon: "assets/icons/mountain.png", title: "본격 하이킹", desc: "중급 코스 중심으로 트레일을 걷습니다." },
      { time: "01:00 PM", icon: "assets/icons/food.png", title: "피크닉 런치", desc: "호수 주변 피크닉 포인트에서 점심." },
      { time: "06:00 PM", icon: "assets/icons/sun.png", title: "노을 감상", desc: "산 능선에서 일몰을 감상합니다." }
     ]
    }
   }
  }
 ];

 function getDefaultState() {
  return {
   user: { loggedIn: false, name: "", email: "" },
   preferences: [],
   setup: {
    destination: "동남아 휴양지의 조용한 바다",
    duration: "1주일",
    travelers: "2명(커플)"
   },
   savedTripIds: [],
   currentTripId: TRIPS[0].id,
   selectedDay: 1,
   lastFilter: "default"
  };
 }

 function loadState() {
  try {
   var raw = localStorage.getItem(STORAGE_KEY);
   if (!raw) return getDefaultState();
   var parsed = JSON.parse(raw);
   return Object.assign(getDefaultState(), parsed);
  } catch (error) {
   return getDefaultState();
  }
 }

 function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
 }

 function getTripById(id) {
  for (var i = 0; i < TRIPS.length; i += 1) {
   if (TRIPS[i].id === id) return TRIPS[i];
  }
  return TRIPS[0];
 }

 function getQueryParam(name) {
  var params = new URLSearchParams(window.location.search);
  return params.get(name);
 }

 function getCurrentUrlForReturn() {
  return window.location.pathname.split("/").pop() + window.location.search + window.location.hash;
 }

 function setLoginLinkState(state) {
  var loginLinks = document.querySelectorAll(".app-login");
  for (var i = 0; i < loginLinks.length; i += 1) {
   var link = loginLinks[i];
   if (state.user.loggedIn) {
    link.setAttribute("href", "my.html");
    link.innerHTML = '<img src="assets/icons/profile.png" alt="" /><span>마이</span>';
   } else {
    link.setAttribute("href", "signin.html?returnTo=" + encodeURIComponent(getCurrentUrlForReturn()));
    link.innerHTML = '<img src="assets/icons/login.png" alt="" /><span>로그인</span>';
   }
  }
 }

 function wireHome(state) {
  var submit = document.querySelector(".planner-submit");
  if (!submit) return;
  submit.addEventListener("click", function (event) {
   if (submit.tagName.toLowerCase() === "a") {
    event.preventDefault();
   }
   state.currentTripId = TRIPS[0].id;
   saveState(state);
   window.location.href = "recommend.html";
  });
 }

 function wirePreference(state) {
  var chips = document.querySelectorAll(".ob-chip");
  if (!chips.length) return;

  function applySelections() {
   var selected = [];
   for (var i = 0; i < chips.length; i += 1) {
    if (chips[i].classList.contains("is-selected")) {
     selected.push(chips[i].textContent.trim());
    }
   }
   state.preferences = selected;
   saveState(state);
  }

  for (var i = 0; i < chips.length; i += 1) {
    chips[i].addEventListener("click", function () {
     this.classList.toggle("is-selected");
     applySelections();
    });
  }

  var nextButton = document.querySelector(".ob-next");
  if (nextButton) {
   nextButton.addEventListener("click", function () {
    applySelections();
   });
  }
 }

 function wireTripSetup(state) {
  var root = document.querySelector(".ob-setup");
  if (!root) return;
  var inputs = root.querySelectorAll(".ob-input-wrap input");
  var pickedValue = root.querySelector(".ob-picked-value");
  if (pickedValue && state.preferences.length) {
   pickedValue.textContent = state.preferences.join(", ");
  }
  var recommendButton = root.querySelector(".ob-reco-btn");
  if (recommendButton) {
   recommendButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (inputs[0]) state.setup.destination = inputs[0].value.trim() || state.setup.destination;
    if (inputs[1]) state.setup.duration = inputs[1].value.trim() || state.setup.duration;
    if (inputs[2]) state.setup.travelers = inputs[2].value.trim() || state.setup.travelers;
    state.currentTripId = TRIPS[0].id;
    saveState(state);
    window.location.href = "recommend.html";
   });
  }
 }

 function getSortedTrips(filterType) {
  var list = TRIPS.slice();
  if (filterType === "budget") {
   list.sort(function (a, b) {
    return toBudget(a.budget) - toBudget(b.budget);
   });
  } else if (filterType === "duration") {
   list.sort(function (a, b) {
    return a.days - b.days;
   });
  }
  return list;
 }

 function toBudget(text) {
  return Number(String(text).replace(/[^\d]/g, "")) || 0;
 }

 function renderTripCards(container, trips, savedIds) {
  container.innerHTML = "";
  for (var i = 0; i < trips.length; i += 1) {
   var trip = trips[i];
   var isSaved = savedIds.indexOf(trip.id) >= 0;
   var article = document.createElement("article");
   article.className = "trip-card";
   article.innerHTML =
    '<a href="detail.html?trip=' +
    trip.id +
    '" class="trip-card-cover" aria-label="' +
    trip.title +
    ' 상세 보기">' +
    '<img src="' +
    trip.image +
    '" alt="' +
    trip.title +
    '" />' +
    '<span class="trip-heart' +
    (isSaved ? " is-filled" : "") +
    '"><img src="assets/icons/heart.svg" alt="" /></span>' +
    '<span class="trip-chip-wrap"><span class="trip-chip">' +
    trip.days +
    '일</span><span class="trip-chip">' +
    trip.budget +
    "</span></span></a>" +
    '<div class="trip-card-body"><h3>' +
    trip.title +
    "</h3>" +
    '<p class="trip-location"><img src="assets/icons/place-xs.png" alt="" />' +
    trip.location +
    "</p>" +
    '<p class="trip-reason">' +
    trip.reason +
    "</p></div>";
   container.appendChild(article);
  }
 }

 function wireRecommend(state) {
  var root = document.querySelector(".recommend-page");
  if (!root) return;

  var title = root.querySelector(".recommend-intro h1");
  var caption = root.querySelector(".recommend-caption");
  if (title) title.textContent = '"힐링" ' + state.setup.duration + " 추천 여행";
  if (caption) {
   var prefText = state.preferences.length ? state.preferences.join(", ") : "도시 & 문화";
   caption.textContent = "프로필 및 취향 기반: " + prefText + ".";
  }

  var grid = root.querySelector(".recommend-grid");
  var count = root.querySelector(".recommend-toolbar h2");
  if (!grid || !count) return;

  function render() {
   var trips = getSortedTrips(state.lastFilter);
   count.textContent = trips.length + "개의 추천 여행";
   renderTripCards(grid, trips, state.savedTripIds);
  }

  render();

  var filterButton = root.querySelector(".recommend-filter");
  if (filterButton) {
   filterButton.addEventListener("click", function () {
    if (state.lastFilter === "default") state.lastFilter = "budget";
    else if (state.lastFilter === "budget") state.lastFilter = "duration";
    else state.lastFilter = "default";
    saveState(state);
    render();
   });
  }
 }

 function ensureSavedTrip(state, tripId) {
  if (state.savedTripIds.indexOf(tripId) < 0) {
   state.savedTripIds.push(tripId);
  }
 }

 function removeSavedTrip(state, tripId) {
  state.savedTripIds = state.savedTripIds.filter(function (id) {
   return id !== tripId;
  });
 }

 function wireDetail(state) {
  var root = document.querySelector(".detail-page");
  if (!root) return;

  var tripId = getQueryParam("trip") || state.currentTripId;
  var trip = getTripById(tripId);
  state.currentTripId = trip.id;
  saveState(state);

  var heroImage = root.querySelector(".detail-hero-image");
  var heroTitle = root.querySelector(".detail-hero-copy h1");
  var heroLocation = root.querySelector(".detail-hero-copy p");
  var intro = root.querySelector(".detail-description > p");
  var reason = root.querySelector(".detail-reason-box p");
  var days = root.querySelector(".detail-meta-card strong");
  var budgetCards = root.querySelectorAll(".detail-meta-card strong");

  if (heroImage) {
   heroImage.src = trip.image;
   heroImage.alt = trip.title;
  }
  if (heroTitle) heroTitle.textContent = trip.title;
  if (heroLocation) heroLocation.innerHTML = '<img src="assets/icons/place-xs.png" alt="" />' + trip.location;
  if (intro) intro.textContent = trip.intro;
  if (reason) reason.textContent = trip.reason;
  if (days) days.textContent = trip.days + "일";
  if (budgetCards[1]) budgetCards[1].textContent = trip.budget;

  var itineraryButtons = root.querySelectorAll(".detail-action-dark");
  for (var i = 0; i < itineraryButtons.length; i += 1) {
   itineraryButtons[i].setAttribute("href", "itinerary.html?trip=" + trip.id);
  }

  var saveButtons = root.querySelectorAll(".detail-action-light, .detail-hero-right-actions a[aria-label='여행 저장']");
  var alreadySaved = state.savedTripIds.indexOf(trip.id) >= 0;
  for (var k = 0; k < saveButtons.length; k += 1) {
   if (alreadySaved) {
    saveButtons[k].setAttribute("aria-pressed", "true");
   } else {
    saveButtons[k].setAttribute("aria-pressed", "false");
   }
  }
  for (var j = 0; j < saveButtons.length; j += 1) {
   saveButtons[j].addEventListener("click", function (event) {
    event.preventDefault();
    if (!state.user.loggedIn) {
      window.location.href = "itinerary.html?trip=" + trip.id + "#login-required";
      return;
    }
    ensureSavedTrip(state, trip.id);
    saveState(state);
    for (var n = 0; n < saveButtons.length; n += 1) {
     saveButtons[n].setAttribute("aria-pressed", "true");
    }
   });
  }
 }

 function renderItineraryDay(container, dayData) {
  container.innerHTML = "";
  var title = document.createElement("h2");
  title.textContent = dayData.title;
  container.appendChild(title);

  for (var i = 0; i < dayData.items.length; i += 1) {
   var item = dayData.items[i];
   var article = document.createElement("article");
   article.className = "timeline-item";
   article.innerHTML =
    '<span class="timeline-dot"></span>' +
    '<div class="timeline-content"><p class="timeline-time">' +
    item.time +
    '</p><div class="timeline-box"><span class="timeline-icon"><img src="' +
    item.icon +
    '" alt="" /></span><div><h3>' +
    item.title +
    "</h3><p>" +
    item.desc +
    "</p></div></div></div>";
   container.appendChild(article);
  }
 }

 function wireItinerary(state) {
  var root = document.querySelector(".itinerary-page");
  if (!root) return;

  var tripId = getQueryParam("trip") || state.currentTripId;
  var trip = getTripById(tripId);
  state.currentTripId = trip.id;

  var selected = Number(state.selectedDay) || 1;
  if (!trip.itinerary[selected]) selected = 1;
  state.selectedDay = selected;
  saveState(state);

  var title = root.querySelector(".itinerary-title-left h1");
  if (title) title.textContent = trip.title;

  function applyDaySelection(day) {
   state.selectedDay = day;
   saveState(state);
   for (var idx = 0; idx < daysButtons.length; idx += 1) {
    var match = idx + 1 === day;
    daysButtons[idx].classList.toggle("is-active", match);
   }
   renderItineraryDay(timelineCard, trip.itinerary[day]);
  }

  var daysButtons = root.querySelectorAll(".itinerary-day");
  var timelineCard = root.querySelector(".timeline-card");
  for (var i = 0; i < daysButtons.length; i += 1) {
   (function (index) {
    var day = index + 1;
    var btn = daysButtons[index];
    btn.addEventListener("click", function () {
     applyDaySelection(day);
    });
   })(i);
  }

  if (timelineCard) applyDaySelection(selected);

  var favorite = root.querySelector(".itinerary-favorite");
  if (favorite) {
   var isSaved = state.savedTripIds.indexOf(trip.id) >= 0;
   favorite.classList.toggle("is-active", isSaved);
   favorite.setAttribute("aria-pressed", isSaved ? "true" : "false");
   favorite.addEventListener("click", function (event) {
    event.preventDefault();
    if (!state.user.loggedIn) {
     window.location.hash = "login-required";
     return;
    }
    if (state.savedTripIds.indexOf(trip.id) >= 0) removeSavedTrip(state, trip.id);
    else ensureSavedTrip(state, trip.id);
    saveState(state);
    var nextSaved = state.savedTripIds.indexOf(trip.id) >= 0;
    favorite.classList.toggle("is-active", nextSaved);
    favorite.setAttribute("aria-pressed", nextSaved ? "true" : "false");
   });
  }

  var modalCta = root.querySelector(".login-modal-cta");
  if (modalCta) {
   modalCta.href = "signin.html?returnTo=" + encodeURIComponent(getCurrentUrlForReturn());
  }
 }

 function wireMy(state) {
  var root = document.querySelector(".my-page");
  if (!root) return;

  if (!state.user.loggedIn) {
   window.location.href = "signin.html?returnTo=" + encodeURIComponent("my.html");
   return;
  }

  var nameNode = root.querySelector(".my-profile-text h1");
  var emailNode = root.querySelector(".my-profile-text p");
  var avatarNode = root.querySelector(".my-avatar");
  if (nameNode) nameNode.textContent = (state.user.name || "사용자") + " 님";
  if (emailNode) emailNode.textContent = state.user.email || "guest@example.com";
  if (avatarNode) avatarNode.textContent = (state.user.name || "사").charAt(0);

  var heading = root.querySelector(".my-saved-heading h2");
  var grid = root.querySelector(".my-saved-grid");
  if (!heading || !grid) return;

  var savedTrips = TRIPS.filter(function (trip) {
   return state.savedTripIds.indexOf(trip.id) >= 0;
  });

  heading.textContent = "저장된 여행 (" + savedTrips.length + ")";

  if (!savedTrips.length) {
   grid.innerHTML = '<article class="trip-card"><div class="trip-card-body"><h3>저장된 여행이 없습니다</h3><p class="trip-reason">추천 화면에서 하트 버튼을 눌러 여행을 저장해보세요.</p></div></article>';
  } else {
   renderTripCards(grid, savedTrips, state.savedTripIds);
  }

  var logout = root.querySelector(".my-logout-btn");
  if (logout) {
   logout.addEventListener("click", function (event) {
    event.preventDefault();
    state.user.loggedIn = false;
    saveState(state);
    window.location.href = "index.html";
   });
  }
 }

 function wireAuthForms(state) {
  var signInForm = document.querySelector(".auth-signin .auth-form");
  if (signInForm) {
   signInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = signInForm.querySelector('input[type="email"]');
    var value = email ? email.value.trim() : "user@example.com";
    var name = value.split("@")[0] || "사용자";
    state.user = { loggedIn: true, email: value, name: name };
    saveState(state);
    var returnTo = getQueryParam("returnTo") || "my.html";
    window.location.href = returnTo;
   });
  }

  var signUpForm = document.querySelector(".auth-signup .auth-form");
  if (signUpForm) {
   signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameInput = signUpForm.querySelector('input[type="text"]');
    var emailInput = signUpForm.querySelector('input[type="email"]');
    var name = nameInput ? nameInput.value.trim() : "사용자";
    var email = emailInput ? emailInput.value.trim() : "user@example.com";
    state.user = { loggedIn: true, email: email, name: name || "사용자" };
    saveState(state);
    window.location.href = "onboarding-preference.html";
   });
  }
 }

 function bootstrap() {
  var state = loadState();
  setLoginLinkState(state);

  wireHome(state);
  wirePreference(state);
  wireTripSetup(state);
  wireRecommend(state);
  wireDetail(state);
  wireItinerary(state);
  wireMy(state);
  wireAuthForms(state);
 }

 document.addEventListener("DOMContentLoaded", bootstrap);
})();
