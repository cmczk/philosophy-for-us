<script>
  const {
    name = "Рене Декарт",
    text = "Великий французский философ, очень яркая фигура эпохи Нового времени. Великий французский философ, очень яркая фигура эпохи Нового времени. Великий французский философ, очень яркая фигура эпохи Нового времени. Великий французский философ, очень яркая фигура эпохи Нового времени. Великий французский философ, очень яркая фигура эпохи Нового времени. Великий французский философ, очень яркая фигура эпохи Нового времени. Великий французский философ, очень яркая фигура эпохи Нового времени.",
    src = "/images/philosophers/decartes.jpg",
    link = "",
  } = $props();
</script>

<article class="flashcard m-5 p-5">
  <img class="philosopher-image" {src} alt={name} width="200" height="200" />
  <div class="flashcard-core flex flex-col items-start gap-y-5">
    <div class="flashcard-title text-2xl font-bold">
      <h2 class="philosopher-name">{name}</h2>
    </div>
    <div class="flashcard-body">
      <p>{text}</p>
    </div>
    <a class="details-link" href="#top">Подробнее</a>
  </div>
</article>

<style>
  .flashcard {
    display: flex;
    column-gap: 5%;
    max-width: 650px;
    border: 1px solid black;
  }

  .philosopher-image {
    width: 150px;
    height: 150px;
    border: 1px solid black;
    border-radius: 50%;
  }
</style>
