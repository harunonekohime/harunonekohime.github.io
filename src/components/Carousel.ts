class Carousel {
  private startX: number = 0;
  private autoInterval: any | null = null;
  private currentSlide: number = 0;
  private items: any[] = [];

  constructor(items: any[]) {
    this.items = items;
    this.onSlideChange();
  }

  startSwipe (event: PointerEvent) {
    this.startX = event.clientX;
  }

  endSwipe (event: PointerEvent) {
    const diff = event.clientX - this.startX;

    if (diff > 10) {
      this.prevSlide();
    } else if (diff < -10) {
      this.nextSlide();
    }

    clearInterval(this.autoInterval);
    this.autoInterval = null;
    this.startAutoSlide();
  }

  nextSlide ()  {
    this.currentSlide += 1;

    if (this.currentSlide >= this.items.length) {
      this.currentSlide = 0;
    }

    this.onSlideChange();
  }

  prevSlide () {
    this.currentSlide -= 1;

    if (this.currentSlide < 0) {
      this.currentSlide = this.items.length - 1;
    }

    this.onSlideChange();
  }

  onSlideChange () {
    this.items.forEach((item: any, index: number) => {
      item.el.style.transform = `translateX(${(index - this.currentSlide) * 100}%)`;
    });
  }

  startAutoSlide () {
    this.autoInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }
}

export default Carousel;