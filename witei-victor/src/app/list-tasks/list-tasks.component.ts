import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent {
  /**
   * Data (tasks) received from the parent
   */
  @Input() data: Array<any>;

  constructor() { }

}
