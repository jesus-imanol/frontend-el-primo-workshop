import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild,ViewChildren,QueryList } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

import gsap from 'gsap';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements AfterViewInit {
  serviceFavorites = [
    {img:"./assets/change_oil.svg"},
    {img:"./assets/align.svg"},
    {img:"./assets/neumatic_change.svg"}
  ]
  @ViewChildren('serviceImage') serviceImages!: QueryList<ElementRef>;
  @ViewChild('scheduleText') scheduleText!: ElementRef;
  @ViewChild('hourText') hourText!: ElementRef;
  @ViewChild('locationText') locationText!: ElementRef;

  ngAfterViewInit() {
    this.serviceImages.forEach((image, index) => {
      gsap.from(image.nativeElement, {
        duration: 1.2,
        opacity: 0,
        y: 50,
        scale: 0.8,
        delay: index * 0.2,
        ease: 'power2.out'
      });
    });
    gsap.from(this.scheduleText.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: 'power3.out'
    });
    
    gsap.from([this.hourText.nativeElement, this.locationText.nativeElement], {
      duration: 1.5,
      opacity: 0,
      x: 50,
      ease: 'power3.out',
      stagger: 0.3,
      delay: 0.6
    });
    
  }
  constructor(private route: Router){}
  appointment() {
    this.route.navigate(["/appointment"]);
  }
}
