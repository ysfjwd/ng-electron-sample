import { createFeatureSelector } from '@ngrx/store';
import { CategoryState } from '@reaction/common/models';

const getCategoryState = createFeatureSelector<CategoryState>('categories');
