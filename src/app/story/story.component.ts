import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersistNgFormPlugin } from '@datorama/akita';

import { StoriesQuery } from './state/stories.query';
import { StoriesService } from './state/stories.service';
import { createStory } from './state/story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit, OnDestroy {
  form: FormGroup;
  persistForm: PersistNgFormPlugin;

  constructor(
    private storiesQuery: StoriesQuery,
    private storiesService: StoriesService,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      title: this.builder.control(''),
      story: this.builder.control(''),
      draft: this.builder.control(false),
      category: this.builder.control('js'),
    });

    this.persistForm = new PersistNgFormPlugin(
      this.storiesQuery,
      createStory
    ).setForm(this.form);
  }

  submit() {
    if (this.form.valid) {
      this.storiesService.update(this.form.value);
      this.persistForm.reset();
    }
  }

  ngOnDestroy(): void {
    if (this.persistForm) {
      this.persistForm.destroy();
    }
  }
}
