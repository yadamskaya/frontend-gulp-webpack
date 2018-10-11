class SlideCarouselDots extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.bindEvents();
    }

    get currentCarousel(): HTMLElement {
        return this.parentElement;
    }

    get slides(): NodeListOf<HTMLDivElement> {
        return this.currentCarousel.querySelectorAll('.carousel-items .carousel-item') as NodeListOf<HTMLDivElement>;
    }

    bindEvents() {
        this.drawDots();
    }

    drawDots() {
        for (let index = 0; index < this.slides.length; index++) {
            const dot = document.createElement('span');
            dot.className = index === 0 ? 'carousel-dot active-dot' : 'carousel-dot';
            dot.setAttribute('title', `${index + 1}`);
            this.appendChild(dot);
        }
    }
}

customElements.define('slide-carousel-dots', SlideCarouselDots);

export default SlideCarouselDots;
