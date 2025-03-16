<script>
  import Flashcard from "$lib/Flashcard.svelte";
</script>

<div class="flashcards-container">
  <Flashcard />
  <Flashcard />
  <Flashcard />
  <Flashcard />
  <Flashcard />
</div>

<style>
  .flashcards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1450px) {
      justify-content: center;
    }
  }
</style>
