import { Images } from '../models/images.model';

export interface AppState {
    score: number;
    topScore: number;
    imgData: Images[];
};