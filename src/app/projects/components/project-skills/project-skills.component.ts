import {
  Component,
  Input,
  forwardRef,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Skill } from '../../models/';

/*tslint:disable  */
const PROJECT_SKILL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProjectSkillsComponent),
  multi: true
};
/*tslint:enable  */

@Component({
  selector: 'pm-project-skills',
  templateUrl: './project-skills.component.html',
  styleUrls: ['./project-skills.component.scss'],
  providers: [PROJECT_SKILL_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectSkillsComponent implements OnInit, ControlValueAccessor {
  @Input() skills: Skill[] = [];

  value: Skill[] = [];

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: Skill[]) {
    this.value = value;
  }

  selectSkill(skill: Skill) {
    if (this.existsInSkills(skill)) {
      this.value = this.value.filter(item => item.id !== skill.id);
    } else {
      this.value = [...this.value, skill];
    }
    this.onTouch();
    this.onModelChange(this.value);
  }

  existsInSkills(skill: Skill) {
    return this.value.some(val => val.id === skill.id);
  }

  ngOnInit() {}
}
