import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
  onOpen(event: any) {
    console.log(event);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
