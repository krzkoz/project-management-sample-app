import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { map } from 'rxjs/operators';
import { Project, Skill } from './../../models';

@Component({
  selector: 'pm-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnChanges {
  exists = false;

  form = this.fb.group({
    projectName: ['', Validators.required],
    projectDescription: ['', Validators.required],
    complexity: [
      0,
      Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ])
    ],
    timeline: this.fb.group(
      {
        isPresent: [false],
        startDate: [null],
        endDate: [null]
      },
      { validator: this.timelineValidator }
    ),
    skills: [[]]
  });

  @Input() project: Project;
  @Input() skills: Skill[];

  @Output() selected = new EventEmitter<Project>();
  @Output() create = new EventEmitter<Project>();
  @Output() update = new EventEmitter<Project>();
  @Output() remove = new EventEmitter<Project>();

  timelineValidator(control: AbstractControl): { [key: string]: boolean } {
    const isPresent = control.get('isPresent') as FormControl;
    const startDate = control.get('startDate') as FormControl;
    const endDate = control.get('endDate') as FormControl;
    if (isPresent.value === true) {
      return null;
    }

    return isPresent.value === false &&
      startDate.value !== null &&
      endDate.value !== null &&
      startDate.value <= endDate.value
      ? null
      : { invalidTimeline: true };
  }

  constructor(private fb: FormBuilder) {}

  get isTimelineInvalid() {
    return (
      this.form.get('timeline').hasError('invalidTimeline') &&
      this.form.get('timeline').touched
    );
  }

  get isPresentControl() {
    return this.form.get('timeline').get('isPresent') as FormControl;
  }

  get nameControl() {
    return this.form.get('projectName') as FormControl;
  }

  get projectDescriptionControl() {
    return this.form.get('projectDescription') as FormControl;
  }

  get complexityControl() {
    return this.form.get('complexity') as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError('required') && this.nameControl.touched;
  }

  get projectDescriptionControlInvalid() {
    return (
      this.projectDescriptionControl.hasError('required') &&
      this.projectDescriptionControl.touched
    );
  }

  get complexityControlInvalid() {
    return (
      this.complexityControl.hasError('required') &&
      this.complexityControl.touched
    );
  }

  get complexityControlInvalidRange() {
    return (
      (this.complexityControl.hasError('min') ||
        this.complexityControl.hasError('max')) &&
      this.complexityControl.touched
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.project && this.project.id) {
      this.exists = true;
      this.form.patchValue(this.project);
    }
    this.form
      .get('skills')
      .valueChanges.pipe(map(skills => skills.map((skill: Skill) => skill.id)))
      .subscribe(value => this.selected.emit(value));
  }

  createProject(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      this.create.emit(value);
    }
  }

  updateProject(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.project, ...value });
    }
  }

  removeProject(form: FormGroup) {
    const { value } = form;
    this.remove.emit({ ...this.project, ...value });
  }
}
