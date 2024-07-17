import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoGetService } from './services/do-get.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private doGetService: DoGetService) {}

  ngOnInit(): void {
    this.doGetService.getData().subscribe(data => {
      console.log(data);
    })
  }
}
