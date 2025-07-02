// --- Swiper.jsの初期化 ---
// 新しいSwiperインスタンスを作成し、スライドショーを有効にします。
const swiper = new Swiper(".swiper", {
  // ループ表示を有効にします。最後のスライドから最初のスライドに移動できます。
  loop: true,

  // ページネーション（現在地を示すドット）の設定
  pagination: {
    el: ".swiper-pagination", // ページネーションの要素を指定
    clickable: true, // ドットをクリックしてスライドを切り替えられるようにする
  },

  // ナビゲーションボタン（左右の矢印）の設定
  navigation: {
    nextEl: ".swiper-button-next", // 「次へ」ボタンの要素を指定
    prevEl: ".swiper-button-prev", // 「前へ」ボタンの要素を指定
  },
});

// --- モーダルウィンドウの処理 ---

// 必要なHTML要素を取得します。
const modal = document.getElementById("modal"); // モーダル全体
const modalContentBody = document.querySelector(".modal-content-body"); // モーダルの中身
const modalClose = document.querySelector(".modal-close"); // 閉じるボタン
const modalOverlay = document.querySelector(".modal-overlay"); // モーダルの背景
const workTriggerImages = document.querySelectorAll(".work-trigger-image"); // スライドショーの各画像

// 各スライド画像に対して、クリックイベントを設定します。
workTriggerImages.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    // クリックされた画像に関連するモーダルのコンテンツを取得します。
    // ここでは、画像の次の要素（work-modal-content）の中身を使います。
    const content = trigger.nextElementSibling.innerHTML;

    // モーダルの中身を、取得したコンテンツで更新します。
    modalContentBody.innerHTML = content;

    // モーダルを表示します。
    modal.classList.add("is-active");
  });
});

// モーダルを閉じる関数
const closeModal = () => {
  modal.classList.remove("is-active"); // is-activeクラスを削除して非表示に
  modalContentBody.innerHTML = ""; // 中身を空にする
};

// 閉じるボタンがクリックされたら、モーダルを閉じます。
modalClose.addEventListener("click", closeModal);

// モーダルの背景（オーバーレイ）がクリックされたら、モーダルを閉じます。
modalOverlay.addEventListener("click", closeModal);
