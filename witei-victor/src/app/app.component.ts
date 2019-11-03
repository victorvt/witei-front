import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tasks: Array<any> = [];
  
  constructor(
    private api: AppService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  private getTasks(): void {
    this.api.getTasks().subscribe((res: any) => {
      this.tasks = [...res.results]
    })
  }

}
