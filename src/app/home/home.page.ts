import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  boreList:any;
  @ViewChild('boreListSlider', { static: true }) boreListSlider: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 100,
    direction: 'vertical',
    pagination: '.swiper-pagination',
    slidesPerView: 6,
    freeMode: true,
    freeModeSticky: true,
    freeModeMomentumRatio: 0.25,
    freeModeVelocityRatio: 0.25,
    freeModeMinimumVelocity: 0.1,
    mousewheelControl: true,
    mousewheelSensitivity: 0.5,
    loop: false,
    slideToClickedSlide: false,
    centeredSlides: true,
    spaceBetween: 1,
    on: {
      beforeInit() {
        const swiper = this;
      },
      activeIndexChange(currentscope) {
        var event = new CustomEvent("onSliderOnPark");
        window.dispatchEvent(event);
        console.log(this);
        //  this.currentscope.audio.play('tabSwitch');
        setTimeout(() => {
          var active = document.querySelector<HTMLElement>("ion-slide.swiper-slide-active");
          active.classList.remove("swiper-slide-prev-prev");
          active.classList.remove("swiper-slide-next-next");

          var prev = active.previousElementSibling;
          if (prev) {
            prev.classList.remove("swiper-slide-prev-prev");
            prev.classList.remove("swiper-slide-next-next");
            var prev_prev = prev.previousElementSibling;
            if (prev_prev) {
              prev_prev.classList.add("swiper-slide-prev-prev");
              prev_prev.classList.remove("swiper-slide-next-next");
            }
          }
          var next = active.nextElementSibling;
          if (next) {
            next.classList.remove("swiper-slide-prev-prev");
            next.classList.remove("swiper-slide-next-next");
            var next_next = next.nextElementSibling;
            if (next_next) {
              next_next.classList.add("swiper-slide-next-next");
              next_next.classList.remove("swiper-slide-prev-prev");
            }
          }
        }, 100);

      }
    }

  };
  constructor() {
    this.boreList = ["A", "B", "C", "CD", "D", "E", "EF", "F", "FG", "G", "H", "J", "JS", "K", "M", "N", "P", "R", "S", "T", "U", "V", "X", "Y", "Z", "ZA", "ZB", "ZC"];
  }
  ngOnInit(): void {
    // this.boreListSlider object is undefined.
    this.boreListSlider.slideTo(4);
  }

}
