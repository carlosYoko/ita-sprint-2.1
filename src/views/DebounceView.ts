export class DebounceView {
  showMessage(args: any[], debounced: number) {
    console.log(args, `Debounced: ${debounced} veces.`);
  }

  showClicks(clicks: number) {
    const clicksParagraph = document.querySelector('#clicks');
    if (clicksParagraph) {
      clicksParagraph.textContent = clicks.toString();
      console.log(`Se han hecho ${clicks} clicks.`);
    }
  }

  updateDOM(debounced: string) {
    const debouncedParagraph = document.querySelector('#debounced');
    if (debouncedParagraph) {
      debouncedParagraph.textContent = debounced;
    }
  }
}
