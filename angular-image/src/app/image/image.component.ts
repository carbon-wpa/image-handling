import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  @Input()
  public image;

  public isError = false;
  public isLoading = true;

  constructor() {
  }

  public onImgError(): void {
    this.isError = true;
  }

  public onImgLoad(): void {
    setTimeout(() => this.isLoading = false, 1000);
  }
}
