import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  public task: FormGroup;
  public submitted: boolean = false;
  public doneStatus: Array<any> = [
    {
      title: 'Completado',
      value: true
    },
    {
      title: 'No completado',
      value: false
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private api: AppService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.task = this.formBuilder.group({
      contact: [''],
      kind: ['', Validators.required],
      due: ['2019-10-24T15:48:58.200835Z', Validators.required],
      house: [''],
      owner: [''],
      worker: [''],
      details: [''],
      done: ['']
    });
  }

  public createTask(): void {
    this.submitted = true;
    if (this.task.valid) {
      this.api.postTask(this.task.value).subscribe(res => {
        alert('Tarea creada con éxito.')
      })
    }
  }

}
