import {AlcoholCategory} from '../../helpers/enum';

export interface HealthConcernModel {
  id: number;
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
  tool_tip: string;
}

export interface IAllergies {
  id: number;
  name: string;
}

export interface UserHabits {
  is_daily_exposure: boolean | null;
  is_smoke: boolean | null;
  alcohol: AlcoholCategory | null;
}
